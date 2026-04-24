
namespace SereneMovieTutorial.Default.Entities
{
    using SereneMovieTutorial.Modules.Default.VehicleMaster;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[VehicleMaster]")]
    [DisplayName("Vehicle"), InstanceName("Vehicle")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class VehicleMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Vehicle Id"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [DisplayName("Vehicle Number"), Size(10), NotNull, QuickSearch]
        public String VehicleNumber
        {
            get { return Fields.VehicleNumber[this]; }
            set { Fields.VehicleNumber[this] = value; }
        }

        [DisplayName("Vehicle Type")]
        [NotNull]

        [EnumEditor]
        public VehicleType? VehicleType
        {
            get => (VehicleType?)Fields.VehicleType[this];
            set => Fields.VehicleType[this] = (int?)value;
        }


        [DisplayName("Brand"), Size(50)]
        public String Brand
        {
            get { return Fields.Brand[this]; }
            set { Fields.Brand[this] = value; }
        }

        [DisplayName("Model"), Size(50)]
        public String Model
        {
            get { return Fields.Model[this]; }
            set { Fields.Model[this] = value; }
        }

        [DisplayName("Manufacturing Year"), NotNull]
        public Int32? ManufacturingYear
        {
            get { return Fields.ManufacturingYear[this]; }
            set { Fields.ManufacturingYear[this] = value; }
        }

        [DisplayName("Fuel Type"), Size(20), NotNull]
        [EnumEditor]
        public FuelType FuelType
        {
            get => (FuelType)Fields.FuelType[this];
            set => Fields.FuelType[this] = (int)value;
        }

        [DisplayName("Engine Number"), Size(50), NotNull]
        public String EngineNumber
        {
            get { return Fields.EngineNumber[this]; }
            set { Fields.EngineNumber[this] = value; }
        }

        [DisplayName("Chassis Number"), Size(50), NotNull]
        public String ChassisNumber
        {
            get { return Fields.ChassisNumber[this]; }
            set { Fields.ChassisNumber[this] = value; }
        }

        [DisplayName("Color"), Size(30)]
        public String Color
        {
            get { return Fields.Color[this]; }
            set { Fields.Color[this] = value; }
        }

        [DisplayName("Seating Capacity")]
        public Int32? SeatingCapacity
        {
            get { return Fields.SeatingCapacity[this]; }
            set { Fields.SeatingCapacity[this] = value; }
        }

        [DisplayName("Customer Id"), NotNull]
        [ForeignKey("[dbo].[CustomerMaster]", "CustomerId"), LeftJoin("c"), LookupEditor(typeof(CustomerMasterRow))]
        [TextualField("CustomerName")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }
        //[Expression("(Select A.FirstName from CustomerMaster A join VehicleMaster B on A.CustomerId = B.CustomerId where A.CustomerId =T0[CustomerId])")]
        [Expression("c.FirstName+' '+c.LastName")]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }


        [DisplayName("Insurance Expiry Date")]
        public DateTime? InsuranceExpiryDate
        {
            get { return Fields.InsuranceExpiryDate[this]; }
            set { Fields.InsuranceExpiryDate[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }


        [DisplayName("Wheels")]
        public Int32? Wheels
        {
            get { return Fields.Wheels[this]; }
            set { Fields.Wheels[this] = (int)value; }
        }

        [DisplayName("Created Date"), NotNull]
        //[Updatable(false)]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VehicleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.VehicleNumber; }
        }


        public static readonly RowFields Fields = new RowFields().Init();

        public VehicleMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VehicleId;
            public StringField VehicleNumber;
            public Int32Field VehicleType;
            public StringField Brand;
            public StringField Model;
            public Int32Field ManufacturingYear;
            public Int32Field FuelType;
            public StringField EngineNumber;
            public StringField ChassisNumber;
            public StringField Color;
            public Int32Field SeatingCapacity;
            public Int32Field CustomerId;
            public StringField CustomerName;
            public DateTimeField InsuranceExpiryDate;
            public BooleanField IsActive;
            public Int32Field Wheels;
            public DateTimeField CreatedDate;
        }
    }
}
