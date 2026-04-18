
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class PurchaseRequestDetailGrid extends Serenity.EntityGrid<PurchaseRequestDetailRow, any> {
        protected getColumnsKey() { return 'Inventry.PurchaseRequestDetail'; }
        protected getDialogType() { return PurchaseRequestDetailDialog; }
        protected getIdProperty() { return PurchaseRequestDetailRow.idProperty; }
        protected getInsertPermission() { return PurchaseRequestDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseRequestDetailRow.localTextPrefix; }
        protected getService() { return PurchaseRequestDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}