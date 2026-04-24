
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Genre]")]
    [DisplayName("Genre"), InstanceName("Genre")]
    [ReadPermission("Administration:General:Read")]
    [ModifyPermission("Administration:General:Modify")]
    [InsertPermission("Administration:General:Insert")]
    [DeletePermission("Administration:General:Delete")]
    [LookupScript]
    public sealed class GenreRow : Row, IIdRow, INameRow
    {
        [DisplayName("Genre Id"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? GenreId
        {
            get { return Fields.GenreId[this]; }
            set { Fields.GenreId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        [DisplayName("Dates")]
        public string Dates
        {
            get { return Fields.Dates[this]; }
            set { Fields.Dates[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GenreId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GenreRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GenreId;
            public StringField Name;
            public StringField Dates;
            //public RowListField<GenreRow> Dates;
        }
    }
}
