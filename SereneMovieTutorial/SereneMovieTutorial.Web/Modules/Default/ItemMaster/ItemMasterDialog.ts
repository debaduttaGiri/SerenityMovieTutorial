
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class ItemMasterDialog extends Serenity.EntityDialog<ItemMasterRow, any> {
        protected getFormKey() { return ItemMasterForm.formKey; }
        protected getIdProperty() { return ItemMasterRow.idProperty; }
        protected getLocalTextPrefix() { return ItemMasterRow.localTextPrefix; }
        protected getNameProperty() { return ItemMasterRow.nameProperty; }
        protected getService() { return ItemMasterService.baseUrl; }
        protected getDeletePermission() { return ItemMasterRow.deletePermission; }
        protected getInsertPermission() { return ItemMasterRow.insertPermission; }
        protected getUpdatePermission() { return ItemMasterRow.updatePermission; }

        protected form = new ItemMasterForm(this.idPrefix);

    }
}