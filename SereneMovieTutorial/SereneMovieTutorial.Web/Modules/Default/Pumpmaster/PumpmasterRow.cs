
namespace SereneMovieTutorial.Default.Entities
{
    using SereneMovieTutorial.Modules.Default.Pumpmaster;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PUMPMASTER]")]
    [DisplayName("Pump"), InstanceName("Pump")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("master.Pump",Permission ="*")]
    public sealed class PumpmasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Column("NAME"), Size(20), NotNull, QuickSearch]
        [LookupInclude]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Stock"), Column("STOCK"), Size(18), Scale(2),DefaultValue(0.00), LookupInclude]
        public Decimal? Stock
        {
            get { return Fields.Stock[this]; }
            set { Fields.Stock[this] = value; }
        } 

        [DisplayName("Gst"), Column("GST"), Size(15), NotNull]
        public String Gst
        {
            get { return Fields.Gst[this]; }
            set { Fields.Gst[this] = value; }
        }

        [DisplayName("Pan"), Column("PAN"), Size(10), NotNull]
        public String Pan
        {
            get { return Fields.Pan[this]; }
            set { Fields.Pan[this] = value; }
        }

        [DisplayName("Type"), Column("TYPE"), NotNull]
        [EnumEditor]
        public TypeState? Type
        {
            get { return (TypeState)Fields.Type[this]; }
            set { Fields.Type[this] = (int?)value; }
        }

        [DisplayName("Address"), Column("ADDRESS"), Size(50)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PumpmasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public DecimalField Stock;
            public StringField Gst;
            public StringField Pan;
            public Int32Field Type;
            public StringField Address;
        }
    }
}
