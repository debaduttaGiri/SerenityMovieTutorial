
namespace SereneMovieTutorial.Default.Pages
{
    using SereneMovieTutorial.Default.Entities;
    using SereneMovieTutorial.Modules.Default.UnloadTrip;
    using Serenity.Data;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/UnloadTrip"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UnloadTripRow))]
    public class UnloadTripController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/UnloadTrip/UnloadTripIndex.cshtml");
        }
        public ActionResult Print(int id)
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = connection.ById<UnloadTripRow>(id);

                if (data == null)
                    return Content("UnloadTrip record not found for Id = " + id);
                var model = new UnloadTripModel
                {
                    UnloadTrip = data
                };

                return View("~/Views/UnloadTrip/Print.cshtml", model);
            }
        }

    }
}