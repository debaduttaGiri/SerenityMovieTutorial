
namespace SereneMovieTutorial.Inventry.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventry/IssueHeader"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IssueHeaderRow))]
    public class IssueHeaderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventry/IssueHeader/IssueHeaderIndex.cshtml");
        }
    }
}