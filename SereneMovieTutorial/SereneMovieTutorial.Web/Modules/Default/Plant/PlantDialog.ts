
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class PlantDialog extends Serenity.EntityDialog<PlantRow, any> {
        protected getFormKey() { return PlantForm.formKey; }
        protected getIdProperty() { return PlantRow.idProperty; }
        protected getLocalTextPrefix() { return PlantRow.localTextPrefix; }
        protected getNameProperty() { return PlantRow.nameProperty; }
        protected getService() { return PlantService.baseUrl; }
        protected getDeletePermission() { return PlantRow.deletePermission; }
        protected getInsertPermission() { return PlantRow.insertPermission; }
        protected getUpdatePermission() { return PlantRow.updatePermission; }

        protected form = new PlantForm(this.idPrefix);

    }
}