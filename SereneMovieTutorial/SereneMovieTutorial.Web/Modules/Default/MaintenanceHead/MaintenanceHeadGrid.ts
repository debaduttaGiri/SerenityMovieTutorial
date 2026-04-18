
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class MaintenanceHeadGrid extends Serenity.EntityGrid<MaintenanceHeadRow, any> {
        protected getColumnsKey() { return 'Default.MaintenanceHead'; }
        protected getDialogType() { return MaintenanceHeadDialog; }
        protected getIdProperty() { return MaintenanceHeadRow.idProperty; }
        protected getInsertPermission() { return MaintenanceHeadRow.insertPermission; }
        protected getLocalTextPrefix() { return MaintenanceHeadRow.localTextPrefix; }
        protected getService() { return MaintenanceHeadService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}