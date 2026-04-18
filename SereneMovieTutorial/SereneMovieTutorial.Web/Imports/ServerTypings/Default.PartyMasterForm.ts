namespace SereneMovieTutorial.Default {
    export interface PartyMasterForm {
        Name: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Gst: Serenity.StringEditor;
        Pan: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
    }

    export class PartyMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PartyMaster';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PartyMasterForm.init)  {
                PartyMasterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(PartyMasterForm, [
                    'Name', w0,
                    'Email', w0,
                    'PhoneNumber', w0,
                    'Gst', w0,
                    'Pan', w0,
                    'StateId', w1,
                    'Address', w0
                ]);
            }
        }
    }
}

