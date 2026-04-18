
namespace SereneMovieTutorial.FuelManagement {

    @Serenity.Decorators.registerClass()
    export class FuelDetailsGrid extends Serenity.EntityGrid<FuelDetailsRow, any> {
        protected getColumnsKey() { return 'FuelManagement.FuelDetails'; }
        protected getDialogType() { return FuelDetailsDialog; }
        protected getIdProperty() { return FuelDetailsRow.idProperty; }
        protected getInsertPermission() { return FuelDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return FuelDetailsRow.localTextPrefix; }
        protected getService() { return FuelDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: "SerielNo",
                name: "S. No",
                format: ctx => (ctx.row + 1).toString()
            });

            return columns;
        }
    }
}