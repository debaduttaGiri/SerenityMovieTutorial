
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class StateMasterDialog extends Serenity.EntityDialog<StateMasterRow, any> {
        protected getFormKey() { return StateMasterForm.formKey; }
        protected getIdProperty() { return StateMasterRow.idProperty; }
        protected getLocalTextPrefix() { return StateMasterRow.localTextPrefix; }
        protected getNameProperty() { return StateMasterRow.nameProperty; }
        protected getService() { return StateMasterService.baseUrl; }
        protected getDeletePermission() { return StateMasterRow.deletePermission; }
        protected getInsertPermission() { return StateMasterRow.insertPermission; }
        protected getUpdatePermission() { return StateMasterRow.updatePermission; }

        protected form = new StateMasterForm(this.idPrefix);

    }
}