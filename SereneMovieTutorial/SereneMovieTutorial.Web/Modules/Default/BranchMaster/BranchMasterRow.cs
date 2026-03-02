
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[BranchMaster]")]
    [DisplayName("Branch"), InstanceName("Branch")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission ="*")]
    public sealed class BranchMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        [SortOrder(1,descending:true)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Branch Name"), Size(20), NotNull, QuickSearch,Required]
        public String BranchName
        {
            get { return Fields.BranchName[this]; }
            set { Fields.BranchName[this] = value; }
        }

        [DisplayName("Branch Code"), Size(10), NotNull]
        public String BranchCode
        {
            get { return Fields.BranchCode[this]; }
            set { Fields.BranchCode[this] = value; }
        }

        [DisplayName("Gst No")]
        public Int32? GstNo
        {
            get { return Fields.GstNo[this]; }
            set { Fields.GstNo[this] = value; }
        }

        [DisplayName("Pan No"), NotNull]
        public Int32? PanNo
        {
            get { return Fields.PanNo[this]; }
            set { Fields.PanNo[this] = value; }
        }

        [DisplayName("Phone Number")]
        public Int32? PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("Pin Code")]
        public Int32? PinCode
        {
            get { return Fields.PinCode[this]; }
            set { Fields.PinCode[this] = value; }
        }

        [DisplayName("Address"), Size(50)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("State"), Size(15)]
        public String State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("Remarks"), Size(1)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("State"), NotNull, ForeignKey("[dbo].[StateMaster]", "Id"), LeftJoin("jState"), TextualField("State1")]
        public Int32? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("State"), Expression("jState.[State]")]
        public String State1
        {
            get { return Fields.State1[this]; }
            set { Fields.State1[this] = value; }
        }

        [DisplayName("State State Code"), Expression("jState.[StateCode]")]
        public String StateStateCode
        {
            get { return Fields.StateStateCode[this]; }
            set { Fields.StateStateCode[this] = value; }
        }

        [DisplayName("State Remarks"), Expression("jState.[Remarks]")]
        public String StateRemarks
        {
            get { return Fields.StateRemarks[this]; }
            set { Fields.StateRemarks[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BranchName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BranchMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField BranchName;
            public StringField BranchCode;
            public Int32Field GstNo;
            public Int32Field PanNo;
            public Int32Field PhoneNumber;
            public Int32Field PinCode;
            public StringField Address;
            public StringField State;
            public StringField Remarks;
            public Int32Field StateId;

            public StringField State1;
            public StringField StateStateCode;
            public StringField StateRemarks;
        }
    }
}
