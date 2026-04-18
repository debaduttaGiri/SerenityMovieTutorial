
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class PumpmasterGrid extends Serenity.EntityGrid<PumpmasterRow, any> {
        protected getColumnsKey() { return 'Default.Pumpmaster'; }
        protected getDialogType() { return PumpmasterDialog; }
        protected getIdProperty() { return PumpmasterRow.idProperty; }
        protected getInsertPermission() { return PumpmasterRow.insertPermission; }
        protected getLocalTextPrefix() { return PumpmasterRow.localTextPrefix; }
        protected getService() { return PumpmasterService.baseUrl; }

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