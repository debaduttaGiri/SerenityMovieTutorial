
using Dapper;
using SereneMovieTutorial.Modules.Default.AccountingReports.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;


namespace SereneMovieTutorial.Modules.Default.AccountingReports.Repository
{
    public class AccountingDashboardRepository
    {
        public AccountingDashboardResponse GetDashboardData(IDbConnection connection)
        {
            var result = new AccountingDashboardResponse();

            result.Summary = SafeQuery(
                () => connection.QueryFirstOrDefault<DashboardSummaryModel>(
                    "dbo.GetDashboardSummary",
                    commandType: CommandType.StoredProcedure),
                new DashboardSummaryModel()
            );

            result.Revenue = SafeQuery(
                () => connection.Query<MineRevenueModel>(
                    "dbo.GetMineRevenue",
                    commandType: CommandType.StoredProcedure).ToList(),
                new List<MineRevenueModel>()
            );

            result.Margin = SafeQuery(
                () => connection.Query<MineMarginModel>(
                    "dbo.GetMineMargin",
                    commandType: CommandType.StoredProcedure).ToList(),
                new List<MineMarginModel>()
            );

            result.Buyers = SafeQuery(
                () => connection.Query<BuyerModel>(
                    "dbo.GetTopBuyers",
                    commandType: CommandType.StoredProcedure).ToList(),
                new List<BuyerModel>()
            );

            result.Permit = SafeQuery(
                () => connection.QueryFirstOrDefault<PermitModel>(
                    "dbo.GetPermitUtilisation",
                    commandType: CommandType.StoredProcedure),
                new PermitModel()
            );

            result.Cost = SafeQuery(
                () => connection.QueryFirstOrDefault<RevenueCostModel>(
                    "dbo.GetRevenueCost",
                    commandType: CommandType.StoredProcedure),
                new RevenueCostModel()
            );

            result.Outstanding = SafeQuery(
                () => connection.Query<OutstandingModel>(
                    "dbo.GetOutstandingReceivables",
                    commandType: CommandType.StoredProcedure).ToList(),
                new List<OutstandingModel>()
            );

            result.Vendor = SafeQuery(
                () => connection.Query<VendorOutstandingModel>(
                    "dbo.GetVendorOutstanding",
                    commandType: CommandType.StoredProcedure).ToList(),
                new List<VendorOutstandingModel>()
            );

            result.Ops = SafeQuery(
                () => connection.QueryFirstOrDefault<OpsMetricsModel>(
                    "dbo.GetOpsMetrics",
                    commandType: CommandType.StoredProcedure),
                new OpsMetricsModel()
            );

            result.Heatmap = SafeQuery(
                () => connection.Query<HeatmapModel>(
                    "dbo.GetMineHeatmap",
                    commandType: CommandType.StoredProcedure).ToList(),
                new List<HeatmapModel>()
            );

            return result;
        }

        private T SafeQuery<T>(Func<T> query, T fallback)
        {
            try
            {
                return query();
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message);
                return fallback;
            }
        }
    }

}

