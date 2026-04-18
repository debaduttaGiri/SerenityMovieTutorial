namespace SereneMovieTutorial.Inventry {
    import fld = PurchaseBillDetailRow.Fields;
    @Serenity.Decorators.registerEditor()
    export class ExPurchaseBillDetailEditor extends Common.GridEditorBase<PurchaseBillDetailRow> {

        protected getColumnsKey() { return "Inventry.PurchaseBillDetail"; }

        protected getDialogType() { return ExPurchaseBillDetailDialog; }

        protected getLocalTextPrefix() { return PurchaseBillDetailRow.localTextPrefix; }

        protected getIdProperty() { return PurchaseBillDetailRow.idProperty; }

        //public TankerName: string;
        //public parentDialog: PurchaseBillDialog;
        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: "SerielNo",
                name: "S. No",
                format: ctx => (ctx.row + 1).toString()
            });

            return columns;
        }
        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();
            opt.showFooterRow = true; // disable footer row
            return opt;
        }


        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            this.view.setSummaryOptions({
                aggregators: [
                    //new Slick.Aggregators.Sum(fld.TaxableAmount),
                    new Slick.Aggregators.Sum(fld.TotalAmount),
                     new Slick.Aggregators.Sum(fld.CgstAmount),
                      new Slick.Aggregators.Sum(fld.SgstAmount),
                       new Slick.Aggregators.Sum(fld.SgstAmount)
                ]
            });
            return grid;
        }
        
    } 
}