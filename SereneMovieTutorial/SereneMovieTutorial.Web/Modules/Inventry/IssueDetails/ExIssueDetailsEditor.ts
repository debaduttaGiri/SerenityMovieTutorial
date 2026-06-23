namespace SereneMovieTutorial.Inventry {
    import fld = IssueDetailsRow.Fields;
    @Serenity.Decorators.registerEditor()
    export class ExIssueDetailsEditor extends Common.GridEditorBase<IssueDetailsRow> {

        protected getColumnsKey() { return 'Inventry.IssueDetails'; }
        protected getDialogType() {
            return ExIssueDetailsDialog;
        }
        protected getIdProperty() { return IssueDetailsRow.idProperty; }
        //protected getInsertPermission() { return IssueDetailsRow.insertPermission; }
       
        protected getLocalTextPrefix() { return IssueDetailsRow.localTextPrefix; }
        //protected getService() { return IssueDetailsService.baseUrl; }

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