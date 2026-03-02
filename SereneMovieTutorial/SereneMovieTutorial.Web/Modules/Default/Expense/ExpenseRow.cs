
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    //[ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Expense]")]
    //[DisplayName("Expense"), InstanceName("Expense")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    //[LookupScript]
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Expense]")]
    [DisplayName("Expense"), InstanceName("Expense")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class ExpenseRow : Row, IIdRow, INameRow
    {
        [DisplayName("Expense Id"), Identity, PrimaryKey]
        [SortOrder(1,descending:true)]
        public Int32? ExpenseId
        {
            get { return Fields.ExpenseId[this]; }
            set { Fields.ExpenseId[this] = value; }
        }
        [DisplayName("Plant"), NotNull, ForeignKey("[dbo].[Plant]", "Id"), LeftJoin("jPlant"), TextualField("Plant1")]
        [LookupEditor(typeof(PlantRow))]
        public Int32? Plant
        {
            get { return Fields.Plant[this]; }
            set { Fields.Plant[this] = value; }
        }

        [DisplayName("District"), NotNull, ForeignKey("[dbo].[Distict]", "Id"), LeftJoin("jDistrict"), TextualField("DistrictDistict")]
        [LookupEditor(typeof(DistictRow), CascadeFrom = "Plant", CascadeField = "Plant")]
        public Int32? District
        {
            get { return Fields.District[this]; }
            set { Fields.District[this] = value; }
        }

        [DisplayName("Destination"), NotNull, ForeignKey("[dbo].[Destination]","Id"), LeftJoin("jDestination"), TextualField("Destination1")]
        [LookupEditor(typeof(DestinationRow), CascadeFrom = "District", CascadeField = "Distict")]
        public Int32? Destination
        {
            get { return Fields.Destination[this]; }
            set { Fields.Destination[this] = value; }
        }

        [DisplayName("Expense"), Size(10), Scale(2),NotNull]
        public Decimal? Expense
        {
            get { return Fields.Expense[this]; }
            set { Fields.Expense[this] = value; }
        }

        [DisplayName("Remarks"), Size(25), QuickSearch]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Plant"), Expression("jPlant.[Plant]")]
        public String Plant1
        {
            get { return Fields.Plant1[this]; }
            set { Fields.Plant1[this] = value; }
        }

        [DisplayName("Plant Remarks"), Expression("jPlant.[Remarks]")]
        public String PlantRemarks
        {
            get { return Fields.PlantRemarks[this]; }
            set { Fields.PlantRemarks[this] = value; }
        }

        [DisplayName("District Plant"), Expression("jDistrict.[Plant]")]
        public Int32? DistrictPlant
        {
            get { return Fields.DistrictPlant[this]; }
            set { Fields.DistrictPlant[this] = value; }
        }

        [DisplayName("District Distict"), Expression("jDistrict.[Distict]")]
        public String DistrictDistict
        {
            get { return Fields.DistrictDistict[this]; }
            set { Fields.DistrictDistict[this] = value; }
        }

        [DisplayName("District Remarks"), Expression("jDistrict.[Remarks]")]
        public String DistrictRemarks
        {
            get { return Fields.DistrictRemarks[this]; }
            set { Fields.DistrictRemarks[this] = value; }
        }

        [DisplayName("Destination Plant"), Expression("jDestination.[Plant]")]
        public Int32? DestinationPlant
        {
            get { return Fields.DestinationPlant[this]; }
            set { Fields.DestinationPlant[this] = value; }
        }

        [DisplayName("Destination Distict"), Expression("jDestination.[Distict]")]
        public Int32? DestinationDistict
        {
            get { return Fields.DestinationDistict[this]; }
            set { Fields.DestinationDistict[this] = value; }
        }

        [DisplayName("Destination"), Expression("jDestination.[Destination]")]
        public String Destination1
        {
            get { return Fields.Destination1[this]; }
            set { Fields.Destination1[this] = value; }
        }

        [DisplayName("Destination Remarks"), Expression("jDestination.[Remarks]")]
        public String DestinationRemarks
        {
            get { return Fields.DestinationRemarks[this]; }
            set { Fields.DestinationRemarks[this] = value; }
        }
        [DisplayName("Weight"), Size(10), Scale(2)]
        public Decimal? Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }

        [DisplayName("Wheels")]
        public Int32? Wheels
        {
            get { return Fields.Wheels[this]; }
            set { Fields.Wheels[this] = value; }
        }

        //IIdField IIdRow.IdField
        //{
        //    get { return Fields.Plant; }
        //}
        IIdField IIdRow.IdField
        {
            get { return Fields.ExpenseId; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.Remarks; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExpenseRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ExpenseId;
            public Int32Field Plant;
            public Int32Field District;
            public Int32Field Destination;
            public DecimalField Expense;
            public StringField Remarks;

            public StringField Plant1;
            public StringField PlantRemarks;

            public Int32Field DistrictPlant;
            public StringField DistrictDistict;
            public StringField DistrictRemarks;

            public Int32Field DestinationPlant;
            public Int32Field DestinationDistict;
            public StringField Destination1;
            public StringField DestinationRemarks;

            public DecimalField Weight;
            public Int32Field Wheels;
        }
    }
}
