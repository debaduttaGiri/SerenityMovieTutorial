
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class ItemDialog extends Serenity.EntityDialog<ItemRow, any> {
        protected getFormKey() { return ItemForm.formKey; }
        protected getIdProperty() { return ItemRow.idProperty; }
        protected getLocalTextPrefix() { return ItemRow.localTextPrefix; }
        protected getNameProperty() { return ItemRow.nameProperty; }
        protected getService() { return ItemService.baseUrl; }
        protected getDeletePermission() { return ItemRow.deletePermission; }
        protected getInsertPermission() { return ItemRow.insertPermission; }
        protected getUpdatePermission() { return ItemRow.updatePermission; }

        protected form = new ItemForm(this.idPrefix);

    }
}