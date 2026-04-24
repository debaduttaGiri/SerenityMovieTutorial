
namespace SereneMovieTutorial.Inventry.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Inventry"), TableName("[dbo].[ITEM]")]
    [DisplayName("Item"), InstanceName("Item")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class ItemRow : Row, IIdRow, INameRow, IInsertLogRow, IUpdateLogRow
    {
        [DisplayName("Id"), Column("ID"), Identity, SortOrder(1, descending: true)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Partnumber"), Column("PARTNUMBER"), Size(20), NotNull, QuickSearch]
        public String Partnumber
        {
            get { return Fields.Partnumber[this]; }
            set { Fields.Partnumber[this] = value; }
        }

        [DisplayName("Partname"), Column("PARTNAME"), Size(50)]
        public String Partname
        {
            get { return Fields.Partname[this]; }
            set { Fields.Partname[this] = value; }
        }

        [DisplayName("Openingstock"), Column("OPENINGSTOCK")]
        public Int32? Openingstock
        {
            get { return Fields.Openingstock[this]; }
            set { Fields.Openingstock[this] = value; }
        }

        [DisplayName("Rate"), Column("RATE"), Size(18), Scale(2)]
        public Decimal? Rate
        {
            get { return Fields.Rate[this]; }
            set { Fields.Rate[this] = value; }
        }

        [DisplayName("Stocklvlminimum"), Column("STOCKLVLMINIMUM"), Size(18), Scale(2)]
        public Decimal? Stocklvlminimum
        {
            get { return Fields.Stocklvlminimum[this]; }
            set { Fields.Stocklvlminimum[this] = value; }
        }

        [DisplayName("Stocklvlmaximum"), Column("STOCKLVLMAXIMUM"), Size(18), Scale(2)]
        public Decimal? Stocklvlmaximum
        {
            get { return Fields.Stocklvlmaximum[this]; }
            set { Fields.Stocklvlmaximum[this] = value; }
        }

        [DisplayName("Purchasestock"), Column("PURCHASESTOCK"), Size(18), Scale(2)]
        public Decimal? Purchasestock
        {
            get { return Fields.Purchasestock[this]; }
            set { Fields.Purchasestock[this] = value; }
        }

        [DisplayName("Gross Price"), Column("GROSS_PRICE"), Size(18), Scale(2)]
        public Decimal? GrossPrice
        {
            get { return Fields.GrossPrice[this]; }
            set { Fields.GrossPrice[this] = value; }
        }

        [DisplayName("Balancestock"), Column("BALANCESTOCK"), Size(18), Scale(2)]
        public Decimal? Balancestock
        {
            get { return Fields.Balancestock[this]; }
            set { Fields.Balancestock[this] = value; }
        }

        [DisplayName("Created By"), //Insertable(false), Updatable(false),
         ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jCreatedBy"),
         TextualField("CreatedByUsername")]
        public Int32? Createdby
        {
            get { return Fields.Createdby[this]; }
            set { Fields.Createdby[this] = value; }
        }

        [Expression("jCreatedBy.Username"), DisplayName("Created By")]
        public String CreatedByUsername
        {
            get { return Fields.CreatedByUsername[this]; }
            set { Fields.CreatedByUsername[this] = value; }
        }

        [DisplayName("Created Date"), Insertable(false), Updatable(false), DisplayFormat("yyyy-MM-dd HH:mm:ss")]
        public DateTime? Createdat
        {
            get { return Fields.Createdat[this]; }
            set { Fields.Createdat[this] = value; }
        }


        [DisplayName("Updated By"), //Insertable(false), Updatable(false),
         ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUpdatedBy"),
         TextualField("UpdatedByUsername")]
        public Int32? Updatedby
        {
            get { return Fields.Updatedby[this]; }
            set { Fields.Updatedby[this] = value; }
        }
        [Expression("jUpdatedBy.Username"), DisplayName("Updated By")]
        public String UpdatedByUsername
        {
            get { return Fields.UpdatedByUsername[this]; }
            set { Fields.UpdatedByUsername[this] = value; }
        }

        [DisplayName("Updated Date"), Insertable(false), Updatable(false), DisplayFormat("yyyy-MM-dd HH:mm:ss")]
        public DateTime? Updatedat
        {
            get { return Fields.Updatedat[this]; }
            set { Fields.Updatedat[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Partname; }
        }

        IIdField IInsertLogRow.InsertUserIdField => Fields.Createdby;
        DateTimeField IInsertLogRow.InsertDateField => Fields.Createdat;

        IIdField IUpdateLogRow.UpdateUserIdField => Fields.Updatedby;
        DateTimeField IUpdateLogRow.UpdateDateField => Fields.Updatedat;

        public static readonly RowFields Fields = new RowFields().Init();

        public ItemRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Partnumber;
            public StringField Partname;
            public Int32Field Openingstock;
            public DecimalField Rate;
            public DecimalField Stocklvlminimum;
            public DecimalField Stocklvlmaximum;
            public DecimalField Purchasestock;
            public DecimalField GrossPrice;
            public DecimalField Balancestock;
            public Int32Field Createdby;
            public DateTimeField Createdat;
            public Int32Field Updatedby;
            public DateTimeField Updatedat;

            //public Int32Field CreatedBy;
            //public DateTimeField CreatedDate;
            //public Int32Field UpdatedBy;
            //public DateTimeField UpdatedDate;

            public StringField CreatedByUsername;
            public StringField UpdatedByUsername;
        }
    }
}
