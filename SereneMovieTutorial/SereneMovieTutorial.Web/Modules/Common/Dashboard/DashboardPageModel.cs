
namespace SereneMovieTutorial.Common
{
    public class DashboardPageModel
    {
        public MineRevenueModel MineRevenue { get; set; }
        public DashboardSummaryModel DashboardSummaryModel { get; set; }

        public MineMarginModel mineMarginModel { get; set; }

        public BuyerModel buyerModel { get; set; }
        public PermitModel permitModel { get; set; }
        public RevenueCostModel revenueCostModel { get; set; }
    }
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

    public class MineRevenueModel
    {
        public string label { get; set; }
        public decimal dispatch { get; set; }
    }

    public class MineMarginModel
    {
        public string label { get; set; }
        public decimal margin { get; set; }
    }

    public class BuyerModel
    {
        public string BuyerName { get; set; }
        public decimal Qty { get; set; }
        public decimal Revenue { get; set; }
        public decimal Margin { get; set; }
    }

    public class PermitModel
    {
        public decimal Dispatched { get; set; }
        public decimal Permitted { get; set; }
    }

    public class RevenueCostModel
    {
        public decimal DispatchRevenue { get; set; }
        public decimal VendorCost { get; set; }
        public decimal TDS { get; set; }
        public decimal HSD { get; set; }
        public decimal GrossMargin { get; set; }
    }

    public class OutstandingModel
    {
        public string label { get; set; }
        public decimal outstanding { get; set; }
    }
    public class VendorOutstandingModel
    {
        public string label { get; set; }
        public decimal vendorOut { get; set; }
    }

    public class HeatmapModel
    {
        public string label { get; set; }
        public decimal margin { get; set; }
        public decimal util { get; set; }
        public int trips { get; set; }
        public decimal rate { get; set; }
    }

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