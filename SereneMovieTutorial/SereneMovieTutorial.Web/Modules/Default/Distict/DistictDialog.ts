
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class DistictDialog extends Serenity.EntityDialog<DistictRow, any> {
        protected getFormKey() { return DistictForm.formKey; }
        protected getIdProperty() { return DistictRow.idProperty; }
        protected getLocalTextPrefix() { return DistictRow.localTextPrefix; }
        protected getNameProperty() { return DistictRow.nameProperty; }
        protected getService() { return DistictService.baseUrl; }
        protected getDeletePermission() { return DistictRow.deletePermission; }
        protected getInsertPermission() { return DistictRow.insertPermission; }
        protected getUpdatePermission() { return DistictRow.updatePermission; }

        protected form = new DistictForm(this.idPrefix);

    }
}