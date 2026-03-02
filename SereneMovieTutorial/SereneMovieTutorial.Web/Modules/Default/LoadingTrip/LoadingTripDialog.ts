namespace SereneMovieTutorial.Default {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class LoadingTripDialog extends Serenity.EntityDialog<LoadingTripRow, any> {
        protected getFormKey() { return LoadingTripForm.formKey; }
        protected getIdProperty() { return LoadingTripRow.idProperty; }
        protected getLocalTextPrefix() { return LoadingTripRow.localTextPrefix; }
        protected getNameProperty() { return LoadingTripRow.nameProperty; }
        protected getService() { return LoadingTripService.baseUrl; }
        protected getDeletePermission() { return LoadingTripRow.deletePermission; }
        protected getInsertPermission() { return LoadingTripRow.insertPermission; }
        protected getUpdatePermission() { return LoadingTripRow.updatePermission; }

        protected form = new LoadingTripForm(this.idPrefix);


        protected afterLoadEntity() {

            super.afterLoadEntity();
            LoadingTripService.GetBranch({
                BranchName: this.form.Branch.value,
                BranchId: this.form.BranchId.value
            },
                res => {
                    this.form.Branch.value = res.BranchName,
                        this.form.BranchId.value = res.BranchId
                });
                this.form.VehicleId.changeSelect2(() => {
                    this.getVehicleOwners();
                    if (!this.form.VehicleId.value) {
                        this.form.CustomerId.value = null;
                        this.form.Wheels.value = null;
                        
                    }
                });
                this.form.Wheels.change(() => {
                    this.getExpense();
                });
                this.form.PlantId.changeSelect2(() => {
                    this.getExpense();
                    if (!this.form.PlantId.value) {
                        this.clearExpenseFields();
                    }
                });

                this.form.DistrictId.changeSelect2(() => {
                    this.getExpense();
                    if (!this.form.DistrictId.value) {
                        this.clearExpenseFields();
                    }
                });

                this.form.DestinationId.changeSelect2(() => {
                    this.getExpense();
                    if (!this.form.DestinationId.value) {
                        this.clearExpenseFields();
                    }
                });
                this.form.Weight.changeSelect2(() => {
                    this.getExpense();
                    if (!this.form.Weight.value) {
                        this.clearExpenseFields();
                    }
                });

            if (this.isNew()) {

                let user = Q.Authorization.userDefinition;

                //this.form.BranchId.value = user.Permissions.BranchId;
                this.form.Branch.value = user.BranchName;
            }
            
        }

        private loadExpense() {
            //debugger
            if (!this.form.PlantId.value ||
                !this.form.DistrictId.value ||
                !this.form.DestinationId.value ||
                !this.form.Weight.value)
                return;

            LoadingTripService.GetExpenseByRoute({
                PlantId: Q.toId(this.form.PlantId.value),
                DistrictId: Q.toId(this.form.DistrictId.value),
                DestinationId: Q.toId(this.form.DestinationId.value),
                Weight: this.form.Weight.value
                   
                 
            }, res => {

                this.form.ExpenseAmount.value = res.ExpenseAmount;
                //this.form.Weight.value = res.weight;
            });
        }


        private clearExpenseFields() {
            this.form.ExpenseAmount.value = null;
         }


        private getVehicleOwners() {
            if (!this.form.VehicleId.value)
                return;

            LoadingTripService.GetVehicleDetails({
                VehicleId: Q.toId(this.form.VehicleId.value)
            }, res => {

                if (!res.Details) {
                    this.form.CustomerId.value = null;
                    this.form.Wheels.value = null;
                    //this.form.Weight.value = null;
                    return;
                }

                this.form.CustomerId.value = res.Details.CustomerId.toString();
                this.form.Wheels.value = res.Details.Wheels;
                //this.form.Weight.value = res.Details.Weight;
            });

        }

        public getExpense() {
            if (this.form.PlantId.value  ) {
                LoadingTripService.GetExpenseByRoute({
                    PlantId: this.form.PlantId.value,
                    DistrictId: this.form.DistrictId.value,
                    DestinationId: this.form.DestinationId.value,
                    Wheels: this.form.Wheels.value,
                    Weight: this.form.Weight.value,
                 }, res => {

                    if (!res.Details) {
                        this.form.ExpenseAmount.value = null; 
                        return;
                    }

                    this.form.ExpenseAmount.value = res.Details.Expense.toString();
                 });
            }

        }   
    }
}