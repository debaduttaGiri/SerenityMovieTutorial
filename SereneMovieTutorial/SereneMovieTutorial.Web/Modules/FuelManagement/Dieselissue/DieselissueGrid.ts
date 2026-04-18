
namespace SereneMovieTutorial.FuelManagement {

    @Serenity.Decorators.registerClass()
    export class DieselissueGrid extends Serenity.EntityGrid<DieselissueRow, any> {
        protected getColumnsKey() { return 'FuelManagement.Dieselissue'; }
        protected getDialogType() { return DieselissueDialog; }
        protected getIdProperty() { return DieselissueRow.idProperty; }
        protected getInsertPermission() { return DieselissueRow.insertPermission; }
        protected getLocalTextPrefix() { return DieselissueRow.localTextPrefix; }
        protected getService() { return DieselissueService.baseUrl; }

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