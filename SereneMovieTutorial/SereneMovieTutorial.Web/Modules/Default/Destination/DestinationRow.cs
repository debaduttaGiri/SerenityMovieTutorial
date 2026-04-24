
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Destination]")]
    [DisplayName("Destination"), InstanceName("Destination")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class DestinationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        [SortOrder(1, descending: true)]
        [Visible(false)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Plant"), NotNull, ForeignKey("[dbo].[Plant]", "Id"), LeftJoin("jPlant"), TextualField("Plant")]
        [LookupEditor(typeof(PlantRow))]
        public Int32? Plant
        {
            get { return Fields.Plant[this]; }
            set { Fields.Plant[this] = value; }
        }

        [DisplayName("Distict"), NotNull, ForeignKey("[dbo].[Distict]", "Id"), LeftJoin("jDistict"), TextualField("Distict"), LookupInclude]
        [LookupEditor(typeof(DistictRow), CascadeFrom = "Plant", CascadeField = "Plant")]
        public Int32? Distict
        {
            get { return Fields.Distict[this]; }
            set { Fields.Distict[this] = value; }
        }

        [DisplayName("Destination"), Size(20), QuickSearch, NotNull]
        public String Destination
        {
            get { return Fields.Destination[this]; }
            set { Fields.Destination[this] = value; }
        }

        [DisplayName("Remarks"), Size(25)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Plant"), Expression("jPlant.[Plant]")]
        public String PlantName
        {
            get { return Fields.PlantName[this]; }
            set { Fields.PlantName[this] = value; }
        }

        //[DisplayName("Plant Remarks"), Expression("jPlant.[Remarks]")]
        //public String PlantRemarks
        //{
        //    get { return Fields.PlantRemarks[this]; }
        //    set { Fields.PlantRemarks[this] = value; }
        //}

        //[DisplayName("Distict Plant"), Expression("jDistict.[Plant]")]
        //public Int32? DistictPlant
        //{
        //    get { return Fields.DistictPlant[this]; }
        //    set { Fields.DistictPlant[this] = value; }
        //}

        [DisplayName("Distict"), Expression("jDistict.[Distict]")]
        public String DistictName
        {
            get { return Fields.DistictName[this]; }
            set { Fields.DistictName[this] = value; }
        }

        //[DisplayName("Distict Remarks"), Expression("jDistict.[Remarks]")]
        //public String DistictRemarks
        //{
        //    get { return Fields.DistictRemarks[this]; }
        //    set { Fields.DistictRemarks[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Destination; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DestinationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Plant;
            public Int32Field Distict;
            public StringField Destination;
            public StringField Remarks;

            public StringField PlantName;
            //public StringField PlantRemarks;

            //public Int32Field DistictPlant;
            public StringField DistictName;
            //public StringField DistictRemarks;
        }
    }
}
