
namespace SereneMovieTutorial.Default {
    import fld = VLoadingTripDetailsRow.Fields;
    @Serenity.Decorators.registerClass()
    export class PendingTripDetailsInvoiceGrid extends Serenity.EntityGrid<PendingTripDetailsInvoiceRow, any> {
        protected getColumnsKey() { return 'Default.PendingTripDetailsInvoice'; }
        protected getDialogType() { return PendingTripDetailsInvoiceDialog; }
        protected getIdProperty() { return PendingTripDetailsInvoiceRow.idProperty; }
        protected getInsertPermission() { return PendingTripDetailsInvoiceRow.insertPermission; }
        protected getLocalTextPrefix() { return PendingTripDetailsInvoiceRow.localTextPrefix; }
        protected getService() { return PendingTripDetailsInvoiceService.baseUrl; }
        private rowSelection: Serenity.GridRowSelectionMixin;
        public plant: number;
        public branch: number;
        public totalTrip: number = 0;
        public Invoice = Math.floor(Math.random() * 1000000);
        public SAC = Math.floor(100000 + Math.random() * 900000);
        public TotAmount:number = 0;
        public TotWeight: number = 0;
        public stateId;
        public LoadingTripId;
        public manageinvoiceId;
      
        

    

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
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
           

            return columns;
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();

            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            this.addQuickFilter({
                field: fld.LoadingTripId,
                title: "TripNo",
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: SereneMovieTutorial.Default.LoadingTripRow.lookupKey,//.AccountsLedgersRow.lookupKey,
                    //cascadeField: "PartyId",
                    //cascadeValue: 1
                }
            });
            this.addQuickFilter({
                field: fld.PlantId,
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: SereneMovieTutorial.Default.PlantRow.lookupKey,//.AccountsLedgersRow.lookupKey,
                    //cascadeField: "PartyId",
                    //cascadeValue: 1
                }
            });
            this.addDateRangeFilter(fld.TripDate);
            this.addQuickFilter({
                field: fld.VehicleId,
                title: "Vehicle",
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: SereneMovieTutorial.Default.VehicleMasterRow.lookupKey,
                }
            });
            this.addQuickFilter({
                field: fld.BranchId,
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: SereneMovieTutorial.Default.BranchMasterRow.lookupKey,
                }
            });

            
        }
        protected addButtonClick() {

            let rows: SereneMovieTutorial.Default.InvoicedetailsRow[] = [];

            let selectedKeys = this.rowSelection.getSelectedKeys();

            let TripFilter = this.findQuickFilter(Serenity.LookupEditor, fld.LoadingTripId);
            let PlantFilter = this.findQuickFilter(Serenity.LookupEditor, fld.PlantId);
            let BranchFilter = this.findQuickFilter(Serenity.LookupEditor, fld.BranchId);
            let VehicleFilter = this.findQuickFilter(Serenity.LookupEditor, fld.VehicleId);

            //  Validations
            if (Q.isEmptyOrNull(TripFilter.value)) {
                Q.alert('Give Tripno as filter criteria.');
                this.rowSelection.resetCheckedAndRefresh();
                return;
            }

            //if (Q.isEmptyOrNull(PlantFilter.value)) {
            //    Q.alert('Select plant name as filter criteria.');
            //    this.rowSelection.resetCheckedAndRefresh();
            //    return;
            //}

            //if (Q.isEmptyOrNull(BranchFilter.value)) {
            //    Q.alert('Select branch name as filter criteria.');
            //    this.rowSelection.resetCheckedAndRefresh();
            //    return;
            //}

            //if (Q.isEmptyOrNull(VehicleFilter.value)) {
            //    Q.alert('Select VehicleNo as filter criteria.');
            //    this.rowSelection.resetCheckedAndRefresh();
            //    return;
            //}

            if (!selectedKeys || selectedKeys.length === 0) {
                Q.alert('Select at least one item to create Bill.');
                this.rowSelection.resetCheckedAndRefresh();
                return;
            }

            //  Async call (correct way)
            PendingTripDetailsInvoiceService.GetSelectedTrips({
                Ids: selectedKeys
            }, res => {

                if (res.ErrorMsg) {
                    Q.alert(res.ErrorMsg);
                    return;
                }

                let TripCollection = res.Trips || [];

                if (!TripCollection.length) {
                    Q.alert('No data returned from server.');
                    return;
                }
                //dlg.CgstAmmount = TripCollection.filter(r => r.CgstAmount);

                for (let trip of TripCollection) {

                    this.LoadingTripId = trip.LoadingTripId;
                    this.plant = trip.PlantId;
                    this.branch = trip.BranchId;
                    this.totalTrip += 1;
                    this.TotAmount += trip.FreightRate;
                    this.TotWeight += trip.Weight;
                    this.stateId = trip.StateId;
                    rows.push({
                        LoadingTripId: trip.LoadingTripId, 
                        //VehicleId: trip.VehicleId,
                        VehicleNumber: trip.VehicleNumber,
                        Weight: trip.Weight,
                        
                        freightRate: trip.FreightRate,
                        Billingamount: (trip.FreightRate * trip.Weight),



                    });
                }
                 // Dialog creation (fixed order)
                let dlg = new ManageinvoiceDialog(rows);
                dlg.Plant_Id = this.plant;
                dlg.Branch_id = this.branch;
                dlg.totTrips = this.totalTrip;
                dlg.sac = this.SAC;
                dlg.invoice = this.Invoice;
                dlg.stateid = this.stateId;
                dlg.totalFreightAmount = this.TotAmount * this.TotWeight;
                dlg.TotalWeight = this.TotWeight;
                dlg.LoadingTripId = this.LoadingTripId;
                dlg.id = this.manageinvoiceId;
                this.initDialog(dlg);
                dlg.loadNewAndOpenDialog();
                this.rowSelection.resetCheckedAndRefresh();

            });
        }
        

        protected getButtons() {
            let buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: PendingTripDetailsInvoiceService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            return buttons;
        }
       
    }
}