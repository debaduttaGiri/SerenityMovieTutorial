
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Tax"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TaxRow))]
    public class TaxController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Tax/TaxIndex.cshtml");
        }
    }
}