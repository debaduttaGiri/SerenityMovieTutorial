
namespace SereneMovieTutorial.MaintenanceModule.Entities
{
    using SereneMovieTutorial.Default.Entities;
    using SereneMovieTutorial.Modules.Default.VehicleMaster;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("MaintenanceModule"), TableName("[dbo].[Maintenance]")]
    [DisplayName("Maintenance"), InstanceName("Maintenance")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class MaintenanceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Entry Number")]
        public Int32? EntryNumber
        {
            get { return Fields.EntryNumber[this]; }
            set { Fields.EntryNumber[this] = value; }
        }

        [DisplayName("Entry Date")]
        public DateTime? EntryDate
        {
            get { return Fields.EntryDate[this]; }
            set { Fields.EntryDate[this] = value; }
        }

        [DisplayName("Truck No"), ForeignKey("[dbo].[VehicleMaster]", "VehicleId"), LeftJoin("jVehicle"), TextualField("VehicleNumber")]
        [LookupEditor(typeof(VehicleMasterRow))]
        public Int32? TruckId
        {
            get { return Fields.TruckId[this]; }
            set { Fields.TruckId[this] = value; }
        }

        [DisplayName("Truck Number")]
        [Expression("jVehicle.VehicleNumber")]
        public string TruckNumber
        {
            get { return Fields.TruckNumber[this]; }
            set { Fields.TruckNumber[this] = value; }
        }

        [DisplayName("Truck Type")]
        [EnumEditor]
        public VehicleType? TruckType
        {
            get => (VehicleType?)Fields.TruckType[this];
            set => Fields.TruckType[this] = (int?)value;
        }

        [DisplayName("Model No")]

        public string ModelNumber
        {
            get { return Fields.ModelNumber[this]; }
            set { Fields.ModelNumber[this] = value; }
        }

        [DisplayName("Last Maintenance")]
        public DateTime? LastMaintenance
        {
            get { return Fields.LastMaintenance[this]; }
            set { Fields.LastMaintenance[this] = value; }
        }

        [DisplayName("Period Till"), Size(50), QuickSearch]
        public String PeriodTill
        {
            get { return Fields.PeriodTill[this]; }
            set { Fields.PeriodTill[this] = value; }
        }

        [DisplayName("Estimated Period")]
        public Int32? EstimatedPeriod
        {
            get { return Fields.EstimatedPeriod[this]; }
            set { Fields.EstimatedPeriod[this] = value; }
        }

        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get { return Fields.DueDate[this]; }
            set { Fields.DueDate[this] = value; }
        }

        [DisplayName("Narration"), Size(50)]
        public String Narration
        {
            get { return Fields.Narration[this]; }
            set { Fields.Narration[this] = value; }
        }



        [DisplayName("Owner"),
 ForeignKey("[dbo].[CustomerMaster]", "CustomerId"),
 LeftJoin("jCustomer"),
 TextualField("CustomerName")]
        [LookupEditor(typeof(CustomerMasterRow))]
        public Int32? Owner
        {
            get { return Fields.Owner[this]; }
            set { Fields.Owner[this] = value; }
        }

        [Expression("jCustomer.FirstName + ' ' + jCustomer.LastName")]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Head"), ForeignKey("[dbo].[MaintenanceHead]", "Id"), LeftJoin("jHead"), TextualField("Head")]
        [LookupEditor(typeof(MaintenanceHeadRow))]
        public Int32? HeadId
        {
            get { return Fields.HeadId[this]; }
            set { Fields.HeadId[this] = value; }
        }

        [DisplayName("Head"), Expression("jHead.[Head]")]
        public String Head
        {
            get { return Fields.Head[this]; }
            set { Fields.Head[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TruckNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaintenanceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field EntryNumber;
            public DateTimeField EntryDate;
            public Int32Field TruckId;
            public Int32Field TruckType;
            public StringField ModelNumber;
            public DateTimeField LastMaintenance;
            public StringField PeriodTill;
            public Int32Field EstimatedPeriod;
            public DateTimeField DueDate;
            public StringField Narration;
            public Int32Field Owner;
            public Int32Field HeadId;
            public StringField CustomerName;
            public StringField Head;
            public StringField TruckNumber;



        }
    }
}
