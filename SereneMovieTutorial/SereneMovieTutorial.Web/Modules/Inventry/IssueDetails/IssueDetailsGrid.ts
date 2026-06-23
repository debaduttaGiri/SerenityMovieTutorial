
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class IssueDetailsGrid extends Serenity.EntityGrid<IssueDetailsRow, any> {
        protected getColumnsKey() { return 'Inventry.IssueDetails'; }
        protected getDialogType() { return IssueDetailsDialog; }
        protected getIdProperty() { return IssueDetailsRow.idProperty; }
        protected getInsertPermission() { return IssueDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return IssueDetailsRow.localTextPrefix; }
        protected getService() { return IssueDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}