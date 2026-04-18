
namespace SereneMovieTutorial.Default {

    import fld = ExpenseRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ExpenseGrid extends Serenity.EntityGrid<ExpenseRow, any> {
        protected getColumnsKey() { return 'Default.Expense'; }
        protected getDialogType() { return ExpenseDialog; }
        protected getIdProperty() { return ExpenseRow.idProperty; }
        protected getInsertPermission() { return ExpenseRow.insertPermission; }
        protected getLocalTextPrefix() { return ExpenseRow.localTextPrefix; }
        protected getService() { return ExpenseService.baseUrl; }
        
        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: "SerielNo",
                name: "S. No",
                format: ctx => (ctx.row + 1).toString()
            });

           
            return columns;
        }

        constructor(container: JQuery) {
            super(container);
        }
        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.showFooterRow = true;   
            return opt;
        }

        //protected getSlickOptions() {
        //    var opt = super.getSlickOptions();
        //    opt.enableTextSelectionOnCells = true;
        //    opt.showFooterRow = true;
        //    return opt;
        //}
        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum(fld.Expense),
                    new Slick.Aggregators.Avg(fld.Weight)
                ]
            });
            return grid;
        }


       




    }
}