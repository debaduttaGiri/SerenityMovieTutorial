
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Pumpmaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PumpmasterRow))]
    public class PumpmasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Pumpmaster/PumpmasterIndex.cshtml");
        }
    }
}