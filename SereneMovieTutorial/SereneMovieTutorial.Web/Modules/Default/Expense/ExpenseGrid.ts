
namespace SereneMovieTutorial.Default {

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
            opt.showFooterRow = true;   
            return opt;
        }



        protected createSlickGrid(): Slick.Grid {
            let grid = super.createSlickGrid();

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Expense'),
                    new Slick.Aggregators.Avg('Weight')
                ]
            });

         
            grid.onFooterRowCellRendered.subscribe((e, args) => {
                if (args.column.field === 'Expense') {
                    let totals = this.view.getSummary();
                    let sum = totals['Expense']?.sum ?? 0;
                    args.node.innerHTML = `<b>Total: ${sum}</b>`;
                }
                if (args.column.field === 'Weight') {
                    let totals = this.view.getSummary();
                    let Avg = totals['Weight']?.sum ?? 0;
                    args.node.innerHTML = `<b>Total: ${Avg}</b>`;
                }
            });

            return grid;
        }


       




    }
}