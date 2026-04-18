namespace SereneMovieTutorial.Default {
    export interface ExpenseResponse extends Serenity.ServiceResponse {
        Details?: ExpenseRow;
        ErrorMsg?: string;
    }
}

