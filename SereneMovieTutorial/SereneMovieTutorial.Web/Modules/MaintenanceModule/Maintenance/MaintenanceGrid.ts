
namespace SereneMovieTutorial.MaintenanceModule {
    import fld = MaintenanceRow.Fields;
    @Serenity.Decorators.registerClass()
    export class MaintenanceGrid extends Serenity.EntityGrid<MaintenanceRow, any> {
        protected getColumnsKey() { return 'MaintenanceModule.Maintenance'; }
        protected getDialogType() { return MaintenanceDialog; }
        protected getIdProperty() { return MaintenanceRow.idProperty; }
        protected getInsertPermission() { return MaintenanceRow.insertPermission; }
        protected getLocalTextPrefix() { return MaintenanceRow.localTextPrefix; }
        protected getService() { return MaintenanceService.baseUrl; }

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

        protected createToolbarExtensions() {
            super.createToolbarExtensions();

            //this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            this.addQuickFilter({
                field: fld.TruckId,
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: SereneMovieTutorial.Default.VehicleMasterRow.lookupKey,
                 
                }
            });
            this.addQuickFilter({
                field: fld.HeadId,
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: SereneMovieTutorial.Default.MaintenanceHeadRow.lookupKey,
                }
            });
        }
    }
}