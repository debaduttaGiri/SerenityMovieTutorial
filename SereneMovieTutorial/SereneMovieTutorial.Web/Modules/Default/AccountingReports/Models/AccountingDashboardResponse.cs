using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SereneMovieTutorial.Modules.Default.AccountingReports.Models
{
    public class AccountingDashboardResponse
    {
        public Summary Summary { get; set; }
        public List<MineDetails> MineDetails { get; set; }
        public List<BuyerDetails> BuyerDetails { get; set; }
        public List<OutstandingReceivable> OutstandingReceivables { get; set; }
        public List<VendorOutstanding> VendorOutstandings { get; set; }

        public List<MinePerformance> MinePerformance { get; set; }
        public OperationalMetrics OperationalMetrics { get; set; }
        public string ErrorMessage { get; set; }
    }
    public class Summary
    {
        public decimal TotalDispatchRevenue { get; set; }
        public decimal GrossMargin { get; set; }
        public int TotalTrips { get; set; }
        public int TotalPermits { get; set; }
        public decimal QuantityDispatched { get; set; }
        public decimal QuantityPermitted { get; set; }
        public decimal TotalVendorCost { get; set; }
        public decimal TdsDeductions { get; set; }
        public decimal HSD { get; set; }
    }
    public class MineDetails
    {
        public string MineName { get; set; }
        public decimal MineRevenue { get; set; }
        public decimal MineGrossMargin { get; set; }
    }
    public class BuyerDetails
    {
        public string BuyerName { get; set; }
        public decimal BuyerQty { get; set; }
        public decimal BuyerRevenue { get; set; }
        public decimal BuyerMargin { get; set; }
    }
    public class OutstandingReceivable
    {
        public string CustomerMineName { get; set; }
        public decimal ReceivableAmount { get; set; }
    }
    public class VendorOutstanding
    {
        public string SupplierMineName { get; set; }
        public decimal PayableAmount { get; set; }
    }


    public class OperationalMetrics
    {
        public decimal AvgInvoiceRate { get; set; }
        public decimal AvgTripsPerPermit { get; set; }
        public decimal AvgQtyPerPermit { get; set; }
        public decimal AvgQtyPerTrip { get; set; }
        public decimal RevenuePerTrip { get; set; }
        public decimal MarginPerTrip { get; set; }
        public decimal TotalClientOutstanding { get; set; }
        public decimal TotalVendorOutstanding { get; set; }
    }
    public class MinePerformance
    {
        public string MineName { get; set; }

        public decimal Margin { get; set; }
        public decimal Util { get; set; }

        public int Trips { get; set; }
        public decimal Rate { get; set; }
    }
}