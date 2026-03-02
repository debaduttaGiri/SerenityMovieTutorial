
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class StateMasterGrid extends Serenity.EntityGrid<StateMasterRow, any> {
        protected getColumnsKey() { return 'Default.StateMaster'; }
        protected getDialogType() { return StateMasterDialog; }
        protected getIdProperty() { return StateMasterRow.idProperty; }
        protected getInsertPermission() { return StateMasterRow.insertPermission; }
        protected getLocalTextPrefix() { return StateMasterRow.localTextPrefix; }
        protected getService() { return StateMasterService.baseUrl; }
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