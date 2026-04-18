
namespace SereneMovieTutorial.Inventry.Entities
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventry"), TableName("[dbo].[PurchaseOrder]")]
    [DisplayName("Purchase Order"), InstanceName("Purchase Order")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class PurchaseOrderRow : Row, IIdRow, INameRow, IInsertLogRow, IUpdateLogRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("PO NO"), Size(50), QuickSearch]
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

        [DisplayName("Party Id"), ForeignKey(typeof(PartyMasterRow),"Id"),LeftJoin("Party"),TextualField("PartyName")]
        [LookupEditor(typeof(PartyMasterRow))]
        public Int32? PartyId
        {
            get { return Fields.PartyId[this]; }
            set { Fields.PartyId[this] = value; }
        }
        [Expression("Party.Name"),LookupInclude]
        public string PartyName
        {
            get { return Fields.PartyName[this]; }
            set { Fields.PartyName[this] = value; }
        }


        [DisplayName("Branch Id"), ForeignKey(typeof(BranchMasterRow), "Id"), LeftJoin("Branch"), TextualField("BranchId")]
        [LookupEditor(typeof(BranchMasterRow))]
        public Int32? BranchId
        {
            get { return Fields.BranchId[this]; }
            set { Fields.BranchId[this] = value; }
        }
        [Expression("Branch.BranchName")]
        public string BranchName
        {
            get { return Fields.BranchName[this]; }
            set { Fields.BranchName[this] = value; }
        }

        [DisplayName("Remarks"), Size(500)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
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
        public DateTime? CreatedDate
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
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }
        [MasterDetailRelation(foreignKey: "PurchaseOrderId"), NotMapped]
        public List<PurchaseRequestDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PoNo; }
        }

        IIdField IInsertLogRow.InsertUserIdField => Fields.CreatedBy;
        DateTimeField IInsertLogRow.InsertDateField => Fields.CreatedDate;

        IIdField IUpdateLogRow.UpdateUserIdField => Fields.UpdatedBy;
        DateTimeField IUpdateLogRow.UpdateDateField => Fields.UpdateDate;

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseOrderRow()
            : base(Fields)
        {
        }
        

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField PoNo;
            public DateTimeField OrderDate;
            public Int32Field PartyId;
            public StringField PartyName;
            public Int32Field BranchId;
            public StringField BranchName;
            public StringField Remarks;
            public DateTimeField CreatedDate;
            public Int32Field CreatedBy;
            public DateTimeField UpdateDate;
            public Int32Field UpdatedBy;
            public RowListField<PurchaseRequestDetailRow> DetailList;

            //public Int32Field CreatedBy;
            //public DateTimeField CreateDate;
            //public Int32Field UpdatedBy;
            //public DateTimeField UpdatedDate;

            public StringField CreatedByUsername;
            public StringField UpdatedByUsername;

        }
    }
}
