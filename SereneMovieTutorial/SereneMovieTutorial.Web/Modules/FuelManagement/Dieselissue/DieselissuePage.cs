
namespace SereneMovieTutorial.FuelManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FuelManagement/Dieselissue"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DieselissueRow))]
    public class DieselissueController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/FuelManagement/Dieselissue/DieselissueIndex.cshtml");
        }
    }
}