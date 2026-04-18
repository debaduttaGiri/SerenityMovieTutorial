
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class PurchaseBillDetailDialog extends Serenity.EntityDialog<PurchaseBillDetailRow, any> {
        protected getFormKey() { return PurchaseBillDetailForm.formKey; }
        protected getIdProperty() { return PurchaseBillDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseBillDetailRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseBillDetailRow.nameProperty; }
        protected getService() { return PurchaseBillDetailService.baseUrl; }
        protected getDeletePermission() { return PurchaseBillDetailRow.deletePermission; }
        protected getInsertPermission() { return PurchaseBillDetailRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseBillDetailRow.updatePermission; }

        protected form = new PurchaseBillDetailForm(this.idPrefix);

    }
}