
namespace SereneMovieTutorial.Default.Entities
{
    using SereneMovieTutorial.Modules.Default.CustomerMaster;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CustomerMaster]")]
    [DisplayName("Owner"), InstanceName("Owner")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]



    [LookupScript]
    public sealed class CustomerMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Id"), Identity]
        [SortOrder(1,descending:true)]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Owner Code"), Size(20), NotNull, QuickSearch]
        public String CustomerCode
        {
            get { return Fields.CustomerCode[this]; }
            set { Fields.CustomerCode[this] = value; }
        }

        [DisplayName("First Name"), Size(50), NotNull]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Last Name"), Size(50)]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("Mobile Number"), Size(15), NotNull]
        public String MobileNumber
        {
            get { return Fields.MobileNumber[this]; }
            set { Fields.MobileNumber[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        //[DisplayName("Vehicle Number"), Size(10), NotNull, ForeignKey(typeof(VehicleMasterRow))]
        ////[DisplayName("Vehicle Number"), Expression("jVehicle.[VehicleNumber]")]
        //public String VehicleNumber
        //{
        //    get { return Fields.VehicleNumber[this]; }
        //    set { Fields.VehicleNumber[this] = value; }
        //}

        [DisplayName("Address Line1"), Size(200), NotNull]
        public String AddressLine1
        {
            get { return Fields.AddressLine1[this]; }
            set { Fields.AddressLine1[this] = value; }
        }

        [DisplayName("Address Line2"), Size(200)]
        public String AddressLine2
        {
            get { return Fields.AddressLine2[this]; }
            set { Fields.AddressLine2[this] = value; }
        }

        [DisplayName("City"), Size(50), NotNull]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("State"), Size(50), NotNull]
        public String State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("Pincode"), Size(10), NotNull]
        public String Pincode
        {
            get { return Fields.Pincode[this]; }
            set { Fields.Pincode[this] = value; }
        }

        [DisplayName("Identity Type"), Size(50)]
        [EnumEditor]
        public IdentityType IdentityType
        {
            get => (IdentityType)Fields.IdentityType[this];
            set => Fields.IdentityType[this] = (int?)value;
        }

        [DisplayName("Identity Number"), Size(50)]
        public String IdentityNumber
        {
            get { return Fields.IdentityNumber[this]; }
            set { Fields.IdentityNumber[this] = value; }
        }

        [DisplayName("Date Of Birth")]
        public DateTime? DateOfBirth
        {
            get { return Fields.DateOfBirth[this]; }
            set { Fields.DateOfBirth[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Created Date"), NotNull]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public StringField CustomerCode;
            public StringField FirstName;
            public StringField LastName;
            public StringField MobileNumber;
            public StringField Email;
            //public StringField VehicleNumber;
            public StringField AddressLine1;
            public StringField AddressLine2;
            public StringField City;
            public StringField State;
            public StringField Pincode;
            public Int32Field IdentityType;
            public StringField IdentityNumber;
            public DateTimeField DateOfBirth;
            public BooleanField IsActive;
            public DateTimeField CreatedDate;
        }
    }
}
