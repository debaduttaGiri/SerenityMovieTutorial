
namespace SereneMovieTutorial.Inventry {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class PurchaseBillDialog extends Serenity.EntityDialog<PurchaseBillRow, any> {
        protected getFormKey() { return PurchaseBillForm.formKey; }
        protected getIdProperty() { return PurchaseBillRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseBillRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseBillRow.nameProperty; }
        protected getService() { return PurchaseBillService.baseUrl; }
        protected getDeletePermission() { return PurchaseBillRow.deletePermission; }
        protected getInsertPermission() { return PurchaseBillRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseBillRow.updatePermission; }

        protected form = new PurchaseBillForm(this.idPrefix);

        public SelectedPartyId: number;
        
        public SelectedPoNo: string;
        public rows: SereneMovieTutorial.Inventry.PurchaseBillDetailRow[];
        public CgstAmmount: number;
        public SgstAmmount: number;
        public IgstAmmount: number;

        constructor(rows?: SereneMovieTutorial.Inventry.PurchaseBillDetailRow[]) {
            super();
            this.rows = rows || [];

            (this.form.PurchaseDetails.view as any).onDataChanged.subscribe(() => {
                var totalAmmount = 0;
                var taxableamt = 0
                var Cgst = 0
                var igst = 0
                var sgst = 0
                for (var i of this.form.PurchaseDetails.getItems()) {
                    totalAmmount += i.TotalAmount || 0;
                    taxableamt += i.TaxableAmount || 0;
                    Cgst += i.CgstAmount || 0;
                    sgst += i.SgstAmount || 0;
                    igst += i.IgstAmount || 0;
                }
                this.form.TaxableAmount.value = taxableamt;
                this.form.CgstAmount.value = Cgst;
                this.form.SgstAmount.value = sgst;
                this.form.IgstAmount.value = igst;
                this.form.TotalBillAmount.value = totalAmmount;

            });
           
        }
        

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (!this.isNew()) return;

            this.form.PartyId.value = this.SelectedPartyId.toString();
            //let lookup = SereneMovieTutorial.Default.PartyMasterRow.getLookup();

           // let item = lookup.itemById[this.SelectedPartyId];

            //this.form.PartyId.value = item ? item.Name : '';
           
            if (this.SelectedPoNo) {
                this.form.PoNumber.value = this.SelectedPoNo.toString().toUpperCase();
            }
            console.log(this.rows)


            if (this.rows?.length) {
                this.form.PurchaseDetails.value = this.rows;
            }

            if (!this.form.LedgerTypeId.value) {
                this.form.LedgerTypeId.value = 1;  
            }
           
            
        }
        

    }
}