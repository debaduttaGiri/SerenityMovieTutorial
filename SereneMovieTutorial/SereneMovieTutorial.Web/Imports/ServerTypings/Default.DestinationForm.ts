namespace SereneMovieTutorial.Default {
    export interface DestinationForm {
        Plant: Serenity.LookupEditor;
        Distict: Serenity.LookupEditor;
        Destination: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class DestinationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Destination';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DestinationForm.init)  {
                DestinationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(DestinationForm, [
                    'Plant', w0,
                    'Distict', w0,
                    'Destination', w1,
                    'Remarks', w1
                ]);
            }
        }
    }
}

