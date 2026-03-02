
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class CustomerMasterDialog extends Serenity.EntityDialog<CustomerMasterRow, any> {
        protected getFormKey() { return CustomerMasterForm.formKey; }
        protected getIdProperty() { return CustomerMasterRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerMasterRow.localTextPrefix; }
        protected getNameProperty() { return CustomerMasterRow.nameProperty; }
        protected getService() { return CustomerMasterService.baseUrl; }
        protected getDeletePermission() { return CustomerMasterRow.deletePermission; }
        protected getInsertPermission() { return CustomerMasterRow.insertPermission; }
        protected getUpdatePermission() { return CustomerMasterRow.updatePermission; }
        protected getToolbarButtons() {
            let buttons = super.getToolbarButtons();
            buttons.splice(2, 0, {
                title: "Save & New", cssClass: "save-and-new-button", icon: " fa fa-save", onClick: () => {
                    this.save(() => {
                        this.loadEntity({});
                    });
                }
            });
            return buttons;
        }

        protected form = new CustomerMasterForm(this.idPrefix);

    }
}