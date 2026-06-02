
namespace SereneMovieTutorial.Inventry.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventry"), TableName("[dbo].[vPOApprove]")]
    [DisplayName("POApproval"), InstanceName("V Po Approve")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VPoApproveRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,Hidden]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Po No"), Size(50), QuickSearch]
        public String PoNo
        {
            get { return Fields.PoNo[this]; }
            set { Fields.PoNo[this] = value; }
        }

        [DisplayName("Order Date"), NotNull]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Party Id"), NotNull]
        public Int32? PartyId
        {
            get { return Fields.PartyId[this]; }
            set { Fields.PartyId[this] = value; }
        }
        //public string PartyName
        //{
        //    get { return Fields.}
        //}

        [DisplayName("Branch Id")]
        public Int32? BranchId
        {
            get { return Fields.BranchId[this]; }
            set { Fields.BranchId[this] = value; }
        }
        

        [DisplayName("Created By")]
        public Int32? CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Updated By")]
        public Int32? UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public Boolean? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PoNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VPoApproveRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField PoNo;
            public DateTimeField OrderDate;
            public Int32Field PartyId;
            public Int32Field BranchId;
            public Int32Field CreatedBy;
            public DateTimeField CreatedDate;
            public Int32Field UpdatedBy;
            public DateTimeField UpdateDate;
            public BooleanField Status;
            //public StringField PartyName;
            //public StringField BranchName;
            //public StringField CreatedName;
            //public StringField UpdaterN;
           
        }

    }
}
    
