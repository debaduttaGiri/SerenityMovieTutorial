
namespace SereneMovieTutorial.Inventry {

    import fld = PendingPurchaseOrderRow.Fields;
    @Serenity.Decorators.registerClass()
    export class PendingPurchaseOrderGrid extends Serenity.EntityGrid<PendingPurchaseOrderRow, any> {
        protected getColumnsKey() { return 'Inventry.PendingPurchaseOrder'; }
        protected getDialogType() { return PurchaseBillDialog; }
        protected getIdProperty() { return PendingPurchaseOrderRow.idProperty; }
        protected getInsertPermission() { return PendingPurchaseOrderRow.insertPermission; }
        protected getLocalTextPrefix() { return PendingPurchaseOrderRow.localTextPrefix; }
        protected getService() { return PendingPurchaseOrderService.baseUrl; }

        //private selectedItems: { [key: number]: boolean } = {};
        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);


        }
        protected getColumns() {
            
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }
        protected addButtonClick() {

            let rows: SereneMovieTutorial.Inventry.PurchaseBillDetailRow[] = [];

            let selectedKeys = this.rowSelection.getSelectedKeys();

            let PONOFilter = this.findQuickFilter(Serenity.StringEditor, fld.PoNo);
            console.log("Pono filter val "+PONOFilter.value);
            let PartyFilter = this.findQuickFilter(Serenity.LookupEditor, fld.PartyId);
            //let purchaseOrderIdFilter = this.findQuickFilter(Serenity.LookupEditor, fld.PurchaseOrderId);

            //  Validations
            if (Q.isEmptyOrNull(PONOFilter.value)) {
                Q.alert('Give PoNo as filter criteria.');
                this.rowSelection.resetCheckedAndRefresh();
                return;
            }

            if (Q.isEmptyOrNull(PartyFilter.value)) {
                Q.alert('Select Party Name as filter criteria.');
                this.rowSelection.resetCheckedAndRefresh();
                return;
            }

            if (!selectedKeys || selectedKeys.length === 0) {
                Q.alert('Select at least one item to create Bill.');
                this.rowSelection.resetCheckedAndRefresh();
                return;
            }

            //  Async call (correct way)
            PendingPurchaseOrderService.GetSelectedTrips({
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
                    rows.push({
                        PurchaseOrderId: trip.PurchaseOrderId,   
                        ItemId: trip.ItemId, 
                        PreviousRate: Number(trip.PreviousRate) || 0,
                        CurrentRate: trip.CurrentRate,
                        Quantity: trip.Quantity,
                        ItemName: trip.Partname, 
                        Discount: 0,
                        CgstRate: trip.CGSTRate,
                        TaxableAmount: trip.BasicAmount,
                        CgstAmount: trip.CgstAmount,
                        SgstRate: trip.SGSTRate,
                        SgstAmount: trip.SgstAmount,
                        IgstRate: trip.IGSTRate,
                        IgstAmount: trip.IgstAmount,
                        TotalAmount: trip.TotalAmount,
                        
                    });
                }
                //  Dialog creation (fixed order)
                let dlg = new PurchaseBillDialog(rows); 
                dlg.SelectedPartyId = Number(PartyFilter.value);
                dlg.SelectedPoNo =PONOFilter.value.toString();
                console.log("PonoFilter"+PONOFilter.value);
                console.log("Dlg pono"+dlg.SelectedPoNo)
                 this.initDialog(dlg);
                dlg.loadNewAndOpenDialog(); 
                this.rowSelection.resetCheckedAndRefresh();

            }); 
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();

            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            this.addQuickFilter({
                field: fld.PoNo,
                title: "PO No",
                type: Serenity.StringEditor
            });
            this.addQuickFilter({
                field: fld.PartyId,
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: SereneMovieTutorial.Default.PartyMasterRow.lookupKey,//.AccountsLedgersRow.lookupKey,
                    //cascadeField: "PartyId",
                    //cascadeValue: 1
                }
            });


            let PONOFilter = this.findQuickFilter(Serenity.StringEditor, fld.PoNo);
            let PartyFilter = this.findQuickFilter(Serenity.LookupEditor, fld.PartyId);

            PONOFilter.element.on('change', e => {
                let poValue = PONOFilter.value;
                if (!poValue) {
                    this.refresh();
                    this.rowSelection.resetCheckedAndRefresh();
                }
            });
            PartyFilter.element.on('change', e => {
                let partyidvalue = PartyFilter.value;
                if (!partyidvalue) {
                    this.refresh();
                    this.rowSelection.resetCheckedAndRefresh();
                }
            });
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(1, 1);
            buttons.push(SereneMovieTutorial.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Inventry/PendingPurchaseOrder/ListExcel',
                separator: true
            }));
            
            return buttons;
        }
    }
}

       