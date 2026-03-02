
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class FinancialYearGrid extends Serenity.EntityGrid<FinancialYearRow, any> {
        protected getColumnsKey() { return 'Default.FinancialYear'; }
        protected getDialogType() { return FinancialYearDialog; }
        protected getIdProperty() { return FinancialYearRow.idProperty; }
        protected getInsertPermission() { return FinancialYearRow.insertPermission; }
        protected getLocalTextPrefix() { return FinancialYearRow.localTextPrefix; }
        protected getService() { return FinancialYearService.baseUrl; }
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
    }
}