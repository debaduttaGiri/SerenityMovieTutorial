namespace SereneMovieTutorial.FuelManagement {

    @Serenity.Decorators.registerEditor()
    export class FuelDetailsEditor extends Common.GridEditorBase<FuelDetailsRow> {

        protected getColumnsKey() { return "FuelManagement.FuelDetails"; }

        protected getDialogType() { return FuelDetailsEditorDialog; }

        protected getLocalTextPrefix() { return FuelDetailsRow.localTextPrefix; }

        protected getIdProperty() { return FuelDetailsRow.idProperty; }

        public TankerName: string;
        public parentDialog: FuelDataDialog;
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

                    let dialog = dlg as FuelDetailsEditorDialog;

                    // ✅ pass parent
                    //dialog.parentDialog = this.parentDialog;

                    dialog.onSave = (opt, callback) => this.save(opt, callback);

                    let entity = this.getNewEntity() as FuelDetailsRow;

                    // ✅ set tanker
                    entity.TankerNo = this.TankerName;

                    dialog.loadEntityAndOpenDialog(entity);
                });
            };

            return buttons;
        }

        protected initEntityDialog(itemType: any, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // ✅ THIS ALWAYS RUNS (new + edit)
            (dialog as FuelDetailsEditorDialog).parentDialog = this.parentDialog;
        }
    } 
}