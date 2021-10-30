using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Bai06
{
    public partial class CalculatorForm : Form
    {
        private CalParser calParser;

        public CalculatorForm()
        {
            InitializeComponent();
        }

        private void TryAddDigit(object sender)
        {
            Button btn = (Button)sender;
            calParser.AddDigit(btn.Text[0]);
        }

        private void CalculatorForm_Load(object sender, EventArgs e)
        {
            calParser = new CalParser(this.txtResult);
        }

        private void Number_Click(object sender, EventArgs e)
        {
            TryAddDigit(sender);
        }

        private void btnBackspace_Click(object sender, EventArgs e)
        {
            calParser.Backspace();
        }

        private void btnCE_Click(object sender, EventArgs e)
        {
            calParser.CE();
        }

        private void btnC_Click(object sender, EventArgs e)
        {
            calParser.C();
        }

        private void btnMC_Click(object sender, EventArgs e)
        {
            calParser.MC();
            btnM.Text = "";
        }

        private void btnMR_Click(object sender, EventArgs e)
        {
            calParser.MR();
        }

        private void btnMS_Click(object sender, EventArgs e)
        {
            calParser.MS();
            btnM.Text = "M";
        }

        private void btnMPlus_Click(object sender, EventArgs e)
        {
            calParser.MPLUS();
            btnM.Text = "M";
        }

        private void btnDivide_Click(object sender, EventArgs e)
        {
            calParser.Calculate(CalParser.Operator.DIVIDE);
        }

        private void btnTimes_Click(object sender, EventArgs e)
        {
            calParser.Calculate(CalParser.Operator.TIMES);
        }

        private void btnMinus_Click(object sender, EventArgs e)
        {
            calParser.Calculate(CalParser.Operator.MINUS);
        }

        private void btnPlus_Click(object sender, EventArgs e)
        {
            calParser.Calculate(CalParser.Operator.PLUS);
        }

        private void btnEquals_Click(object sender, EventArgs e)
        {
            calParser.Calculate(CalParser.Operator.EQUAL);
        }

        private void btnAddFirstCharacter_Click(object sender, EventArgs e)
        {
            calParser.AddFirstCharacter();
        }

        private void btnOneOverX_Click(object sender, EventArgs e)
        {
            calParser.OneOverX();
        }

        private void btnSqrt_Click(object sender, EventArgs e)
        {
            calParser.Sqrt();
        }

        private void btnPercent_Click(object sender, EventArgs e)
        {
            calParser.Percent();
        }
    }
}
