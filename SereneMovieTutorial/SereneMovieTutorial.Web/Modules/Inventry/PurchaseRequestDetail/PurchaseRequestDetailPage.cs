
namespace SereneMovieTutorial.Inventry.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventry/PurchaseRequestDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PurchaseRequestDetailRow))]
    public class PurchaseRequestDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventry/PurchaseRequestDetail/PurchaseRequestDetailIndex.cshtml");
        }
    }
}