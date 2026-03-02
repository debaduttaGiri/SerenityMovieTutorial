
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/LoadingTrip"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LoadingTripRow))]
    public class LoadingTripController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/LoadingTrip/LoadingTripIndex.cshtml");
        }
    }
}