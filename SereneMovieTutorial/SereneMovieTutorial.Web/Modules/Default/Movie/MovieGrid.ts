declare var XLSX: any;
declare var jsPDF: any;


namespace SereneMovieTutorial.Default {
    import fld = MovieRow.Fields;

    @Serenity.Decorators.registerClass()
    export class MovieGrid extends Serenity.EntityGrid<MovieRow, any> {
        protected getColumnsKey() { return 'Default.Movie'; }
        protected getDialogType() { return MovieDialog; }
        protected getIdProperty() { return MovieRow.idProperty; }
        protected getInsertPermission() { return MovieRow.insertPermission; }
        protected getLocalTextPrefix() { return MovieRow.localTextPrefix; }
        protected getService() { return MovieService.baseUrl; }
        
        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: "SerielNo",
                name: "S. No",
                format: ctx => (ctx.row + 1).toString()
            });

            //columns.splice(1, 0, {
            //    field: 'Print Invoice',
            //    name: '',
            //    format: ctx => '<a class="inline-action print-invoice" title="invoice">' +
            //        '<i class="fa fa-file-pdf-o text-red"></i></a>',
            //    width: 24,
            //    minWidth: 24,
            //    maxWidth: 24
            //});

            columns.forEach(c => {
                if (c.field === fld.Kind) {
                    c.editor = Serenity.EnumEditor;
                    c.sourceItem = {
                        editorType: "MovieDB.MovieKind"
                    };
                }
            });
            

            return columns;
        }

        constructor(container: JQuery) {
            super(container);


            //this.slickGrid.onClick.subscribe((e, args) => {
            //    this.slickGrid.goToCell(args.row, args.cell, true);
            //});


        }
        protected getQuickSearchFields(): Serenity.QuickSearchField[] {
            const txt = s => Q.text(`Db.${MovieRow.localTextPrefix}.${s}`);
            //const fld = MovieRow.Fields;
            return [
                { name: "", title: "All" },
                { name: MovieRow.Fields.Description, title: txt(MovieRow.Fields.Description) },
                { name: MovieRow.Fields.Storyline, title: txt(MovieRow.Fields.Storyline) },
                { name: MovieRow.Fields.Year, title: txt(MovieRow.Fields.Year) }
            ];
        }



        protected getButtons() {
            let buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: MovieService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                reportTitle: 'Movies List',
                columnTitles: {
                    'Discontinued': 'Dis.',
                },
                tableOptions: {
                    columnStyles: {
                        MovieID: {
                            columnWidth: 25,
                            halign: 'right'
                        },
                        Discountinued: {
                            columnWidth: 25
                        }
                    }
                }
            }));
            buttons.push({
                title: 'Save Changes',
                cssClass: 'apply-changes-button disabled',
                //onClick: this.
                separator: true
            });

            return buttons;
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
        



        protected createSlickGrid(): Slick.Grid {
            let grid = super.createSlickGrid();

            this.view.setSummaryOptions({
                aggregators: [
                    
                    new Slick.Aggregators.Avg('Runtime')
                ]
            });


            grid.onFooterRowCellRendered.subscribe((e, args) => {
                if (args.column.field === 'Runtime') {
                    let totals = this.view.sortBy.length;
                    let Avg = totals['Runtime']?.sum ?? 0;
                    args.node.innerHTML = `<b>Avg: ${Avg.toFixed(2)}</b>`;
                }
            });

            return grid;
        }
      
    }
}