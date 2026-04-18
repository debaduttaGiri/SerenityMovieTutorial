
namespace SereneMovieTutorial.Inventry.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventry"), TableName("[dbo].[PurchaseBillDetail]")]
    [DisplayName("Purchase Bill Detail"), InstanceName("Purchase Bill Detail")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PurchaseBillDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("PurchaseOrderId")]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Purchase Bill"), NotNull, ForeignKey("[dbo].[PurchaseBill]", "Id"), LeftJoin("jPurchaseBill"), TextualField("PurchaseBillBillNo")]
        public Int32? PurchaseBillId
        {
            get { return Fields.PurchaseBillId[this]; }
            set { Fields.PurchaseBillId[this] = value; }
        }

        [DisplayName("Item Id"), NotNull]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Item Name"), Size(200), QuickSearch]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Quantity"), Size(18), Scale(2), NotNull]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Current Rate"), Size(18), Scale(2)]
        public Decimal? CurrentRate
        {
            get { return Fields.CurrentRate[this]; }
            set { Fields.CurrentRate[this] = value; }
        }

        [DisplayName("Previous Rate"), Size(18), Scale(2)]
        public Decimal? PreviousRate
        {
            get { return Fields.PreviousRate[this]; }
            set { Fields.PreviousRate[this] = value; }
        }

        [DisplayName("Discount"), Size(18), Scale(2)]
        public Decimal? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Taxable Amount"), Size(18), Scale(2)]
        public Decimal? TaxableAmount
        {
            get { return Fields.TaxableAmount[this]; }
            set { Fields.TaxableAmount[this] = value; }
        }

        [DisplayName("Cgst Rate"), Column("CGSTRate"), Size(5), Scale(2)]
        public Decimal? CgstRate
        {
            get { return Fields.CgstRate[this]; }
            set { Fields.CgstRate[this] = value; }
        }

        [DisplayName("Sgst Rate"), Column("SGSTRate"), Size(5), Scale(2)]
        public Decimal? SgstRate
        {
            get { return Fields.SgstRate[this]; }
            set { Fields.SgstRate[this] = value; }
        }

        [DisplayName("Igst Rate"), Column("IGSTRate"), Size(5), Scale(2)]
        public Decimal? IgstRate
        {
            get { return Fields.IgstRate[this]; }
            set { Fields.IgstRate[this] = value; }
        }

        [DisplayName("Cgst Amount"), Column("CGSTAmount"), Size(18), Scale(2)]
        public Decimal? CgstAmount
        {
            get { return Fields.CgstAmount[this]; }
            set { Fields.CgstAmount[this] = value; }
        }

        [DisplayName("Sgst Amount"), Column("SGSTAmount"), Size(18), Scale(2)]
        public Decimal? SgstAmount
        {
            get { return Fields.SgstAmount[this]; }
            set { Fields.SgstAmount[this] = value; }
        }

        [DisplayName("Igst Amount"), Column("IGSTAmount"), Size(18), Scale(2)]
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

        [DisplayName("Remarks"), Size(500)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        

        

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseBillDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PurchaseOrderId;
            public Int32Field PurchaseBillId;
            public Int32Field ItemId;
            public StringField ItemName;
            public DecimalField Quantity;
            public DecimalField CurrentRate;
            public DecimalField PreviousRate;
            public DecimalField Discount;
            public DecimalField TaxableAmount;
            public DecimalField CgstRate;
            public DecimalField SgstRate;
            public DecimalField IgstRate;
            public DecimalField CgstAmount;
            public DecimalField SgstAmount;
            public DecimalField IgstAmount;
            public DecimalField TotalAmount;
            public StringField Remarks;

           
        }
    }
}
