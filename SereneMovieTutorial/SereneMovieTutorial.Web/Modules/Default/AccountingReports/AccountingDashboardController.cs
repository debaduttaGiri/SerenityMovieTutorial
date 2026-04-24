using SereneMovieTutorial.Modules.Default.AccountingReports.Repository;
using Serenity.Data;
using System.Web.Mvc;

namespace SereneMovieTutorial.Modules.Default.AccountingReports
{
    [RoutePrefix("AccountingDashboard")]
    [Route("{action=Index}")]
    public class AccountingDashboardController : Controller
    {
        [Authorize, HttpGet]
        public ActionResult Index()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var repo = new AccountingDashboardRepository();
                var data = repo.GetDashboardData(connection);

                return View("~/Modules/Default/AccountingReports/AccountingDashBoard.cshtml");
            }
        }

        [HttpGet]
        [Route("GetDashboardData")]
        public JsonResult GetDashboardData()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var repo = new AccountingDashboardRepository();
                var data = repo.GetDashboardData(connection);

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }
    }
}