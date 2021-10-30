using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Bai06
{
    class CalParser
    {
        private TextBox txbDisplay;
        private double total;
        private double memory;

        public enum DisplayMode
        {
            CLEAR, APPEND
        }

        public enum Operator
        {
            PLUS, MINUS, DIVIDE, TIMES, EQUAL
        }

        private DisplayMode dpMode = DisplayMode.CLEAR;
        private Operator oper = Operator.EQUAL;
        
        public void AddDigit(char digit)
        {
            double currValue = GetCurrentValue();

            if (dpMode == DisplayMode.CLEAR)
            {
                txbDisplay.Text = "" + digit;
                dpMode = DisplayMode.APPEND;
            }
            else
            {
                if (currValue == 0 && digit == '0')
                {
                    return;
                }

                if (txbDisplay.Text.Contains(".") && digit == '.')
                {
                    return;
                }

                if (txbDisplay.Text == "0")
                {
                    txbDisplay.Text = "" + digit;
                    dpMode = DisplayMode.APPEND;
                }
                else
                {
                    txbDisplay.Text += digit;
                }
            }
        }

        public double GetCurrentValue()
        {
            return double.Parse(txbDisplay.Text);
        }

        public CalParser(TextBox txbDisplay)
        {
            this.txbDisplay = txbDisplay;
        }

        public void Backspace()
        {
            string dp = txbDisplay.Text;

            if(dp.Length > 0)
            {
                if (dp.Length == 1)
                {
                    txbDisplay.Text = "0";
                }
                else
                {
                    txbDisplay.Text = dp.Remove(dp.Length - 1, 1);
                }
            }
        }

        public void CE()
        {
            txbDisplay.Text = "0";
            dpMode = DisplayMode.CLEAR;
        }

        public void C()
        {
            CE();
            total = 0;
            oper = Operator.EQUAL;
        }

        public void MC()
        {
            memory = 0;
        }
        public void MS()
        {
            memory = GetCurrentValue();
        }

        public void MPLUS()
        {
            memory += GetCurrentValue();
        }

        public void MR()
        {
            txbDisplay.Text = memory.ToString();
        }

        public void Calculate(Operator newOperator)
        {
            try
            {
                Operator oldOperator = this.oper;
                this.oper = newOperator;
                double currValue = GetCurrentValue();
                dpMode = DisplayMode.CLEAR;

                switch (oldOperator)
                {
                    case Operator.PLUS:
                        total += currValue;
                        break;
                    case Operator.MINUS:
                        total -= currValue;
                        break;
                    case Operator.DIVIDE:
                        if (currValue == 0)
                        {
                            throw new DivideByZeroException();
                        }
                        else
                        {
                            total /= currValue;
                        }
                        break;
                    case Operator.TIMES:
                        total *= currValue;
                        break;
                    default:
                        total = currValue;
                        break;
                }

                txbDisplay.Text = total.ToString();
            }
            catch (DivideByZeroException excpt)
            {
                MessageBox.Show(excpt.Message, "Error message");
            }
        }

        public void AddFirstCharacter()
        {
            if (GetCurrentValue() == 0)
            {
                return;
            }

            if(!txbDisplay.Text.StartsWith("-"))
            {
                txbDisplay.Text = "-" + txbDisplay.Text;
            }
            else
            {
                txbDisplay.Text = txbDisplay.Text.Remove(0, 1);
            }
        }

        public void OneOverX()
        {
            try
            {
                double currValue = GetCurrentValue();
                
                if(currValue == 0)
                {
                    throw new DivideByZeroException();
                }
                else
                {
                    double result = 1 / currValue;
                    txbDisplay.Text = result.ToString();
                    dpMode = DisplayMode.CLEAR;
                }
            }
            catch (DivideByZeroException excpt)
            {
                MessageBox.Show(excpt.Message, "Error message");
            }
        }

        public void Sqrt()
        {
            try
            {
                double currValue = GetCurrentValue();

                if (currValue < 0)
                {
                    throw new Exception();
                }
                else
                {
                    double result = Math.Sqrt(currValue);
                    txbDisplay.Text = result.ToString();
                }
            }
            catch
            {
                MessageBox.Show("Number must be greater than or equal to 0", "Error message");
            }
        }

        public void Percent()
        {
            if (oper == Operator.TIMES)
            {
                double result = GetCurrentValue() / 100;
                txbDisplay.Text = result.ToString();
                dpMode = DisplayMode.CLEAR;
            }
        }
    }
}
