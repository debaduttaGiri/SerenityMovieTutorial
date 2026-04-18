namespace SereneMovieTutorial.Default {
    export interface UnitForm {
        UnitName: Serenity.StringEditor;
    }

    export class UnitForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Unit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UnitForm.init)  {
                UnitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(UnitForm, [
                    'UnitName', w0
                ]);
            }
        }
    }
}

