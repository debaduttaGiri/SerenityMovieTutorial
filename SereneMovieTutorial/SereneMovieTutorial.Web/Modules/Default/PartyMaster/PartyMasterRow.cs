
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PartyMaster]")]
    [DisplayName("Party"), InstanceName("Party")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission ="*")]
    public sealed class PartyMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,SortOrder(1,descending:true)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(20), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Email"),NotNull, Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Phone No."),NotNull, Size(15)]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("GST No."),NotNull, Size(15)]
        public String Gst
        {
            get { return Fields.Gst[this]; }
            set { Fields.Gst[this] = value; }
        }

        [DisplayName("PAN No."),NotNull, Size(10)]
        public String Pan
        {
            get { return Fields.Pan[this]; }
            set { Fields.Pan[this] = value; }
        }

        [DisplayName("State "), ForeignKey("[dbo].[StateMaster]", "Id"), LeftJoin("jState"), TextualField("StateName"),NotNull]
        [LookupEditor(typeof(StateMasterRow))]
        public Int32? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("State"), Expression("jState.State")]
        public String StateName
        {
            get { return Fields.StateName[this]; }
            set { Fields.StateName[this] = value; }
        }
        [DisplayName("Address"), Size(200)]
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

        public PartyMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Email;
            public StringField PhoneNumber;
            public StringField Gst;
            public StringField Pan;
            public Int32Field StateId;
            public StringField Address;
            public StringField StateName;
        }
    }
}
