
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

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