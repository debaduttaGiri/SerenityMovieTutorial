
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ItemMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ItemMasterRow))]
    public class ItemMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ItemMaster/ItemMasterIndex.cshtml");
        }
    }
}