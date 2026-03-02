namespace SereneMovieTutorial.Membership {
    export interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        BranchId?: number;
        FinancialYearId?: number;
    }
}

