
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[StateMaster]")]
    [DisplayName("States"), InstanceName("State")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.StateMaster", Permission = "*")]
    public sealed class StateMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        [SortOrder(1, descending: true),LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("State"), Size(15), NotNull, QuickSearch]
        public String State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("State Code"), Size(15), NotNull]
        public String StateCode
        {
            get { return Fields.StateCode[this]; }
            set { Fields.StateCode[this] = value; }
        }

        [DisplayName("Remarks"), Size(20)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.State; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StateMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField State;
            public StringField StateCode;
            public StringField Remarks;
        }
    }
}
