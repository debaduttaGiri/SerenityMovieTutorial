
namespace SereneMovieTutorial.Inventry.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventry/PendingPurchaseOrder"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PendingPurchaseOrderRow))]
    public class PendingPurchaseOrderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventry/PendingPurchaseOrder/PendingPurchaseOrderIndex.cshtml");
        }
    }
}