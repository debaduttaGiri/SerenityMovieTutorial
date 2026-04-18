namespace SereneMovieTutorial.Default {
    export interface PumpmasterForm {
        Name: Serenity.StringEditor;
        Stock: Serenity.DecimalEditor;
        Gst: Serenity.StringEditor;
        Pan: Serenity.StringEditor;
        Type: Serenity.EnumEditor;
        Address: Serenity.TextAreaEditor;
    }

    export class PumpmasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Pumpmaster';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PumpmasterForm.init)  {
                PumpmasterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.EnumEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(PumpmasterForm, [
                    'Name', w0,
                    'Stock', w1,
                    'Gst', w0,
                    'Pan', w0,
                    'Type', w2,
                    'Address', w3
                ]);
            }
        }
    }
}

