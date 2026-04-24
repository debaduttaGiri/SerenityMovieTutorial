
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Invoicedetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InvoicedetailsRow))]
    public class InvoicedetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Invoicedetails/InvoicedetailsIndex.cshtml");
        }
    }
}