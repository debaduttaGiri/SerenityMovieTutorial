
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class ItemGrid extends Serenity.EntityGrid<ItemRow, any> {
        protected getColumnsKey() { return 'Inventry.Item'; }
        protected getDialogType() { return ItemDialog; }
        protected getIdProperty() { return ItemRow.idProperty; }
        protected getInsertPermission() { return ItemRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemRow.localTextPrefix; }
        protected getService() { return ItemService.baseUrl; }

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
        protected getButtons() {
            let buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ItemService.baseUrl + `/ListExcel`,
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push({
                title: "Import Item",
                cssClass: "export-xlsx-button",
                onClick: (e) => {
                    var dialog = new ExItemDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            })
            return buttons;
        }
    }
}