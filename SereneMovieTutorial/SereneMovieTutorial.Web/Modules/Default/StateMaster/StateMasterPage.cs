
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/StateMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StateMasterRow))]
    public class StateMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/StateMaster/StateMasterIndex.cshtml");
        }
    }
}