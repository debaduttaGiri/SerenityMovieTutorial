
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class CustomerMasterGrid extends Serenity.EntityGrid<CustomerMasterRow, any> {
        //protected getDialogTitle(): string { return "New Owner";  }
        protected getColumnsKey() { return 'Default.CustomerMaster'; }
        protected getDialogType() { return CustomerMasterDialog; }
        protected getIdProperty() { return CustomerMasterRow.idProperty; }
        protected getInsertPermission() { return CustomerMasterRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerMasterRow.localTextPrefix; }
        protected getService() { return CustomerMasterService.baseUrl; }
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