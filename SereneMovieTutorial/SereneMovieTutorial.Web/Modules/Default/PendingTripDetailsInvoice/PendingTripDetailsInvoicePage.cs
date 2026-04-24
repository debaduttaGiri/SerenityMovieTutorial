
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/PendingTripDetailsInvoice"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PendingTripDetailsInvoiceRow))]
    public class PendingTripDetailsInvoiceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/PendingTripDetailsInvoice/PendingTripDetailsInvoiceIndex.cshtml");
        }
    }
}