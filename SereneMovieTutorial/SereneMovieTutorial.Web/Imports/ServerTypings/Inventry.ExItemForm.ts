namespace SereneMovieTutorial.Inventry {
    export interface ExItemForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class ExItemForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.ExItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExItemForm.init)  {
                ExItemForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(ExItemForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

