
namespace SereneMovieTutorial.MaintenanceModule {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MaintenanceDialog extends Serenity.EntityDialog<MaintenanceRow, any> {
        protected getFormKey() { return MaintenanceForm.formKey; }
        protected getIdProperty() { return MaintenanceRow.idProperty; }
        protected getLocalTextPrefix() { return MaintenanceRow.localTextPrefix; }
        protected getNameProperty() { return MaintenanceRow.nameProperty; }
        protected getService() { return MaintenanceService.baseUrl; }
        protected getDeletePermission() { return MaintenanceRow.deletePermission; }
        protected getInsertPermission() { return MaintenanceRow.insertPermission; }
        protected getUpdatePermission() { return MaintenanceRow.updatePermission; }

        protected form = new MaintenanceForm(this.idPrefix);
        constructor() {
            super();
            this.form.TruckId.changeSelect2(e => this.loadLastMaintenance());
            this.form.HeadId.changeSelect2(e => this.loadLastMaintenance());

            this.form.EntryDate.change(e => this.updatePeriodTill());
            this.form.EstimatedPeriod.change(e => this.updatePeriodTill());

            this.form.LastMaintenance.change(e => this.updateDueDate());
            this.form.EstimatedPeriod.change(e => this.updateDueDate());

            this.form.TruckId.changeSelect2(e => {
                console.log(this.form.TruckId.value);
                let id = this.form.TruckId.value;

                if (!id) return;

                MaintenanceService.GetDetails({
                    VehicleId: Number(id)
                }, response => {
                    console.log(response)
                    this.form.TruckType.value = response.Vehicle.VehicleType.toString();
                    this.form.Owner.value = response.Vehicle.CustomerId.toString();
                    this.form.ModelNumber.value = response.Vehicle.Model;
                });
            });
        }
        
        private loadLastMaintenance() {

            let truckId = this.form.TruckId.value;
            let headId = this.form.HeadId.value;

            if (!truckId || !headId) return;

           
            MaintenanceService.GetLatestMaintenance({
                TruckId: Number(truckId),
                HeadId: Number(headId)
             }, response => {
               console.log(response)
                this.form.LastMaintenance.value = response.LastMaintenance;
        
             });
            
        }

        private updatePeriodTill() {

            let entry = this.form.EntryDate.valueAsDate;
            let last = this.form.LastMaintenance.valueAsDate;

            if (!entry || !last) return;

            let diff = entry.getTime() - last.getTime();

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));

            let years = Math.floor(days / 365);
            days = days % 365;

            let months = Math.floor(days / 30);
            days = days % 30;

            this.form.PeriodTill.value =
                `${years} years ${months} months ${days} day`;
        }


        private updateDueDate() {

            let last = this.form.EntryDate.valueAsDate;
            let period = this.form.EstimatedPeriod.value;

            if (!last || !period) return;

            let due = new Date(Number(last));
            due.setDate(due.getDate() + Number(period));

            this.form.DueDate.valueAsDate = due;
        }

    }
}