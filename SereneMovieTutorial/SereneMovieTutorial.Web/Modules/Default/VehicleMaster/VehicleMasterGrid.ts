
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class VehicleMasterGrid extends Serenity.EntityGrid<VehicleMasterRow, any> {
        protected getColumnsKey() { return 'Default.VehicleMaster'; }
        protected getDialogType() { return VehicleMasterDialog; }
        protected getIdProperty() { return VehicleMasterRow.idProperty; }
        protected getInsertPermission() { return VehicleMasterRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleMasterRow.localTextPrefix; }
        protected getService() { return VehicleMasterService.baseUrl; }
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