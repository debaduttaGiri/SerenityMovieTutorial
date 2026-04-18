
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class UnloadTripDialog extends Serenity.EntityDialog<UnloadTripRow, any> {
        protected getFormKey() { return UnloadTripForm.formKey; }
        protected getIdProperty() { return UnloadTripRow.idProperty; }
        protected getLocalTextPrefix() { return UnloadTripRow.localTextPrefix; }
        protected getNameProperty() { return UnloadTripRow.nameProperty; }
        protected getService() { return UnloadTripService.baseUrl; }
        protected getDeletePermission() { return UnloadTripRow.deletePermission; }
        protected getInsertPermission() { return UnloadTripRow.insertPermission; }
        protected getUpdatePermission() { return UnloadTripRow.updatePermission; }

        protected form = new UnloadTripForm(this.idPrefix);
        public loadingTripDataRow: VLoadingTripDetailsRow;

        protected getToolbarButtons() {

            let buttons = super.getToolbarButtons();

            buttons.push({
                title: "Print Voucher",
                icon: "fa fa-print",
                onClick: () => {

                    let id = this.entityId;

                    window.open(
                        Q.resolveUrl("~/VoucherPrint/Print?id=" + id),
                        "_blank"
                    );

                }
            });

            return buttons;
        }
        protected updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.LoadingTripId, true);
            Serenity.EditorUtils.setReadOnly(this.form.TripNo, true);
            Serenity.EditorUtils.setReadOnly(this.form.TripDate, true);
            Serenity.EditorUtils.setReadOnly(this.form.Plant, true);
            Serenity.EditorUtils.setReadOnly(this.form.District, true);
            Serenity.EditorUtils.setReadOnly(this.form.Destination, true);
            Serenity.EditorUtils.setReadOnly(this.form.VehicleName, true);
            Serenity.EditorUtils.setReadOnly(this.form.CustomerName, true);
            Serenity.EditorUtils.setReadOnly(this.form.Branch, true);
            Serenity.EditorUtils.setReadOnly(this.form.State, true);
            Serenity.EditorUtils.setReadOnly(this.form.Item, true);
            Serenity.EditorUtils.setReadOnly(this.form.Weight, true);
            Serenity.EditorUtils.setReadOnly(this.form.Wheels, true);
            Serenity.EditorUtils.setReadOnly(this.form.ExpenseAmount, true);
            //Serenity.EditorUtils.setReadOnly(this.form.UnloadWeight, true);
            //Serenity.EditorUtils.setReadOnly(this.form.UnloadDate, true);
        }
    

        loadTripData(d: VLoadingTripDetailsRow) {
            console.log(d);
            this.loadEntity({});
            this.form.LoadingTripId.value = d.LoadingTripId;
            this.form.TripNo.value = d.TripNo;
            this.form.TripDate.value = d.TripDate; 
            this.form.Plant.value = d.PlantName;
            this.form.District.value = d.DistrictName;
            this.form.Destination.value = d.DestinationName; 
            this.form.VehicleName.value = d.VehicleNumber;
            this.form.CustomerName.value = d.CustomerName; 
            this.form.Branch.value = d.BranchName;
            this.form.State.value = d.StateName; 
            this.form.Item.value = d.ItemName; 
            this.form.Weight.value = d.Weight;
            this.form.Wheels.value = d.Wheels;
            this.form.ExpenseAmount.value = d.ExpenseAmount;
            this.form.CreatedDate.value = d.CreatedDate;
            this.form.Remarks.value = d.Remarks; 
            this.setReadonlyFields();
        }

        private setReadonlyFields() {
            Serenity.EditorUtils.setReadonly(this.form.LoadingTripId.element, true);
            Serenity.EditorUtils.setReadonly(this.form.TripNo.element, true);
            Serenity.EditorUtils.setReadonly(this.form.TripDate.element, true);
            Serenity.EditorUtils.setReadonly(this.form.Plant.element, true);
            Serenity.EditorUtils.setReadonly(this.form.District.element, true);
            Serenity.EditorUtils.setReadonly(this.form.Destination.element, true);
            Serenity.EditorUtils.setReadonly(this.form.VehicleName.element, true);
            Serenity.EditorUtils.setReadonly(this.form.CustomerName.element, true);
            Serenity.EditorUtils.setReadonly(this.form.Branch.element, true);
            Serenity.EditorUtils.setReadonly(this.form.State.element, true);
            Serenity.EditorUtils.setReadonly(this.form.Item.element, true);
            Serenity.EditorUtils.setReadonly(this.form.Weight.element, true);
            Serenity.EditorUtils.setReadonly(this.form.Wheels.element, true);
            Serenity.EditorUtils.setReadonly(this.form.ExpenseAmount.element, true);
            Serenity.EditorUtils.setReadonly(this.form.CreatedDate.element, true);
            Serenity.EditorUtils.setReadonly(this.form.Remarks.element, true);
            
        }
        
    }
}