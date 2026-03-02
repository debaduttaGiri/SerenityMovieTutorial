
namespace SereneMovieTutorial.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web;
    using MyRow = Entities.LoadingTripRow;

    public class LoadingTripRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {
            protected override void OnReturn()
            {
                base.OnReturn();

                var branch = System.Web.HttpContext.Current.Session["BranchName"];
                       Response.Entity.Branch = branch.ToString();
            }
        }
        private class MyListHandler : ListRequestHandler<MyRow> {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var branchIdObj = System.Web.HttpContext.Current.Session["BranchId"];

                if (branchIdObj != null)
                {
                    int branchId = Convert.ToInt32(branchIdObj); 
                    if (branchId != 8) {
                        query.Where(MyRow.Fields.BranchId == branchId); 
                    } 
                }
                
            }
        }

        public WeightSummaryResponse GetWeightSummary(IDbConnection connection)
        {
            var branch = Convert.ToInt32(HttpContext.Current.Session["BranchId"]);

            var today = DateTime.Today;
            var firstDayOfMonth = new DateTime(today.Year, today.Month, 1);
            var nextMonth = firstDayOfMonth.AddMonths(1);
            if(branch == 8)
            {
                var todayWeight = connection.Query<decimal?>(
                new SqlQuery()
                    .From(fld)
                    .Select(Sql.Sum(fld.Weight.Expression))
                    .Where(
                        fld.TripDate >= today &&
                        fld.TripDate < today.AddDays(1) 
                        
                    )
            ).FirstOrDefault() ?? 0;

                var todaytrips = connection.Query<int?>(
                    new SqlQuery()
                        .From(fld)
                        .Select(Sql.Count(fld.TripDate.Expression))
                        .Where(
                            fld.TripDate >= today &&
                            fld.TripDate < today.AddDays(1) 
                            
                        )
                ).FirstOrDefault() ?? 0;

                var monthWeight = connection.Query<decimal?>(
                    new SqlQuery()
                        .From(fld)
                        .Select(Sql.Sum(fld.Weight.Expression))
                        .Where(
                            fld.TripDate >= firstDayOfMonth &&
                            fld.TripDate < nextMonth 
                            
                        )
                ).FirstOrDefault() ?? 0;

                var monthtrips = connection.Query<int?>(
                    new SqlQuery()
                        .From(fld)
                        .Select(Sql.Count(fld.TripNo.Expression))
                        .Where(
                            fld.TripDate >= firstDayOfMonth &&
                            fld.TripDate < nextMonth 
                            
                        )
                ).FirstOrDefault() ?? 0;
                return new WeightSummaryResponse
                {
                    TodayWeight = todayWeight,
                    MonthWeight = monthWeight,
                    TodayTrips = todaytrips,
                    MonthTrips = monthtrips
                };
            }
            else
            {
                var todayWeight = connection.Query<decimal?>(
                new SqlQuery()
                    .From(fld)
                    .Select(Sql.Sum(fld.Weight.Expression))
                    .Where(
                        fld.TripDate >= today &&
                        fld.TripDate < today.AddDays(1) &&
                        fld.BranchId == (int)branch
                    )
            ).FirstOrDefault() ?? 0;

                var todaytrips = connection.Query<int?>(
                    new SqlQuery()
                        .From(fld)
                        .Select(Sql.Count(fld.TripDate.Expression))
                        .Where(
                            fld.TripDate >= today &&
                            fld.TripDate < today.AddDays(1) &&
                            fld.BranchId == (int)branch
                        )
                ).FirstOrDefault() ?? 0;

                var monthWeight = connection.Query<decimal?>(
                    new SqlQuery()
                        .From(fld)
                        .Select(Sql.Sum(fld.Weight.Expression))
                        .Where(
                            fld.TripDate >= firstDayOfMonth &&
                            fld.TripDate < nextMonth &&
                            fld.BranchId == (int)branch
                        )
                ).FirstOrDefault() ?? 0;

                var monthtrips = connection.Query<int?>(
                    new SqlQuery()
                        .From(fld)
                        .Select(Sql.Count(fld.TripNo.Expression))
                        .Where(
                            fld.TripDate >= firstDayOfMonth &&
                            fld.TripDate < nextMonth &&
                            fld.BranchId == (int)branch
                        )
                ).FirstOrDefault() ?? 0;
                return new WeightSummaryResponse
                {
                    TodayWeight = todayWeight,
                    MonthWeight = monthWeight,
                    TodayTrips = todaytrips,
                    MonthTrips = monthtrips
                };

            }


            //return new WeightSummaryResponse
            //{
            //    TodayWeight = todayWeight,
            //    MonthWeight = monthWeight,
            //    TodayTrips = todaytrips,
            //    MonthTrips = monthtrips
            //};
        }

        public class WeightSummaryResponse
        {
            public decimal TodayWeight { get; set; }
            public decimal MonthWeight { get; set; }
            public int TodayTrips { get; set; }
            public int MonthTrips { get; set; }
        }

    }
}