
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class PartyMasterGrid extends Serenity.EntityGrid<PartyMasterRow, any> {
        protected getColumnsKey() { return 'Default.PartyMaster'; }
        protected getDialogType() { return PartyMasterDialog; }
        protected getIdProperty() { return PartyMasterRow.idProperty; }
        protected getInsertPermission() { return PartyMasterRow.insertPermission; }
        protected getLocalTextPrefix() { return PartyMasterRow.localTextPrefix; }
        protected getService() { return PartyMasterService.baseUrl; }

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