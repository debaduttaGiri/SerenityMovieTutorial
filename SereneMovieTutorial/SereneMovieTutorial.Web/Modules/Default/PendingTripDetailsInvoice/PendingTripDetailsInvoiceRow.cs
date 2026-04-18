
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TripDetailsInvoice]")]
    [DisplayName("Pending Trip Details Invoice"), InstanceName("Pending Trip Details Invoice")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PendingTripDetailsInvoiceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Loading Trip Id"), NotNull,SortOrder(1,descending:true)]
        public Int32? LoadingTripId
        {
            get { return Fields.LoadingTripId[this]; }
            set { Fields.LoadingTripId[this] = value; }
        }

        [DisplayName("Trip No"), Size(50), NotNull, QuickSearch]
        public String TripNo
        {
            get { return Fields.TripNo[this]; }
            set { Fields.TripNo[this] = value; }
        }

        [DisplayName("Trip Date"), NotNull]
        public DateTime? TripDate
        {
            get { return Fields.TripDate[this]; }
            set { Fields.TripDate[this] = value; }
        }

        [DisplayName("Plant Id"), NotNull]
        public Int32? PlantId
        {
            get { return Fields.PlantId[this]; }
            set { Fields.PlantId[this] = value; }
        }

        [DisplayName("Plant Name"), Size(20)]
        public String PlantName
        {
            get { return Fields.PlantName[this]; }
            set { Fields.PlantName[this] = value; }
        }

        [DisplayName("District Id"), NotNull]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }

        [DisplayName("District Name"), Size(20)]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }

        [DisplayName("Destination Id"), NotNull]
        public Int32? DestinationId
        {
            get { return Fields.DestinationId[this]; }
            set { Fields.DestinationId[this] = value; }
        }

        [DisplayName("Destination Name"), Size(20)]
        public String DestinationName
        {
            get { return Fields.DestinationName[this]; }
            set { Fields.DestinationName[this] = value; }
        }

        [DisplayName("Vehicle Id"), NotNull]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [DisplayName("Vehicle Number"), Size(10)]
        public String VehicleNumber
        {
            get { return Fields.VehicleNumber[this]; }
            set { Fields.VehicleNumber[this] = value; }
        }

        [DisplayName("Customer Id"), NotNull]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Customer Name"), Size(101)]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Branch Id"), NotNull]
        public Int32? BranchId
        {
            get { return Fields.BranchId[this]; }
            set { Fields.BranchId[this] = value; }
        }

        [DisplayName("Branch Name"), Size(50)]
        public String BranchName
        {
            get { return Fields.BranchName[this]; }
            set { Fields.BranchName[this] = value; }
        }

        [DisplayName("State Id"), NotNull]
        public Int32? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("State Name"), Size(15)]
        public String StateName
        {
            get { return Fields.StateName[this]; }
            set { Fields.StateName[this] = value; }
        }

        [DisplayName("Item Id"), NotNull]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Item Name"), Size(150)]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Weight"), Size(10), Scale(2), NotNull]
        public Decimal? Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }

        [DisplayName("Wheels"), NotNull]
        public Int32? Wheels
        {
            get { return Fields.Wheels[this]; }
            set { Fields.Wheels[this] = value; }
        }
        public Int32 FreightRate
        {
            get => this.FreightRate;
            set { Fields.FreightRate[this] = value; }

        }

        [DisplayName("Expense Amount"), Size(10), Scale(2), NotNull]
        public Decimal? ExpenseAmount
        {
            get { return Fields.ExpenseAmount[this]; }
            set { Fields.ExpenseAmount[this] = value; }
        }

        [DisplayName("Remarks"), Size(500)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Created Date"), NotNull]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Createdate"), Column("CREATEDATE")]
        public DateTime? Createdate
        {
            get { return Fields.Createdate[this]; }
            set { Fields.Createdate[this] = value; }
        }

        [DisplayName("Createdby"), Column("CREATEDBY")]
        public Int32? Createdby
        {
            get { return Fields.Createdby[this]; }
            set { Fields.Createdby[this] = value; }
        }

        [DisplayName("Updatedby"), Column("UPDATEDBY")]
        public Int32? Updatedby
        {
            get { return Fields.Updatedby[this]; }
            set { Fields.Updatedby[this] = value; }
        }

        [DisplayName("Updateddate"), Column("UPDATEDDATE")]
        public DateTime? Updateddate
        {
            get { return Fields.Updateddate[this]; }
            set { Fields.Updateddate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LoadingTripId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TripNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PendingTripDetailsInvoiceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LoadingTripId;
            public StringField TripNo;
            public DateTimeField TripDate;
            public Int32Field PlantId;
            public StringField PlantName;
            public Int32Field DistrictId;
            public StringField DistrictName;
            public Int32Field DestinationId;
            public StringField DestinationName;
            public Int32Field VehicleId;
            public StringField VehicleNumber;
            public Int32Field CustomerId;
            public StringField CustomerName;
            public Int32Field BranchId;
            public StringField BranchName;
            public Int32Field StateId;
            public StringField StateName;
            public Int32Field ItemId;
            public StringField ItemName;
            public DecimalField Weight;
            public Int32Field FreightRate;
            public Int32Field Wheels;
            public DecimalField ExpenseAmount;
            public StringField Remarks;
            public DateTimeField CreatedDate;
            public DateTimeField Createdate;
            public Int32Field Createdby;
            public Int32Field Updatedby;
            public DateTimeField Updateddate;
        }
    }
}
