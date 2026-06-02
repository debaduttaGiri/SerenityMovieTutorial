
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class VPoApproveGrid extends Serenity.EntityGrid<VPoApproveRow, any> {
        protected getColumnsKey() { return 'Inventry.VPoApprove'; }
        protected getDialogType() { return VPoApproveDialog; }
        protected getIdProperty() { return VPoApproveRow.idProperty; }
        protected getInsertPermission() { return VPoApproveRow.insertPermission; }
        protected getLocalTextPrefix() { return VPoApproveRow.localTextPrefix; }
        protected getService() { return VPoApproveService.baseUrl; }

        
        private rowSelection: Serenity.GridRowSelectionMixin;  // declare field

        constructor(container: JQuery) {
            super(container);

            // initialize mixin
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        //protected getButtons(): Serenity.ToolButton[] {
        //    let buttons = super.getButtons();
        //    buttons = buttons.filter(b => b.cssClass !== "add-button");
        //    return buttons;
        //}

        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: "SerielNo",
                name: "S. No",
                format: ctx => (ctx.row + 1).toString()
            });
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));



            return columns;
        }

        protected getButtons(): Serenity.ToolButton[] {
            let buttons = super.getButtons();
            buttons = buttons.filter(b => b.cssClass !== "add-button");

            // Approve button
            buttons.push({
                title: "Approve",
                cssClass: "approve-button",
                icon: "fa fa-check",
                onClick: () => {
                    let selectedIds = this.rowSelection.getSelectedKeys();

                    if (selectedIds.length === 0) {
                        Q.notifyWarning("No purchase orders selected!");
                        return;
                    }

                    Q.confirm("Do you really want to approve the selected purchase orders?", () => {
                        let count = 0;
                        selectedIds.forEach(id => {
                            PurchaseOrderService.Update({
                                EntityId: id,
                                Entity: { IsApproved: true }
                            }, response => {
                                count++;
                                // when last one finishes
                                if (count === selectedIds.length) {
                                    Q.notifySuccess("Selected purchase orders approved!");
                                    this.element.triggerHandler('ondatachange');
                                    this.refresh();
                                }
                            });
                        });
                    });
                }
            });

            // Unapprove button
            buttons.push({
                title: "Unapprove",
                cssClass: "unapprove-button",
                icon: "fa fa-times",
                onClick: () => {
                    let selectedIds = this.rowSelection.getSelectedKeys();

                    if (selectedIds.length === 0) {
                        Q.notifyWarning("No purchase orders selected!");
                        return;
                    }

                    Q.confirm("Do you really want to unapprove the selected purchase orders?", () => {
                        let count = 0;
                        selectedIds.forEach(id => {
                            PurchaseOrderService.Update({
                                EntityId: id,
                                Entity: { IsUnapproved: true }
                            }, response => {
                                count++;
                                if (count === selectedIds.length) {
                                    Q.notifyInfo("Selected purchase orders unapproved!");
                                    this.element.triggerHandler('ondatachange');
                                    this.refresh();
                                }
                            });
                        });
                    });
                }
            });

            return buttons;
        }



    }
}