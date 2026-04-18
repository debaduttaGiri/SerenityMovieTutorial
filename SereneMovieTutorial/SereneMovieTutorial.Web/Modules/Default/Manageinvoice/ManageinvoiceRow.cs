
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[MANAGEINVOICE]")]
    [DisplayName("Manage Invoice"), InstanceName("Manageinvoice")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ManageinvoiceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Plant"), Column("PLANTID"), NotNull]
        [ForeignKey("[dbo].[Plant]", "Id"), LeftJoin("plant")]
        [LookupEditor(typeof(PlantRow))]
        public Int32? Plantid
        {
            get { return Fields.Plantid[this]; }
            set { Fields.Plantid[this] = value; }
        }
        [Expression("plant.Plant")]
        public string Plant
        {
            get => Fields.Plant[this];
            set => this.Plant = value;

        }

        [DisplayName("Branch"), Column("BRANCHID"), NotNull]
        [ForeignKey("[dbo].[BranchMaster]", "Id"), LeftJoin("jBranch")]
        [LookupEditor(typeof(BranchMasterRow))]
        public Int32? Branchid
        {
            get { return Fields.Branchid[this]; }
            set { Fields.Branchid[this] = value; }
        }
        [Expression("jBranch.BranchName")]
        public string Branch
        {
            get => Fields.Branch[this];
            set => Fields.Branch[this] = value;
        }

        [DisplayName("TotalTrips"), Column("TOTALTRIPS"), NotNull]
        public Int32? Totaltrips
        {
            get { return Fields.Totaltrips[this]; }
            set { Fields.Totaltrips[this] = value; }
        }

        [DisplayName("InvoiceNo"), Column("INVOICENO"), Size(20), QuickSearch]
        public String Invoiceno
        {
            get { return Fields.Invoiceno[this]; }
            set { Fields.Invoiceno[this] = value; }
        }

        [DisplayName("PoNo"), Column("PONO")]
        public Int32? Pono
        {
            get { return Fields.Pono[this]; }
            set { Fields.Pono[this] = value; }
        }

        [DisplayName("InvoiceDate"), Column("INVOICEDATE")]
        public DateTime? Invoicedate
        {
            get { return Fields.Invoicedate[this]; }
            set { Fields.Invoicedate[this] = value; }
        }

        [DisplayName("From Date"), Column("FROMDATE"), NotNull]
        public DateTime? Fromdate
        {
            get { return Fields.Fromdate[this]; }
            set { Fields.Fromdate[this] = value; }
        }

        [DisplayName("To date"), Column("TODATE")]
        public DateTime? Todate
        {
            get { return Fields.Todate[this]; }
            set { Fields.Todate[this] = value; }
        }

        [DisplayName("Add GST Amount"), Column("ADDGST")]
        public Boolean? Addgst
        {
            get { return Fields.Addgst[this]; }
            set { Fields.Addgst[this] = value; }
        }

        [DisplayName("SAC Code"), Column("SACCODE")]
        public Int32? Saccode
        {
            get { return Fields.Saccode[this]; }
            set { Fields.Saccode[this] = value; }
        }

        [DisplayName("TAX"), Column("TAX")]
        public Int32? Tax
        {
            get { return Fields.Tax[this]; }
            set { Fields.Tax[this] = value; }
        }

        [DisplayName("Local GST"), Column("LOCALGST")]
        public Boolean? Localgst
        {
            get { return Fields.Localgst[this]; }
            set { Fields.Localgst[this] = value; }
        }

        [DisplayName("CGST Rate"), Column("CGSTRATE"), Size(18)]
        public Decimal? Cgstrate
        {
            get { return Fields.Cgstrate[this]; }
            set { Fields.Cgstrate[this] = value; }
        }

        [DisplayName("SGST Rate"), Column("SGSTRATE"), Size(18)]
        public Decimal? Sgstrate
        {
            get { return Fields.Sgstrate[this]; }
            set { Fields.Sgstrate[this] = value; }
        }

        [DisplayName("IGST Rate"), Column("IGSTRATE"), Size(18)]
        public Decimal? Igstrate
        {
            get { return Fields.Igstrate[this]; }
            set { Fields.Igstrate[this] = value; }
        }

        [DisplayName("CGST Amount"), Column("CGSTAMOUNT"), Size(18)]
        public Decimal? Cgstamount
        {
            get { return Fields.Cgstamount[this]; }
            set { Fields.Cgstamount[this] = value; }
        }

        [DisplayName("SGST Amount"), Column("SGSTAMOUNT"), Size(18)]
        public Decimal? Sgstamount
        {
            get { return Fields.Sgstamount[this]; }
            set { Fields.Sgstamount[this] = value; }
        }

        [DisplayName("IGST Amount"), Column("IGSTAMOUNT"), Size(18)]
        public Decimal? Igstamount
        {
            get { return Fields.Igstamount[this]; }
            set { Fields.Igstamount[this] = value; }
        }

        [DisplayName("Total GST Amount"), Column("TOTALGSTAMOUNT"), Size(18)]
        public Decimal? Totalgstamount
        {
            get { return Fields.Totalgstamount[this]; }
            set { Fields.Totalgstamount[this] = value; }
        }

        [DisplayName("Total Invoice Amount"), Column("TOTALINVOICEAMOUNT"), Size(18)]
        public Decimal? Totalinvoiceamount
        {
            get { return Fields.Totalinvoiceamount[this]; }
            set { Fields.Totalinvoiceamount[this] = value; }
        }
        [MasterDetailRelation(foreignKey: "ManageInvoiceId")]
        [NotMapped]
        public List<InvoicedetailsRow> InvoiceDetails
        {
            get { return Fields.InvoiceDetails[this]; }
            set { Fields.InvoiceDetails[this] = value; }
        }
        [DisplayName("Loading Trip"), Column("LoadingTripId")]
        [ForeignKey("[dbo].[LoadingTrip]", "LoadingTripId"), LeftJoin("jTrips")]
        [LookupEditor(typeof(LoadingTripRow))]
        public Int32? LoadingTripId
        {
            get { return Fields.LoadingTripId[this]; }
            set { Fields.LoadingTripId[this] = value; }
        }
        [Expression("jTrips.TripNo")]
        public String TripNo
        {
            get { return Fields.TripNo[this]; }
            set { Fields.TripNo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Invoiceno; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ManageinvoiceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Plantid;
            public Int32Field Branchid;
            public Int32Field Totaltrips;
            public StringField Invoiceno;
            public Int32Field Pono;
            public DateTimeField Invoicedate;
            public DateTimeField Fromdate;
            public DateTimeField Todate;
            public BooleanField Addgst;
            public Int32Field Saccode;
            public Int32Field Tax;
            public BooleanField Localgst;
            public DecimalField Cgstrate;
            public DecimalField Sgstrate;
            public DecimalField Igstrate;
            public DecimalField Cgstamount;
            public DecimalField Sgstamount;
            public DecimalField Igstamount;
            public DecimalField Totalgstamount;
            public DecimalField Totalinvoiceamount;
            public RowListField<InvoicedetailsRow> InvoiceDetails;
            public StringField Plant;
            public StringField Branch;
            public Int32Field LoadingTripId;

            public StringField TripNo;
        }
    }
}
