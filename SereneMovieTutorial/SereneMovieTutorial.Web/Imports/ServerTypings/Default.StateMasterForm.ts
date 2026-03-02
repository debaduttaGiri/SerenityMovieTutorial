namespace SereneMovieTutorial.Default {
    export interface StateMasterForm {
        State: Serenity.StringEditor;
        StateCode: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class StateMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.StateMaster';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StateMasterForm.init)  {
                StateMasterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(StateMasterForm, [
                    'State', w0,
                    'StateCode', w0,
                    'Remarks', w0
                ]);
            }
        }
    }
}

