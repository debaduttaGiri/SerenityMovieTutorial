
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class VehicleMasterDialog extends Serenity.EntityDialog<VehicleMasterRow, any> {
        protected getFormKey() { return VehicleMasterForm.formKey; }
        protected getIdProperty() { return VehicleMasterRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleMasterRow.localTextPrefix; }
        protected getNameProperty() { return VehicleMasterRow.nameProperty; }
        protected getService() { return VehicleMasterService.baseUrl; }
        protected getDeletePermission() { return VehicleMasterRow.deletePermission; }
        protected getInsertPermission() { return VehicleMasterRow.insertPermission; }
        protected getUpdatePermission() { return VehicleMasterRow.updatePermission; }
        protected getToolbarButtons() {
            let buttons = super.getToolbarButtons();
            buttons.splice(2, 0, {
                title: "Save & New", cssClass: "save-and-new-button", icon: "fa fa-save", onClick: () => {
                    this.save(() => {
                        this.loadEntity({});
                    });
                }
            });
            return buttons;
        }

        protected form = new VehicleMasterForm(this.idPrefix);

    }
}