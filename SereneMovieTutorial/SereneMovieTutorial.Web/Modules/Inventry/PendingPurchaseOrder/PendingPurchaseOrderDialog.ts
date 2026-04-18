
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class PendingPurchaseOrderDialog extends Serenity.EntityDialog<PendingPurchaseOrderRow, any> {
        protected getFormKey() { return PendingPurchaseOrderForm.formKey; }
        protected getIdProperty() { return PendingPurchaseOrderRow.idProperty; }
        protected getLocalTextPrefix() { return PendingPurchaseOrderRow.localTextPrefix; }
        protected getNameProperty() { return PendingPurchaseOrderRow.nameProperty; }
        protected getService() { return PendingPurchaseOrderService.baseUrl; }
        protected getDeletePermission() { return PendingPurchaseOrderRow.deletePermission; }
        protected getInsertPermission() { return PendingPurchaseOrderRow.insertPermission; }
        protected getUpdatePermission() { return PendingPurchaseOrderRow.updatePermission; }

        protected form = new PendingPurchaseOrderForm(this.idPrefix);

    }
}