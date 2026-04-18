namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerEditor()
    export class ExInvoiceDetailsEditor extends Common.GridEditorBase<InvoicedetailsRow> {

        protected getColumnsKey() { return "Default.Invoicedetails"; }

        protected getDialogType() { return ExInvoiceDetailsDialog; }

        protected getLocalTextPrefix() { return InvoicedetailsRow.localTextPrefix; }

        protected getIdProperty() { return InvoicedetailsRow.idProperty; }

        //public TankerName: string;
        public parentDialog: ManageinvoiceDialog;
        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: "SerielNo",
                name: "ID",
                format: ctx => (ctx.row + 1).toString()
            });
            

            return columns;
        }
        protected getButtons(): Serenity.ToolButton[] {
            let buttons = super.getButtons();

            buttons[0].onClick = () => {
                this.createEntityDialog(this.getItemType(), dlg => {

                    let dialog = dlg as ExInvoiceDetailsDialog;

                    // ✅ pass parent
                    //dialog.parentDialog = this.parentDialog;

                    dialog.onSave = (opt, callback) => this.save(opt, callback);

                    let entity = this.getNewEntity() as InvoicedetailsRow;

                    // ✅ set tanker
                    //entity.TankerNo = this.TankerName;

                    dialog.loadEntityAndOpenDialog(entity);
                });
            };

            return buttons;
        }

        protected initEntityDialog(itemType: any, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // ✅ THIS ALWAYS RUNS (new + edit)
            (dialog as ExInvoiceDetailsEditor).parentDialog = this.parentDialog;
        }
    } 
}