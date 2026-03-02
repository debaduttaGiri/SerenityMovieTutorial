namespace SereneMovieTutorial.Default {
    export interface ItemMasterForm {
        ItemName: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class ItemMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ItemMaster';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemMasterForm.init)  {
                ItemMasterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ItemMasterForm, [
                    'ItemName', w0,
                    'Remarks', w0
                ]);
            }
        }
    }
}

