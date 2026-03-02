namespace SereneMovieTutorial.Default {
    export interface DistictForm {
        Plant: Serenity.LookupEditor;
        Distict: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class DistictForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Distict';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DistictForm.init)  {
                DistictForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(DistictForm, [
                    'Plant', w0,
                    'Distict', w1,
                    'Remarks', w1
                ]);
            }
        }
    }
}

