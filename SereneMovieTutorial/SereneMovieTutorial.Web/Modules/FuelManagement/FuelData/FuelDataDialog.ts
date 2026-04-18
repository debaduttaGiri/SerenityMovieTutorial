
namespace SereneMovieTutorial.FuelManagement {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()

    export class FuelDataDialog extends Serenity.EntityDialog<FuelDataRow, any> {
        protected getFormKey() { return FuelDataForm.formKey; }
        protected getIdProperty() { return FuelDataRow.idProperty; }
        protected getLocalTextPrefix() { return FuelDataRow.localTextPrefix; }
        protected getNameProperty() { return FuelDataRow.nameProperty; }
        protected getService() { return FuelDataService.baseUrl; }
        protected getDeletePermission() { return FuelDataRow.deletePermission; }
        protected getInsertPermission() { return FuelDataRow.insertPermission; }
        protected getUpdatePermission() { return FuelDataRow.updatePermission; }
       
        protected form = new FuelDataForm(this.idPrefix);
        


        //public currentTankerNo: string;
        private updateAllottedQty() {

            let total = 0;

            let items = this.form.FuelDetails.getItems();

            for (let item of items) {
                total += item.Quantity || 0;
            }

            this.form.AllottedQuantity.value = total;
        }
       
        constructor() {
            super();

            //let editor = this.form.FuelDetails as FuelDetailsEditor;

            //// ✅ set parent reference
            //editor.parentDialog = this;

            this.form.FuelDetails.view.onDataChanged.subscribe(() => {
                this.updateAllottedQty();
            });

            this.form.QtyKl.change(e => {

                this.calculateQuantityLtr();
                //this.calculateTransportationAmount();

            });
            this.form.TotalAmount.change(e => {
                this.calculateRateKl();
                this.calculateRateLtr();
            })

            //this.form.RateKl.change(e => {

            //    this.calculateRateLtr();

            //});

            this.form.TransportationRate.change(e => {

                this.calculateTransportationAmount();

            });

            //this.form.TankerNo.changeSelect2(() => {
            //    (this.form.FuelDetails as FuelDetailsEditor).TankerName = this.form.TankerNo.value;
            //    console.log(this.form.FuelDetails as FuelDetailsEditor);
            //});

        }
        private calculateQuantityLtr() {

            let qtykl = this.form.QtyKl.value || 0;

            this.form.QuantityLtr.value = qtykl * 1000;
        }

        private calculateRateLtr() {

            let totalAmount = this.form.TotalAmount.value || 0;
            let qtyLtr = this.form.QuantityLtr.value || 0;

            this.form.RateLtr.value = totalAmount / qtyLtr;

            //this.form.RateLtr.value = ratekl / 1000;
            console.log(this.form.RateLtr +' // '+ this.form.RateKl)
        }
        private calculateRateKl() {
            //let ratekl = this.form.RateKl.value || 0;
            let TotalAmount = this.form.TotalAmount.value || 0;
            let qtyKl = this.form.QtyKl.value || 0;
            this.form.RateKl.value = TotalAmount / qtyKl;
        }

        private calculateTransportationAmount() {

            let qtykl = this.form.QtyKl.value || 0;
            let rate = this.form.TransportationRate.value || 0;

            this.form.TransportationAmt.value = qtykl * rate;
        }

        protected validateBeforeSave(): boolean {

            this.updateAllottedQty();

            let allotted = this.form.AllottedQuantity.value || 0;
            let qtyLtr = this.form.QuantityLtr.value || 0;

            if (allotted !== qtyLtr) {

                Q.alert("Allotted Quantity must be equal to Quantity LTR");

                return false;
            }

            return super.validateBeforeSave();
        }
        public getTankerNo(): string {
            return this.form.TankerNo.value;
        }

        
        //protected afterLoadEntity() {
        //    super.afterLoadEntity();

        //    let editor = this.form.FuelDetails as FuelDetailsEditor;
        //    editor.parentDialog = this;

        //    this.handleFuelDetailsVisibility();

        //    this.form.ShowFuelDetails.changeSelect2(e => {
        //        this.handleFuelDetailsVisibility();
        //    });
        //}

        protected afterLoadEntity() {
            super.afterLoadEntity();
            
            let editor = this.form.FuelDetails as any;
            editor.parentDialog = this;

            if (this.isNew() || !this.form.ShowFuelDetails.value) {
                this.form.ShowFuelDetails.value = "1";
            }
           

            this.form.ShowFuelDetails.changeSelect2(e => {

                let val = this.form.ShowFuelDetails.value;

                // If user selects "No"
                if (val === "0" && this.hasFuelDetailsData()) {

                    Q.alert("You cannot select 'No' because Fuel Details contains data.");

                    // revert back to Yes
                    this.form.ShowFuelDetails.value = "1";

                    return;
                }

                this.handleFuelDetailsVisibility();
            });
            this.handleFuelDetailsVisibility();
        }

        private hasFuelDetailsData(): boolean {
            let editor = this.form.FuelDetails as any;

            return editor.view.getItems().length > 0;
        }

        //private handleFuelDetailsVisibility() {
        //    let show = !! Number(this.form.ShowFuelDetails.value);
        //    this.form.FuelDetails.getGridField().toggle(show);
        //}
        private handleFuelDetailsVisibility() {
            let field = this.byId("FuelDetails").closest(".field");

            if (this.form.ShowFuelDetails.value === "1") {
                field.show();
            } else {
                field.hide();
            }
        }

    }
}