
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[FinancialYear]")]
    [DisplayName("Financial Year"), InstanceName("Financial Year")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.FinancialYear", Permission = "*")]
    public sealed class FinancialYearRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, SortOrder(1, descending: true)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Name Of Invoice"), Size(50), NotNull]
        public String NameOfInvoice
        {
            get { return Fields.NameOfInvoice[this]; }
            set { Fields.NameOfInvoice[this] = value; }
        }

        [DisplayName("Remarks"), Size(40)]
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
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FinancialYearRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public StringField NameOfInvoice;
            public StringField Remarks;
        }
    }
}
