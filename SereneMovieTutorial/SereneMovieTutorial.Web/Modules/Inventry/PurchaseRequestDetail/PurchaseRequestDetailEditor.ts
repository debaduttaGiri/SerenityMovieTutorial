namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerEditor()
    export class PurchaseRequestDetailEditor extends Common.GridEditorBase<PurchaseRequestDetailRow> { 
        protected getColumnsKey() { return "Inventry.PurchaseRequestDetail"; } 
        protected getDialogType() { return PurchaseRequestDetailEditorDialog; } 
        protected getLocalTextPrefix() { return PurchaseRequestDetailRow.localTextPrefix; } 
        protected getIdProperty() { return PurchaseRequestDetailRow.idProperty; }

        public getPONo: string; 
        //public parentDialog: PurchaseOrderDialog;
        protected getColumns() {
            var columns = super.getColumns(); 
            columns.unshift({
                field: "SerielNo",
                name: "ID",
                format: ctx => (ctx.row + 1).toString()
            });
            for (let col of columns) {

                if (col.field === "PartName") {
                    col.format = ctx => {
                        let lookup = Inventry.ItemRow.getLookup();
                        return lookup.itemById[ctx.item.ItemId]?.Partname || "";
                    };
                }

                if (col.field === "UnitName") {
                    col.format = ctx => {
                        let lookup = Default.UnitRow.getLookup();
                        return lookup.itemById[ctx.item.UnitId]?.UnitName || "";
                    };
                }
            }
            return columns;
        }
       

        
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons[0].onClick = () => {
                this.createEntityDialog(this.getItemType(), dlg => {
                    var dialog = dlg as PurchaseRequestDetailEditorDialog;
                    dialog.onSave = (opt, callback) => this.save(opt, callback);
                    var entity = this.getNewEntity() as PurchaseRequestDetailRow;
                    entity.PoNo = this.getPONo;
                    
                    dialog.loadEntityAndOpenDialog(entity);
                });
            }

            return buttons;
        }
    }


}