
namespace SereneMovieTutorial.Inventry {

    @Serenity.Decorators.registerClass()
    export class ExItemDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey() { return ExItemForm.formKey; }
        private form: ExItemForm;


        constructor() {
            super();
            this.form = new ExItemForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Excel Import";
        }

        protected getDialogButtons(): { text: string; click: () => void; }[] {
            return [
                {
                    text: 'Import',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }

                        ItemService.ExcelImport({
                            FileName: this.form.FileName.value.Filename
                        }, response => {
                            Q.notifyInfo(
                                'Inserted: ' + (response.Inserted || 0) +
                                ', Updated: ' + (response.Updated || 0));

                            if (response.ErrorList?.length > 0) {
                                Q.notifyError(response.ErrorList.join(',\r\n '));
                            }

                            this.dialogClose();
                        });
                    }
                },
                {
                    text: 'Cancel',
                    click: () => this.dialogClose()
                }
            ];
        }

    }
}