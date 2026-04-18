
namespace SereneMovieTutorial.FuelManagement.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.DieselissueRow;

    public class DieselissueRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }
        public decimal? GetDieselRate(IDbConnection connection, DateTime date)
        {
            return new FuelDataRepository().GetLatestDieselRate(connection, date);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
        //    private decimal oldDiesel = 0;

        //    protected override void BeforeSave()
        //    {
        //        base.BeforeSave();

        //        var fld = MyRow.Fields;

        //        int count;

        //        if (IsUpdate)
        //        {
        //            count = Connection.Count<MyRow>(
        //                fld.Tripno == Row.Tripno.Value &&
        //                fld.VehicleId == Row.VehicleId &&
        //                fld.Id != Row.Id.Value);
        //        }
        //        else
        //        {
        //            count = Connection.Count<MyRow>(
        //                fld.Tripno == Row.Tripno.Value &&
        //                fld.VehicleId == Row.VehicleId);
        //        }

        //        if (count > 0)
        //            throw new ValidationError("Diesel already issued for this Trip and Vehicle!");

        //        var pumpFld = Default.Entities.PumpmasterRow.Fields;

        //        var pump = Connection.TryFirst<Default.Entities.PumpmasterRow>(
        //            pumpFld.Id == (int)Row.Pumpid);

        //        // get old diesel value when updating
        //        if (IsUpdate)
        //        {
        //            var old = Connection.TryById<MyRow>(Row.Id.Value);
        //            oldDiesel = old?.Diesel ?? 0;
        //        }

        //        decimal availableStock = (pump?.Stock ?? 0) + oldDiesel;

        //        if ((Row.Diesel ?? 0) > availableStock)
        //            throw new ValidationError("Pump stock is not enough!");
        //    }

        //    protected override void AfterSave()
        //    {
        //        base.AfterSave();

        //        var pumpFld = Default.Entities.PumpmasterRow.Fields;

        //        var pump = Connection.TryFirst<Default.Entities.PumpmasterRow>(
        //            pumpFld.Id == (int)Row.Pumpid);

        //        if (pump != null)
        //        {
        //            decimal newDiesel = Row.Diesel ?? 0;

        //            if (IsUpdate)
        //                pump.Stock = (pump.Stock ?? 0) + oldDiesel - newDiesel;
        //            else
        //                pump.Stock = (pump.Stock ?? 0) - newDiesel;

        //            Connection.UpdateById(pump);
        //        }
        //    }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {

        //    protected override void OnAfterDelete()
        //    {
        //        base.OnAfterDelete();

        //        var pump = Connection.TryById<Default.Entities.PumpmasterRow>(Row.Pumpid.Value);

        //        if (pump != null)
        //        {
        //            pump.Stock = (pump.Stock ?? 0) + (Row.Diesel ?? 0);

        //            Connection.UpdateById(pump);
        //        }
        }
        
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}