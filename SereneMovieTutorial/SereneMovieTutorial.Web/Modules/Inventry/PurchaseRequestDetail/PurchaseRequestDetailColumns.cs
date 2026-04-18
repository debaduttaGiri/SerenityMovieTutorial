
namespace SereneMovieTutorial.Inventry.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventry.PurchaseRequestDetail")]
    [BasedOnRow(typeof(Entities.PurchaseRequestDetailRow), CheckNames = false)]
    public class PurchaseRequestDetailColumns
    {
        [ DisplayName("Db.Shared.RecordId"),Hidden]
        public Int32 Id { get; set; }
        [EditLink]

        public string PoNo { get; set; }
        [EditLink]
        public string PartName { get; set; }
        

        public String PartNo { get; set; }
        public Decimal PreviousRate { get; set; }
        public Decimal CurrentRate { get; set; }
        public Decimal Quantity { get; set; }
        public string UnitName { get; set; }
        public Decimal BalanceStock { get; set; }
        public Decimal StockLevelMin { get; set; }
        public Decimal StockLevelMax { get; set; }
        public Decimal BasicAmount { get; set; }
        public Decimal CgstRate { get; set; }
        public Decimal SgstRate { get; set; }
        public Decimal IgstRate { get; set; }
        public Decimal cgstAmount { get; set; }
        public Decimal SgstAmount { get; set; }
        public Decimal IgstAmount { get; set; }
        public Decimal TotalAmount { get; set; }
    }
}