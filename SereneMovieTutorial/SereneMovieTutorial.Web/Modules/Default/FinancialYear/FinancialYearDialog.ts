
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class FinancialYearDialog extends Serenity.EntityDialog<FinancialYearRow, any> {
        protected getFormKey() { return FinancialYearForm.formKey; }
        protected getIdProperty() { return FinancialYearRow.idProperty; }
        protected getLocalTextPrefix() { return FinancialYearRow.localTextPrefix; }
        protected getNameProperty() { return FinancialYearRow.nameProperty; }
        protected getService() { return FinancialYearService.baseUrl; }
        protected getDeletePermission() { return FinancialYearRow.deletePermission; }
        protected getInsertPermission() { return FinancialYearRow.insertPermission; }
        protected getUpdatePermission() { return FinancialYearRow.updatePermission; }

        protected form = new FinancialYearForm(this.idPrefix);

    }
}