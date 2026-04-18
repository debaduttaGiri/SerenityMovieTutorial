
namespace SereneMovieTutorial.FuelManagement.Entities
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("FuelManagement"), TableName("[dbo].[FuelDetails]")]
    [DisplayName("Fuel Details"), InstanceName("Fuel Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class FuelDetailsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity,Hidden]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Fuel Data"), ForeignKey("[dbo].[FuelData]", "Id"), LeftJoin("jFuelData")]
        public Int32? FuelDataId
        {
            get { return Fields.FuelDataId[this]; }
            set { Fields.FuelDataId[this] = value; }
        }

        //[DisplayName("Pump Id"), NotNull]
        [DisplayName("Pump"), NotNull, ForeignKey("[dbo].[PUMPMASTER]", "Id"), LeftJoin("jPump"), TextualField("PumpName")]
        [LookupEditor(typeof(PumpmasterRow))]
        [MinSelectLevel(SelectLevel.List)]
        public Int32? PumpId
        {
            get { return Fields.PumpId[this]; }
            set { Fields.PumpId[this] = value; }
        }
        [DisplayName("Pump"), Expression("jPump.NAME")]
        [MinSelectLevel(SelectLevel.List)]
        public String PumpName
        {
            get { return Fields.PumpName[this]; }
            set { Fields.PumpName[this] = value; }
        }
        [DisplayName("TankerNo")]
        //[MinSelectLevel(SelectLevel.List)]
        public String TankerNo
        {
            get { return Fields.TankerNo[this]; }
            set { Fields.TankerNo[this] = value; }
        }

        [DisplayName("Receipt Date")]
        public DateTime? ReceiptDate
        {
            get { return Fields.ReceiptDate[this]; }
            set { Fields.ReceiptDate[this] = value; }
        }

        [DisplayName("Quantity"), Size(18), Scale(2)]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FuelDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PumpId;
            public StringField PumpName;
            public DateTimeField ReceiptDate;
            public DecimalField Quantity;
            public Int32Field FuelDataId;
            public StringField TankerNo;
        }
    }
}
