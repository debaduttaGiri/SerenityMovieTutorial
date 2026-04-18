using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SereneMovieTutorial.Reports
{
    public class FuelStockModel
    {
       
        public string FromDate { get; set; } = "01-04-2025";
        public string ToDate { get; set; } = DateTime.Today.ToString("dd-MM-yyyy");
        public int? PumpId { get; set; }
        public bool IsSummary { get; set; } = true;

        public List<FuelStockReportRow> Data { get; set; }
        public List<DailyFuelTransaction> DailyData { get; set; }
    }
    public class FuelStockReportRow
    {
        public string PumpName { get; set; }
        public decimal OpeningStock { get; set; }
        public decimal Inward { get; set; }
        public decimal Outward { get; set; }
        public decimal Balance { get; set; }
    }
    public class DailyFuelTransaction
    {
        public int  PumpId { get; set; }
        public string PumpName { get; set; }

        public DateTime ReportDate { get; set; }
        public decimal OpeningStock { get; set; }
        public decimal Inward { get; set; }
        public decimal Outward { get; set; }
        public decimal Balance { get; set; }
    }
}