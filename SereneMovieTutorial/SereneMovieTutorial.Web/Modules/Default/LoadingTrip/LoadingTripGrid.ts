
namespace SereneMovieTutorial.Default {
    import fld = LoadingTripRow.Fields;
    @Serenity.Decorators.registerClass()
    export class LoadingTripGrid extends Serenity.EntityGrid<LoadingTripRow, any> {
        protected getColumnsKey() { return 'Default.LoadingTrip'; }
        protected getDialogType() { return LoadingTripDialog; }
        protected getIdProperty() { return LoadingTripRow.idProperty; }
        protected getInsertPermission() { return LoadingTripRow.insertPermission; }
        protected getLocalTextPrefix() { return LoadingTripRow.localTextPrefix; }
        protected getService() { return LoadingTripService.baseUrl; }
        protected getColumns() {
            var columns = super.getColumns();
            
            columns.unshift({
                field: "SerielNo",
                name: "S. No",
                //width: 60,
                format: ctx => (ctx.row + 1).toString()
            });
            //columns.forEach(c => {

               
            //      c.minWidth = 100;
            //    if(c.field.length)
            //});
            return columns;
        }
        protected onViewProcessData(response: Serenity.ListResponse<LoadingTripRow>) {
            let result = super.onViewProcessData(response);

            setTimeout(() => {

                if (!this.slickGrid)
                    return;

                let items = this.view.getItems();
                let columns = this.slickGrid.getColumns();

                columns.forEach(col => {

                    let maxLen = col.name ? col.name.length : 5;

                    items.forEach(item => {
                        let val = item[col.field];
                        if (val) {
                            let len = val.toString().length;
                            if (len > maxLen)
                                maxLen = len;
                        }
                    });

                    col.width = (maxLen * 8) + 30; // approximate pixel width
                });

                this.slickGrid.setColumns(columns);

            }, 100);

            return result;
        }


        
        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();

            opt.forceFitColumns = false;   
           
            return opt;
        }



       
        private branchId: number; private BranchName: string;
        constructor(container: JQuery) {
            super(container);
            LoadingTripService.GetBranch({}, response => {
                this.branchId = response.BranchId;
                (this as any).branchName = response.BranchName;
                console.log(this.BranchName + this.branchId);
                this.refresh();

            });
            
        }

        



        protected createToolbarExtensions() {
             
            super.createToolbarExtensions();
            this.addQuickFilter({
                field: fld.PlantId,
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: Default.PlantRow.lookupKey
                }
            });
            this.addQuickFilter({
                field: fld.BranchId,
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: Default.BranchMasterRow.lookupKey

                },
                init: (w: Serenity.LookupEditor) => {

                    let interval = setInterval(() => {
                        if (this.branchId == 8) {
                            //w.element.attr('disabled', 'disabled');
                            clearInterval(interval);
                        }
                        else if (this.branchId) {
                            w.element.attr('disabled', 'disabled');
                            w.value = this.branchId.toString();
                            clearInterval(interval);
                        }
                    }, 200);
                }
               

            });
            
            
            this.addDateRangeFilter(fld.TripDate);
           
        }



    }
}