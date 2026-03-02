
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class DestinationDialog extends Serenity.EntityDialog<DestinationRow, any> {
        protected getFormKey() { return DestinationForm.formKey; }
        protected getIdProperty() { return DestinationRow.idProperty; }
        protected getLocalTextPrefix() { return DestinationRow.localTextPrefix; }
        protected getNameProperty() { return DestinationRow.nameProperty; }
        protected getService() { return DestinationService.baseUrl; }
        protected getDeletePermission() { return DestinationRow.deletePermission; }
        protected getInsertPermission() { return DestinationRow.insertPermission; }
        protected getUpdatePermission() { return DestinationRow.updatePermission; }

        protected form = new DestinationForm(this.idPrefix);

    }
}