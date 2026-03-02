
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Destination"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DestinationRow))]
    public class DestinationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Destination/DestinationIndex.cshtml");
        }
    }
}