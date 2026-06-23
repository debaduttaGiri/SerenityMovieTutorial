
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class IssueHeaderGrid extends Serenity.EntityGrid<IssueHeaderRow, any> {
        protected getColumnsKey() { return 'Inventry.IssueHeader'; }
        protected getDialogType() { return IssueHeaderDialog; }
        protected getIdProperty() { return IssueHeaderRow.idProperty; }
        protected getInsertPermission() { return IssueHeaderRow.insertPermission; }
        protected getLocalTextPrefix() { return IssueHeaderRow.localTextPrefix; }
        protected getService() { return IssueHeaderService.baseUrl; }

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