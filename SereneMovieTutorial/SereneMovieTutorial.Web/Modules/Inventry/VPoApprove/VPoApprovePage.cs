
namespace SereneMovieTutorial.Inventry.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventry/VPoApprove"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VPoApproveRow))]
    public class VPoApproveController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventry/VPoApprove/VPoApproveIndex.cshtml");
        }
    }
}