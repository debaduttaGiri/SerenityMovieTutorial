
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Expense"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExpenseRow))]
    public class ExpenseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Expense/ExpenseIndex.cshtml");
        }
    }
}