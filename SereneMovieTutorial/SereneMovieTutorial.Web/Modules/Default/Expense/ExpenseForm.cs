
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Default.Expense")]
    [BasedOnRow(typeof(Entities.ExpenseRow), CheckNames = true)]
    public class ExpenseForm
    {
        public Int32 Plant { get; set; }
        public Int32 District { get; set; }
        public Int32 Destination { get; set; }
        public Decimal Expense { get; set; }
        [DisplayName("Weight")]
        public decimal Weight { get; set; }
        public int Wheels { get; set; }
        public String Remarks { get; set; }
    }
}