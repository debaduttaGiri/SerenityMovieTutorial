
namespace SereneMovieTutorial.FuelManagement.Pages
{
    using SereneMovieTutorial.FuelManagement.Entities;
    using Serenity.Data;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FuelManagement/FuelData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FuelDataRow))]
    public class FuelDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/FuelManagement/FuelData/FuelDataIndex.cshtml");
        }
        public ActionResult PrintFuelData(int id)
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var data = connection.ById<FuelDataRow>(id);


                if (data == null)
                    return Content("UnloadTrip record not found for Id = " + id);
                //var model = new FuelDataModel
                //{
                //    FuelData = data,
                //    //fuelDetails = 
                //};

                return View("~/Views/FuelData/PrintFuelData2.cshtml", data);
            }
        }
    }
}