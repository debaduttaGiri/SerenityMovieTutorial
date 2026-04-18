
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Tax]")]
    [DisplayName("Tax"), InstanceName("Tax")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Tax")]
    public sealed class TaxRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Tax Amount"), NotNull][LookupInclude]
        public Int32? TaxAmount
        {
            get { return Fields.TaxAmount[this]; }
            set { Fields.TaxAmount[this] = value; }
        }

        [DisplayName("Tax Amount Text"), Expression("CAST(TaxAmount AS VARCHAR) + '%'")]
        public String TaxAmountText
        {
            get { return Fields.TaxAmountText[this]; }
            set { Fields.TaxAmountText[this] = value; }
        }



        [DisplayName("Remarks"), Size(1), QuickSearch]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField => (StringField)(object)Fields.TaxAmountText;
        // Replace with TaxAmountText if you want numbers


        public static readonly RowFields Fields = new RowFields().Init();

        public TaxRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TaxAmount;
            public StringField TaxAmountText;
            public StringField Remarks;
        }
    }
}
