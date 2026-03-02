
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/VehicleMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VehicleMasterRow))]
    public class VehicleMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/VehicleMaster/VehicleMasterIndex.cshtml");
        }
    }
}