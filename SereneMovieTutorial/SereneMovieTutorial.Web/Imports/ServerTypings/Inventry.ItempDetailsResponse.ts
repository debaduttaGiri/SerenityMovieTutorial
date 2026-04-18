namespace SereneMovieTutorial.Inventry {
    export interface ItempDetailsResponse extends Serenity.ServiceResponse {
        Details?: ItemRow;
        ErrorMsg?: string;
    }
}

