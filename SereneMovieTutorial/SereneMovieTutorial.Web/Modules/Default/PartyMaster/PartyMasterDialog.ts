
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class PartyMasterDialog extends Serenity.EntityDialog<PartyMasterRow, any> {
        protected getFormKey() { return PartyMasterForm.formKey; }
        protected getIdProperty() { return PartyMasterRow.idProperty; }
        protected getLocalTextPrefix() { return PartyMasterRow.localTextPrefix; }
        protected getNameProperty() { return PartyMasterRow.nameProperty; }
        protected getService() { return PartyMasterService.baseUrl; }
        protected getDeletePermission() { return PartyMasterRow.deletePermission; }
        protected getInsertPermission() { return PartyMasterRow.insertPermission; }
        protected getUpdatePermission() { return PartyMasterRow.updatePermission; }

        protected form = new PartyMasterForm(this.idPrefix);

    }
}