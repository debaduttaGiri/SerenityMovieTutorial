using SereneMovieTutorial.Default.Entities;
using Serenity.Data;
using System.Web.Mvc;

namespace SereneMovieTutorial.Default.Pages
{
    [RoutePrefix("VoucherPrint"), Route("{action=index}")]
    public class VoucherPrintController : Controller
    {
        public ActionResult Print(int id)
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = connection.ById<UnloadTripRow>(id);

                if (data == null)
                    return Content("UnloadTrip record not found for Id = " + id);

                return View("~/Modules/Default/VoucherPrint/VoucherPrint.cshtml", data);
            }
        }
    }
}