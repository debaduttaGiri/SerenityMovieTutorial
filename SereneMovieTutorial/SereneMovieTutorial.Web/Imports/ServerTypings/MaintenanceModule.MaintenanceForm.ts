namespace SereneMovieTutorial.MaintenanceModule {
    export interface MaintenanceForm {
        EntryNumber: Serenity.IntegerEditor;
        EntryDate: Serenity.DateEditor;
        HeadId: Serenity.LookupEditor;
        TruckId: Serenity.LookupEditor;
        TruckType: Serenity.EnumEditor;
        Owner: Serenity.LookupEditor;
        ModelNumber: Serenity.StringEditor;
        LastMaintenance: Serenity.DateEditor;
        PeriodTill: Serenity.StringEditor;
        EstimatedPeriod: Serenity.IntegerEditor;
        DueDate: Serenity.DateEditor;
        Narration: Serenity.StringEditor;
    }

    export class MaintenanceForm extends Serenity.PrefixedContext {
        static formKey = 'MaintenanceModule.Maintenance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaintenanceForm.init)  {
                MaintenanceForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.EnumEditor;
                var w4 = s.StringEditor;

                Q.initFormType(MaintenanceForm, [
                    'EntryNumber', w0,
                    'EntryDate', w1,
                    'HeadId', w2,
                    'TruckId', w2,
                    'TruckType', w3,
                    'Owner', w2,
                    'ModelNumber', w4,
                    'LastMaintenance', w1,
                    'PeriodTill', w4,
                    'EstimatedPeriod', w0,
                    'DueDate', w1,
                    'Narration', w4
                ]);
            }
        }
    }
}

