
namespace SereneMovieTutorial.Inventry {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class PurchaseOrderDialog extends Serenity.EntityDialog<PurchaseOrderRow, any> {
        protected getFormKey() { return PurchaseOrderForm.formKey; }
        protected getIdProperty() { return PurchaseOrderRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseOrderRow.nameProperty; }
        protected getService() { return PurchaseOrderService.baseUrl; }
  

        protected form = new PurchaseOrderForm(this.idPrefix);

        constructor(private rows?: SereneMovieTutorial.Inventry.PurchaseRequestDetailRow[]) {
            super();
            this.form.PoNo.changeSelect2(() => {
                this.form.DetailList.getPONo = this.form.PoNo.value;

            });
            


        }
        public getPONo(): string {
            return this.form.PoNo.value;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // ✅ Inject parent reference into editor
            if (this.form.DetailList) {
                //this.form.DetailList.parentDialog = this;
                //console.log("ParentForm: " + this.form.DetailList.parentDialog.entity)
                this.form.DetailList.getPONo = this.form.PoNo.value;
                this.form.DetailList
            }

            // Optional UI sync
            this.form.PoNo.changeSelect2(() => {
            this.form.DetailList.getPONo = this.form.PoNo.value;

            });
            

        }
        

    }
}