
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class PurchaseBillGrid extends Serenity.EntityGrid<PurchaseBillRow, any> {
        protected getColumnsKey() { return 'Inventry.PurchaseBill'; }
        protected getDialogType() { return PurchaseBillDialog; }
        protected getIdProperty() { return PurchaseBillRow.idProperty; }
        protected getInsertPermission() { return PurchaseBillRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseBillRow.localTextPrefix; }
        protected getService() { return PurchaseBillService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}