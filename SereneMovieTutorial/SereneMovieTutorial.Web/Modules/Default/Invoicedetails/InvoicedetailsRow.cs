
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[INVOICEDETAILS]")]
    [DisplayName("Invoice Details"), InstanceName("Invoicedetails")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class InvoicedetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Manage Invoice"), Column("ManageInvoiceId")]
        [ForeignKey("[dbo].[MANAGEINVOICE]", "Id"), LeftJoin("jInv")]
        public Int32? ManageInvoiceId
        {
            get { return Fields.ManageInvoiceId[this]; }
            set { Fields.ManageInvoiceId[this] = value; }
        }

        [DisplayName("Challan No"), Column("CHALLAN")]
        public Int32? Challan
        {
            get { return Fields.Challan[this]; }
            set { Fields.Challan[this] = value; }
        }

        [DisplayName("LR No"), Column("LRNO"), Size(20), QuickSearch]
        public String Lrno
        {
            get { return Fields.Lrno[this]; }
            set { Fields.Lrno[this] = value; }
        }

        [DisplayName("Vehicle No"), Column("VEHICLEID")]
        public Int32? Vehicleid
        {
            get { return Fields.Vehicleid[this]; }
            set { Fields.Vehicleid[this] = value; }
        }

        [DisplayName("VehicleNumber"), Column("VehicleNumber")]
        public string VehicleNumber
        {
            get { return Fields.VehicleNumber[this]; }
            set { Fields.VehicleNumber[this] = value; }
        }

        [DisplayName("Freight Rate"), Column("FREIGHTRATE"), Size(18)]
        public Int32? freightRate
        {
            get { return Fields.freightRate[this]; }
            set { Fields.freightRate[this] = value; }
        }

        [DisplayName("Weight"), Column("WEIGHT"), Size(18), Scale(2)]
        public Decimal? Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }

        [DisplayName("Billing Amount"), Column("BILLINGAMOUNT"), Size(18)]
        public Decimal? Billingamount
        {
            get { return Fields.Billingamount[this]; }
            set { Fields.Billingamount[this] = value; }
        }

        [DisplayName("Invoice Date"), Column("INVOICEDATE")]
        public DateTime? Invoicedate
        {
            get { return Fields.Invoicedate[this]; }
            set { Fields.Invoicedate[this] = value; }
        }
        [DisplayName("Loading Trip"), Column("LoadingTripId")]
        public Int32? LoadingTripId
        {
            get { return Fields.LoadingTripId[this]; }
            set { Fields.LoadingTripId[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Lrno; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoicedetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Challan;
            public StringField Lrno;
            public Int32Field Vehicleid;
            public StringField VehicleNumber;
            public Int32Field freightRate;
            public DecimalField Weight;
            public DecimalField Billingamount;
            public DateTimeField Invoicedate;
            public Int32Field LoadingTripId;
            public Int32Field ManageInvoiceId;
        }
    }
}
