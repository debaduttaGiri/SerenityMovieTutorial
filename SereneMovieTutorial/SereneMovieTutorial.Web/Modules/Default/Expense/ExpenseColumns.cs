
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Expense")]
    [BasedOnRow(typeof(Entities.ExpenseRow), CheckNames = true)]
    public class ExpenseColumns
    {
        [Hidden]
        public Int32 ExpenseId { get; set; }
        [EditLink, DisplayName("Plant")]
        public String Plant1 { get; set; }
        [DisplayName("District")]
        public String DistrictDistict { get; set; }
        public String Destination1 { get; set; }
        public Decimal Expense { get; set; }
        [EditLink]
        [DisplayName("Weight")]
        public decimal Weight { get; set; }
        public int Wheels { get; set; }
        public String Remarks { get; set; }
    }
}