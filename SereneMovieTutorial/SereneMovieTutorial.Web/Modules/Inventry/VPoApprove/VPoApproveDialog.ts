
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class VPoApproveDialog extends Serenity.EntityDialog<VPoApproveRow, any> {
        protected getFormKey() { return VPoApproveForm.formKey; }
        protected getIdProperty() { return VPoApproveRow.idProperty; }
        protected getLocalTextPrefix() { return VPoApproveRow.localTextPrefix; }
        protected getNameProperty() { return VPoApproveRow.nameProperty; }
        protected getService() { return VPoApproveService.baseUrl; }
        protected getDeletePermission() { return VPoApproveRow.deletePermission; }
        protected getInsertPermission() { return VPoApproveRow.insertPermission; }
        protected getUpdatePermission() { return VPoApproveRow.updatePermission; }

        protected form = new VPoApproveForm(this.idPrefix);
        protected getToolbarButtons() {
            let buttons: Serenity.ToolButton[] = [];

            // Approve → set flag and save
            buttons.push({
                title: "Approve",
                cssClass: "approve-button",
                icon: "fa fa-check",
                onClick: () => {
                    Q.serviceRequest('PurchaseOrder/Update', {
                        EntityId: this.entityId,
                        Entity: { IsApproved: true }
                    }, r => {
                        Q.notifySuccess("PO approved!");
                        this.dialogClose();
                    });
                }
            });

            // Unapprove → just close dialog
            buttons.push({
                title: "Close",
                cssClass: "unapprove-button",
                icon: "fa fa-times",
                onClick: () => {
                    Q.notifyInfo("Dialog closed without approval.");
                    this.dialogClose();
                }
            });

            return buttons;
        }


    }
}