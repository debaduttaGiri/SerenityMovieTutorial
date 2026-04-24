
namespace SereneMovieTutorial.FuelManagement.Entities
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("FuelManagement"), TableName("[dbo].[DIESELISSUE]")]
    [DisplayName("Diesel Issue"), InstanceName("Diesel Issue")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DieselissueRow : Row, IIdRow, INameRow, IInsertLogRow, IUpdateLogRow
    {
        [DisplayName("Id"), Identity, SortOrder(1, descending: true)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Trip"), Column("TRIPNO"), ForeignKey(typeof(Default.Entities.LoadingTripRow), "LoadingTripId"), LeftJoin("jTrip"), TextualField("TripNo"), NotNull]
        [LookupEditor(typeof(Default.Entities.LoadingTripRow))]
        public Int32? Tripno
        {
            get { return Fields.Tripno[this]; }
            set { Fields.Tripno[this] = value; }
        }

        [Expression("jTrip.TripNo"), LookupInclude]
        public String TripNumber
        {
            get { return Fields.TripNumber[this]; }
            set { Fields.TripNumber[this] = value; }
        }
        [DisplayName("Vehicle No"), NotNull, ForeignKey(typeof(Default.Entities.VehicleMasterRow), "VehicleId"), LeftJoin("jVehicle"), TextualField("Vehiclenumber")]
        [LookupEditor(typeof(Default.Entities.VehicleMasterRow))]
        public int VehicleId
        {
            get { return (int)Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [DisplayName("Vehiclenumber"), QuickSearch]
        [Expression("jVehicle.VehicleNumber"), LookupInclude]
        public String Vehiclenumber
        {
            get { return Fields.Vehiclenumber[this]; }
            set { Fields.Vehiclenumber[this] = value; }
        }

        [DisplayName("Plant"), Column("PLANT"), ForeignKey("[dbo].[Plant]", "Id"), LeftJoin("jPlant"), TextualField("PlantName")]
        [LookupEditor(typeof(PlantRow))]
        public Int32? Plant
        {
            get { return Fields.Plant[this]; }
            set { Fields.Plant[this] = value; }
        }
        [Expression("jPlant.Plant"), LookupInclude]
        public String PlantName
        {
            get { return Fields.PlantName[this]; }
            set { Fields.PlantName[this] = value; }
        }

        [DisplayName("District"), Column("DISTICT"), ForeignKey("[dbo].[Distict]", "Id"), LeftJoin("jDistrict"), TextualField("DistrictName")]
        [LookupEditor(typeof(DistictRow))]
        public Int32? Distict
        {
            get { return Fields.Distict[this]; }
            set { Fields.Distict[this] = value; }
        }

        [Expression("jDistrict.Distict"), LookupInclude]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }

        [DisplayName("Destination"), Column("DESTINATION"), ForeignKey("[dbo].[Destination]", "Id"), LeftJoin("jDestination"), TextualField("DestinationName")]
        [LookupEditor(typeof(DestinationRow))]
        public Int32? Destination
        {
            get { return Fields.Destination[this]; }
            set { Fields.Destination[this] = value; }
        }

        [Expression("jDestination.Destination"), LookupInclude]
        public String DestinationName
        {
            get { return Fields.DestinationName[this]; }
            set { Fields.DestinationName[this] = value; }
        }

        [DisplayName("Pump"), Column("PUMPID"), NotNull, ForeignKey("[dbo].[PUMPMASTER]", "Id"), LeftJoin("jPump"), TextualField("PumpName")]
        [LookupEditor(typeof(PumpmasterRow))]
        public Int32? Pumpid
        {
            get { return Fields.Pumpid[this]; }
            set { Fields.Pumpid[this] = value; }
        }
        [DisplayName("Stock"), Size(18), Scale(2)]
        public decimal Stock
        {
            get { return (decimal)Fields.Stock[this]; }
            set { Fields.Stock[this] = value; }
        }
        [Expression("jPump.Name"), LookupInclude]
        public String PumpName
        {
            get { return Fields.PumpName[this]; }
            set { Fields.PumpName[this] = value; }
        }


        [DisplayName("Diesel"), Column("DIESEL"), Size(18), Scale(2), NotNull]
        public Decimal? Diesel
        {
            get { return Fields.Diesel[this]; }
            set { Fields.Diesel[this] = value; }
        }

        [DisplayName("IssueDate"), Column("TODAY"), NotNull]
        public DateTime? Today
        {
            get { return Fields.Today[this]; }
            set { Fields.Today[this] = value; }
        }

        [DisplayName("Rateofdiesel"), Column("RATEOFDIESEL"), Size(18), Scale(2)]
        public Decimal? Rateofdiesel
        {
            get { return Fields.Rateofdiesel[this]; }
            set { Fields.Rateofdiesel[this] = value; }
        }

        [DisplayName("Totalprice"), Column("TOTALPRICE"), Size(18), Scale(2)]
        public Decimal? Totalprice
        {
            get { return Fields.Totalprice[this]; }
            set { Fields.Totalprice[this] = value; }
        }

        [DisplayName("Created By"), //Insertable(false), Updatable(false),
        ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jCreatedBy"),
        TextualField("CreatedByUsername")]
        public Int32? CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [Expression("jCreatedBy.Username"), DisplayName("Created By")]
        public String CreatedByUsername
        {
            get { return Fields.CreatedByUsername[this]; }
            set { Fields.CreatedByUsername[this] = value; }
        }

        [DisplayName("Created Date"), Insertable(false), Updatable(false), DisplayFormat("yyyy-MM-dd HH:mm:ss")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Updated By"), //Insertable(false), Updatable(false),
         ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUpdatedBy"),
         TextualField("UpdatedByUsername")]
        public Int32? UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [Expression("jUpdatedBy.Username"), DisplayName("Updated By")]
        public String UpdatedByUsername
        {
            get { return Fields.UpdatedByUsername[this]; }
            set { Fields.UpdatedByUsername[this] = value; }
        }

        [DisplayName("Updated Date"), Insertable(false), Updatable(false), DisplayFormat("yyyy-MM-dd HH:mm:ss")]
        public DateTime? UpdatedDate
        {
            get { return Fields.UpdatedDate[this]; }
            set { Fields.UpdatedDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Vehiclenumber; }
        }

        IIdField IInsertLogRow.InsertUserIdField => Fields.CreatedBy;
        DateTimeField IInsertLogRow.InsertDateField => Fields.CreatedDate;

        IIdField IUpdateLogRow.UpdateUserIdField => Fields.UpdatedBy;
        DateTimeField IUpdateLogRow.UpdateDateField => Fields.UpdatedDate;

        public static readonly RowFields Fields = new RowFields().Init();

        public DieselissueRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Tripno;
            public StringField TripNumber;
            public Int32Field VehicleId;
            public StringField Vehiclenumber;
            public Int32Field Plant;
            public StringField PlantName;
            public Int32Field Distict;
            public StringField DistrictName;
            public Int32Field Destination;
            public StringField DestinationName;
            public Int32Field Pumpid;
            public DecimalField Stock;
            public DecimalField Diesel;
            public DateTimeField Today;
            public DecimalField Rateofdiesel;
            public DecimalField Totalprice;

            public StringField PumpName;

            public Int32Field CreatedBy;
            public DateTimeField CreatedDate;
            public Int32Field UpdatedBy;
            public DateTimeField UpdatedDate;

            public StringField CreatedByUsername;
            public StringField UpdatedByUsername;
        }
    }
}
