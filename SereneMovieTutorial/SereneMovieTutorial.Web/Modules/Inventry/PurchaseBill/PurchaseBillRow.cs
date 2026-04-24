
namespace SereneMovieTutorial.Inventry.Entities
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Inventry"), TableName("[dbo].[PurchaseBill]")]
    [DisplayName("Purchase Bill"), InstanceName("Purchase Bill")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PurchaseBillRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Party"), Column("PartyId"), ForeignKey("[dbo].[PartyMaster]", "Id"), LeftJoin("jparty"), TextualField("PartyName")]
        [LookupEditor(typeof(PartyMasterRow))]
        public Int32? PartyId
        {
            get { return Fields.PartyId[this]; }
            set { Fields.PartyId[this] = value; }
        }
        [DisplayName("Party"), Expression("jparty.Name")]
        public string PartyName
        {
            get { return Fields.PartyName[this]; }
            set { Fields.PartyName[this] = value; }
        }

        [DisplayName("Debit Ledger Id")]
        public Int32? DebitLedgerId
        {
            get { return Fields.DebitLedgerId[this]; }
            set { Fields.DebitLedgerId[this] = value; }
        }

        [DisplayName("Bill No"), Size(50), QuickSearch]
        [NotNull]
        public String BillNo
        {
            get { return Fields.BillNo[this]; }
            set { Fields.BillNo[this] = value; }
        }

        [DisplayName("Ledger Type Id"), NotNull]
        public Int32? LedgerTypeId
        {
            get { return Fields.LedgerTypeId[this]; }
            set { Fields.LedgerTypeId[this] = value; }
        }

        [DisplayName("GSTIN"), Size(20)]
        public String Gstin
        {
            get { return Fields.Gstin[this]; }
            set { Fields.Gstin[this] = value; }
        }

        [DisplayName("Bill Date"), NotNull]
        public DateTime? BillDate
        {
            get { return Fields.BillDate[this]; }
            set { Fields.BillDate[this] = value; }
        }

        //[DisplayName("Purchase Order Id"), NotNull]
        //public Int32? PurchaseOrderId
        //{
        //    get { return Fields.PurchaseOrderId[this]; }
        //    set { Fields.PurchaseOrderId[this] = value; }
        //}

        [DisplayName("PO Number"), Size(50)]
        public String PoNumber
        {
            get { return Fields.PoNumber[this]; }
            set { Fields.PoNumber[this] = value; }
        }

        [DisplayName("Round Off"), Size(18), Scale(2)]
        public Decimal? RoundOff
        {
            get { return Fields.RoundOff[this]; }
            set { Fields.RoundOff[this] = value; }
        }

        [DisplayName("Stock In Date"), NotNull]
        public DateTime? StockInDate
        {
            get { return Fields.StockInDate[this]; }
            set { Fields.StockInDate[this] = value; }
        }

        [DisplayName("Total Bill Amount"), Size(18), Scale(2)]
        public Decimal? TotalBillAmount
        {
            get { return Fields.TotalBillAmount[this]; }
            set { Fields.TotalBillAmount[this] = value; }
        }

        [DisplayName("TDS Ledger"), Column("TDSLedger")]
        public Int32? TDSLedger
        {
            get { return Fields.TDSLedger[this]; }
            set { Fields.TDSLedger[this] = value; }
        }

        [DisplayName("TDS Rate"), Column("TDSRate"), Size(5), Scale(2)]
        public Decimal? TdsRate
        {
            get { return Fields.TdsRate[this]; }
            set { Fields.TdsRate[this] = value; }
        }

        [DisplayName("TDS Section"), Column("TDSSection"), Size(50)]
        public String TdsSection
        {
            get { return Fields.TdsSection[this]; }
            set { Fields.TdsSection[this] = value; }
        }

        [DisplayName("TDS Amount"), Column("TDSAmount"), Size(18), Scale(2)]
        public Decimal? TdsAmount
        {
            get { return Fields.TdsAmount[this]; }
            set { Fields.TdsAmount[this] = value; }
        }

        [DisplayName("Taxable Amount"), Size(18), Scale(2)]
        public Decimal? TaxableAmount
        {
            get { return Fields.TaxableAmount[this]; }
            set { Fields.TaxableAmount[this] = value; }
        }

        [DisplayName("CGST Amount"), Column("CGSTAmount"), Size(18), Scale(2)]
        public Decimal? CgstAmount
        {
            get { return Fields.CgstAmount[this]; }
            set { Fields.CgstAmount[this] = value; }
        }

        [DisplayName("SGST Amount"), Column("SGSTAmount"), Size(18), Scale(2)]
        public Decimal? SgstAmount
        {
            get { return Fields.SgstAmount[this]; }
            set { Fields.SgstAmount[this] = value; }
        }

        [DisplayName("IGST Amount"), Column("IGSTAmount"), Size(18), Scale(2)]
        public Decimal? IgstAmount
        {
            get { return Fields.IgstAmount[this]; }
            set { Fields.IgstAmount[this] = value; }
        }

        [DisplayName("CGST Ledger")]
        public Int32? CgstLedger
        {
            get { return Fields.CgstLedger[this]; }
            set { Fields.CgstLedger[this] = value; }
        }

        [DisplayName("SGST Ledger")]
        public Int32? SgstLedger
        {
            get { return Fields.SgstLedger[this]; }
            set { Fields.SgstLedger[this] = value; }
        }

        [DisplayName("IGST Ledger")]
        public Int32? IgstLedger
        {
            get { return Fields.IgstLedger[this]; }
            set { Fields.IgstLedger[this] = value; }
        }

        [DisplayName("Remarks")]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Attachments")]

        //public byte[] Attachments
        //{
        //    get { return Fields.Attachments[this]; }   // no cast needed
        //    set { Fields.Attachments[this] = value; }
        //}



        [MasterDetailRelation(foreignKey: "PurchaseBillId")]
        [NotMapped]
        public List<PurchaseBillDetailRow> PurchaseDetails
        {
            get { return Fields.PurchaseDetails[this]; }
            set { Fields.PurchaseDetails[this] = value; }
        }

        IIdField IIdRow.IdField => Fields.Id;
        StringField INameRow.NameField => Fields.BillNo;

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseBillRow() : base(Fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PartyId;
            public StringField PartyName;
            public Int32Field DebitLedgerId;
            public StringField BillNo;
            public Int32Field LedgerTypeId;
            public StringField Gstin;
            public DateTimeField BillDate;
            //public Int32Field PurchaseOrderId;
            public StringField PoNumber;
            public DecimalField RoundOff;
            public DateTimeField StockInDate;
            public DecimalField TotalBillAmount;
            public Int32Field TDSLedger;
            public DecimalField TdsRate;
            public StringField TdsSection;
            public DecimalField TdsAmount;
            public DecimalField TaxableAmount;
            public DecimalField CgstAmount;
            public DecimalField SgstAmount;
            public DecimalField IgstAmount;
            public Int32Field CgstLedger;
            public Int32Field SgstLedger;
            public Int32Field IgstLedger;
            public StringField Remarks;
            //public ByteArrayField Attachments;   // ✅ use StreamField for varbinary(max)
            public RowListField<PurchaseBillDetailRow> PurchaseDetails;
        }
    }
}
