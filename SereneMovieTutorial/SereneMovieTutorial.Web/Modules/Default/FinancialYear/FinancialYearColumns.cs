
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.FinancialYear")]
    [BasedOnRow(typeof(Entities.FinancialYearRow), CheckNames = true)]
    public class FinancialYearColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public String NameOfInvoice { get; set; }
        public String Remarks { get; set; }
    }
}