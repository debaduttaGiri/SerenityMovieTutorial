
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/FinancialYear"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FinancialYearRow))]
    public class FinancialYearController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/FinancialYear/FinancialYearIndex.cshtml");
        }
    }
}