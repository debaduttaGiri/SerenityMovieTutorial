
namespace SereneMovieTutorial.Default {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ManageinvoiceDialog extends Serenity.EntityDialog<ManageinvoiceRow, any> {
        protected getFormKey() { return ManageinvoiceForm.formKey; }
        protected getIdProperty() { return ManageinvoiceRow.idProperty; }
        protected getLocalTextPrefix() { return ManageinvoiceRow.localTextPrefix; }
        protected getNameProperty() { return ManageinvoiceRow.nameProperty; }
        protected getService() { return ManageinvoiceService.baseUrl; }
        protected getDeletePermission() { return ManageinvoiceRow.deletePermission; }
        protected getInsertPermission() { return ManageinvoiceRow.insertPermission; }
        protected getUpdatePermission() { return ManageinvoiceRow.updatePermission; }

        protected form = new ManageinvoiceForm(this.idPrefix);
        public rows: SereneMovieTutorial.Default.InvoicedetailsRow[];
        public id : number;
        public Plant_Id: number;
        public Branch_id: number;
        public totTrips: number;
        public invoice: number;
        public sac: number;
        public totalFreightAmount: number;
        public TotalWeight: number;
        public stateid: number;
        public LoadingTripId: number;

        constructor(rows?: InvoicedetailsRow[]) {
            super();
            this.rows = rows || [];
            console.log(rows);
            
            
        }
        

        protected loadEntity(entity: ManageinvoiceRow) {
            super.loadEntity(entity);

            //this.form.LoadingTripId.value = this.LoadingTripId.toString();
            if (this.rows && this.rows.length > 0) {
                this.form.InvoiceDetails.value = this.rows;
            }

            if (this.isNew()) {
                entity.Plantid = this.Plant_Id;
                this.form.Plantid.value = this.Plant_Id.toString();
                entity.Branchid = this.Branch_id;
                this.form.Branchid.value = this.Branch_id.toString();
                this.form.Totaltrips.value = this.totTrips;
                this.form.Invoiceno.value = this.invoice.toString();
                this.form.Saccode.value = this.sac;
                this.form.LoadingTripId.value = this.LoadingTripId.toString();
                

            }
        }

        private getBranchStateId(): number {

            let lookup = BranchMasterRow.getLookup();

            if (!lookup || !lookup.items)
                return null;

            for (let i = 0; i < lookup.items.length; i++) {

                let item = lookup.items[i];
                //console.log("Item Id " +item.Id);
                if (item.Id == this.Branch_id) {  
                    console.log("inside if "+item.StateId)
                    return item.StateId;
                }
            }

            return null;
        }
        public afterLoadEntity() {
            super.afterLoadEntity();
            if (!this.isNew()) {
                this.form.InvoiceDetails.value = this.entity.InvoiceDetails || [];
            }

            this.form.Addgst.change(e => {
                if (this.form.Addgst.value == true) {
                    // Enable TAX field
                    this.form.Tax.getGridField().toggleClass('readonly', false);
                    this.form.Tax.readOnly = false;
                } else {
                    // Disable TAX field
                    this.form.Tax.readOnly = true;
                }
            });

            this.form.Tax.change(e => {
                let taxval = 0;
                // If Tax is a lookup editor
                let lookup = TaxRow.getLookup();
                let taxid: number = Number(this.form.Tax.value) || 0;
                for (let i = 0; i < lookup.items.length; i++) {

                    let item = lookup.items[i];
                    if (item.Id == taxid) {
                        taxval = item.TaxAmount;
                    }
                    
                }
                console.log(taxval);

                let freightRate = this.totalFreightAmount || 0;
                let weight = this.TotalWeight || 0;

                let basicAmount = freightRate * weight;

                // Get states
                let branchStateId =  this.getBranchStateId();
                
                //console.log("state id " + this.stateid)
                //console.log("lookup state id " + branchStateId)
                //console.log("Totweight" + this.TotalWeight)
                //console.log("Totamount" + this.totalFreightAmount)
                //console.log("branch id" + this.Branch_id)
                if (!branchStateId || !this.stateid) {
                    Q.notifyWarning("State not found");
                    return;
                }

                // RESET
                this.form.Cgstrate.value = 0;
                this.form.Sgstrate.value = 0;
                this.form.Igstrate.value = 0;

                this.form.Cgstamount.value = 0;
                this.form.Sgstamount.value = 0;
                this.form.Igstamount.value = 0;

                
                if (branchStateId === this.stateid) {

                    // CGST + SGST
                    let halfTax = taxval / 2;

                    this.form.Cgstrate.value = halfTax;
                    this.form.Sgstrate.value = halfTax;

                    let cgstAmt = (basicAmount * halfTax) / 100;
                    let sgstAmt = (basicAmount * halfTax) / 100;

                    this.form.Cgstamount.value = cgstAmt;
                    this.form.Sgstamount.value = sgstAmt;

                } else {

                    // IGST
                    this.form.Igstrate.value = taxval;

                    let igstAmt = (basicAmount * taxval/100) ;
                    this.form.Igstamount.value = igstAmt;
                }

                // TOTAL GST
                let totalGST =
                    (this.form.Cgstamount.value || 0) +
                    (this.form.Sgstamount.value || 0) +
                    (this.form.Igstamount.value || 0);

                this.form.Totalgstamount.value = totalGST;

                let totalInvoice = this.totalFreightAmount + totalGST;

                this.form.Totalinvoiceamount.value = totalInvoice;

            });
        }
        

        

    }
}