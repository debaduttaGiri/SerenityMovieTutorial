
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class PumpmasterDialog extends Serenity.EntityDialog<PumpmasterRow, any> {
        protected getFormKey() { return PumpmasterForm.formKey; }
        protected getIdProperty() { return PumpmasterRow.idProperty; }
        protected getLocalTextPrefix() { return PumpmasterRow.localTextPrefix; }
        protected getNameProperty() { return PumpmasterRow.nameProperty; }
        protected getService() { return PumpmasterService.baseUrl; }
        protected getDeletePermission() { return PumpmasterRow.deletePermission; }
        protected getInsertPermission() { return PumpmasterRow.insertPermission; }
        protected getUpdatePermission() { return PumpmasterRow.updatePermission; }

        protected form = new PumpmasterForm(this.idPrefix);

    }
}