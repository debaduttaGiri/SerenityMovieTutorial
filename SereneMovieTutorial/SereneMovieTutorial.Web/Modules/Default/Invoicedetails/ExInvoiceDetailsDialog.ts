namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class ExInvoiceDetailsDialog extends Common.GridEditorDialog<InvoicedetailsRow> {
        //public static Parent: FuelDataDialog;
        protected getFormKey() { return InvoicedetailsForm.formKey; }
        protected getIdProperty() { return InvoicedetailsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoicedetailsRow.localTextPrefix; }
        protected getService() { return InvoicedetailsService.baseUrl; }
        
       public parentDialog: ManageinvoiceDialog;
       // public parentDialog: FuelDataDialog;
        //private applyParentTanker: boolean = false;
        protected form = new InvoicedetailsForm(this.idPrefix);
  
        protected getSaveEntity() {

            let entity = super.getSaveEntity();

            //entity.TankerNo = this.form.TankerNo.value;

            //// store PumpName so GridEditor can display it
            //let lookup = Default.PumpmasterRow.getLookup();

            //if (entity.PumpId && lookup.itemById[entity.PumpId])
            //    entity.PumpName = lookup.itemById[entity.PumpId].Name;

            return entity;
        }
        
        protected afterLoadEntity() {
            super.afterLoadEntity();
            let parent = this.parentDialog;

            //if (parent) {
            //    let latest = parent.getTankerNo();

            //    this.form.TankerNo.value = latest;
            //}
        }

        

    }

}