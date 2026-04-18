
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/MaintenanceHead"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MaintenanceHeadRow))]
    public class MaintenanceHeadController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/MaintenanceHead/MaintenanceHeadIndex.cshtml");
        }
    }
}