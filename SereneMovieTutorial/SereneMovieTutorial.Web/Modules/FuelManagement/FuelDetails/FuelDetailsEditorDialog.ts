namespace SereneMovieTutorial.FuelManagement {

    @Serenity.Decorators.registerClass()
    export class FuelDetailsEditorDialog extends Common.GridEditorDialog<FuelDetailsRow> {
        //public static Parent: FuelDataDialog;
        protected getFormKey() { return FuelDetailsForm.formKey; }
        protected getIdProperty() { return FuelDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return FuelDetailsRow.localTextPrefix; }
        protected getService() { return FuelDetailsService.baseUrl; }
        
        //public parentDialog: FuelDataDialog;
        public parentDialog: FuelDataDialog;
        //private applyParentTanker: boolean = false;
        protected form = new FuelDetailsForm(this.idPrefix);
  
        protected getSaveEntity() {

            let entity = super.getSaveEntity();

            entity.TankerNo = this.form.TankerNo.value;

            // store PumpName so GridEditor can display it
            let lookup = Default.PumpmasterRow.getLookup();

            if (entity.PumpId && lookup.itemById[entity.PumpId])
                entity.PumpName = lookup.itemById[entity.PumpId].Name;

            return entity;
        }
        
        protected afterLoadEntity() {
            super.afterLoadEntity();
            let parent = this.parentDialog;

            if (parent) {
                let latest = parent.getTankerNo();

                this.form.TankerNo.value = latest;
            }
        }

    }

}