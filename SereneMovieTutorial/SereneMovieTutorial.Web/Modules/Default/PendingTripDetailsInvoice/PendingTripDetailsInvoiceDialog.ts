
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class PendingTripDetailsInvoiceDialog extends Serenity.EntityDialog<PendingTripDetailsInvoiceRow, any> {
        protected getFormKey() { return PendingTripDetailsInvoiceForm.formKey; }
        protected getIdProperty() { return PendingTripDetailsInvoiceRow.idProperty; }
        protected getLocalTextPrefix() { return PendingTripDetailsInvoiceRow.localTextPrefix; }
        protected getNameProperty() { return PendingTripDetailsInvoiceRow.nameProperty; }
        protected getService() { return PendingTripDetailsInvoiceService.baseUrl; }
        protected getDeletePermission() { return PendingTripDetailsInvoiceRow.deletePermission; }
        protected getInsertPermission() { return PendingTripDetailsInvoiceRow.insertPermission; }
        protected getUpdatePermission() { return PendingTripDetailsInvoiceRow.updatePermission; }

        protected form = new PendingTripDetailsInvoiceForm(this.idPrefix);

    }
}