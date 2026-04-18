namespace SereneMovieTutorial.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Default {

            namespace BranchMaster {
                export const Address: string;
                export const BranchCode: string;
                export const BranchName: string;
                export const GstNo: string;
                export const Id: string;
                export const PanNo: string;
                export const PhoneNumber: string;
                export const PinCode: string;
                export const Remarks: string;
                export const State: string;
                export const State1: string;
                export const StateId: string;
                export const StateRemarks: string;
                export const StateStateCode: string;
            }

            namespace Customer {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const CustomerId: string;
                export const Fax: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
            }

            namespace CustomerMaster {
                export const AddressLine1: string;
                export const AddressLine2: string;
                export const City: string;
                export const CreatedDate: string;
                export const CustomerCode: string;
                export const CustomerId: string;
                export const DateOfBirth: string;
                export const Email: string;
                export const FirstName: string;
                export const IdentityNumber: string;
                export const IdentityType: string;
                export const IsActive: string;
                export const LastName: string;
                export const MobileNumber: string;
                export const Pincode: string;
                export const State: string;
            }

            namespace Destination {
                export const Destination: string;
                export const Distict: string;
                export const Distict1: string;
                export const DistictPlant: string;
                export const DistictRemarks: string;
                export const Id: string;
                export const Plant: string;
                export const Plant1: string;
                export const PlantRemarks: string;
                export const Remarks: string;
            }

            namespace Distict {
                export const Distict: string;
                export const Id: string;
                export const Plant: string;
                export const Plant1: string;
                export const PlantRemarks: string;
                export const Remarks: string;
            }

            namespace Employees {
                export const Address: string;
                export const BirthDate: string;
                export const City: string;
                export const Country: string;
                export const EmployeeId: string;
                export const Extension: string;
                export const FullName: string;
                export const HireDate: string;
                export const HomePhone: string;
                export const PostalCode: string;
                export const Region: string;
                export const Title: string;
                export const TitleOfCourtesy: string;
            }

            namespace Expense {
                export const Destination: string;
                export const Destination1: string;
                export const DestinationDistict: string;
                export const DestinationPlant: string;
                export const DestinationRemarks: string;
                export const District: string;
                export const DistrictDistict: string;
                export const DistrictPlant: string;
                export const DistrictRemarks: string;
                export const Expense: string;
                export const ExpenseId: string;
                export const Plant: string;
                export const Plant1: string;
                export const PlantRemarks: string;
                export const Remarks: string;
                export const Weight: string;
                export const Wheels: string;
            }

            namespace FinancialYear {
                export const EndDate: string;
                export const Id: string;
                export const Name: string;
                export const NameOfInvoice: string;
                export const Remarks: string;
                export const StartDate: string;
            }

            namespace Genre {
                export const Dates: string;
                export const GenreId: string;
                export const Name: string;
            }

            namespace Invoicedetails {
                export const Billingamount: string;
                export const Challan: string;
                export const Id: string;
                export const Invoicedate: string;
                export const LoadingTripId: string;
                export const Lrno: string;
                export const ManageInvoiceId: string;
                export const VehicleNumber: string;
                export const Vehicleid: string;
                export const Weight: string;
                export const freightRate: string;
            }

            namespace ItemMaster {
                export const Id: string;
                export const ItemName: string;
                export const Remarks: string;
            }

            namespace LoadingTrip {
                export const Branch: string;
                export const BranchId: string;
                export const CreateDate: string;
                export const CreatedBy: string;
                export const CreatedByUsername: string;
                export const CreatedDate: string;
                export const Customer: string;
                export const CustomerId: string;
                export const Destination: string;
                export const DestinationId: string;
                export const District: string;
                export const DistrictId: string;
                export const ExpenseAmount: string;
                export const ItemId: string;
                export const ItemName: string;
                export const LoadingTripId: string;
                export const Plant: string;
                export const PlantId: string;
                export const Remarks: string;
                export const State: string;
                export const StateId: string;
                export const TripDate: string;
                export const TripNo: string;
                export const UpdatedBy: string;
                export const UpdatedByUsername: string;
                export const UpdatedDate: string;
                export const VehicleId: string;
                export const VehicleNumber: string;
                export const Weight: string;
                export const Wheels: string;
                export const freightRate: string;
            }

            namespace MaintenanceHead {
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const Head: string;
                export const Id: string;
                export const Remarks: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
            }

            namespace Manageinvoice {
                export const Addgst: string;
                export const Branch: string;
                export const Branchid: string;
                export const Cgstamount: string;
                export const Cgstrate: string;
                export const Fromdate: string;
                export const Id: string;
                export const Igstamount: string;
                export const Igstrate: string;
                export const InvoiceDetails: string;
                export const Invoicedate: string;
                export const Invoiceno: string;
                export const LoadingTripId: string;
                export const Localgst: string;
                export const Plant: string;
                export const Plantid: string;
                export const Pono: string;
                export const Saccode: string;
                export const Sgstamount: string;
                export const Sgstrate: string;
                export const Tax: string;
                export const Todate: string;
                export const Totalgstamount: string;
                export const Totalinvoiceamount: string;
                export const Totaltrips: string;
                export const TripNo: string;
            }

            namespace Movie {
                export const Actors: string;
                export const CastList: string;
                export const Description: string;
                export const GalleryImages: string;
                export const GenreList: string;
                export const Kind: string;
                export const MovieId: string;
                export const PrimaryImage: string;
                export const ReleaseDate: string;
                export const Runtime: string;
                export const Storyline: string;
                export const Title: string;
                export const Year: string;
            }

            namespace MovieCast {
                export const Character: string;
                export const MovieCastId: string;
                export const MovieDescription: string;
                export const MovieId: string;
                export const MovieKind: string;
                export const MovieReleaseDate: string;
                export const MovieRuntime: string;
                export const MovieStoryline: string;
                export const MovieTitle: string;
                export const MovieYear: string;
                export const PersonBirthDate: string;
                export const PersonBirthPlace: string;
                export const PersonFirstName: string;
                export const PersonFullName: string;
                export const PersonGender: string;
                export const PersonHeight: string;
                export const PersonId: string;
                export const PersonLastName: string;
            }

            namespace MovieGenres {
                export const GenreId: string;
                export const GenreName: string;
                export const MovieDescription: string;
                export const MovieGenreId: string;
                export const MovieId: string;
                export const MovieKind: string;
                export const MovieReleaseDate: string;
                export const MovieRuntime: string;
                export const MovieStoryline: string;
                export const MovieTitle: string;
                export const MovieYear: string;
            }

            namespace PartyMaster {
                export const Address: string;
                export const Email: string;
                export const Gst: string;
                export const Id: string;
                export const Name: string;
                export const Pan: string;
                export const PhoneNumber: string;
                export const StateId: string;
                export const StateName: string;
            }

            namespace PendingTripDetailsInvoice {
                export const BranchId: string;
                export const BranchName: string;
                export const CreatedDate: string;
                export const Createdate: string;
                export const Createdby: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const DestinationId: string;
                export const DestinationName: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const ExpenseAmount: string;
                export const FreightRate: string;
                export const ItemId: string;
                export const ItemName: string;
                export const LoadingTripId: string;
                export const PlantId: string;
                export const PlantName: string;
                export const Remarks: string;
                export const StateId: string;
                export const StateName: string;
                export const TripDate: string;
                export const TripNo: string;
                export const Updatedby: string;
                export const Updateddate: string;
                export const VehicleId: string;
                export const VehicleNumber: string;
                export const Weight: string;
                export const Wheels: string;
            }

            namespace Person {
                export const BirthDate: string;
                export const BirthPlace: string;
                export const FirstName: string;
                export const FullName: string;
                export const GalleryImages: string;
                export const Gender: string;
                export const Height: string;
                export const LastName: string;
                export const PersonId: string;
                export const PrimaryImage: string;
            }

            namespace Plant {
                export const Id: string;
                export const Plant: string;
                export const Remarks: string;
            }

            namespace Pumpmaster {
                export const Address: string;
                export const Gst: string;
                export const Id: string;
                export const Name: string;
                export const Pan: string;
                export const Stock: string;
                export const Type: string;
            }

            namespace StateMaster {
                export const Id: string;
                export const Remarks: string;
                export const State: string;
                export const StateCode: string;
            }

            namespace Tax {
                export const Id: string;
                export const Remarks: string;
                export const TaxAmount: string;
                export const TaxAmountText: string;
            }

            namespace Unit {
                export const Id: string;
                export const UnitName: string;
            }

            namespace UnloadTrip {
                export const Branch: string;
                export const CreateDate: string;
                export const CreatedBy: string;
                export const CreatedByUsername: string;
                export const CreatedDate: string;
                export const CustomerName: string;
                export const Destination: string;
                export const District: string;
                export const ExpenseAmount: string;
                export const Item: string;
                export const LoadingTripId: string;
                export const Plant: string;
                export const Remarks: string;
                export const State: string;
                export const TripDate: string;
                export const TripNo: string;
                export const UnloadDate: string;
                export const UnloadTripId: string;
                export const UnloadWeight: string;
                export const UpdatedBy: string;
                export const UpdatedByUsername: string;
                export const UpdatedDate: string;
                export const VehicleName: string;
                export const Weight: string;
                export const Wheels: string;
            }

            namespace VLoadingTripDetails {
                export const BranchId: string;
                export const BranchName: string;
                export const CreateDate: string;
                export const CreatedBy: string;
                export const CreatedByUsername: string;
                export const CreatedDate: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const DestinationId: string;
                export const DestinationName: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const ExpenseAmount: string;
                export const ItemId: string;
                export const ItemName: string;
                export const LoadingTripId: string;
                export const PlantId: string;
                export const PlantName: string;
                export const Remarks: string;
                export const StateId: string;
                export const StateName: string;
                export const TripDate: string;
                export const TripNo: string;
                export const UpdatedBy: string;
                export const UpdatedByUsername: string;
                export const UpdatedDate: string;
                export const VehicleId: string;
                export const VehicleNumber: string;
                export const Weight: string;
                export const Wheels: string;
            }

            namespace VehicleMaster {
                export const Brand: string;
                export const ChassisNumber: string;
                export const Color: string;
                export const CreatedDate: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const EngineNumber: string;
                export const FuelType: string;
                export const InsuranceExpiryDate: string;
                export const IsActive: string;
                export const ManufacturingYear: string;
                export const Model: string;
                export const SeatingCapacity: string;
                export const VehicleId: string;
                export const VehicleNumber: string;
                export const VehicleType: string;
                export const Wheels: string;
            }
        }

        namespace FuelManagement {

            namespace Dieselissue {
                export const CreatedBy: string;
                export const CreatedByUsername: string;
                export const CreatedDate: string;
                export const Destination: string;
                export const DestinationName: string;
                export const Diesel: string;
                export const Distict: string;
                export const DistrictName: string;
                export const Id: string;
                export const Plant: string;
                export const PlantName: string;
                export const PumpName: string;
                export const Pumpid: string;
                export const Rateofdiesel: string;
                export const Stock: string;
                export const Today: string;
                export const Totalprice: string;
                export const TripNumber: string;
                export const Tripno: string;
                export const UpdatedBy: string;
                export const UpdatedByUsername: string;
                export const UpdatedDate: string;
                export const VehicleId: string;
                export const Vehiclenumber: string;
            }

            namespace FuelData {
                export const AllottedQuantity: string;
                export const BasicAmount: string;
                export const DrAccountId: string;
                export const FuelDetails: string;
                export const Id: string;
                export const InvoiceDate: string;
                export const InvoiceNo: string;
                export const InwardNo: string;
                export const PartyId: string;
                export const QtyKl: string;
                export const QuantityLtr: string;
                export const RateKl: string;
                export const RateLtr: string;
                export const ReceiptDate: string;
                export const ShortageAmt: string;
                export const ShortageCrAccount: string;
                export const ShortageDrAccount: string;
                export const ShortageKl: string;
                export const ShortageLtr: string;
                export const ShowFuelDetails: string;
                export const TankerNo: string;
                export const TdsAccountId: string;
                export const TdsAmount: string;
                export const TdsPayable: string;
                export const TdsPercent: string;
                export const TdsSection: string;
                export const TotalAmount: string;
                export const TransportationAmt: string;
                export const TransportationRate: string;
                export const TransporterId: string;
            }

            namespace FuelDetails {
                export const FuelDataId: string;
                export const Id: string;
                export const PumpId: string;
                export const PumpName: string;
                export const Quantity: string;
                export const ReceiptDate: string;
                export const TankerNo: string;
            }
        }

        namespace Inventry {

            namespace Item {
                export const Balancestock: string;
                export const CreatedByUsername: string;
                export const Createdat: string;
                export const Createdby: string;
                export const GrossPrice: string;
                export const Id: string;
                export const Openingstock: string;
                export const Partname: string;
                export const Partnumber: string;
                export const Purchasestock: string;
                export const Rate: string;
                export const Stocklvlmaximum: string;
                export const Stocklvlminimum: string;
                export const UpdatedByUsername: string;
                export const Updatedat: string;
                export const Updatedby: string;
            }

            namespace PendingPurchaseOrder {
                export const BalanceStock: string;
                export const BasicAmount: string;
                export const BranchId: string;
                export const BranchName: string;
                export const CGSTRate: string;
                export const CgstAmount: string;
                export const CurrentRate: string;
                export const DetailId: string;
                export const IGSTRate: string;
                export const Id: string;
                export const IgstAmount: string;
                export const ItemId: string;
                export const OrderDate: string;
                export const PartNo: string;
                export const Partname: string;
                export const Party: string;
                export const PartyId: string;
                export const PoNo: string;
                export const PreviousRate: string;
                export const PurchaseOrderId: string;
                export const Quantity: string;
                export const SGSTRate: string;
                export const SgstAmount: string;
                export const StockLevelMax: string;
                export const StockLevelMin: string;
                export const TotalAmount: string;
                export const UnitId: string;
                export const UnitName: string;
            }

            namespace PurchaseBill {
                export const BillDate: string;
                export const BillNo: string;
                export const CgstAmount: string;
                export const CgstLedger: string;
                export const DebitLedgerId: string;
                export const Gstin: string;
                export const Id: string;
                export const IgstAmount: string;
                export const IgstLedger: string;
                export const LedgerTypeId: string;
                export const PartyId: string;
                export const PartyName: string;
                export const PoNumber: string;
                export const PurchaseDetails: string;
                export const Remarks: string;
                export const RoundOff: string;
                export const SgstAmount: string;
                export const SgstLedger: string;
                export const StockInDate: string;
                export const TDSLedger: string;
                export const TaxableAmount: string;
                export const TdsAmount: string;
                export const TdsRate: string;
                export const TdsSection: string;
                export const TotalBillAmount: string;
            }

            namespace PurchaseBillDetail {
                export const CgstAmount: string;
                export const CgstRate: string;
                export const CurrentRate: string;
                export const Discount: string;
                export const Id: string;
                export const IgstAmount: string;
                export const IgstRate: string;
                export const ItemId: string;
                export const ItemName: string;
                export const PreviousRate: string;
                export const PurchaseBillId: string;
                export const PurchaseOrderId: string;
                export const Quantity: string;
                export const Remarks: string;
                export const SgstAmount: string;
                export const SgstRate: string;
                export const TaxableAmount: string;
                export const TotalAmount: string;
            }

            namespace PurchaseOrder {
                export const BranchId: string;
                export const BranchName: string;
                export const CreatedBy: string;
                export const CreatedByUsername: string;
                export const CreatedDate: string;
                export const DetailList: string;
                export const Id: string;
                export const OrderDate: string;
                export const PartyId: string;
                export const PartyName: string;
                export const PoNo: string;
                export const Remarks: string;
                export const UpdateDate: string;
                export const UpdatedBy: string;
                export const UpdatedByUsername: string;
            }

            namespace PurchaseRequestDetail {
                export const BalanceStock: string;
                export const BasicAmount: string;
                export const CgstAmount: string;
                export const CgstRate: string;
                export const CurrentRate: string;
                export const Id: string;
                export const IgstAmount: string;
                export const IgstRate: string;
                export const ItemId: string;
                export const PartName: string;
                export const PartNo: string;
                export const PoNo: string;
                export const PreviousRate: string;
                export const PurchaseOrderId: string;
                export const Quantity: string;
                export const SgstAmount: string;
                export const SgstRate: string;
                export const StockLevelMax: string;
                export const StockLevelMin: string;
                export const TotalAmount: string;
                export const UnitId: string;
                export const UnitName: string;
            }
        }

        namespace MaintenanceModule {

            namespace Maintenance {
                export const CustomerName: string;
                export const DueDate: string;
                export const EntryDate: string;
                export const EntryNumber: string;
                export const EstimatedPeriod: string;
                export const Head: string;
                export const HeadId: string;
                export const Id: string;
                export const LastMaintenance: string;
                export const ModelNumber: string;
                export const Narration: string;
                export const Owner: string;
                export const PeriodTill: string;
                export const TruckId: string;
                export const TruckNumber: string;
                export const TruckType: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    SereneMovieTutorial['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Default:{BranchMaster:{Address:1,BranchCode:1,BranchName:1,GstNo:1,Id:1,PanNo:1,PhoneNumber:1,PinCode:1,Remarks:1,State:1,State1:1,StateId:1,StateRemarks:1,StateStateCode:1},Customer:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,CustomerId:1,Fax:1,Phone:1,PostalCode:1,Region:1},CustomerMaster:{AddressLine1:1,AddressLine2:1,City:1,CreatedDate:1,CustomerCode:1,CustomerId:1,DateOfBirth:1,Email:1,FirstName:1,IdentityNumber:1,IdentityType:1,IsActive:1,LastName:1,MobileNumber:1,Pincode:1,State:1},Destination:{Destination:1,Distict:1,Distict1:1,DistictPlant:1,DistictRemarks:1,Id:1,Plant:1,Plant1:1,PlantRemarks:1,Remarks:1},Distict:{Distict:1,Id:1,Plant:1,Plant1:1,PlantRemarks:1,Remarks:1},Employees:{Address:1,BirthDate:1,City:1,Country:1,EmployeeId:1,Extension:1,FullName:1,HireDate:1,HomePhone:1,PostalCode:1,Region:1,Title:1,TitleOfCourtesy:1},Expense:{Destination:1,Destination1:1,DestinationDistict:1,DestinationPlant:1,DestinationRemarks:1,District:1,DistrictDistict:1,DistrictPlant:1,DistrictRemarks:1,Expense:1,ExpenseId:1,Plant:1,Plant1:1,PlantRemarks:1,Remarks:1,Weight:1,Wheels:1},FinancialYear:{EndDate:1,Id:1,Name:1,NameOfInvoice:1,Remarks:1,StartDate:1},Genre:{Dates:1,GenreId:1,Name:1},Invoicedetails:{Billingamount:1,Challan:1,Id:1,Invoicedate:1,LoadingTripId:1,Lrno:1,ManageInvoiceId:1,VehicleNumber:1,Vehicleid:1,Weight:1,freightRate:1},ItemMaster:{Id:1,ItemName:1,Remarks:1},LoadingTrip:{Branch:1,BranchId:1,CreateDate:1,CreatedBy:1,CreatedByUsername:1,CreatedDate:1,Customer:1,CustomerId:1,Destination:1,DestinationId:1,District:1,DistrictId:1,ExpenseAmount:1,ItemId:1,ItemName:1,LoadingTripId:1,Plant:1,PlantId:1,Remarks:1,State:1,StateId:1,TripDate:1,TripNo:1,UpdatedBy:1,UpdatedByUsername:1,UpdatedDate:1,VehicleId:1,VehicleNumber:1,Weight:1,Wheels:1,freightRate:1},MaintenanceHead:{CreatedBy:1,CreatedDate:1,Head:1,Id:1,Remarks:1,UpdatedBy:1,UpdatedDate:1},Manageinvoice:{Addgst:1,Branch:1,Branchid:1,Cgstamount:1,Cgstrate:1,Fromdate:1,Id:1,Igstamount:1,Igstrate:1,InvoiceDetails:1,Invoicedate:1,Invoiceno:1,LoadingTripId:1,Localgst:1,Plant:1,Plantid:1,Pono:1,Saccode:1,Sgstamount:1,Sgstrate:1,Tax:1,Todate:1,Totalgstamount:1,Totalinvoiceamount:1,Totaltrips:1,TripNo:1},Movie:{Actors:1,CastList:1,Description:1,GalleryImages:1,GenreList:1,Kind:1,MovieId:1,PrimaryImage:1,ReleaseDate:1,Runtime:1,Storyline:1,Title:1,Year:1},MovieCast:{Character:1,MovieCastId:1,MovieDescription:1,MovieId:1,MovieKind:1,MovieReleaseDate:1,MovieRuntime:1,MovieStoryline:1,MovieTitle:1,MovieYear:1,PersonBirthDate:1,PersonBirthPlace:1,PersonFirstName:1,PersonFullName:1,PersonGender:1,PersonHeight:1,PersonId:1,PersonLastName:1},MovieGenres:{GenreId:1,GenreName:1,MovieDescription:1,MovieGenreId:1,MovieId:1,MovieKind:1,MovieReleaseDate:1,MovieRuntime:1,MovieStoryline:1,MovieTitle:1,MovieYear:1},PartyMaster:{Address:1,Email:1,Gst:1,Id:1,Name:1,Pan:1,PhoneNumber:1,StateId:1,StateName:1},PendingTripDetailsInvoice:{BranchId:1,BranchName:1,CreatedDate:1,Createdate:1,Createdby:1,CustomerId:1,CustomerName:1,DestinationId:1,DestinationName:1,DistrictId:1,DistrictName:1,ExpenseAmount:1,FreightRate:1,ItemId:1,ItemName:1,LoadingTripId:1,PlantId:1,PlantName:1,Remarks:1,StateId:1,StateName:1,TripDate:1,TripNo:1,Updatedby:1,Updateddate:1,VehicleId:1,VehicleNumber:1,Weight:1,Wheels:1},Person:{BirthDate:1,BirthPlace:1,FirstName:1,FullName:1,GalleryImages:1,Gender:1,Height:1,LastName:1,PersonId:1,PrimaryImage:1},Plant:{Id:1,Plant:1,Remarks:1},Pumpmaster:{Address:1,Gst:1,Id:1,Name:1,Pan:1,Stock:1,Type:1},StateMaster:{Id:1,Remarks:1,State:1,StateCode:1},Tax:{Id:1,Remarks:1,TaxAmount:1,TaxAmountText:1},Unit:{Id:1,UnitName:1},UnloadTrip:{Branch:1,CreateDate:1,CreatedBy:1,CreatedByUsername:1,CreatedDate:1,CustomerName:1,Destination:1,District:1,ExpenseAmount:1,Item:1,LoadingTripId:1,Plant:1,Remarks:1,State:1,TripDate:1,TripNo:1,UnloadDate:1,UnloadTripId:1,UnloadWeight:1,UpdatedBy:1,UpdatedByUsername:1,UpdatedDate:1,VehicleName:1,Weight:1,Wheels:1},VLoadingTripDetails:{BranchId:1,BranchName:1,CreateDate:1,CreatedBy:1,CreatedByUsername:1,CreatedDate:1,CustomerId:1,CustomerName:1,DestinationId:1,DestinationName:1,DistrictId:1,DistrictName:1,ExpenseAmount:1,ItemId:1,ItemName:1,LoadingTripId:1,PlantId:1,PlantName:1,Remarks:1,StateId:1,StateName:1,TripDate:1,TripNo:1,UpdatedBy:1,UpdatedByUsername:1,UpdatedDate:1,VehicleId:1,VehicleNumber:1,Weight:1,Wheels:1},VehicleMaster:{Brand:1,ChassisNumber:1,Color:1,CreatedDate:1,CustomerId:1,CustomerName:1,EngineNumber:1,FuelType:1,InsuranceExpiryDate:1,IsActive:1,ManufacturingYear:1,Model:1,SeatingCapacity:1,VehicleId:1,VehicleNumber:1,VehicleType:1,Wheels:1}},FuelManagement:{Dieselissue:{CreatedBy:1,CreatedByUsername:1,CreatedDate:1,Destination:1,DestinationName:1,Diesel:1,Distict:1,DistrictName:1,Id:1,Plant:1,PlantName:1,PumpName:1,Pumpid:1,Rateofdiesel:1,Stock:1,Today:1,Totalprice:1,TripNumber:1,Tripno:1,UpdatedBy:1,UpdatedByUsername:1,UpdatedDate:1,VehicleId:1,Vehiclenumber:1},FuelData:{AllottedQuantity:1,BasicAmount:1,DrAccountId:1,FuelDetails:1,Id:1,InvoiceDate:1,InvoiceNo:1,InwardNo:1,PartyId:1,QtyKl:1,QuantityLtr:1,RateKl:1,RateLtr:1,ReceiptDate:1,ShortageAmt:1,ShortageCrAccount:1,ShortageDrAccount:1,ShortageKl:1,ShortageLtr:1,ShowFuelDetails:1,TankerNo:1,TdsAccountId:1,TdsAmount:1,TdsPayable:1,TdsPercent:1,TdsSection:1,TotalAmount:1,TransportationAmt:1,TransportationRate:1,TransporterId:1},FuelDetails:{FuelDataId:1,Id:1,PumpId:1,PumpName:1,Quantity:1,ReceiptDate:1,TankerNo:1}},Inventry:{Item:{Balancestock:1,CreatedByUsername:1,Createdat:1,Createdby:1,GrossPrice:1,Id:1,Openingstock:1,Partname:1,Partnumber:1,Purchasestock:1,Rate:1,Stocklvlmaximum:1,Stocklvlminimum:1,UpdatedByUsername:1,Updatedat:1,Updatedby:1},PendingPurchaseOrder:{BalanceStock:1,BasicAmount:1,BranchId:1,BranchName:1,CGSTRate:1,CgstAmount:1,CurrentRate:1,DetailId:1,IGSTRate:1,Id:1,IgstAmount:1,ItemId:1,OrderDate:1,PartNo:1,Partname:1,Party:1,PartyId:1,PoNo:1,PreviousRate:1,PurchaseOrderId:1,Quantity:1,SGSTRate:1,SgstAmount:1,StockLevelMax:1,StockLevelMin:1,TotalAmount:1,UnitId:1,UnitName:1},PurchaseBill:{BillDate:1,BillNo:1,CgstAmount:1,CgstLedger:1,DebitLedgerId:1,Gstin:1,Id:1,IgstAmount:1,IgstLedger:1,LedgerTypeId:1,PartyId:1,PartyName:1,PoNumber:1,PurchaseDetails:1,Remarks:1,RoundOff:1,SgstAmount:1,SgstLedger:1,StockInDate:1,TDSLedger:1,TaxableAmount:1,TdsAmount:1,TdsRate:1,TdsSection:1,TotalBillAmount:1},PurchaseBillDetail:{CgstAmount:1,CgstRate:1,CurrentRate:1,Discount:1,Id:1,IgstAmount:1,IgstRate:1,ItemId:1,ItemName:1,PreviousRate:1,PurchaseBillId:1,PurchaseOrderId:1,Quantity:1,Remarks:1,SgstAmount:1,SgstRate:1,TaxableAmount:1,TotalAmount:1},PurchaseOrder:{BranchId:1,BranchName:1,CreatedBy:1,CreatedByUsername:1,CreatedDate:1,DetailList:1,Id:1,OrderDate:1,PartyId:1,PartyName:1,PoNo:1,Remarks:1,UpdateDate:1,UpdatedBy:1,UpdatedByUsername:1},PurchaseRequestDetail:{BalanceStock:1,BasicAmount:1,CgstAmount:1,CgstRate:1,CurrentRate:1,Id:1,IgstAmount:1,IgstRate:1,ItemId:1,PartName:1,PartNo:1,PoNo:1,PreviousRate:1,PurchaseOrderId:1,Quantity:1,SgstAmount:1,SgstRate:1,StockLevelMax:1,StockLevelMin:1,TotalAmount:1,UnitId:1,UnitName:1}},MaintenanceModule:{Maintenance:{CustomerName:1,DueDate:1,EntryDate:1,EntryNumber:1,EstimatedPeriod:1,Head:1,HeadId:1,Id:1,LastMaintenance:1,ModelNumber:1,Narration:1,Owner:1,PeriodTill:1,TruckId:1,TruckNumber:1,TruckType:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

