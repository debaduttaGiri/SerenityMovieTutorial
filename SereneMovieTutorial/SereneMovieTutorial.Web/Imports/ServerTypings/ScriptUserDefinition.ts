namespace SereneMovieTutorial {
    export interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: { [key: string]: boolean };
        BranchId?: number;
        BranchName?: string;
    }
}

