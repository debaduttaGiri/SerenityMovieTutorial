
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class InvoicedetailsDialog extends Serenity.EntityDialog<InvoicedetailsRow, any> {
        protected getFormKey() { return InvoicedetailsForm.formKey; }
        protected getIdProperty() { return InvoicedetailsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoicedetailsRow.localTextPrefix; }
        protected getNameProperty() { return InvoicedetailsRow.nameProperty; }
        protected getService() { return InvoicedetailsService.baseUrl; }
        protected getDeletePermission() { return InvoicedetailsRow.deletePermission; }
        protected getInsertPermission() { return InvoicedetailsRow.insertPermission; }
        protected getUpdatePermission() { return InvoicedetailsRow.updatePermission; }

        protected form = new InvoicedetailsForm(this.idPrefix);

    }
}