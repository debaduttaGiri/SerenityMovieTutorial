
namespace SereneMovieTutorial.Common.Pages
{
    using Dapper;
    using SereneMovieTutorial.Default.Entities;
    using SereneMovieTutorial.Default.Repositories;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var summary = connection.QueryFirstOrDefault<DashboardSummaryModel>(
                    "dbo.GetDashboardSummary",
                    commandType: CommandType.StoredProcedure
                );

                var model = new DashboardPageModel
                {
                    DashboardSummaryModel = summary
                };

                return View(MVC.Views.Common.Dashboard.DashboardIndex, model);
            }
        }


        public JsonResult GetMineRevenue()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = Dapper.SqlMapper.Query<MineRevenueModel>(
                    connection,
                    "dbo.GetMineRevenue",
                    commandType: CommandType.StoredProcedure
                ).ToList();

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public JsonResult GetMineMargin()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = Dapper.SqlMapper.Query<MineMarginModel>(
                    connection,
                    "dbo.GetMineMargin",
                    commandType: CommandType.StoredProcedure
                ).ToList();

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public JsonResult GetTopBuyers()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = Dapper.SqlMapper.Query<BuyerModel>(
                    connection,
                    "dbo.GetTopBuyers",
                    commandType: CommandType.StoredProcedure
                ).ToList();

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public JsonResult GetPermitUtilisation()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = Dapper.SqlMapper.QueryFirstOrDefault<PermitModel>(
                    connection,
                    "dbo.GetPermitUtilisation",
                    commandType: CommandType.StoredProcedure
                );

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public JsonResult GetRevenueCost()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = Dapper.SqlMapper.QueryFirstOrDefault<RevenueCostModel>(
                    connection,
                    "dbo.GetRevenueCost",
                    commandType: CommandType.StoredProcedure
                );

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public JsonResult GetOutstandingReceivables()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = Dapper.SqlMapper.Query<OutstandingModel>(
                    connection,
                    "dbo.GetOutstandingReceivables",
                    commandType: CommandType.StoredProcedure
                ).ToList();

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public JsonResult GetVendorOutstanding()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = Dapper.SqlMapper.Query<VendorOutstandingModel>(
                    connection,
                    "dbo.GetVendorOutstanding",
                    commandType: CommandType.StoredProcedure
                ).ToList();

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public JsonResult GetMineHeatmap()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = Dapper.SqlMapper.Query<HeatmapModel>(
                    connection,
                    "dbo.GetMineHeatmap",
                    commandType: CommandType.StoredProcedure
                ).ToList();

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public JsonResult GetOpsMetrics()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = Dapper.SqlMapper.QueryFirstOrDefault<OpsMetricsModel>(
                    connection,
                    "dbo.GetOpsMetrics",
                    commandType: CommandType.StoredProcedure
                );

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
