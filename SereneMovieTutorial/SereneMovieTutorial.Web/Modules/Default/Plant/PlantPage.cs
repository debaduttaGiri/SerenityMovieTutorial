
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Plant"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PlantRow))]
    public class PlantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Plant/PlantIndex.cshtml");
        }
    }
}