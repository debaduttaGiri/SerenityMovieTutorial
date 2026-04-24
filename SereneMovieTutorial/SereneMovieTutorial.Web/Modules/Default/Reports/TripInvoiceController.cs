using SereneMovieTutorial.Default.Repositories;
using Serenity.Data;
using System.Data;
using System.Web.Mvc;


namespace SereneMovieTutorial.Modules.Default.Reports
{
    [RoutePrefix("Default/Reports/TripInvoice")]
    public class TripInvoiceController : Controller
    {
        ManageInvoiceModel manageInvoice = new ManageInvoiceModel();


        [Route("GetInvoice")]
        public ActionResult GetInvoice(int id)
        {
            using (IDbConnection connection = SqlConnections.NewByKey("Default"))
            {
                connection.Open();
                var manageinvoice_responce = new ManageinvoiceRepository().Retrieve(connection, new Serenity.Services.RetrieveRequest { EntityId = id });
                manageInvoice.ManageinvoiceRow = manageinvoice_responce.Entity;

                var plant_response = new PlantRepository().Retrieve(connection, new Serenity.Services.RetrieveRequest { EntityId = manageInvoice.ManageinvoiceRow.Plantid });
                manageInvoice.PlantRow = plant_response.Entity;

                var loading_response = new LoadingTripRepository().Retrieve(connection, new Serenity.Services.RetrieveRequest { EntityId = manageInvoice.ManageinvoiceRow.LoadingTripId });
                manageInvoice.LoadingTripRow = loading_response.Entity;

                var branch_response = new BranchMasterRepository().Retrieve(connection, new Serenity.Services.RetrieveRequest { EntityId = manageInvoice.ManageinvoiceRow.Branchid });
                manageInvoice.BranchMasterRow = branch_response.Entity;

                connection.Close();
                return View("~/Modules/Default/Reports/GetInvoice.cshtml", manageInvoice);
            }


        }
    }
}