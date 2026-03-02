
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class PlantGrid extends Serenity.EntityGrid<PlantRow, any> {
        protected getColumnsKey() { return 'Default.Plant'; }
        protected getDialogType() { return PlantDialog; }
        protected getIdProperty() { return PlantRow.idProperty; }
        protected getInsertPermission() { return PlantRow.insertPermission; }
        protected getLocalTextPrefix() { return PlantRow.localTextPrefix; }
        protected getService() { return PlantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}