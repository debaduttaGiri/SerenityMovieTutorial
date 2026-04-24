namespace SereneMovieTutorial.Modules.Default.AccountingReports.Models
{
    public class OpsMetricsModel
    {
        public decimal InvoiceRate { get; set; }
        public decimal TripsPerPermit { get; set; }
        public decimal QtyPerPermit { get; set; }
        public decimal QtyPerTrip { get; set; }
        public decimal RevenuePerTrip { get; set; }
        public decimal MarginPerTrip { get; set; }
        public decimal ClientOutstanding { get; set; }
        public decimal VendorOutstanding { get; set; }
    }
}