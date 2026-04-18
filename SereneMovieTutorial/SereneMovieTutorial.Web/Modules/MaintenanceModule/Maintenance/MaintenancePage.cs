
namespace SereneMovieTutorial.MaintenanceModule.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MaintenanceModule/Maintenance"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MaintenanceRow))]
    public class MaintenanceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MaintenanceModule/Maintenance/MaintenanceIndex.cshtml");
        }
    }
}