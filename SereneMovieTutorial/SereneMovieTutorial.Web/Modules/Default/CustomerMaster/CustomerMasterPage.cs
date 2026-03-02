
namespace SereneMovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CustomerMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerMasterRow))]
    
    public class CustomerMasterController : Controller
    {
        
        public ActionResult Index()
        {
            return View("~/Modules/Default/CustomerMaster/CustomerMasterIndex.cshtml");
        }
    }
}