
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/VLoadingTripDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VLoadingTripDetailsRow))]
    public class VLoadingTripDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/VLoadingTripDetails/VLoadingTripDetailsIndex.cshtml");
        }
    }
}