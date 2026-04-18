
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class MaintenanceHeadDialog extends Serenity.EntityDialog<MaintenanceHeadRow, any> {
        protected getFormKey() { return MaintenanceHeadForm.formKey; }
        protected getIdProperty() { return MaintenanceHeadRow.idProperty; }
        protected getLocalTextPrefix() { return MaintenanceHeadRow.localTextPrefix; }
        protected getNameProperty() { return MaintenanceHeadRow.nameProperty; }
        protected getService() { return MaintenanceHeadService.baseUrl; }
        protected getDeletePermission() { return MaintenanceHeadRow.deletePermission; }
        protected getInsertPermission() { return MaintenanceHeadRow.insertPermission; }
        protected getUpdatePermission() { return MaintenanceHeadRow.updatePermission; }

        protected form = new MaintenanceHeadForm(this.idPrefix);

    }
}