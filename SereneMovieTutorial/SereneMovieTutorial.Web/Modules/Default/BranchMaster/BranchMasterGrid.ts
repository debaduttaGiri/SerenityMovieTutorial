
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class BranchMasterGrid extends Serenity.EntityGrid<BranchMasterRow, any> {
        protected getColumnsKey() { return 'Default.BranchMaster'; }
        protected getDialogType() { return BranchMasterDialog; }
        protected getIdProperty() { return BranchMasterRow.idProperty; }
        protected getInsertPermission() { return BranchMasterRow.insertPermission; }
        protected getLocalTextPrefix() { return BranchMasterRow.localTextPrefix; }
        protected getService() { return BranchMasterService.baseUrl; }
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