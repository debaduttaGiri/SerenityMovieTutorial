
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/PartyMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PartyMasterRow))]
    public class PartyMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/PartyMaster/PartyMasterIndex.cshtml");
        }
    }
}