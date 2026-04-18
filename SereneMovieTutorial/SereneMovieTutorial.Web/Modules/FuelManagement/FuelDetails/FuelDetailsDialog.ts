
namespace SereneMovieTutorial.FuelManagement {

    @Serenity.Decorators.registerClass()
    export class FuelDetailsDialog extends Serenity.EntityDialog<FuelDetailsRow, any> {
        protected getFormKey() { return FuelDetailsForm.formKey; }
        protected getIdProperty() { return FuelDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return FuelDetailsRow.localTextPrefix; }
        protected getService() { return FuelDetailsService.baseUrl; }
        protected getDeletePermission() { return FuelDetailsRow.deletePermission; }
        protected getInsertPermission() { return FuelDetailsRow.insertPermission; }
        protected getUpdatePermission() { return FuelDetailsRow.updatePermission; }

        protected form = new FuelDetailsForm(this.idPrefix);

    }
}