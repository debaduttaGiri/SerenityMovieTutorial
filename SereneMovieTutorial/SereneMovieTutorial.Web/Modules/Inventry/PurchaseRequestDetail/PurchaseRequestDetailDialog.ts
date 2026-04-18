
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class PurchaseRequestDetailDialog extends Serenity.EntityDialog<PurchaseRequestDetailRow, any> {
        protected getFormKey() { return PurchaseRequestDetailForm.formKey; }
        protected getIdProperty() { return PurchaseRequestDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseRequestDetailRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseRequestDetailRow.nameProperty; }
        protected getService() { return PurchaseRequestDetailService.baseUrl; }
       

        protected form = new PurchaseRequestDetailForm(this.idPrefix);
        protected getToolbarButtons() {
            let buttons = super.getToolbarButtons();
            buttons.splice(2, 0, {
                title: "Save & New", cssClass: "save-and-new-button", icon: "fa-save", onClick: () => {
                    this.save(() => {
                        this.loadEntity({});
                    });
                }
            });
            return buttons;
        }
        constructor() {
            super();
            this.form.CgstRate.change(e => this.toggleTaxFields());
            this.form.SgstRate.change(e => this.toggleTaxFields());
            this.form.IgstRate.change(e => this.toggleTaxFields());

            this.form.CgstRate && this.form.SgstRate.change(e => this.calculateTotal());
            this.form.IgstRate.change(e => this.calculateTotal());
            
        }
        private toggleTaxFields() {
            const cgstVal = Number(this.form.CgstRate.value);
            const sgstVal = Number(this.form.SgstRate.value);
            const igstVal = Number(this.form.IgstRate.value);

            if ((cgstVal && cgstVal !== 0) || (sgstVal && sgstVal !== 0)) {
                Serenity.EditorUtils.setReadOnly(this.form.IgstRate, true);
            } else {
                Serenity.EditorUtils.setReadOnly(this.form.IgstRate, false);
            }

            if (igstVal && igstVal !== 0) {
                Serenity.EditorUtils.setReadOnly(this.form.CgstRate, true);
                Serenity.EditorUtils.setReadOnly(this.form.SgstRate, true);
            } else {
                Serenity.EditorUtils.setReadOnly(this.form.CgstRate, false);
                Serenity.EditorUtils.setReadOnly(this.form.SgstRate, false);
            }
        }
        private calculateTotal() {
            const rate = Number(this.form.CurrentRate.value);
            const qty = Number(this.form.Quantity.value);

            let baseAmount = rate * qty;

            // GST percentages
            const cgst = Number(this.form.CgstRate.value);
            const sgst = Number(this.form.SgstRate.value);
            const igst = Number(this.form.IgstRate.value);

            // Apply GST
            let gstAmount = 0;
            if (cgst > 0 || sgst > 0) {
                gstAmount += (baseAmount * cgst / 100);
                gstAmount += (baseAmount * sgst / 100);
            } else if (igst > 0) {
                gstAmount += (baseAmount * igst / 100);
            }

            const total = baseAmount + gstAmount;

            // Update form fields
            this.form.BasicAmount.value = baseAmount;
            this.form.TotalAmount.value = total;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.calculateTotal();
            this.form.ItemId.changeSelect2(e => {
                Inventry.PurchaseRequestDetailService.GetItemDetails({
                    Id: Number(this.form.ItemId.value)
                }, r => {
                  
                    if (r && r.Details) {
                        this.form.PartNo.value = r.Details.Partnumber.toString();
                        this.form.PreviousRate.value = r.Details.Rate;
                        this.form.BalanceStock.value = r.Details.Balancestock;
                        this.form.StockLevelMax.value = r.Details.Stocklvlmaximum;
                        this.form.StockLevelMin.value = r.Details.Stocklvlminimum;
                        
                    } else {
                       
                        this.form.PartNo.value = "";
                        this.form.PreviousRate.value = null;
                        this.form.BalanceStock.value = null;
                        this.form.StockLevelMax.value = null;
                        this.form.StockLevelMin.value = null;
                    }
                });
            });
        this.toggleTaxFields();
        }
    }
}