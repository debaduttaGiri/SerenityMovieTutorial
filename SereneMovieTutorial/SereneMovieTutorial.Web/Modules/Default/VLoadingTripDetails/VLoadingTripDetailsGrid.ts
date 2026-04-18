
namespace SereneMovieTutorial.Default {
    import fld = VLoadingTripDetailsRow.Fields;
    @Serenity.Decorators.registerClass()
    export class VLoadingTripDetailsGrid extends Serenity.EntityGrid<VLoadingTripDetailsRow, any> {
        protected getColumnsKey() { return 'Default.VLoadingTripDetails'; }
        protected getDialogType() { return VLoadingTripDetailsDialog; }
        protected getIdProperty() { return VLoadingTripDetailsRow.idProperty; }
        protected getInsertPermission() { return VLoadingTripDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return VLoadingTripDetailsRow.localTextPrefix; }
        protected getService() { return VLoadingTripDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected editItem(entityOrId: any): void {

            let entity = this.view.getItemById(entityOrId) as VLoadingTripDetailsRow;

            let dlg = new UnloadTripDialog();

            dlg.loadTripData(entity);
            dlg.loadingTripDataRow = entity;
            dlg.dialogOpen();
            this.refresh();

        }

        protected getButtons(): Serenity.ToolButton[] {
            let buttons = super.getButtons();

            // Example: remove the "New Record" button
            buttons = buttons.filter(b => b.cssClass !== "add-button");

            // Example: remove the "Open Dialog" button if it has a custom cssClass
            //buttons = buttons.filter(b => b.cssClass !== "open-dialog-button");

            return buttons;
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
        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            this.view.setSummaryOptions({
                aggregators: [
                    //new Slick.Aggregators.Sum(fld.),
                    new Slick.Aggregators.Sum(fld.ExpenseAmount)
                ]
            });
            return grid;
        }




    }
}