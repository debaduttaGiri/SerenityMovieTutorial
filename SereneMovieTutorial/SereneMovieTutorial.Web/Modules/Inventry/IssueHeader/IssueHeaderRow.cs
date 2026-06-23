
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

    [ConnectionKey("Default"), Module("Inventry"), TableName("[dbo].[IssueHeader]")]
    [DisplayName("Item Issue"), InstanceName("Issue Header")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class IssueHeaderRow : Row, IIdRow, INameRow,IInsertLogRow,IUpdateLogRow
    {
        [DisplayName("Issue Id"), Column("IssueID"), Identity]
        public Int32? IssueId
        {
            get { return Fields.IssueId[this]; }
            set { Fields.IssueId[this] = value; }
        }

        [DisplayName("Issue No"), Size(50), QuickSearch,ReadOnly(true)]
        public String IssueNo
        {
            get { return Fields.IssueNo[this]; }
            set { Fields.IssueNo[this] = value; }
        }


        [DisplayName("Vehicle No"), Size(50), NotNull,ForeignKey("[dbo].[VehicleMaster]", "vehicleid"), LeftJoin("jvehicle"), TextualField("VehicleNumber")]
        [LookupEditor(typeof(VehicleMasterRow))]
        public int? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [Expression("jvehicle.VehicleNumber")]
        public String VehicleNumber
        {
            get { return Fields.VehicleNumber[this]; }
            set { Fields.VehicleNumber[this] = value; }
        }


        [DisplayName("Owner"),ReadOnly(true)]
        
        public String Owner
        {
            get => Fields.Owner[this];
            set => Fields.Owner[this] = value;
        }

        [DisplayName("Issue Date"), NotNull]
        public DateTime? IssueDate
        {
            get { return Fields.IssueDate[this]; }
            set { Fields.IssueDate[this] = value; }
        }
        [MasterDetailRelation(foreignKey: "IssueId")]
        [NotMapped]
        public List<IssueDetailsRow> IssueDetails
        {
            get { return Fields.IssueDetails[this]; }
            set { Fields.IssueDetails[this] = value; }
        }

        [DisplayName("Created By"), ForeignKey("dbo.Users", "UserId"), LeftJoin("jCreatedBy"), TextualField("CreatedByUsername")]
        public Int32? CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [Expression("jCreatedBy.Username"),DisplayName("Created By")]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.IssueId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.IssueNo; }
        }

        public IIdField InsertUserIdField => Fields.CreatedBy;

        public DateTimeField InsertDateField => Fields.CreatedDate;

        public IIdField UpdateUserIdField => Fields.UpdatedBy;

        public DateTimeField UpdateDateField => Fields.UpdateDate;

        public static readonly RowFields Fields = new RowFields().Init();

        public IssueHeaderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IssueId;
            public StringField IssueNo;
            public Int32Field VehicleId;
            public StringField VehicleNumber;
            public StringField Owner;
            public DateTimeField IssueDate;
            public RowListField<IssueDetailsRow> IssueDetails;

            //public Int32Field CreatedBy;
            public StringField CreatedByUsername;
            public StringField UpdatedByUsername;

            public DateTimeField CreatedDate;
            public Int32Field CreatedBy;
            public DateTimeField UpdateDate;
            public Int32Field UpdatedBy;
        }
    }
}
