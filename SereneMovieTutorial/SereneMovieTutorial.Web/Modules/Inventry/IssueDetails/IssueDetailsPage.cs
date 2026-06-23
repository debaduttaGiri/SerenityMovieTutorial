
namespace SereneMovieTutorial.Inventry.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventry/IssueDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IssueDetailsRow))]
    public class IssueDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventry/IssueDetails/IssueDetailsIndex.cshtml");
        }
    }
}