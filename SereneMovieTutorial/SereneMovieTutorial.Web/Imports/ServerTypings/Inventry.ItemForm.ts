namespace SereneMovieTutorial.Inventry {
    export interface ItemForm {
        Partnumber: Serenity.StringEditor;
        Partname: Serenity.StringEditor;
        Openingstock: Serenity.IntegerEditor;
        Rate: Serenity.DecimalEditor;
        Stocklvlminimum: Serenity.DecimalEditor;
        Stocklvlmaximum: Serenity.DecimalEditor;
        Purchasestock: Serenity.DecimalEditor;
        GrossPrice: Serenity.DecimalEditor;
        Balancestock: Serenity.DecimalEditor;
    }

    export class ItemForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.Item';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemForm.init)  {
                ItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ItemForm, [
                    'Partnumber', w0,
                    'Partname', w0,
                    'Openingstock', w1,
                    'Rate', w2,
                    'Stocklvlminimum', w2,
                    'Stocklvlmaximum', w2,
                    'Purchasestock', w2,
                    'GrossPrice', w2,
                    'Balancestock', w2
                ]);
            }
        }
    }
}

