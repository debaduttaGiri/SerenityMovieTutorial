
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Manageinvoice")]
    [BasedOnRow(typeof(Entities.ManageinvoiceRow), CheckNames = true)]
    public class ManageinvoiceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 Id { get; set; }
        [EditLink,Width(80)]
        public string  Plant { get; set; }
        [EditLink, Width(100)]
        public string Branch { get; set; }
        [EditLink, Width(80)]
        public string TripNo { get; set; }
        [EditLink, Width(80)]
        public String Invoiceno { get; set; }
        
        [EditLink, Width(80)]
        public Int32 Pono { get; set; }
        
        public Int32 Totaltrips { get; set; }
        public DateTime Invoicedate { get; set; }
        public DateTime Fromdate { get; set; }
        public DateTime Todate { get; set; }
        
        public Int32 Saccode { get; set; }
        public Int32 Tax { get; set; }
        //public Boolean Localgst { get; set; }
        public Decimal Cgstrate { get; set; }
        public Decimal Sgstrate { get; set; }
        public Decimal Igstrate { get; set; }
        public Decimal Cgstamount { get; set; }
        public Decimal Sgstamount { get; set; }
        public Decimal Igstamount { get; set; }
        public Decimal Totalgstamount { get; set; }
        public Decimal Totalinvoiceamount { get; set; }

       
    }
}