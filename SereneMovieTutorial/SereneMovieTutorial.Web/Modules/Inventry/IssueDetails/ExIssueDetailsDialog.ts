namespace SereneMovieTutorial.Inventry {
  
    @Serenity.Decorators.registerClass()
    export class ExIssueDetailsDialog extends Common.GridEditorDialog<IssueDetailsRow> {

        protected getFormKey() { return IssueDetailsForm.formKey; }
        protected getIdProperty() { return IssueDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return IssueDetailsRow.localTextPrefix; }
        protected getService() { return IssueDetailsService.baseUrl; }

        protected form = new IssueDetailsForm(this.idPrefix);
        private syncing = false;
        

        protected afterLoadEntity() {
            super.afterLoadEntity();
            


            this.form.PartNumber.changeSelect2(e => {

                if (this.syncing)
                    return;

                let itemId = Q.toId(this.form.PartNumber.value);

                if (itemId == null) {

                    this.syncing = true;
                    this.form.PartName.value = null;
                    this.form.ItemId.value = null;
                    this.syncing = false;

                    this.form.PartName.readOnly = false;
                    return;
                }

                this.syncing = true;
                this.form.PartName.value = itemId.toString();
                this.syncing = false;

                this.form.ItemId.value = itemId.toString();

                this.form.PartName.readOnly = true;

                IssueDetailsService.GetItemDetails({
                    ItemId: itemId
                }, res => {

                    this.form.Rate.value = res.Rate;
                    this.form.TotalStock.value = res.BalanceStock;
                    this.form.StockAsOnDate.value = res.TodayStock;
                });
            });

           

            this.form.PartName.changeSelect2(e => {

                if (this.syncing)
                    return;

                let itemId = Q.toId(this.form.PartName.value);

                if (itemId == null) {

                    this.syncing = true;
                    this.form.PartNumber.value = null;
                    this.form.ItemId.value = null;
                    this.syncing = false;

                    this.form.PartNumber.readOnly = false;
                    return;
                }

                this.syncing = true;
                this.form.PartNumber.value = itemId.toString();
                this.syncing = false;

                this.form.ItemId.value = itemId.toString();

                this.form.PartNumber.readOnly = true;

                IssueDetailsService.GetItemDetails({
                    ItemId: itemId
                }, res => {

                    this.form.Rate.value = res.Rate;
                    this.form.TotalStock.value = res.BalanceStock;
                    this.form.StockAsOnDate.value = res.TodayStock;
                });
            });


            this.form.Qty.change(e => {

                let qty = Number(this.form.Qty.value) || 0;
                let rate = Number(this.form.Rate.value) || 0;

                this.form.PartAmount.value = qty * rate;
            });





        }

        protected getSaveEntity() {
            let entity = super.getSaveEntity();

            console.log(this);
            let itemId = Q.toId(this.form.ItemId.value);

            console.log(Q.getLookup("Inventry.ItemName").itemById[itemId]);

            let item = Q.getLookup("Inventry.ItemName").itemById[itemId];

            entity.ItemId = itemId;

            entity.Partname = item.Partname;
            entity.Partnumber = item.Partnumber;

            return entity;
        }
    }
}