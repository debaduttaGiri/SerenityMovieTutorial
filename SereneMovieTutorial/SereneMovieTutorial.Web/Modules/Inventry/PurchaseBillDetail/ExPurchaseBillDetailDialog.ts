namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class ExPurchaseBillDetailDialog extends Common.GridEditorDialog<PurchaseBillDetailRow> {
        //public static Parent: FuelDataDialog;
        protected getFormKey() { return PurchaseBillDetailForm.formKey; }
        protected getIdProperty() { return PurchaseBillDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseBillDetailRow.localTextPrefix; }
        protected getService() { return PurchaseBillDetailService.baseUrl; }
        
        //public parentDialog: FuelDataDialog;
        public parentDialog: PurchaseBillDialog;
        //private applyParentTanker: boolean = false;
        protected form = new PurchaseBillDetailForm(this.idPrefix);
  
        //protected getSaveEntity() {

        //    let entity = super.getSaveEntity();

        //    entity.TankerNo = this.form.TankerNo.value;

        //    // store PumpName so GridEditor can display it
        //    let lookup = Default.PumpmasterRow.getLookup();

        //    if (entity.PumpId && lookup.itemById[entity.PumpId])
        //        entity.PumpName = lookup.itemById[entity.PumpId].Name;

        //    return entity;
        //}
        
        //protected afterLoadEntity() {
        //    super.afterLoadEntity();
        //    let parent = this.parentDialog;

        //    if (parent) {
        //        let latest = parent.getTankerNo();

        //        this.form.TankerNo.value = latest;
        //    }
        //}
        
    }

}