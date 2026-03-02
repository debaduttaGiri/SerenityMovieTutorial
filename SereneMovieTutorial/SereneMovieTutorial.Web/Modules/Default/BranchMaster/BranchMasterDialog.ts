
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class BranchMasterDialog extends Serenity.EntityDialog<BranchMasterRow, any> {
        protected getFormKey() { return BranchMasterForm.formKey; }
        protected getIdProperty() { return BranchMasterRow.idProperty; }
        protected getLocalTextPrefix() { return BranchMasterRow.localTextPrefix; }
        protected getNameProperty() { return BranchMasterRow.nameProperty; }
        protected getService() { return BranchMasterService.baseUrl; }
        protected getDeletePermission() { return BranchMasterRow.deletePermission; }
        protected getInsertPermission() { return BranchMasterRow.insertPermission; }
        protected getUpdatePermission() { return BranchMasterRow.updatePermission; }

        protected form = new BranchMasterForm(this.idPrefix);

    }
}