
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[UnloadTrip]")]
    [DisplayName("Unload Trip"), InstanceName("Unload Trip")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UnloadTripRow : Row, IIdRow, INameRow, IInsertLogRow, IUpdateLogRow
    {
        [DisplayName("Unload Trip Id"), Identity,SortOrder(1,descending:true)]
        public Int32? UnloadTripId
        {
            get { return Fields.UnloadTripId[this]; }
            set { Fields.UnloadTripId[this] = value; }
        }

        public int? LoadingTripId
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

        [DisplayName("Plant"), Size(20), NotNull]
        public String Plant
        {
            get { return Fields.Plant[this]; }
            set { Fields.Plant[this] = value; }
        }

        [DisplayName("District"), Size(20), NotNull]
        public String District
        {
            get { return Fields.District[this]; }
            set { Fields.District[this] = value; }
        }

        [DisplayName("Destination"), Size(20), NotNull]
        public String Destination
        {
            get { return Fields.Destination[this]; }
            set { Fields.Destination[this] = value; }
        }

        [DisplayName("Vehicle Name"), Size(20), NotNull]
        public String VehicleName
        {
            get { return Fields.VehicleName[this]; }
            set { Fields.VehicleName[this] = value; }
        }

        [DisplayName("Customer Name"), Size(20), NotNull]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Branch"), Size(20), NotNull]
        public String Branch
        {
            get { return Fields.Branch[this]; }
            set { Fields.Branch[this] = value; }
        }

        [DisplayName("State"), Size(20), NotNull]
        public String State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("Item"), Size(20), NotNull]
        public String Item
        {
            get { return Fields.Item[this]; }
            set { Fields.Item[this] = value; }
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

        [DisplayName("Expense Amount"), Size(10), Scale(2), NotNull]
        public Decimal? ExpenseAmount
        {
            get { return Fields.ExpenseAmount[this]; }
            set { Fields.ExpenseAmount[this] = value; }
        }

        [DisplayName("Unload Weight"), Size(10), Scale(2), NotNull]
        public Decimal? UnloadWeight
        {
            get { return Fields.UnloadWeight[this]; }
            set { Fields.UnloadWeight[this] = value; }
        }

        [DisplayName("Unload Date"), NotNull]
        public DateTime? UnloadDate
        {
            get { return Fields.UnloadDate[this]; }
            set { Fields.UnloadDate[this] = value; }
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
        public DateTime? CreateDate
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
            get { return Fields.UnloadTripId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TripNo; }
        }

        IIdField IInsertLogRow.InsertUserIdField => Fields.CreatedBy;
        DateTimeField IInsertLogRow.InsertDateField => Fields.CreateDate;

        IIdField IUpdateLogRow.UpdateUserIdField => Fields.UpdatedBy;
        DateTimeField IUpdateLogRow.UpdateDateField => Fields.UpdatedDate;

        public static readonly RowFields Fields = new RowFields().Init();

        public UnloadTripRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UnloadTripId;
            public Int32Field LoadingTripId;
            public StringField TripNo;
            public DateTimeField TripDate;
            public StringField Plant;
            public StringField District;
            public StringField Destination;
            public StringField VehicleName;
            public StringField CustomerName;
            public StringField Branch;
            public StringField State;
            public StringField Item;
            public DecimalField Weight;
            public Int32Field Wheels;
            public DecimalField ExpenseAmount;
            public DecimalField UnloadWeight;
            public DateTimeField UnloadDate;
            public StringField Remarks;
            public DateTimeField CreatedDate;
            public Int32Field CreatedBy;
            public DateTimeField CreateDate;
            public Int32Field UpdatedBy;
            public DateTimeField UpdatedDate;

            public StringField CreatedByUsername;
            public StringField UpdatedByUsername;
        }
    }
}
