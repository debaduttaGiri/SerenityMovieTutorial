
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Expense")]
    [BasedOnRow(typeof(Entities.ExpenseRow), CheckNames = true)]
    public class ExpenseColumns
    {
        [Hidden]
        public Int32 ExpenseId { get; set; }
        [EditLink, DisplayName("Plant")]
        [Width(80)]
        public String Plant1 { get; set; }
        [DisplayName("District")]
        [EditLink, Width(80)]
        public String DistrictDistict { get; set; }
        [EditLink, Width(100)]
        public String Destination1 { get; set; }
        [EditLink]
        public Decimal Expense { get; set; }
        [EditLink]
        [DisplayName("Weight")]
        public decimal Weight { get; set; }
        public int Wheels { get; set; }
        public String Remarks { get; set; }
    }
}