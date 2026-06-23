
namespace SereneMovieTutorial.Inventry {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class IssueHeaderDialog extends Serenity.EntityDialog<IssueHeaderRow, any> {
        protected getFormKey() { return IssueHeaderForm.formKey; }
        protected getIdProperty() { return IssueHeaderRow.idProperty; }
        protected getLocalTextPrefix() { return IssueHeaderRow.localTextPrefix; }
        protected getNameProperty() { return IssueHeaderRow.nameProperty; }
        protected getService() { return IssueHeaderService.baseUrl; }
        protected getDeletePermission() { return IssueHeaderRow.deletePermission; }
        protected getInsertPermission() { return IssueHeaderRow.insertPermission; }
        protected getUpdatePermission() { return IssueHeaderRow.updatePermission; }

        protected form = new IssueHeaderForm(this.idPrefix);

        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.form.VehicleId.changeSelect2(e => {

                var vehicle = Default.VehicleMasterRow.getLookup().itemById[
                    this.form.VehicleId.value
                ];
                console.log(vehicle);
                if (vehicle) {
                    this.form.Owner.value = vehicle.CustomerName;
                }
                else {
                    this.form.Owner.value = '';
                }
            });
        }

    }
}