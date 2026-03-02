
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.FinancialYear")]
    [BasedOnRow(typeof(Entities.FinancialYearRow), CheckNames = true)]
    public class FinancialYearForm
    {
        public String Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public String NameOfInvoice { get; set; }
        public String Remarks { get; set; }
    }
}