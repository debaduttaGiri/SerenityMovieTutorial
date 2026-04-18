
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class TaxGrid extends Serenity.EntityGrid<TaxRow, any> {
        protected getColumnsKey() { return 'Default.Tax'; }
        protected getDialogType() { return TaxDialog; }
        protected getIdProperty() { return TaxRow.idProperty; }
        protected getInsertPermission() { return TaxRow.insertPermission; }
        protected getLocalTextPrefix() { return TaxRow.localTextPrefix; }
        protected getService() { return TaxService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}