
namespace SereneMovieTutorial.Inventry.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventry/PurchaseBill"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PurchaseBillRow))]
    public class PurchaseBillController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventry/PurchaseBill/PurchaseBillIndex.cshtml");
        }
    }
}