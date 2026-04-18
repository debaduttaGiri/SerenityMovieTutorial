


namespace SereneMovieTutorial.FuelManagement {

    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class DieselissueDialog extends Serenity.EntityDialog<DieselissueRow, any> {
        protected getFormKey() { return DieselissueForm.formKey; }
        protected getIdProperty() { return DieselissueRow.idProperty; }
        protected getLocalTextPrefix() { return DieselissueRow.localTextPrefix; }
        protected getNameProperty() { return DieselissueRow.nameProperty; }
        protected getService() { return DieselissueService.baseUrl; }
        protected getDeletePermission() { return DieselissueRow.deletePermission; }
        protected getInsertPermission() { return DieselissueRow.insertPermission; }
        protected getUpdatePermission() { return DieselissueRow.updatePermission; }

        protected form = new DieselissueForm(this.idPrefix);

        constructor() {
            super();
            if (this.isNew()) {
                this.form.Today.valueAsDate = new Date();
            }
            
            this.form.Pumpid.changeSelect2(e => {

                if (!this.form.Pumpid.value)
                    return;

                // Only when inserting
                if (this.isNew()) {

                    Default.PumpmasterService.GetPumpStock({
                        PumpId: Number(this.form.Pumpid.value)
                    }, response => {

                        this.form.Stock.value = response.Stock;

                    });

                }
            });

            this.form.Diesel.change(e => this.calculateTotal());
            this.form.Rateofdiesel.change(e => this.calculateTotal());


            this.form.Today.change(e => {

                FuelManagement.DieselissueService.GetDieselRate({

                    Date: this.form.Today.value//.valueAsDate

                }, response => {

                    this.form.Rateofdiesel.value = response;

                });

            });

        }
        private calculateTotal() {

            let diesel = Q.toId(this.form.Diesel.value);
            let rate = Q.toId(this.form.Rateofdiesel.value);

            if (diesel && rate)
                this.form.Totalprice.value = diesel * rate;
        }
        

        private clearTripFields() {
            this.form.Plant.value = null;
            this.form.Distict.value = null;
            this.form.Destination.value = null;
        }
        

        /*--------------------------------------------------------------------------------------------*/
        private fillTripDetails() {

            if (!this.form.Tripno.value || !this.form.VehicleId.value) {
                this.clearTripFields();
                return;
            }
            
            DieselissueService.GetTripDetails({
                
                VehicleId: Number(this.form.VehicleId.value),
                Tripid : Number(this.form.Tripno.value)
            }, response => {

                if (response.ErrorMsg) {
                    Q.notifyWarning(response.ErrorMsg);
                    this.clearTripFields();
                    return;
                }

                this.form.Plant.value = response.Details.PlantId?.toString();
                this.form.Distict.value = response.Details.DistrictId?.toString();
                this.form.Destination.value = response.Details.DestinationId?.toString();
            });
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.form.Tripno.changeSelect2(() => {

                this.fillTripDetails();

                if (!this.form.VehicleId.value) {
                    return;
                }
            });
            if (!this.isNew()) {
                this.form.Pumpid.readOnly = true;
            }

            if (!this.isNew()) {

                // show stored stock from DieselIssue
                this.form.Stock.value = this.entity.Stock;

            }

            
        }
        
    }
}