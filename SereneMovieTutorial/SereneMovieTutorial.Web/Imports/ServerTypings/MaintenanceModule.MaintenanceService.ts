namespace SereneMovieTutorial.MaintenanceModule {
    export namespace MaintenanceService {
        export const baseUrl = 'MaintenanceModule/Maintenance';

        export declare function Create(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetDetails(request: GetVehicleDetailsRequest, onSuccess?: (response: GetVehicleDetailsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetLatestMaintenance(request: GetLatestMaintenanceRequest, onSuccess?: (response: GetLatestMaintenanceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "MaintenanceModule/Maintenance/Create",
            Update = "MaintenanceModule/Maintenance/Update",
            Delete = "MaintenanceModule/Maintenance/Delete",
            Retrieve = "MaintenanceModule/Maintenance/Retrieve",
            List = "MaintenanceModule/Maintenance/List",
            GetDetails = "MaintenanceModule/Maintenance/GetDetails",
            GetLatestMaintenance = "MaintenanceModule/Maintenance/GetLatestMaintenance"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetDetails', 
            'GetLatestMaintenance'
        ].forEach(x => {
            (<any>MaintenanceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

