
namespace SereneMovieTutorial.Inventry {
    import fld = PurchaseBillDetailRow.Fields;
    @Serenity.Decorators.registerClass()
    export class PurchaseBillDetailGrid extends Serenity.EntityGrid<PurchaseBillDetailRow, any> {
        protected getColumnsKey() { return 'Inventry.PurchaseBillDetail'; }
        protected getDialogType() { return PurchaseBillDetailDialog; }
        protected getIdProperty() { return PurchaseBillDetailRow.idProperty; }
        protected getInsertPermission() { return PurchaseBillDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseBillDetailRow.localTextPrefix; }
        protected getService() { return PurchaseBillDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();

            opt.enableColumnReorder = true;
            opt.frozenColumn = 2;
            opt.forceFitColumns = false;
            opt.topPanelHeight = 9;

            opt.editable = true;
            opt.autoEdit = false;
            opt.showFooterRow = true;
            return opt;
        }





        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum(fld.TaxableAmount),
                    new Slick.Aggregators.Sum(fld.TotalAmount)
                ]
            });
            return grid;
        }
    }
}