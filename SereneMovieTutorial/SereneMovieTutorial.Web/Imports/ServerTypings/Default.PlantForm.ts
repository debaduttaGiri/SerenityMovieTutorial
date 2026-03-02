namespace SereneMovieTutorial.Default {
    export interface PlantForm {
        Plant: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class PlantForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Plant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PlantForm.init)  {
                PlantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PlantForm, [
                    'Plant', w0,
                    'Remarks', w0
                ]);
            }
        }
    }
}

