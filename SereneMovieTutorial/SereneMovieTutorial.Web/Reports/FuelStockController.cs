using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SereneMovieTutorial.Reports
{
    [RoutePrefix("Reports/FuelStock")]
    public class FuelStockController : Controller
    {
        [HttpGet]
        [Route("fuel-stock-report")]
        public ActionResult Index2(FuelStockModel model)
        {
            
            DateTime? fromDate =  null;
            if (!string.IsNullOrEmpty(model.FromDate))
            {
                if (DateTime.TryParseExact(
                    model.FromDate,
                    "dd-MM-yyyy", // match your datepicker format
                    System.Globalization.CultureInfo.InvariantCulture,
                    System.Globalization.DateTimeStyles.None,
                    out DateTime parsedFrom))
                {
                    fromDate = parsedFrom;
                }
            }
            DateTime? toDate =  null;
            if (!string.IsNullOrEmpty(model.ToDate))
            {
                if (DateTime.TryParseExact(
                    model.ToDate,
                    "dd-MM-yyyy",
                    System.Globalization.CultureInfo.InvariantCulture,
                    System.Globalization.DateTimeStyles.None,
                    out DateTime parsedTo))
                {
                    toDate = parsedTo;
                }
            }
            if(model.IsSummary == true)
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                   model.Data = GetReportData(connection, fromDate,toDate,model.IsSummary,model.PumpId);
                 }

            }
            else
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    model.DailyData = GetDailyReportData(connection, fromDate, toDate, model.PumpId,model.IsSummary);
                }
            }

            return View(model);
        }

        private List<FuelStockReportRow> GetReportData(IDbConnection connection, DateTime? f, DateTime? t, bool? s, int? p)
        {
            return connection.Query<FuelStockReportRow>(
                "sp_FuelStockReport",
                new
                {
                    FromDate = f,
                    ToDate = t,
                    PumpId = p
                },
                commandType: CommandType.StoredProcedure
            ).ToList();
        }
        private List<DailyFuelTransaction> GetDailyReportData(IDbConnection connection, DateTime? f, DateTime? t, int? p,bool q)
        {
            return connection.Query<DailyFuelTransaction>(
                "sp_DailyFuelStockReport",
                new
                {
                    FromDate = f,
                    ToDate = t,
                    PumpId = p
                },
                commandType: CommandType.StoredProcedure
            ).ToList();
        }

        //public ActionResult ExportExcel(DateTime? FromDate, DateTime? ToDate, int? PumpId, bool IsSummary)
        //{
        //     dynamic data2;
        //    using (var connection = SqlConnections.NewByKey("Default"))
        //    {
        //        var data = GetReportData(connection,FromDate, ToDate, IsSummary, PumpId);
        //        data2 = data;
        //    }
            

        //    using (var workbook = new ClosedXML.Excel.XLWorkbook())
        //    {
        //        var ws = workbook.Worksheets.Add("Stock Report");

        //        // Header
        //        ws.Cell(1, 1).Value = "Pump Name";
        //        ws.Cell(1, 2).Value = "Opening";
        //        ws.Cell(1, 3).Value = "Inward";
        //        ws.Cell(1, 4).Value = "Outward";
        //        ws.Cell(1, 5).Value = "Balance";

        //        int row = 2;

        //        foreach (var item in data2)
        //        {
        //            ws.Cell(row, 1).Value = item.PumpName;
        //            ws.Cell(row, 2).Value = item.OpeningStock;
        //            ws.Cell(row, 3).Value = item.Inward;
        //            ws.Cell(row, 4).Value = item.Outward;
        //            ws.Cell(row, 5).Value = item.Balance;
        //            row++;
        //        }

        //        using (var stream = new MemoryStream())
        //        {
        //            workbook.SaveAs(stream);
        //            return File(stream.ToArray(),
        //                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        //                "StockReport.xlsx");
        //        }
        //    }
        //}
    }
}