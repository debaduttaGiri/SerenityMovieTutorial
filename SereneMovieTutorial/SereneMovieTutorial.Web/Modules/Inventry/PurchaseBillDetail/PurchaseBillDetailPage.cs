
namespace SereneMovieTutorial.Inventry.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventry/PurchaseBillDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PurchaseBillDetailRow))]
    public class PurchaseBillDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventry/PurchaseBillDetail/PurchaseBillDetailIndex.cshtml");
        }
    }
}