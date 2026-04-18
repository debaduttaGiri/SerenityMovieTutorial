namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerEditor()
    export class MultipleDateEditor extends Serenity.StringEditor {

        constructor(input: JQuery) {
            super(input);

            let picker = (input as any).datepicker({
                format: "yyyy-mm-dd",
                multidate: true,
                todayHighlight: true,
                autoclose: false
            });

            input.on("changeDate", () => {

                let dates = picker.datepicker("getDates");
                let result: string[] = [];

                for (let i = 0; i < dates.length; i++) {
                    result.push(Q.formatDate(dates[i], "yyyy-MM-dd"));
                }
                console.log(result);

                input.val(result.join(","));
            });
        }

        public get_value(): string {
            return this.element.val();
        }

        public set_value(value: string): void {

            this.element.val(value);

            if (value) {
                let dates = value.split(",");
                (this.element as any).datepicker("setDates", dates);
            }
        }
    }
}