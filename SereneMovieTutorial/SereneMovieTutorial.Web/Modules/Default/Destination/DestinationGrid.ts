
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class DestinationGrid extends Serenity.EntityGrid<DestinationRow, any> {
        protected getColumnsKey() { return 'Default.Destination'; }
        protected getDialogType() { return DestinationDialog; }
        protected getIdProperty() { return DestinationRow.idProperty; }
        protected getInsertPermission() { return DestinationRow.insertPermission; }
        protected getLocalTextPrefix() { return DestinationRow.localTextPrefix; }
        protected getService() { return DestinationService.baseUrl; }
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