
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
            //columns.
            

            let downloadColumn: Slick.Column = {
                field: "Download",
                name: "",
                format: ctx => {

                    let file = ctx.item.PrimaryImage;

                    if (!file)
                        return `<i class="fa fa-download text-muted"></i>`;

                    let url = Q.resolveUrl("~/upload/") + file;

                    return `<a href="${url}" download target="_blank">
                <i class="fa fa-download text-blue"></i>
            </a>`;
                },
                width: 40,
                minWidth: 40,
                maxWidth: 40
            };

            // insert before Title column
            let titleIndex = columns.map(function (x) { return x.field; })
                .indexOf(MovieRow.Fields.Title);

            if (titleIndex >= 0)
                columns.splice(titleIndex, 0, downloadColumn);

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
            //buttons.push({
            //    title: 'Save Changes',
            //    cssClass: 'apply-changes-button disabled',
            //    //onClick: this.
            //    separator: true
            //});

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
        



        
        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            this.view.setSummaryOptions({
                aggregators: [
                    //new Slick.Aggregators.Sum(fld.),
                    new Slick.Aggregators.Avg(fld.Runtime)
                ]
            });
            return grid;
        }
      
    }
}