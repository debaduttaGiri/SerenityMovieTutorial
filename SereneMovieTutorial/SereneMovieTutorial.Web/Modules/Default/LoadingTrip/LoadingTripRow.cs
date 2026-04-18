
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[LoadingTrip]")]
    [DisplayName("Loading Trip"), InstanceName("Loading Trip")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission ="*")]
    public sealed class LoadingTripRow : Row, IIdRow, INameRow, IInsertLogRow, IUpdateLogRow
    {
        [DisplayName("Loading Trip Id"), Identity]
        [SortOrder(1,descending:true)]
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

        //[DisplayName("Plant Id"), NotNull]
        [DisplayName("Plant"), NotNull, ForeignKey(typeof(PlantRow)), LeftJoin("Plant"), LookupEditor(typeof(PlantRow))]
        [LookupInclude]
        public Int32? PlantId
        {
            get { return Fields.PlantId[this]; }
            set { Fields.PlantId[this] = value; }
        }
        [Expression("Plant.Plant"), LookupInclude]
        public String Plant
        {
            get { return Fields.Plant[this]; }
            set { Fields.Plant[this] = value; }
        }


        [DisplayName("Distict"), NotNull, ForeignKey("[dbo].[Distict]", "Id"), LeftJoin("jDistict"), TextualField("Distict1"), LookupInclude]
        [LookupEditor(typeof(DistictRow), CascadeFrom = "PlantId", CascadeField = "Plant")]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }
        [Expression("jDistict.Distict"), LookupInclude]
        public String District
        {
            get { return Fields.District[this]; }
            set { Fields.District[this] = value; }
        }

        [DisplayName("Destination"), NotNull, ForeignKey("[dbo].[Destination]", "Id"), LeftJoin("jDestination"), TextualField("Destination1")]
        [LookupEditor(typeof(DestinationRow), CascadeFrom = "DistrictId", CascadeField = "Distict")]
        [LookupInclude]
        public Int32? DestinationId
        {
            get { return Fields.DestinationId[this]; }
            set { Fields.DestinationId[this] = value; }
        }

        [Expression("jDestination.Destination"), LookupInclude]
        public String Destination
        {
            get { return Fields.Destination[this]; }
            set { Fields.Destination[this] = value; }
        }

        //[DisplayName("Expense Id"), NotNull]
        //public Int32? ExpenseId
        //{
        //    get { return Fields.ExpenseId[this]; }
        //    set { Fields.ExpenseId[this] = value; }
        //}

        [DisplayName("Expense Amount"), Size(10), Scale(2), NotNull]
        public Decimal? ExpenseAmount
        {
            get { return Fields.ExpenseAmount[this]; }
            set { Fields.ExpenseAmount[this] = value; }
        }

        [DisplayName("Vehicle"), NotNull, ForeignKey("[dbo].[VehicleMaster]", "VehicleId"), LeftJoin("jVehicleMaster"), TextualField("Vehicle1")]
        [LookupEditor(typeof(VehicleMasterRow)), LookupInclude]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }
        [Expression("jVehicleMaster.VehicleNumber")][LookupInclude]
        public String VehicleNumber
        {
            get { return Fields.VehicleNumber[this]; }
            set { Fields.VehicleNumber[this] = value; }
        }

        [DisplayName("Owner"), NotNull, ForeignKey("[dbo].[CustomerMaster]", "CustomerId"), LeftJoin("jCustomerMaster"), TextualField("Customer1")]
        [LookupEditor(typeof(CustomerMasterRow)),Required]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }
        [Expression("jCustomerMaster.FirstName +' '+ jCustomerMaster.Lastname")]
        public String Customer
        {
            get { return Fields.Customer[this]; }
            set { Fields.Customer[this] = value; }
        }

        [DisplayName("Branch"), NotNull, ForeignKey("[dbo].[BranchMaster]", "Id"), LeftJoin("jBranchMaster"), TextualField("Branch1")]
        //[LookupEditor(typeof(BranchMasterRow))]
        public Int32? BranchId
        {
            get { return Fields.BranchId[this]; }
            set { Fields.BranchId[this] = value; }
        }
        [Expression("jBranchMaster.BranchName"),ReadOnly(true)]
        public String Branch
        {
            get { return Fields.Branch[this]; }
            set { Fields.Branch[this] = value; }
        } 
        

        [DisplayName("State"), NotNull, ForeignKey("[dbo].[StateMaster]", "Id"), LeftJoin("jState"), TextualField("State1")]
        [LookupEditor(typeof(StateMasterRow))]
        public Int32? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }
        [Expression("jState.State")]
        public String State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("Item"), NotNull, ForeignKey("[dbo].[ItemMaster]", "Id"), LeftJoin("jItem"), TextualField("Item1")]
        [LookupEditor(typeof(ItemMasterRow))]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }
        [DisplayName("Item Name"), Expression("jItem.ItemName")]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }


        [DisplayName("Weight"), Size(10), Scale(2),Required]
        public Decimal? Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }
        [DisplayName("FreightRate"),  Required]
        public Int32 freightRate
        {
            get => this.freightRate;
            set => this.freightRate = value;
        }

        [DisplayName("Wheels"),Required]
        public Int32? Wheels
        {
            get { return Fields.Wheels[this]; }
            set { Fields.Wheels[this] = value; }
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
            get { return Fields.LoadingTripId; }
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

        public LoadingTripRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LoadingTripId;
            public StringField TripNo;
            public DateTimeField TripDate;
            public Int32Field PlantId;
            public StringField Plant;
            public Int32Field DistrictId;
            public StringField District;
            public Int32Field DestinationId;
            public StringField Destination;
            //public Int32Field ExpenseId;
            public DecimalField ExpenseAmount;
            public Int32Field VehicleId;
            public StringField VehicleNumber;
            public Int32Field CustomerId;
            public StringField Customer;
            public Int32Field BranchId;
            public StringField Branch;
            public Int32Field StateId;
            public StringField State;
            public Int32Field ItemId;
            public StringField ItemName;
            public DecimalField Weight;
            public Int32Field freightRate;
            public Int32Field Wheels;
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
