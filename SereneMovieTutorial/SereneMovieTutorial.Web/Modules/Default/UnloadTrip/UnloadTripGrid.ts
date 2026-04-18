
namespace SereneMovieTutorial.Default {
    import fld = UnloadTripRow.Fields;
    @Serenity.Decorators.registerClass()
    export class UnloadTripGrid extends Serenity.EntityGrid<UnloadTripRow, any> {
        protected getColumnsKey() { return 'Default.UnloadTrip'; }
        protected getDialogType() { return UnloadTripDialog; }
        protected getIdProperty() { return UnloadTripRow.idProperty; }
        protected getInsertPermission() { return UnloadTripRow.insertPermission; }
        protected getLocalTextPrefix() { return UnloadTripRow.localTextPrefix; }
        protected getService() { return UnloadTripService.baseUrl; }

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
            columns.splice(0, 0);
            columns.unshift({
                field: 'Print',
                name: '',
                format: ctx => {
                    return '<a class="inline-action print-voucher-row" title="Print">' +
                        '<i class="fa fa-print text-red"></i></a>';

                },
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            

            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {

            super.onClick(e, row, cell);

            //var item = this.itemAt(row);

            //if ($(e.target).closest('.download-voucher').length > 0) {

            //    e.preventDefault();

            //    window.location.href = Q.resolveUrl('~/Default/UnloadTrip/Print?id=' + item.UnloadTripId);
            //}

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-voucher-row')) {

                    Q.postToUrl({
                        url: "~/Default/UnloadTrip/Print",
                        params: {
                            'id': item.UnloadTripId
                        },
                        target: '_blank'
                    });
                }
            }
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
        protected getButtons(): Serenity.ToolButton[] {
            let buttons = super.getButtons();
            buttons = buttons.filter(b => b.cssClass !== "add-button");
            return buttons;
        }
        
    }
}