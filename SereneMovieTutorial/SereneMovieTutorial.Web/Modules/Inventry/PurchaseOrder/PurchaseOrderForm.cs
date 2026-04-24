
namespace SereneMovieTutorial.Inventry.Forms
{
    using SereneMovieTutorial.Inventry.Entities;
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Inventry.PurchaseOrder")]
    [BasedOnRow(typeof(Entities.PurchaseOrderRow), CheckNames = false)]
    public class PurchaseOrderForm
    {
        public String PoNo { get; set; }
        public DateTime OrderDate { get; set; }
        [DisplayName("Party")]
        public Int32 PartyId { get; set; }
        [DisplayName("Branch")]
        public Int32 BranchId { get; set; }
        public String Remarks { get; set; }

        [PurchaseRequestDetailEditor]
        public List<PurchaseRequestDetailRow> DetailList { get; set; }

    }
}