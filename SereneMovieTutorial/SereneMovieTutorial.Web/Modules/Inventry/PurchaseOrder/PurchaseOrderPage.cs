
namespace SereneMovieTutorial.Inventry.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventry/PurchaseOrder"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PurchaseOrderRow))]
    public class PurchaseOrderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventry/PurchaseOrder/PurchaseOrderIndex.cshtml");
        }
    }
}