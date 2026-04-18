
namespace SereneMovieTutorial.Inventry.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventry"), TableName("[dbo].[V_PendingPurchaseOrder]")]
    [DisplayName("Pending Purchase Order"), InstanceName("Pending Purchase Order")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PendingPurchaseOrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), NotNull,SortOrder(1,descending:true)]
       
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Po No"), Size(50), QuickSearch]
        public String PoNo
        {
            get { return Fields.PoNo[this]; }
            set { Fields.PoNo[this] = value; }
        }

        [DisplayName("Order Date"), NotNull]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Party Id"), NotNull, ForeignKey("[dbo].[PartyMaster]", "Id"), LeftJoin("pty")]
        public Int32? PartyId
        {
            get { return Fields.PartyId[this]; }
            set { Fields.PartyId[this] = value; }
        }
        [Expression("pty.Name")]
        public string Party
        {
            get { return Fields.Party[this]; }
            set { Fields.Party[this] = value; }
        }

        [DisplayName("Branch Id"), NotNull, ForeignKey("[dbo].[BranchMaster]", "Id"), LeftJoin("Brnch")]
        public Int32? BranchId
        {
            get { return Fields.BranchId[this]; }
            set { Fields.BranchId[this] = value; }
        }
        [Expression("Brnch.BranchName")]  //-------------------------------------------------------------------
        public string BranchName
        {
            get { return Fields.BranchName[this]; }
            set { Fields.BranchName[this] = value; }
        }


        //[DisplayName("Detail Id"), NotNull, ForeignKey("[dbo].[PartyMaster]", "Id"), LeftJoin("pty")]
        public Int32? DetailId
        {
            get { return Fields.DetailId[this]; }
            set { Fields.DetailId[this] = value; }
        }

        [DisplayName("Item Id"), NotNull, ForeignKey("[dbo].[ITEM]", "Id"), LeftJoin("jitm")]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }
        [DisplayName("Part Name")]

        public String Partname
        {
            get { return Fields.Partname[this]; }
            set { Fields.Partname[this] = value; }
        }

        [DisplayName("Part No"), Size(50)]
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

        [DisplayName("Unit Id"), NotNull, ForeignKey("[dbo].[Unit]", "Id"), LeftJoin("unt")]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }
        [Expression("unt.UnitName")]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(2)]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }
        /// <summary>
        /// //
        /// </summary>
        [DisplayName("Balance Stock")]
        public Decimal? BalanceStock
        {
            get { return Fields.BalanceStock[this]; }
            set { Fields.BalanceStock[this] = value; }
        }

        [DisplayName("Basic Amount")]
        public Decimal? BasicAmount
        {
            get { return Fields.BasicAmount[this]; }
            set { Fields.BasicAmount[this] = value; }
        }

        [DisplayName("CGST Rate")]
        public Decimal? CGSTRate
        {
            get { return Fields.CGSTRate[this]; }
            set { Fields.CGSTRate[this] = value; }
        }

        [DisplayName("IGST Rate")]
        public Decimal? IGSTRate
        {
            get { return Fields.IGSTRate[this]; }
            set { Fields.IGSTRate[this] = value; }
        }

        [DisplayName("SGST Rate")]
        public Decimal? SGSTRate
        {
            get { return Fields.SGSTRate[this]; }
            set { Fields.SGSTRate[this] = value; }
        }

        [DisplayName("Stock Level Max")]
        public Decimal? StockLevelMax
        {
            get { return Fields.StockLevelMax[this]; }
            set { Fields.StockLevelMax[this] = value; }
        }

        [DisplayName("Stock Level Min")]
        public Decimal? StockLevelMin
        {
            get { return Fields.StockLevelMin[this]; }
            set { Fields.StockLevelMin[this] = value; }
        }
        [ NotNull, ForeignKey("[dbo].[PurchaseOrder]", "Id"), LeftJoin("Po")]
        public int PurchaseOrderId
        {
            get => this.PurchaseOrderId;
            set => this.PurchaseOrderId = value;
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
        IIdField IIdRow.IdField
        {
            get { return Fields.DetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PoNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PendingPurchaseOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField PoNo;
            public DateTimeField OrderDate;
            public Int32Field PartyId;
            public Int32Field BranchId;
            public Int32Field DetailId;
            public Int32Field ItemId;
            public StringField PartNo;
            public DecimalField PreviousRate;
            public DecimalField CurrentRate;
            public DecimalField Quantity;
            public Int32Field UnitId;
            public DecimalField TotalAmount;
            public StringField Party;
            public StringField BranchName;
            public StringField Partname;
            public StringField UnitName;

            public DecimalField BalanceStock;
            public DecimalField BasicAmount;
            public DecimalField CGSTRate;
            public DecimalField IGSTRate;
            public DecimalField SGSTRate;
            public DecimalField StockLevelMax;
            public DecimalField StockLevelMin;
            public Int32Field PurchaseOrderId;
            public DecimalField CgstAmount;
            public DecimalField SgstAmount;
            public DecimalField IgstAmount;
        }
    }
}
