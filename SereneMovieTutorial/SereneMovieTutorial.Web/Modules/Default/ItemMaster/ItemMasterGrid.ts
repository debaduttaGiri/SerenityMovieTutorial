
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class ItemMasterGrid extends Serenity.EntityGrid<ItemMasterRow, any> {
        protected getColumnsKey() { return 'Default.ItemMaster'; }
        protected getDialogType() { return ItemMasterDialog; }
        protected getIdProperty() { return ItemMasterRow.idProperty; }
        protected getInsertPermission() { return ItemMasterRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemMasterRow.localTextPrefix; }
        protected getService() { return ItemMasterService.baseUrl; }
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