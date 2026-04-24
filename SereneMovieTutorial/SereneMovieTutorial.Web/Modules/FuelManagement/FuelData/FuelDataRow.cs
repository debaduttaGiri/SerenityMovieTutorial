
namespace SereneMovieTutorial.FuelManagement.Entities
{
    using SereneMovieTutorial.Modules.FuelManagement.FuelData;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("FuelManagement"), TableName("[dbo].[FuelData]")]
    [DisplayName("Fuel Data"), InstanceName("Fuel Data")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class FuelDataRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, SortOrder(1, descending: true)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Inward No"), Size(50), QuickSearch]
        public String InwardNo
        {
            get { return Fields.InwardNo[this]; }
            set { Fields.InwardNo[this] = value; }
        }

        [DisplayName("Invoice No"), Size(50), NotNull]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        }

        [DisplayName("Invoice Date"), NotNull]
        public DateTime? InvoiceDate
        {
            get { return Fields.InvoiceDate[this]; }
            set { Fields.InvoiceDate[this] = value; }
        }

        [DisplayName("Tanker No"), Size(50), NotNull]
        public String TankerNo
        {
            get { return Fields.TankerNo[this]; }
            set { Fields.TankerNo[this] = value; }
        }

        [DisplayName("Qty Kl"), Column("QtyKL"), Size(18), Scale(2), NotNull]
        public Decimal? QtyKl
        {
            get { return Fields.QtyKl[this]; }
            set { Fields.QtyKl[this] = value; }
        }

        [DisplayName("Rate Kl"), Column("RateKL"), Size(18), Scale(2)]
        public Decimal? RateKl
        {
            get { return Fields.RateKl[this]; }
            set { Fields.RateKl[this] = value; }
        }

        [DisplayName("Quantity Ltr"), Column("QuantityLTR"), Size(18), Scale(2)]
        public Decimal? QuantityLtr
        {
            get { return Fields.QuantityLtr[this]; }
            set { Fields.QuantityLtr[this] = value; }
        }

        [DisplayName("Basic Amount"), Size(18), Scale(2), NotNull]
        public Decimal? BasicAmount
        {
            get { return Fields.BasicAmount[this]; }
            set { Fields.BasicAmount[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(2), NotNull]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Rate Ltr"), Size(18), Scale(2)]
        public Decimal? RateLtr
        {
            get { return Fields.RateLtr[this]; }
            set { Fields.RateLtr[this] = value; }
        }

        [DisplayName("Transportation Rate"), Size(18), Scale(2), NotNull]
        public Decimal? TransportationRate
        {
            get { return Fields.TransportationRate[this]; }
            set { Fields.TransportationRate[this] = value; }
        }

        [DisplayName("Transportation Amt"), Size(18), Scale(2)]
        public Decimal? TransportationAmt
        {
            get { return Fields.TransportationAmt[this]; }
            set { Fields.TransportationAmt[this] = value; }
        }

        [DisplayName("Shortage Kl"), Column("ShortageKL"), Size(18), Scale(2)]
        public Decimal? ShortageKl
        {
            get { return Fields.ShortageKl[this]; }
            set { Fields.ShortageKl[this] = value; }
        }

        [DisplayName("Shortage Ltr"), Size(18), Scale(2)]
        public Decimal? ShortageLtr
        {
            get { return Fields.ShortageLtr[this]; }
            set { Fields.ShortageLtr[this] = value; }
        }

        [DisplayName("Shortage Amt"), Size(18), Scale(2)]
        public Decimal? ShortageAmt
        {
            get { return Fields.ShortageAmt[this]; }
            set { Fields.ShortageAmt[this] = value; }
        }

        [DisplayName("Receipt Date"), NotNull]
        public DateTime? ReceiptDate
        {
            get { return Fields.ReceiptDate[this]; }
            set { Fields.ReceiptDate[this] = value; }
        }

        [DisplayName("Transporter Id")]
        public Int32? TransporterId
        {
            get { return Fields.TransporterId[this]; }
            set { Fields.TransporterId[this] = value; }
        }

        [DisplayName("Party Id")]
        public Int32? PartyId
        {
            get { return Fields.PartyId[this]; }
            set { Fields.PartyId[this] = value; }
        }

        [DisplayName("Tds Payable")]
        public Boolean? TdsPayable
        {
            get { return Fields.TdsPayable[this]; }
            set { Fields.TdsPayable[this] = value; }
        }

        [DisplayName("Tds Account Id")]
        public Int32? TdsAccountId
        {
            get { return Fields.TdsAccountId[this]; }
            set { Fields.TdsAccountId[this] = value; }
        }

        [DisplayName("Tds Section"), Size(50)]
        public String TdsSection
        {
            get { return Fields.TdsSection[this]; }
            set { Fields.TdsSection[this] = value; }
        }

        [DisplayName("Tds Percent"), Size(10), Scale(2)]
        public Decimal? TdsPercent
        {
            get { return Fields.TdsPercent[this]; }
            set { Fields.TdsPercent[this] = value; }
        }

        [DisplayName("Tds Amount"), Size(18), Scale(2)]
        public Decimal? TdsAmount
        {
            get { return Fields.TdsAmount[this]; }
            set { Fields.TdsAmount[this] = value; }
        }

        [DisplayName("Dr Account Id")]
        public Int32? DrAccountId
        {
            get { return Fields.DrAccountId[this]; }
            set { Fields.DrAccountId[this] = value; }
        }

        [DisplayName("Shortage Dr Account")]
        public Int32? ShortageDrAccount
        {
            get { return Fields.ShortageDrAccount[this]; }
            set { Fields.ShortageDrAccount[this] = value; }
        }

        [DisplayName("Shortage Cr Account")]
        public Int32? ShortageCrAccount
        {
            get { return Fields.ShortageCrAccount[this]; }
            set { Fields.ShortageCrAccount[this] = value; }
        }

        [MasterDetailRelation(foreignKey: "FuelDataId")]
        [NotMapped]
        public List<FuelDetailsRow> FuelDetails
        {
            get { return Fields.FuelDetails[this]; }
            set { Fields.FuelDetails[this] = value; }
        }
        [NotMapped]
        [DisplayName("Allotted Quantity")]
        public decimal? AllottedQuantity
        {
            get { return Fields.AllottedQuantity[this]; }
            set { Fields.AllottedQuantity[this] = value; }
        }
        [DisplayName("Show Fuel Details")]
        public YesNo? ShowFuelDetails
        {
            get { return (YesNo)Fields.ShowFuelDetails[this]; }
            set { Fields.ShowFuelDetails[this] = (int?)value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InwardNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FuelDataRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField InwardNo;
            public StringField InvoiceNo;
            public DateTimeField InvoiceDate;
            public StringField TankerNo;
            public DecimalField QtyKl;
            public DecimalField RateKl;
            public DecimalField QuantityLtr;
            public DecimalField BasicAmount;
            public DecimalField TotalAmount;
            public DecimalField RateLtr;
            public DecimalField TransportationRate;
            public DecimalField TransportationAmt;
            public DecimalField ShortageKl;
            public DecimalField ShortageLtr;
            public DecimalField ShortageAmt;
            public DateTimeField ReceiptDate;
            public Int32Field TransporterId;
            public Int32Field PartyId;
            public BooleanField TdsPayable;
            public Int32Field TdsAccountId;
            public StringField TdsSection;
            public DecimalField TdsPercent;
            public DecimalField TdsAmount;
            public Int32Field DrAccountId;
            public Int32Field ShortageDrAccount;
            public Int32Field ShortageCrAccount;
            public RowListField<FuelDetailsRow> FuelDetails;
            public DecimalField AllottedQuantity;
            public Int32Field ShowFuelDetails;
        }
    }
}
