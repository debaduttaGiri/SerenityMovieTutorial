
namespace SereneMovieTutorial.Inventry.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventry/Item"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ItemRow))]
    public class ItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventry/Item/ItemIndex.cshtml");
        }
    }
}