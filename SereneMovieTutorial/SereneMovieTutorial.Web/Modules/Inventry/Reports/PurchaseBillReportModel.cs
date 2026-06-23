using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SereneMovieTutorial.Modules.Inventry.Reports
{
    public class PurchaseBillReportModel
    {
        public Int32? Id { get; set; }
        public String BillNo { get; set; }
        public DateTime? BillDate { get; set; }

        public Int32? PartyId { get; set; }
        public String PartyName { get; set; }

        public String PoNumber { get; set; }

        public Decimal? TotalBillAmount { get; set; }
        public Decimal? TaxableAmount { get; set; }

        public List<PurchaseBillReportDetailModel> Details { get; set; }
    }

    public class PurchaseBillReportDetailModel
    {
        public Int32? ItemId { get; set; }
        public String ItemName { get; set; }

        public Decimal? Quantity { get; set; }
        public Decimal? CurrentRate { get; set; }

        public Decimal? Discount { get; set; }
        public Decimal? TaxableAmount { get; set; }

        public Decimal? CgstAmount { get; set; }
        public Decimal? SgstAmount { get; set; }
        public Decimal? IgstAmount { get; set; }

        public Decimal? TotalAmount { get; set; }
    }

    public class PurchaseBillReportRequest
    {
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public Int32? PartyId { get; set; }
    }
}