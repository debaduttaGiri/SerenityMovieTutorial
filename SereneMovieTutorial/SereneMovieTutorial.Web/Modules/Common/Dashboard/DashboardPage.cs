
namespace SereneMovieTutorial.Common.Pages
{
    using SereneMovieTutorial.Default.Entities;
    using SereneMovieTutorial.Default.Repositories;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            using(var connection = SqlConnections.NewFor<LoadingTripRow>())
    {
                var repo = new LoadingTripRepository();

                var summary = repo.GetWeightSummary(connection);

                var model = new DashboardPageModel
                {
                    TodayWeight = summary.TodayWeight,
                    MonthWeight = summary.MonthWeight,
                    TodayTrips = summary.TodayTrips,
                    MonthTrips = summary.MonthTrips
                };

                return View(MVC.Views.Common.Dashboard.DashboardIndex, model);
            }
            //return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
        }
    }
}
