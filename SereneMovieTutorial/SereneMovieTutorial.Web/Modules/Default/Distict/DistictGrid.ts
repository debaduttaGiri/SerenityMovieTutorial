
namespace SereneMovieTutorial.Default {
    import fld = DistictRow.Fields;
    @Serenity.Decorators.registerClass()
    export class DistictGrid extends Serenity.EntityGrid<DistictRow, any> {
        protected getColumnsKey() { return 'Default.Distict'; }
        protected getDialogType() { return DistictDialog; }
        protected getIdProperty() { return DistictRow.idProperty; }
        protected getInsertPermission() { return DistictRow.insertPermission; }
        protected getLocalTextPrefix() { return DistictRow.localTextPrefix; }
        protected getService() { return DistictService.baseUrl; }
        protected getColumns() {
            var columns = super.getColumns();

            //var distictCol = Q.first(columns, x => x.field === fld.Distict); if (distictCol) { distictCol.format = ctx => this.stringInputFormatter(ctx); }
            //var qtyCol = Q.first(columns, x => x.field === 'Distict'); if (qtyCol) { qtyCol.format = ctx => this.stringInputFormatter(ctx); }

            var str = ctx => this.stringInputFormatter(ctx);

            var distictCol = Q.first(columns, x => x.field === fld.Distict);
            if (distictCol) {
                distictCol.format = str;
            }


            columns.unshift({
                field: "SerielNo",
                name: "S. No",
                format: ctx => (ctx.row + 1).toString()
            });

            var supplier = Q.tryFirst(columns, x => x.field === fld.Plant1);
            if (supplier) {
                supplier.referencedFields = [fld.Plant];
                supplier.format = ctx => this.selectFormatter(ctx, fld.Plant, PlantRow.getLookup());
            }

            return columns;
        }
        private pendingChanges: Q.Dictionary<any> = {};

        constructor(container: JQuery) {
            super(container);
           
            this.slickContainer.on('change', '.edit', (e) => this.inputsChange(e));
        }

        private selectFormatter(ctx: Slick.FormatterContext, idField: string, lookup: Q.Lookup<any>) {
            var klass = 'edit';
            var item = ctx.item as PlantRow;
            var pending = this.pendingChanges[item.Id];
            var column = ctx.column as Slick.Column;

            if (pending && pending[idField] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, idField);
            var markup = "<select class='form-control input-sm" + (klass ? " " + klass : "") +
                "' data-field='" + idField +
                "' style='width: 100%; max-width: 100%'>";

            for (var c of lookup.items) {
                let id = c[lookup.idField];
                markup += "<option value='" + Q.attrEncode(id) + "'"
                if (id == value) {
                    markup += " selected";
                }
                markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
            }
            return markup + "</select>";
        }
        private getEffectiveValue(item, field): any {
            var pending = this.pendingChanges[item.Id];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field');
            var value = input.val();

            var pending = this.pendingChanges[item.Id];
            if (!pending) {
                this.pendingChanges[item.Id] = pending = {};
            }

            pending[field] = value;
            item[field] = value;

            if (field === fld.Plant) {
                let lookup = PlantRow.getLookup();
                let selected = lookup.itemById[value];
                if (selected) {
                    item[fld.Plant1] = selected[lookup.textField];
                }
            }


            this.view.refresh();
            input.addClass('dirty');
            //this.setSaveButtonState();
        }

       
        protected getButtons(): Serenity.ToolButton[] {
            let buttons = super.getButtons();


            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: DistictService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            buttons.push({
                //title: "Export PDF",
                cssClass: "export-pdf-button",
                onClick: () => {

                    if (!this.onViewSubmit())
                        return;

                    Q.postToUrl({
                        url: Q.resolveUrl('~/Services/' + DistictService.baseUrl + '/ListPdf'),
                        params: this.view.params,
                        target: "_blank"
                    });
                }
            });


            buttons.push({
                title: 'Save Changes',
                cssClass: 'apply-changes-button',
                onClick: () => this.saveChanges1()
            });

            return buttons;
        }
       
        //private saveChanges1() {

        //    for (let id in this.pendingChanges) {
        //        let changes = this.pendingChanges[id];

        //        DistictService.Update({
        //            EntityId: id,
        //            Entity: changes
        //        }, response => {
        //            Q.notifySuccess("Row " + id + " updated successfully.");
        //        });
        //    }

            
        //    this.pendingChanges = {};
        //    //this.setSaveButtonState();
        //    Q.reloadLookup('Default.Plant');
        //    this.refresh();
        //    //window.location.reload();
        //}

        private saveChanges1() {

            let keys = Object.keys(this.pendingChanges);

            if (keys.length === 0)
                return;

            let completed = 0;

            for (let id of keys) {

                DistictService.Update({
                    EntityId: id,
                    Entity: this.pendingChanges[id]
                }, response => {

                    completed++;

                    if (completed === keys.length) {
                        this.pendingChanges = {};
                        this.refresh();
                        Q.notifySuccess("All changes saved successfully.");
                    }
                });
            }
        }


        //private setSaveButtonState() {
        //    let hasChanges = Object.keys(this.pendingChanges).length > 0;


        //    this.toolbar.findButton('apply-changes-button')
        //        .toggleClass('disabled', !hasChanges);
        //}

        private stringInputFormatter(ctx) {
            var klass = 'edit string distict-input';
            var item = ctx.item as DistictRow;
            var pending = this.pendingChanges[item.Id];
            var column = ctx.column as Slick.Column;

            if (pending && pending[column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, column.field) as string;

            return "<input type='text' class='" + klass +
                "' data-field='" + column.field +
                "' value='" + Q.attrEncode(value) +
                "' maxlength='" + column.sourceItem.maxLength + "'/>";
        }


       



    }
}