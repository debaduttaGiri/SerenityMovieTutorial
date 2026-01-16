namespace SereneMovieTutorial.Default {
    export interface PersonForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        BirthPlace: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        Height: Serenity.IntegerEditor;
        PrimaryImage: Serenity.ImageUploadEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
    }

    export class PersonForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Person';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonForm.init)  {
                PersonForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.EnumEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.ImageUploadEditor;
                var w5 = s.MultipleImageUploadEditor;

                Q.initFormType(PersonForm, [
                    'FirstName', w0,
                    'LastName', w0,
                    'BirthDate', w1,
                    'BirthPlace', w0,
                    'Gender', w2,
                    'Height', w3,
                    'PrimaryImage', w4,
                    'GalleryImages', w5
                ]);
            }
        }
    }
}

