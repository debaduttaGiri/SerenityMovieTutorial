
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class InvoicedetailsGrid extends Serenity.EntityGrid<InvoicedetailsRow, any> {
        protected getColumnsKey() { return 'Default.Invoicedetails'; }
        protected getDialogType() { return InvoicedetailsDialog; }
        protected getIdProperty() { return InvoicedetailsRow.idProperty; }
        protected getInsertPermission() { return InvoicedetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoicedetailsRow.localTextPrefix; }
        protected getService() { return InvoicedetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}