namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class PurchaseRequestDetailEditorDialog extends Common.GridEditorDialog<PurchaseRequestDetailRow> {
        protected getFormKey() { return PurchaseRequestDetailForm.formKey; }
        protected getIdProperty() { return PurchaseRequestDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseRequestDetailRow.localTextPrefix; }
        protected getService() { return PurchaseRequestDetailService.baseUrl; }
       

        protected form = new PurchaseRequestDetailForm(this.idPrefix);
        //public parentPoNo: string;
        protected getSaveEntity() {
            let entity = super.getSaveEntity();

            if (this.entity && this.entity.PoNo) {
                entity.PoNo = this.entity.PoNo;
            }

            let lookup = Default.UnitRow.getLookup();
            if (entity.UnitId && lookup.itemById[entity.UnitId])
                entity.UnitName = lookup.itemById[entity.UnitId].UnitName;

            let unitLookup = Inventry.ItemRow.getLookup();
            if (entity.ItemId && unitLookup.itemById[entity.ItemId]) {
                entity.PartName = unitLookup.itemById[entity.ItemId].Partname;
            }

            return entity;
        }
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
           
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            Serenity.EditorUtils.setRequired(this.form.TotalAmount, true);
            this.form.PoNo.element.closest(".field").hide();
            this.form.Quantity.changeSelect2(() => {
                let qty = this.form.Quantity.value || 0;
                let rate = this.form.CurrentRate.value || 0;
                let basic = qty * rate;
                this.form.BasicAmount.value = basic;
            })
            this.form.CurrentRate.changeSelect2(() => {
                let qty = this.form.Quantity.value || 0;
                let rate = this.form.CurrentRate.value || 0;
                let basic = qty * rate;
                this.form.BasicAmount.value = basic;
            })
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
            this.form.CgstRate.changeSelect2(() => {
                this.calculateGST();
                this.toggleTaxFields();

            })
            this.form.SgstRate.changeSelect2(() => {
                this.calculateGST();
                this.toggleTaxFields();

            })
            this.form.IgstRate.changeSelect2(() => {
                this.calculateGST();
                this.toggleTaxFields();

            })
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
        private calculateGST() {
            let cgst =  this.form.CgstRate.value || 0;
            let sgst =  this.form.SgstRate.value || 0;
            let igst = this.form.IgstRate.value || 0;
            let basic = this.form.BasicAmount.value || 0;
            let cgstAmount = 0;
            let igstAmount = 0;
            let sgstAmount = 0;

            if (cgst > 0 || sgst > 0) {
                cgstAmount = (basic * cgst / 100);
                sgstAmount = (basic * sgst / 100);
            } else if (igst > 0) {
                igstAmount = (basic * igst / 100);
            }
            if (this.form.BasicAmount.value > 0) {
                this.form.CgstAmount.value = cgstAmount;
                this.form.SgstAmount.value = sgstAmount;
                this.form.IgstAmount.value = igstAmount; 
                this.form.TotalAmount.value = basic + cgstAmount + sgstAmount + igstAmount;
            }
          
        }

     

        
    }
        



    

}