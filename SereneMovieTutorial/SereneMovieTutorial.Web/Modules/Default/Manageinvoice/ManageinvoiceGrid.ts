
namespace SereneMovieTutorial.Default {
    import fld = InvoicedetailsRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ManageinvoiceGrid extends Serenity.EntityGrid<ManageinvoiceRow, any> {
        protected getColumnsKey() { return 'Default.Manageinvoice'; }
        protected getDialogType() { return ManageinvoiceDialog; }
        protected getIdProperty() { return ManageinvoiceRow.idProperty; }
        protected getInsertPermission() { return ManageinvoiceRow.insertPermission; }
        protected getLocalTextPrefix() { return ManageinvoiceRow.localTextPrefix; }
        protected getService() { return ManageinvoiceService.baseUrl; }

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
                        url: "~/Default/Reports/TripInvoice/GetInvoice",
                        params: {
                            'id': item.Id
                        },
                        target: '_blank'
                    });
                }
            }
        }
       
    }
}