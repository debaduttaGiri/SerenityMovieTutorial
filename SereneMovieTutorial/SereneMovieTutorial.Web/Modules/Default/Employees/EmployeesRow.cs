
namespace SereneMovieTutorial.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Employees]")]
    [DisplayName("Employees"), InstanceName("Employees")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmployeesRow : Row, IIdRow, INameRow
    {
        [DisplayName("S No."), Column("EmployeeID"), PrimaryKey,Identity]
        [SortOrder(1,descending:true)]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Full Name"), Size(25), QuickSearch]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Title"), Size(30)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Title Of Courtesy"), Size(26)]
        public String TitleOfCourtesy
        {
            get { return Fields.TitleOfCourtesy[this]; }
            set { Fields.TitleOfCourtesy[this] = value; }
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get { return Fields.BirthDate[this]; }
            set { Fields.BirthDate[this] = value; }
        }

        [DisplayName("Hire Date")]
        public DateTime? HireDate
        {
            get { return Fields.HireDate[this]; }
            set { Fields.HireDate[this] = value; }
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(15)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Region"), Size(15)]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Country"), Size(15)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Home Phone"), Size(24)]
        public String HomePhone
        {
            get { return Fields.HomePhone[this]; }
            set { Fields.HomePhone[this] = value; }
        }

        [DisplayName("Extension"), Size(4)]
        public String Extension
        {
            get { return Fields.Extension[this]; }
            set { Fields.Extension[this] = value; }
        }

       

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeId;
            public StringField FullName;
            public StringField Title;
            public StringField TitleOfCourtesy;
            public DateTimeField BirthDate;
            public DateTimeField HireDate;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField HomePhone;
            public StringField Extension;
            
        }
    }
}
