
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Invoicedetails")]
    [BasedOnRow(typeof(Entities.InvoicedetailsRow), CheckNames = false)]
    public class InvoicedetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 Id { get; set; }
       
        [EditLink]
        public string VehicleNumber { get; set; }
        public Int32 freightRate { get; set; }
        public Decimal Weight { get; set; }
        public Decimal Billingamount { get; set; }
        public DateTime Invoicedate { get; set; }
         public Int32 LoadingTripId { get; set; }
        public Int32 Challan { get; set; }
        [EditLink]
        public String Lrno { get; set; }
    }
}