
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Distict"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DistictRow))]
    public class DistictController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Distict/DistictIndex.cshtml");
        }
    }
}