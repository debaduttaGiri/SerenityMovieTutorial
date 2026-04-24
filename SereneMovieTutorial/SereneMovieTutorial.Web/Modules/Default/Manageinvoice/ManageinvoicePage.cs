
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Manageinvoice"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManageinvoiceRow))]
    public class ManageinvoiceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Manageinvoice/ManageinvoiceIndex.cshtml");
        }
    }
}