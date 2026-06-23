namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class PurchaseOrderGrid extends Serenity.EntityGrid<PurchaseOrderRow, any> {
        protected getColumnsKey() { return 'Inventry.PurchaseOrder'; }
        protected getDialogType() { return PurchaseOrderDialog; }
        protected getIdProperty() { return PurchaseOrderRow.idProperty; }
        protected getInsertPermission() { return PurchaseOrderRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseOrderRow.localTextPrefix; }
        protected getService() { return PurchaseOrderService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getColumns() {
            let columns = super.getColumns();

            // Add serial number
            columns.unshift({
                field: "SerielNo",
                name: "S. No",
                format: ctx => (ctx.row + 1).toString()
            });

            // Add row selection
            //columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));

            // Render IsUnapproved as checkbox (read-only if 0)
            Q.first(columns, x => x.field === "IsUnapproved").format = ctx => {
                return `<input type="checkbox" class="inline-unapprove" ${ctx.value ? "checked" : ""} />`;
            };

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);

            let item = this.itemAt(row);

            if ($(e.target).hasClass("inline-unapprove")) {
                let checked = (e.target as HTMLInputElement).checked;

                // Only allow reset: if currently true (1) and user unchecks → set to 0
                if (!checked && item.IsUnapproved) {
                    Q.confirm("Do you really want to reset unapproved status for this PO?", () => {
                        PurchaseOrderService.Update({
                            EntityId: item.Id,
                            Entity: { IsUnapproved: false }
                        }, response => {
                            Q.notifyInfo("PO " + item.PoNo + " reset to unapproved = 0!");
                            this.element.triggerHandler('ondatachange');
                            this.refresh();
                        });
                    });
                } else {
                    // Prevent toggling to true again
                    (e.target as HTMLInputElement).checked = item.IsUnapproved;
                }
            }
        }
    }
}
