
namespace SereneMovieTutorial.Inventry.Entities
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Inventry"), TableName("[dbo].[PurchaseRequestDetail]")]
    [DisplayName("Purchase Detail"), InstanceName("Purchase Detail")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class PurchaseRequestDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Po No"), ForeignKey("[dbo].[PurchaseOrder]", "Id"), LeftJoin("jPurchase")]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        public string PoNo
        {
            get { return Fields.PoNo[this]; }
            set { Fields.PoNo[this] = value; }
        }

        [DisplayName("Item"), ForeignKey(typeof(Inventry.Entities.ItemRow), "Id"), LeftJoin("Item"), TextualField("PARTNAME"), NotNull]
        [LookupEditor(typeof(Inventry.Entities.ItemRow))]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }
        [Expression("Item.Partname"), LookupInclude]
        public string PartName
        {
            get { return Fields.PartName[this]; }
            set { Fields.PartName[this] = value; }
        }

        [DisplayName("Part No"), Size(50), QuickSearch]
        public String PartNo
        {
            get { return Fields.PartNo[this]; }
            set { Fields.PartNo[this] = value; }
        }

        [DisplayName("Previous Rate"), Size(18), Scale(2)]
        public Decimal? PreviousRate
        {
            get { return Fields.PreviousRate[this]; }
            set { Fields.PreviousRate[this] = value; }
        }

        [DisplayName("Current Rate"), Size(18), Scale(2), NotNull]
        public Decimal? CurrentRate
        {
            get { return Fields.CurrentRate[this]; }
            set { Fields.CurrentRate[this] = value; }
        }

        [DisplayName("Quantity"), Size(18), Scale(2), NotNull]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }


        [DisplayName("Item"), ForeignKey(typeof(UnitRow), "Id"), LeftJoin("Unit"), TextualField("UnitId"), NotNull]
        [LookupEditor(typeof(UnitRow))]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }
        [Expression("Unit.UnitName"), LookupInclude]
        public string UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }


        [DisplayName("Balance Stock"), Size(18), Scale(2)]
        public Decimal? BalanceStock
        {
            get { return Fields.BalanceStock[this]; }
            set { Fields.BalanceStock[this] = value; }
        }

        [DisplayName("Stock Level Min"), Size(18), Scale(2)]
        public Decimal? StockLevelMin
        {
            get { return Fields.StockLevelMin[this]; }
            set { Fields.StockLevelMin[this] = value; }
        }

        [DisplayName("Stock Level Max"), Size(18), Scale(2)]
        public Decimal? StockLevelMax
        {
            get { return Fields.StockLevelMax[this]; }
            set { Fields.StockLevelMax[this] = value; }
        }

        [DisplayName("Basic Amount"), Size(18), Scale(2)]
        public Decimal? BasicAmount
        {
            get { return Fields.BasicAmount[this]; }
            set { Fields.BasicAmount[this] = value; }
        }

        [DisplayName("Cgst Rate"), Column("CGSTRate"), Size(18), Scale(2)]
        public Decimal? CgstRate
        {
            get { return Fields.CgstRate[this]; }
            set { Fields.CgstRate[this] = value; }
        }

        [DisplayName("Sgst Rate"), Column("SGSTRate"), Size(18), Scale(2)]
        public Decimal? SgstRate
        {
            get { return Fields.SgstRate[this]; }
            set { Fields.SgstRate[this] = value; }
        }

        [DisplayName("Igst Rate"), Column("IGSTRate"), Size(18), Scale(2)]
        public Decimal? IgstRate
        {
            get { return Fields.IgstRate[this]; }
            set { Fields.IgstRate[this] = value; }
        }
        [DisplayName("Cgst Amount"), Column("CGSTamount"), Size(18), Scale(2), ReadOnly(true)]
        public Decimal? CgstAmount
        {
            get { return Fields.CgstAmount[this]; }
            set { Fields.CgstAmount[this] = value; }
        }

        [DisplayName("Sgst Amount"), Column("SGSTAmount"), Size(18), Scale(2), ReadOnly(true)]
        public Decimal? SgstAmount
        {
            get { return Fields.SgstAmount[this]; }
            set { Fields.SgstAmount[this] = value; }
        }

        [DisplayName("Igst Amount"), Column("IGSTAmount"), Size(18), Scale(2), ReadOnly(true)]
        public Decimal? IgstAmount
        {
            get { return Fields.IgstAmount[this]; }
            set { Fields.IgstAmount[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(2)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PartNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseRequestDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PurchaseOrderId;
            public Int32Field ItemId;
            public StringField PartName;
            public StringField PartNo;
            public DecimalField PreviousRate;
            public DecimalField CurrentRate;
            public DecimalField Quantity;
            public Int32Field UnitId;
            public StringField UnitName;
            public DecimalField BalanceStock;
            public DecimalField StockLevelMin;
            public DecimalField StockLevelMax;
            public DecimalField BasicAmount;
            public DecimalField CgstRate;
            public DecimalField SgstRate;
            public DecimalField IgstRate;
            public DecimalField CgstAmount;
            public DecimalField SgstAmount;
            public DecimalField IgstAmount;
            public DecimalField TotalAmount;
            public StringField PoNo;
        }
    }
}
