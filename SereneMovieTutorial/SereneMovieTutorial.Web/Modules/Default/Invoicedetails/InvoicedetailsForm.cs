
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Invoicedetails")]
    [BasedOnRow(typeof(Entities.InvoicedetailsRow), CheckNames = true)]
    public class InvoicedetailsForm
    {
        public Int32 Challan { get; set; }
        public String Lrno { get; set; }
        public Int32 Vehicleid { get; set; }
        public string VehicleNumber { get; set; }
        public Int32 freightRate { get; set; }
        public Decimal Weight { get; set; }
        public Decimal Billingamount { get; set; }
        public DateTime Invoicedate { get; set; }
        public Int32? LoadingTripId { get; set; }
        

    }
}