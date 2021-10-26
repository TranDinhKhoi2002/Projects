using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Bai02
{
    public partial class PaintEventForm : Form
    {
        Rectangle rectgl;

        Point locationStart;
        Point locationEnd;
        bool isMouseDown = false;

        public PaintEventForm()
        {
            InitializeComponent();
        }

        private Rectangle GetRectangle()
        {
            rectgl = new Rectangle();

            rectgl.X = Math.Min(locationStart.X, locationEnd.X);
            rectgl.Y = Math.Min(locationStart.Y, locationEnd.Y);

            rectgl.Width = Math.Abs(locationStart.X - locationEnd.X);
            rectgl.Height = Math.Abs(locationStart.Y - locationEnd.Y);

            return rectgl;
        }

        private void PaintEventForm_MouseDown(object sender, MouseEventArgs e)
        {
            isMouseDown = true;
            locationStart = e.Location;
        }

        private void PaintEventForm_MouseUp(object sender, MouseEventArgs e)
        {
            if (isMouseDown)
            {
                locationEnd = e.Location;
                isMouseDown = false;

                Graphics graphics = this.CreateGraphics();
                string paintString = "Paint Event";
                Font arialFont = new Font("Arial", 15);
                SizeF sz = graphics.MeasureString(paintString, arialFont);

                Random rd = new Random();
                graphics.DrawString(paintString, arialFont, Brushes.Red, new PointF(rd.Next(100), rd.Next(100)));
            }
        }

        private void PaintEventForm_MouseMove(object sender, MouseEventArgs e)
        {
            if (isMouseDown)
            {
                locationEnd = e.Location;
                Refresh();
            }
        }

        private void PaintEventForm_Paint(object sender, PaintEventArgs e)
        {
            Graphics graphics = this.CreateGraphics();

            e.Graphics.DrawRectangle(Pens.Black, GetRectangle());
        }
    }
}
