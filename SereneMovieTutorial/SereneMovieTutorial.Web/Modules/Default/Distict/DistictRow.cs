
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Distict]")]
    [DisplayName("Distict"), InstanceName("Distict")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class DistictRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        [SortOrder(1,descending:true)]
        [LookupEditor(typeof(PlantRow))]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Plant"), NotNull, ForeignKey("[dbo].[Plant]", "Id"), LeftJoin("jPlant"), TextualField("Plant"),LookupInclude]
        [LookupEditor(typeof(PlantRow))]
        public Int32? Plant
        {
            get { return Fields.Plant[this]; }
            set { Fields.Plant[this] = value; }
        }
        [Expression("jPlant.Plant")]
        public string PlantName
        {
            get { return Fields.PlantName[this]; }
            set { Fields.PlantName[this] = value; }
        }

        [DisplayName("Distict"), Size(20), QuickSearch,NotNull]
        public String Distict
        {
            get { return Fields.Distict[this]; }
            set { Fields.Distict[this] = value; }
        }

        [DisplayName("Remarks"), Size(25)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        //[DisplayName("Plant"), Expression("jPlant.[Plant]")]
        //public String Plant1
        //{
        //    get { return Fields.Plant1[this]; }
        //    set { Fields.Plant1[this] = value; }
        //}

        //[DisplayName("Plant Remarks"), Expression("jPlant.[Remarks]")]
        //public String PlantRemarks
        //{
        //    get { return Fields.PlantRemarks[this]; }
        //    set { Fields.PlantRemarks[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Distict; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DistictRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Plant;
            public StringField PlantName;
            public StringField Distict;
            public StringField Remarks;

            
        }
    }
}
