
namespace SereneMovieTutorial.Default.Endpoints
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.PumpmasterRepository;
    using MyRow = Entities.PumpmasterRow;

    [RoutePrefix("Services/Default/Pumpmaster"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PumpmasterController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        [HttpPost]
        public PumpStockResponse GetPumpStock(IDbConnection connection, PumpStockRequest request)
        {
            var response = new PumpStockResponse();

            var fld = PumpmasterRow.Fields;

            var pump = connection.TryFirst<PumpmasterRow>(
                fld.Id == request.PumpId);

            if (pump != null)
                response.Stock = pump.Stock;

            return response;
        }

    }
    public class PumpStockRequest : ServiceRequest
    {
        public int PumpId { get; set; }
    }

    public class PumpStockResponse : ServiceResponse
    {
        public decimal? Stock { get; set; }
    }
}
