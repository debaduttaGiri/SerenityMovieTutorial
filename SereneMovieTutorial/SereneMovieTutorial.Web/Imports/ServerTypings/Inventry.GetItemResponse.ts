namespace SereneMovieTutorial.Inventry {
    export interface GetItemResponse extends Serenity.ServiceResponse {
        Rate?: number;
        BalanceStock?: number;
        PartName?: string;
        PartNumber?: string;
        TodayStock?: number;
    }
}

