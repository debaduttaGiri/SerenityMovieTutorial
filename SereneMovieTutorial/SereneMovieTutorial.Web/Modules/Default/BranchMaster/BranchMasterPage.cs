
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/BranchMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BranchMasterRow))]
    public class BranchMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/BranchMaster/BranchMasterIndex.cshtml");
        }
    }
}