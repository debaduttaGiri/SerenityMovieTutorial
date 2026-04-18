
namespace SereneMovieTutorial.FuelManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FuelManagement/FuelDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FuelDetailsRow))]
    public class FuelDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/FuelManagement/FuelDetails/FuelDetailsIndex.cshtml");
        }
    }
}