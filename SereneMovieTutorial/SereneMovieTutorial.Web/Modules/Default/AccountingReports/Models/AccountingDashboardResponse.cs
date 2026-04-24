using System.Collections.Generic;

namespace SereneMovieTutorial.Modules.Default.AccountingReports.Models
{
    public class AccountingDashboardResponse
    {
        public DashboardSummaryModel Summary { get; set; }

        public List<MineRevenueModel> Revenue { get; set; }
        public List<MineMarginModel> Margin { get; set; }
        public List<BuyerModel> Buyers { get; set; }

        public PermitModel Permit { get; set; }
        public RevenueCostModel Cost { get; set; }

        public List<OutstandingModel> Outstanding { get; set; }
        public List<VendorOutstandingModel> Vendor { get; set; }

        public OpsMetricsModel Ops { get; set; }
        public List<HeatmapModel> Heatmap { get; set; }
    }
}