
namespace SereneMovieTutorial.Inventry.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventry"), TableName("[dbo].[IssueDetails]")]
    [DisplayName("Issue Details"), InstanceName("Issue Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class IssueDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Detail Id"), Column("DetailID"), Identity]
        public Int32? DetailId
        {
            get { return Fields.DetailId[this]; }
            set { Fields.DetailId[this] = value; }
        }

        [DisplayName("Issue"), Column("IssueID"), NotNull, ForeignKey("[dbo].[IssueHeader]", "IssueID"), LeftJoin("jIssue"), TextualField("IssueNo"),Hidden]
        public Int32? IssueId
        {
            get { return Fields.IssueId[this]; }
            set { Fields.IssueId[this] = value; }
        }

        [DisplayName("Item")]
        [NotNull]
        [ForeignKey("[dbo].[ITEM]", "ID")]
        [LeftJoin("jItem")]
        [LookupEditor(typeof(ItemRow)),Hidden,TextualField("Partnumber")]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }
        [DisplayName("Part Number"), Size(50)]
        public String Partnumber
        {
            get { return Fields.Partnumber[this]; }
            set { Fields.Partnumber[this] = value; }
        }

        [DisplayName("Part Name"), Size(100)]
        public String Partname
        {
            get { return Fields.Partname[this]; }
            set { Fields.Partname[this] = value; }
        }


        [DisplayName("Company"), Size(50)]
        public String Company
        {
            get { return Fields.Company[this]; }
            set { Fields.Company[this] = value; }
        }

        [DisplayName("Rate"), Size(10), Scale(2), NotNull]
        public Decimal? Rate
        {
            get { return Fields.Rate[this]; }
            set { Fields.Rate[this] = value; }
        }

        [DisplayName("Qty"), NotNull]
        public Int32? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("Part Amount"), Size(21), Scale(2)]
        public Decimal? PartAmount
        {
            get { return Fields.PartAmount[this]; }
            set { Fields.PartAmount[this] = value; }
        }

        [DisplayName("Stock As On Date")]
        public decimal? StockAsOnDate
        {
            get { return Fields.StockAsOnDate[this]; }
            set { Fields.StockAsOnDate[this] = value; }
        }

        [DisplayName("Total Stock")]
        public Int32? TotalStock
        {
            get { return Fields.TotalStock[this]; }
            set { Fields.TotalStock[this] = value; }
        }

        [DisplayName("Issue Issue No"), Expression("jIssue.[IssueNo]")]
        public String IssueIssueNo
        {
            get { return Fields.IssueIssueNo[this]; }
            set { Fields.IssueIssueNo[this] = value; }
        }

        [DisplayName("Issue Vehicle No"), Expression("jIssue.[VehicleNo]")]
        public String IssueVehicleNo
        {
            get { return Fields.IssueVehicleNo[this]; }
            set { Fields.IssueVehicleNo[this] = value; }
        }

        [DisplayName("Issue Owner"), Expression("jIssue.[Owner]")]
        public String IssueOwner
        {
            get { return Fields.IssueOwner[this]; }
            set { Fields.IssueOwner[this] = value; }
        }

        [DisplayName("Issue Issue Date"), Expression("jIssue.[IssueDate]")]
        public DateTime? IssueIssueDate
        {
            get { return Fields.IssueIssueDate[this]; }
            set { Fields.IssueIssueDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Partname; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public IssueDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemId;
            public Int32Field DetailId;
            public Int32Field IssueId;
            public StringField Partnumber;
            public StringField Partname;
            public StringField Company;
            public DecimalField Rate;
            public Int32Field Qty;
            public DecimalField PartAmount;
            public DecimalField StockAsOnDate;
            public Int32Field TotalStock;

            public StringField IssueIssueNo;
            public StringField IssueVehicleNo;
            public StringField IssueOwner;
            public DateTimeField IssueIssueDate;
        }
    }
}
