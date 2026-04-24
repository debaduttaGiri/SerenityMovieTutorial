namespace SereneMovieTutorial.Modules.Default.AccountingReports.Models
{
    public class RevenueCostModel
    {
        public decimal DispatchRevenue { get; set; }
        public decimal VendorCost { get; set; }
        public decimal TDS { get; set; }
        public decimal HSD { get; set; }
        public decimal GrossMargin { get; set; }
    }
}