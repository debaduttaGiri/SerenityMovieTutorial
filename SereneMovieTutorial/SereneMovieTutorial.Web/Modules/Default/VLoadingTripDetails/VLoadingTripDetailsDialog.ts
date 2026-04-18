
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class VLoadingTripDetailsDialog extends Serenity.EntityDialog<VLoadingTripDetailsRow, any> {
        protected getFormKey() { return VLoadingTripDetailsForm.formKey; }
        protected getIdProperty() { return VLoadingTripDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return VLoadingTripDetailsRow.localTextPrefix; }
        protected getNameProperty() { return VLoadingTripDetailsRow.nameProperty; }
        protected getService() { return VLoadingTripDetailsService.baseUrl; }
        protected getDeletePermission() { return VLoadingTripDetailsRow.deletePermission; }
        protected getInsertPermission() { return VLoadingTripDetailsRow.insertPermission; }
        protected getUpdatePermission() { return VLoadingTripDetailsRow.updatePermission; }

        protected form = new VLoadingTripDetailsForm(this.idPrefix);
        

    }
}