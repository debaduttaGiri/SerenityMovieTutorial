
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class IssueDetailsDialog extends Serenity.EntityDialog<IssueDetailsRow, any> {
        protected getFormKey() { return IssueDetailsForm.formKey; }
        protected getIdProperty() { return IssueDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return IssueDetailsRow.localTextPrefix; }
        protected getNameProperty() { return IssueDetailsRow.nameProperty; }
        protected getService() { return IssueDetailsService.baseUrl; }
        protected getDeletePermission() { return IssueDetailsRow.deletePermission; }
        protected getInsertPermission() { return IssueDetailsRow.insertPermission; }
        protected getUpdatePermission() { return IssueDetailsRow.updatePermission; }

        protected form = new IssueDetailsForm(this.idPrefix);

        protected afterLoadEntity() {
            super.afterLoadEntity();

            console.log(this.form);

            this.form.PartNumber.changeSelect2(e => {

                let itemId = Q.toId(this.form.PartNumber.value);

                this.form.PartName.value = itemId.toString();

                this.form.ItemId.value = itemId.toString();

                IssueDetailsService.GetItemDetails({
                    ItemId: itemId
                }, res => {

                    this.form.Rate.value = res.Rate;
                    this.form.TotalStock.value = res.BalanceStock;
                    
                });

                IssueDetailsService.GetTodayStock({
                    ItemId: itemId
                }, response => {

                    this.form.StockAsOnDate.value = response.TodayStock;
                });
            });

            this.form.PartName.changeSelect2(e => {

                let itemId = Q.toId(this.form.PartName.value);

                this.form.PartNumber.value = itemId.toString();

                this.form.ItemId.value = itemId.toString();


                IssueDetailsService.GetItemDetails({
                    ItemId: itemId
                }, res => {

                    this.form.Rate.value = res.Rate;
                    this.form.TotalStock.value = res.BalanceStock;
                    
                });

                IssueDetailsService.GetTodayStock({
                    ItemId: itemId
                }, response => {

                    this.form.StockAsOnDate.value = response.TodayStock;
                });
            });



            //IssueDetailsService.GetItemDetails({
            //    ItemId: itemId
            //}, res => {

            //    this.form.Rate.value = res.Rate;
            //    this.form.TotalStock.value = res.BalanceStock;

            //    this.form.StockAsOnDate.valueAsDate = new Date();

            //});
            this.form.Qty.change(e => {

                let qty = Number(this.form.Qty.value) || 0;
                let rate = Number(this.form.Rate.value) || 0;

                this.form.PartAmount.value = qty * rate;
            });





        }

        

    }
}