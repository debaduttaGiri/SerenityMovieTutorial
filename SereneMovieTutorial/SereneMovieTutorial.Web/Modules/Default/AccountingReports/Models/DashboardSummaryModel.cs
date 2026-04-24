namespace SereneMovieTutorial.Modules.Default.AccountingReports.Models
{
    public class DashboardSummaryModel
    {
        public string MonthName { get; set; }
        public int Year { get; set; }
        public decimal TotalDispatchRevenueCr { get; set; }
        public decimal GrossMarginCr { get; set; }
        public decimal MarginPercent { get; set; }
        public int TotalTrips { get; set; }
        public decimal QuantityDispatchedLMT { get; set; }
        public decimal QuantityPermittedLMT { get; set; }
        public decimal BalancePercent { get; set; }
    }
}