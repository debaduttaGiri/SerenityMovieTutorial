
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Unit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UnitRow))]
    public class UnitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Unit/UnitIndex.cshtml");
        }
    }
}