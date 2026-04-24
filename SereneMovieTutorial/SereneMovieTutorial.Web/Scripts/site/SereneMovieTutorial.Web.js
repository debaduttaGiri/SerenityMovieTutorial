/// <reference path="../Scripts/serenity/Serenity.CoreLib.d.ts" />//./Serenity/Serenity.CoreLib.d.ts
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var BranchMasterForm = /** @class */ (function (_super) {
            __extends(BranchMasterForm, _super);
            function BranchMasterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BranchMasterForm.init) {
                    BranchMasterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(BranchMasterForm, [
                        'BranchName', w0,
                        'BranchCode', w0,
                        'GstNo', w0,
                        'PanNo', w0,
                        'PhoneNumber', w1,
                        'PinCode', w1,
                        'Address', w2,
                        'StateId', w3,
                        'Remarks', w0
                    ]);
                }
                return _this;
            }
            BranchMasterForm.formKey = 'Default.BranchMaster';
            return BranchMasterForm;
        }(Serenity.PrefixedContext));
        Default.BranchMasterForm = BranchMasterForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var BranchMasterRow;
        (function (BranchMasterRow) {
            BranchMasterRow.idProperty = 'Id';
            BranchMasterRow.nameProperty = 'BranchName';
            BranchMasterRow.localTextPrefix = 'Default.BranchMaster';
            BranchMasterRow.lookupKey = 'Default.BranchMaster';
            function getLookup() {
                return Q.getLookup('Default.BranchMaster');
            }
            BranchMasterRow.getLookup = getLookup;
            BranchMasterRow.deletePermission = 'Administration:General';
            BranchMasterRow.insertPermission = 'Administration:General';
            BranchMasterRow.readPermission = 'Administration:General';
            BranchMasterRow.updatePermission = 'Administration:General';
        })(BranchMasterRow = Default.BranchMasterRow || (Default.BranchMasterRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var BranchMasterService;
        (function (BranchMasterService) {
            BranchMasterService.baseUrl = 'Default/BranchMaster';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BranchMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(BranchMasterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BranchMasterService = Default.BranchMasterService || (Default.BranchMasterService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CustomerForm, [
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'City', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'Phone', w0,
                        'Fax', w0
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Default.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Default.CustomerForm = CustomerForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerMasterForm = /** @class */ (function (_super) {
            __extends(CustomerMasterForm, _super);
            function CustomerMasterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerMasterForm.init) {
                    CustomerMasterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(CustomerMasterForm, [
                        'CustomerCode', w0,
                        'FirstName', w0,
                        'LastName', w0,
                        'MobileNumber', w0,
                        'Email', w0,
                        'AddressLine1', w0,
                        'AddressLine2', w0,
                        'City', w0,
                        'State', w0,
                        'Pincode', w0,
                        'IdentityType', w1,
                        'IdentityNumber', w0,
                        'DateOfBirth', w2,
                        'IsActive', w3,
                        'CreatedDate', w2
                    ]);
                }
                return _this;
            }
            CustomerMasterForm.formKey = 'Default.CustomerMaster';
            return CustomerMasterForm;
        }(Serenity.PrefixedContext));
        Default.CustomerMasterForm = CustomerMasterForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerMasterRow;
        (function (CustomerMasterRow) {
            CustomerMasterRow.idProperty = 'CustomerId';
            CustomerMasterRow.nameProperty = 'CustomerCode';
            CustomerMasterRow.localTextPrefix = 'Default.CustomerMaster';
            CustomerMasterRow.lookupKey = 'Default.CustomerMaster';
            function getLookup() {
                return Q.getLookup('Default.CustomerMaster');
            }
            CustomerMasterRow.getLookup = getLookup;
            CustomerMasterRow.deletePermission = 'Administration:General';
            CustomerMasterRow.insertPermission = 'Administration:General';
            CustomerMasterRow.readPermission = 'Administration:General';
            CustomerMasterRow.updatePermission = 'Administration:General';
        })(CustomerMasterRow = Default.CustomerMasterRow || (Default.CustomerMasterRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerMasterService;
        (function (CustomerMasterService) {
            CustomerMasterService.baseUrl = 'Default/CustomerMaster';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerMasterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerMasterService = Default.CustomerMasterService || (Default.CustomerMasterService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'CustomerId';
            CustomerRow.nameProperty = 'CustomerId';
            CustomerRow.localTextPrefix = 'Default.Customer';
            CustomerRow.deletePermission = 'Default:Customer:Delete';
            CustomerRow.insertPermission = 'Default:Customer:Insert';
            CustomerRow.readPermission = 'Default:Customer:View';
            CustomerRow.updatePermission = 'Default:Customer:Modify';
        })(CustomerRow = Default.CustomerRow || (Default.CustomerRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Default/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Default.CustomerService || (Default.CustomerService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DestinationForm = /** @class */ (function (_super) {
            __extends(DestinationForm, _super);
            function DestinationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DestinationForm.init) {
                    DestinationForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(DestinationForm, [
                        'Plant', w0,
                        'Distict', w0,
                        'Destination', w1,
                        'Remarks', w1
                    ]);
                }
                return _this;
            }
            DestinationForm.formKey = 'Default.Destination';
            return DestinationForm;
        }(Serenity.PrefixedContext));
        Default.DestinationForm = DestinationForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DestinationRow;
        (function (DestinationRow) {
            DestinationRow.idProperty = 'Id';
            DestinationRow.nameProperty = 'Destination';
            DestinationRow.localTextPrefix = 'Default.Destination';
            DestinationRow.lookupKey = 'Default.Destination';
            function getLookup() {
                return Q.getLookup('Default.Destination');
            }
            DestinationRow.getLookup = getLookup;
            DestinationRow.deletePermission = 'Administration:General';
            DestinationRow.insertPermission = 'Administration:General';
            DestinationRow.readPermission = 'Administration:General';
            DestinationRow.updatePermission = 'Administration:General';
        })(DestinationRow = Default.DestinationRow || (Default.DestinationRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DestinationService;
        (function (DestinationService) {
            DestinationService.baseUrl = 'Default/Destination';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DestinationService[x] = function (r, s, o) {
                    return Q.serviceRequest(DestinationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DestinationService = Default.DestinationService || (Default.DestinationService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DistictForm = /** @class */ (function (_super) {
            __extends(DistictForm, _super);
            function DistictForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DistictForm.init) {
                    DistictForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(DistictForm, [
                        'Plant', w0,
                        'Distict', w1,
                        'Remarks', w1
                    ]);
                }
                return _this;
            }
            DistictForm.formKey = 'Default.Distict';
            return DistictForm;
        }(Serenity.PrefixedContext));
        Default.DistictForm = DistictForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DistictRow;
        (function (DistictRow) {
            DistictRow.idProperty = 'Id';
            DistictRow.nameProperty = 'Distict';
            DistictRow.localTextPrefix = 'Default.Distict';
            DistictRow.lookupKey = 'Default.Distict';
            function getLookup() {
                return Q.getLookup('Default.Distict');
            }
            DistictRow.getLookup = getLookup;
            DistictRow.deletePermission = 'Administration:General';
            DistictRow.insertPermission = 'Administration:General';
            DistictRow.readPermission = 'Administration:General';
            DistictRow.updatePermission = 'Administration:General';
        })(DistictRow = Default.DistictRow || (Default.DistictRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DistictService;
        (function (DistictService) {
            DistictService.baseUrl = 'Default/Distict';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DistictService[x] = function (r, s, o) {
                    return Q.serviceRequest(DistictService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DistictService = Default.DistictService || (Default.DistictService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var EmployeesForm = /** @class */ (function (_super) {
            __extends(EmployeesForm, _super);
            function EmployeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeesForm.init) {
                    EmployeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(EmployeesForm, [
                        'FullName', w0,
                        'Title', w0,
                        'TitleOfCourtesy', w0,
                        'BirthDate', w1,
                        'HireDate', w1,
                        'Address', w0,
                        'City', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'HomePhone', w0,
                        'Extension', w0
                    ]);
                }
                return _this;
            }
            EmployeesForm.formKey = 'Default.Employees';
            return EmployeesForm;
        }(Serenity.PrefixedContext));
        Default.EmployeesForm = EmployeesForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var EmployeesRow;
        (function (EmployeesRow) {
            EmployeesRow.idProperty = 'EmployeeId';
            EmployeesRow.nameProperty = 'FullName';
            EmployeesRow.localTextPrefix = 'Default.Employees';
            EmployeesRow.deletePermission = 'Administration:General';
            EmployeesRow.insertPermission = 'Administration:General';
            EmployeesRow.readPermission = 'Administration:General';
            EmployeesRow.updatePermission = 'Administration:General';
        })(EmployeesRow = Default.EmployeesRow || (Default.EmployeesRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var EmployeesService;
        (function (EmployeesService) {
            EmployeesService.baseUrl = 'Default/Employees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeesService = Default.EmployeesService || (Default.EmployeesService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ExpenseForm = /** @class */ (function (_super) {
            __extends(ExpenseForm, _super);
            function ExpenseForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExpenseForm.init) {
                    ExpenseForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(ExpenseForm, [
                        'Plant', w0,
                        'District', w0,
                        'Destination', w0,
                        'Expense', w1,
                        'Weight', w1,
                        'Wheels', w2,
                        'Remarks', w3
                    ]);
                }
                return _this;
            }
            ExpenseForm.formKey = 'Default.Expense';
            return ExpenseForm;
        }(Serenity.PrefixedContext));
        Default.ExpenseForm = ExpenseForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ExpenseRow;
        (function (ExpenseRow) {
            ExpenseRow.idProperty = 'ExpenseId';
            ExpenseRow.nameProperty = 'Remarks';
            ExpenseRow.localTextPrefix = 'Default.Expense';
            ExpenseRow.lookupKey = 'Default.Expense';
            function getLookup() {
                return Q.getLookup('Default.Expense');
            }
            ExpenseRow.getLookup = getLookup;
            ExpenseRow.deletePermission = 'Administration:General';
            ExpenseRow.insertPermission = 'Administration:General';
            ExpenseRow.readPermission = 'Administration:General';
            ExpenseRow.updatePermission = 'Administration:General';
        })(ExpenseRow = Default.ExpenseRow || (Default.ExpenseRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ExpenseService;
        (function (ExpenseService) {
            ExpenseService.baseUrl = 'Default/Expense';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ExpenseService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExpenseService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExpenseService = Default.ExpenseService || (Default.ExpenseService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var FinancialYearForm = /** @class */ (function (_super) {
            __extends(FinancialYearForm, _super);
            function FinancialYearForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FinancialYearForm.init) {
                    FinancialYearForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(FinancialYearForm, [
                        'Name', w0,
                        'StartDate', w1,
                        'EndDate', w1,
                        'NameOfInvoice', w0,
                        'Remarks', w0
                    ]);
                }
                return _this;
            }
            FinancialYearForm.formKey = 'Default.FinancialYear';
            return FinancialYearForm;
        }(Serenity.PrefixedContext));
        Default.FinancialYearForm = FinancialYearForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var FinancialYearRow;
        (function (FinancialYearRow) {
            FinancialYearRow.idProperty = 'Id';
            FinancialYearRow.nameProperty = 'Name';
            FinancialYearRow.localTextPrefix = 'Default.FinancialYear';
            FinancialYearRow.lookupKey = 'Default.FinancialYear';
            function getLookup() {
                return Q.getLookup('Default.FinancialYear');
            }
            FinancialYearRow.getLookup = getLookup;
            FinancialYearRow.deletePermission = 'Administration:General';
            FinancialYearRow.insertPermission = 'Administration:General';
            FinancialYearRow.readPermission = 'Administration:General';
            FinancialYearRow.updatePermission = 'Administration:General';
        })(FinancialYearRow = Default.FinancialYearRow || (Default.FinancialYearRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var FinancialYearService;
        (function (FinancialYearService) {
            FinancialYearService.baseUrl = 'Default/FinancialYear';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FinancialYearService[x] = function (r, s, o) {
                    return Q.serviceRequest(FinancialYearService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FinancialYearService = Default.FinancialYearService || (Default.FinancialYearService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var GenreForm = /** @class */ (function (_super) {
            __extends(GenreForm, _super);
            function GenreForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GenreForm.init) {
                    GenreForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(GenreForm, [
                        'Name', w0,
                        'Dates', w0
                    ]);
                }
                return _this;
            }
            GenreForm.formKey = 'Default.Genre';
            return GenreForm;
        }(Serenity.PrefixedContext));
        Default.GenreForm = GenreForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var GenreRow;
        (function (GenreRow) {
            GenreRow.idProperty = 'GenreId';
            GenreRow.nameProperty = 'Name';
            GenreRow.localTextPrefix = 'Default.Genre';
            GenreRow.lookupKey = 'Default.Genre';
            function getLookup() {
                return Q.getLookup('Default.Genre');
            }
            GenreRow.getLookup = getLookup;
            GenreRow.deletePermission = 'Administration:General:Delete';
            GenreRow.insertPermission = 'Administration:General:Insert';
            GenreRow.readPermission = 'Administration:General:Read';
            GenreRow.updatePermission = 'Administration:General:Modify';
        })(GenreRow = Default.GenreRow || (Default.GenreRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var GenreService;
        (function (GenreService) {
            GenreService.baseUrl = 'Default/Genre';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GenreService[x] = function (r, s, o) {
                    return Q.serviceRequest(GenreService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GenreService = Default.GenreService || (Default.GenreService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var InvoicedetailsForm = /** @class */ (function (_super) {
            __extends(InvoicedetailsForm, _super);
            function InvoicedetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoicedetailsForm.init) {
                    InvoicedetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(InvoicedetailsForm, [
                        'Challan', w0,
                        'Lrno', w1,
                        'Vehicleid', w0,
                        'VehicleNumber', w1,
                        'freightRate', w0,
                        'Weight', w2,
                        'Billingamount', w2,
                        'Invoicedate', w3,
                        'LoadingTripId', w0
                    ]);
                }
                return _this;
            }
            InvoicedetailsForm.formKey = 'Default.Invoicedetails';
            return InvoicedetailsForm;
        }(Serenity.PrefixedContext));
        Default.InvoicedetailsForm = InvoicedetailsForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var InvoicedetailsRow;
        (function (InvoicedetailsRow) {
            InvoicedetailsRow.idProperty = 'Id';
            InvoicedetailsRow.nameProperty = 'Lrno';
            InvoicedetailsRow.localTextPrefix = 'Default.Invoicedetails';
            InvoicedetailsRow.deletePermission = 'Administration:General';
            InvoicedetailsRow.insertPermission = 'Administration:General';
            InvoicedetailsRow.readPermission = 'Administration:General';
            InvoicedetailsRow.updatePermission = 'Administration:General';
        })(InvoicedetailsRow = Default.InvoicedetailsRow || (Default.InvoicedetailsRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var InvoicedetailsService;
        (function (InvoicedetailsService) {
            InvoicedetailsService.baseUrl = 'Default/Invoicedetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoicedetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoicedetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoicedetailsService = Default.InvoicedetailsService || (Default.InvoicedetailsService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ItemMasterForm = /** @class */ (function (_super) {
            __extends(ItemMasterForm, _super);
            function ItemMasterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ItemMasterForm.init) {
                    ItemMasterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ItemMasterForm, [
                        'ItemName', w0,
                        'Remarks', w0
                    ]);
                }
                return _this;
            }
            ItemMasterForm.formKey = 'Default.ItemMaster';
            return ItemMasterForm;
        }(Serenity.PrefixedContext));
        Default.ItemMasterForm = ItemMasterForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ItemMasterRow;
        (function (ItemMasterRow) {
            ItemMasterRow.idProperty = 'Id';
            ItemMasterRow.nameProperty = 'ItemName';
            ItemMasterRow.localTextPrefix = 'Default.ItemMaster';
            ItemMasterRow.lookupKey = 'Default.ItemMaster';
            function getLookup() {
                return Q.getLookup('Default.ItemMaster');
            }
            ItemMasterRow.getLookup = getLookup;
            ItemMasterRow.deletePermission = 'Administration:General';
            ItemMasterRow.insertPermission = 'Administration:General';
            ItemMasterRow.readPermission = 'Administration:General';
            ItemMasterRow.updatePermission = 'Administration:General';
        })(ItemMasterRow = Default.ItemMasterRow || (Default.ItemMasterRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ItemMasterService;
        (function (ItemMasterService) {
            ItemMasterService.baseUrl = 'Default/ItemMaster';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ItemMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemMasterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemMasterService = Default.ItemMasterService || (Default.ItemMasterService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var LoadingTripForm = /** @class */ (function (_super) {
            __extends(LoadingTripForm, _super);
            function LoadingTripForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoadingTripForm.init) {
                    LoadingTripForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(LoadingTripForm, [
                        'BranchId', w0,
                        'TripNo', w1,
                        'TripDate', w2,
                        'StateId', w3,
                        'ItemId', w3,
                        'Branch', w1,
                        'CreatedDate', w2,
                        'PlantId', w3,
                        'VehicleId', w3,
                        'DistrictId', w3,
                        'CustomerId', w3,
                        'DestinationId', w3,
                        'Wheels', w0,
                        'Weight', w4,
                        'freightRate', w0,
                        'ExpenseAmount', w4,
                        'Remarks', w5
                    ]);
                }
                return _this;
            }
            LoadingTripForm.formKey = 'Default.LoadingTrip';
            return LoadingTripForm;
        }(Serenity.PrefixedContext));
        Default.LoadingTripForm = LoadingTripForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var LoadingTripRow;
        (function (LoadingTripRow) {
            LoadingTripRow.idProperty = 'LoadingTripId';
            LoadingTripRow.nameProperty = 'TripNo';
            LoadingTripRow.localTextPrefix = 'Default.LoadingTrip';
            LoadingTripRow.lookupKey = 'Default.LoadingTrip';
            function getLookup() {
                return Q.getLookup('Default.LoadingTrip');
            }
            LoadingTripRow.getLookup = getLookup;
            LoadingTripRow.deletePermission = 'Administration:General';
            LoadingTripRow.insertPermission = 'Administration:General';
            LoadingTripRow.readPermission = 'Administration:General';
            LoadingTripRow.updatePermission = 'Administration:General';
        })(LoadingTripRow = Default.LoadingTripRow || (Default.LoadingTripRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var LoadingTripService;
        (function (LoadingTripService) {
            LoadingTripService.baseUrl = 'Default/LoadingTrip';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetVehicleDetails',
                'GetBranch',
                'GetExpenseByRoute',
                'GetLoadingTripDetails'
            ].forEach(function (x) {
                LoadingTripService[x] = function (r, s, o) {
                    return Q.serviceRequest(LoadingTripService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LoadingTripService = Default.LoadingTripService || (Default.LoadingTripService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MaintenanceHeadForm = /** @class */ (function (_super) {
            __extends(MaintenanceHeadForm, _super);
            function MaintenanceHeadForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaintenanceHeadForm.init) {
                    MaintenanceHeadForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(MaintenanceHeadForm, [
                        'Head', w0,
                        'Remarks', w0,
                        'CreatedBy', w1,
                        'UpdatedBy', w1,
                        'CreatedDate', w2,
                        'UpdatedDate', w2
                    ]);
                }
                return _this;
            }
            MaintenanceHeadForm.formKey = 'Default.MaintenanceHead';
            return MaintenanceHeadForm;
        }(Serenity.PrefixedContext));
        Default.MaintenanceHeadForm = MaintenanceHeadForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MaintenanceHeadRow;
        (function (MaintenanceHeadRow) {
            MaintenanceHeadRow.idProperty = 'Id';
            MaintenanceHeadRow.nameProperty = 'Head';
            MaintenanceHeadRow.localTextPrefix = 'Default.MaintenanceHead';
            MaintenanceHeadRow.lookupKey = 'Default.MaintenanceHead';
            function getLookup() {
                return Q.getLookup('Default.MaintenanceHead');
            }
            MaintenanceHeadRow.getLookup = getLookup;
            MaintenanceHeadRow.deletePermission = 'Administration:General';
            MaintenanceHeadRow.insertPermission = 'Administration:General';
            MaintenanceHeadRow.readPermission = 'Administration:General';
            MaintenanceHeadRow.updatePermission = 'Administration:General';
        })(MaintenanceHeadRow = Default.MaintenanceHeadRow || (Default.MaintenanceHeadRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MaintenanceHeadService;
        (function (MaintenanceHeadService) {
            MaintenanceHeadService.baseUrl = 'Default/MaintenanceHead';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaintenanceHeadService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaintenanceHeadService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaintenanceHeadService = Default.MaintenanceHeadService || (Default.MaintenanceHeadService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ManageinvoiceForm = /** @class */ (function (_super) {
            __extends(ManageinvoiceForm, _super);
            function ManageinvoiceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ManageinvoiceForm.init) {
                    ManageinvoiceForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.BooleanEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = Default.ExInvoiceDetailsEditor;
                    Q.initFormType(ManageinvoiceForm, [
                        'Plantid', w0,
                        'LoadingTripId', w0,
                        'Branchid', w0,
                        'Totaltrips', w1,
                        'Invoiceno', w2,
                        'Pono', w1,
                        'Invoicedate', w3,
                        'Fromdate', w3,
                        'Todate', w3,
                        'Addgst', w4,
                        'Saccode', w1,
                        'Tax', w0,
                        'Cgstrate', w5,
                        'Sgstrate', w5,
                        'Igstrate', w5,
                        'Cgstamount', w5,
                        'Sgstamount', w5,
                        'Igstamount', w5,
                        'Totalgstamount', w5,
                        'InvoiceDetails', w6,
                        'Totalinvoiceamount', w5
                    ]);
                }
                return _this;
            }
            ManageinvoiceForm.formKey = 'Default.Manageinvoice';
            return ManageinvoiceForm;
        }(Serenity.PrefixedContext));
        Default.ManageinvoiceForm = ManageinvoiceForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ManageinvoiceRow;
        (function (ManageinvoiceRow) {
            ManageinvoiceRow.idProperty = 'Id';
            ManageinvoiceRow.nameProperty = 'Invoiceno';
            ManageinvoiceRow.localTextPrefix = 'Default.Manageinvoice';
            ManageinvoiceRow.deletePermission = 'Administration:General';
            ManageinvoiceRow.insertPermission = 'Administration:General';
            ManageinvoiceRow.readPermission = 'Administration:General';
            ManageinvoiceRow.updatePermission = 'Administration:General';
        })(ManageinvoiceRow = Default.ManageinvoiceRow || (Default.ManageinvoiceRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ManageinvoiceService;
        (function (ManageinvoiceService) {
            ManageinvoiceService.baseUrl = 'Default/Manageinvoice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ManageinvoiceService[x] = function (r, s, o) {
                    return Q.serviceRequest(ManageinvoiceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ManageinvoiceService = Default.ManageinvoiceService || (Default.ManageinvoiceService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieCastForm = /** @class */ (function (_super) {
            __extends(MovieCastForm, _super);
            function MovieCastForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MovieCastForm.init) {
                    MovieCastForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(MovieCastForm, [
                        'PersonId', w0,
                        'Character', w1
                    ]);
                }
                return _this;
            }
            MovieCastForm.formKey = 'Default.MovieCast';
            return MovieCastForm;
        }(Serenity.PrefixedContext));
        Default.MovieCastForm = MovieCastForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieCastRow;
        (function (MovieCastRow) {
            MovieCastRow.idProperty = 'MovieCastId';
            MovieCastRow.nameProperty = 'Character';
            MovieCastRow.localTextPrefix = 'Default.MovieCast';
            MovieCastRow.lookupKey = 'Default.MovieCast';
            function getLookup() {
                return Q.getLookup('Default.MovieCast');
            }
            MovieCastRow.getLookup = getLookup;
            MovieCastRow.deletePermission = 'Administration:General';
            MovieCastRow.insertPermission = 'Administration:General';
            MovieCastRow.readPermission = 'Administration:General';
            MovieCastRow.updatePermission = 'Administration:General';
        })(MovieCastRow = Default.MovieCastRow || (Default.MovieCastRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieCastService;
        (function (MovieCastService) {
            MovieCastService.baseUrl = 'Default/MovieCast';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovieCastService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieCastService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieCastService = Default.MovieCastService || (Default.MovieCastService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieForm = /** @class */ (function (_super) {
            __extends(MovieForm, _super);
            function MovieForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MovieForm.init) {
                    MovieForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = Default.MovieCastEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.DateEditor;
                    var w5 = s.EnumEditor;
                    var w6 = s.LookupEditor;
                    var w7 = s.ImageUploadEditor;
                    var w8 = s.MultipleImageUploadEditor;
                    Q.initFormType(MovieForm, [
                        'Title', w0,
                        'Description', w1,
                        'CastList', w2,
                        'Storyline', w1,
                        'Year', w3,
                        'ReleaseDate', w4,
                        'Runtime', w3,
                        'Kind', w5,
                        'GenreList', w6,
                        'PrimaryImage', w7,
                        'GalleryImages', w8
                    ]);
                }
                return _this;
            }
            MovieForm.formKey = 'Default.Movie';
            return MovieForm;
        }(Serenity.PrefixedContext));
        Default.MovieForm = MovieForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieGenresRow;
        (function (MovieGenresRow) {
            MovieGenresRow.idProperty = 'MovieGenreId';
            MovieGenresRow.localTextPrefix = 'Default.MovieGenres';
            MovieGenresRow.deletePermission = 'Administration:General';
            MovieGenresRow.insertPermission = 'Administration:General';
            MovieGenresRow.readPermission = 'Administration:General';
            MovieGenresRow.updatePermission = 'Administration:General';
        })(MovieGenresRow = Default.MovieGenresRow || (Default.MovieGenresRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieGenresService;
        (function (MovieGenresService) {
            MovieGenresService.baseUrl = 'Default/MovieGenres';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovieGenresService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieGenresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieGenresService = Default.MovieGenresService || (Default.MovieGenresService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieRow;
        (function (MovieRow) {
            MovieRow.idProperty = 'MovieId';
            MovieRow.nameProperty = 'Title';
            MovieRow.localTextPrefix = 'Default.Movie';
            MovieRow.deletePermission = 'Administration:General';
            MovieRow.insertPermission = 'Administration:General';
            MovieRow.readPermission = 'Administration:General';
            MovieRow.updatePermission = 'Administration:General';
        })(MovieRow = Default.MovieRow || (Default.MovieRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieService;
        (function (MovieService) {
            MovieService.baseUrl = 'Default/Movie';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovieService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieService = Default.MovieService || (Default.MovieService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PartyMasterForm = /** @class */ (function (_super) {
            __extends(PartyMasterForm, _super);
            function PartyMasterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PartyMasterForm.init) {
                    PartyMasterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(PartyMasterForm, [
                        'Name', w0,
                        'Email', w0,
                        'PhoneNumber', w0,
                        'Gst', w0,
                        'Pan', w0,
                        'StateId', w1,
                        'Address', w0
                    ]);
                }
                return _this;
            }
            PartyMasterForm.formKey = 'Default.PartyMaster';
            return PartyMasterForm;
        }(Serenity.PrefixedContext));
        Default.PartyMasterForm = PartyMasterForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PartyMasterRow;
        (function (PartyMasterRow) {
            PartyMasterRow.idProperty = 'Id';
            PartyMasterRow.nameProperty = 'Name';
            PartyMasterRow.localTextPrefix = 'Default.PartyMaster';
            PartyMasterRow.lookupKey = 'Default.PartyMaster';
            function getLookup() {
                return Q.getLookup('Default.PartyMaster');
            }
            PartyMasterRow.getLookup = getLookup;
            PartyMasterRow.deletePermission = 'Administration:General';
            PartyMasterRow.insertPermission = 'Administration:General';
            PartyMasterRow.readPermission = 'Administration:General';
            PartyMasterRow.updatePermission = 'Administration:General';
        })(PartyMasterRow = Default.PartyMasterRow || (Default.PartyMasterRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PartyMasterService;
        (function (PartyMasterService) {
            PartyMasterService.baseUrl = 'Default/PartyMaster';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PartyMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(PartyMasterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PartyMasterService = Default.PartyMasterService || (Default.PartyMasterService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PendingTripDetailsInvoiceForm = /** @class */ (function (_super) {
            __extends(PendingTripDetailsInvoiceForm, _super);
            function PendingTripDetailsInvoiceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PendingTripDetailsInvoiceForm.init) {
                    PendingTripDetailsInvoiceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(PendingTripDetailsInvoiceForm, [
                        'TripNo', w0,
                        'TripDate', w1,
                        'PlantId', w2,
                        'PlantName', w0,
                        'DistrictId', w2,
                        'DistrictName', w0,
                        'DestinationId', w2,
                        'DestinationName', w0,
                        'VehicleId', w2,
                        'VehicleNumber', w0,
                        'CustomerId', w2,
                        'CustomerName', w0,
                        'BranchId', w2,
                        'BranchName', w0,
                        'StateId', w2,
                        'StateName', w0,
                        'ItemId', w2,
                        'ItemName', w0,
                        'Weight', w3,
                        'Wheels', w2,
                        'FreightRate', w2,
                        'ExpenseAmount', w3,
                        'Remarks', w0,
                        'CreatedDate', w1,
                        'Createdate', w1,
                        'Createdby', w2,
                        'Updatedby', w2,
                        'Updateddate', w1
                    ]);
                }
                return _this;
            }
            PendingTripDetailsInvoiceForm.formKey = 'Default.PendingTripDetailsInvoice';
            return PendingTripDetailsInvoiceForm;
        }(Serenity.PrefixedContext));
        Default.PendingTripDetailsInvoiceForm = PendingTripDetailsInvoiceForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PendingTripDetailsInvoiceRow;
        (function (PendingTripDetailsInvoiceRow) {
            PendingTripDetailsInvoiceRow.idProperty = 'LoadingTripId';
            PendingTripDetailsInvoiceRow.nameProperty = 'TripNo';
            PendingTripDetailsInvoiceRow.localTextPrefix = 'Default.PendingTripDetailsInvoice';
            PendingTripDetailsInvoiceRow.deletePermission = 'Administration:General';
            PendingTripDetailsInvoiceRow.insertPermission = 'Administration:General';
            PendingTripDetailsInvoiceRow.readPermission = 'Administration:General';
            PendingTripDetailsInvoiceRow.updatePermission = 'Administration:General';
        })(PendingTripDetailsInvoiceRow = Default.PendingTripDetailsInvoiceRow || (Default.PendingTripDetailsInvoiceRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PendingTripDetailsInvoiceService;
        (function (PendingTripDetailsInvoiceService) {
            PendingTripDetailsInvoiceService.baseUrl = 'Default/PendingTripDetailsInvoice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetSelectedTrips'
            ].forEach(function (x) {
                PendingTripDetailsInvoiceService[x] = function (r, s, o) {
                    return Q.serviceRequest(PendingTripDetailsInvoiceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PendingTripDetailsInvoiceService = Default.PendingTripDetailsInvoiceService || (Default.PendingTripDetailsInvoiceService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PersonForm = /** @class */ (function (_super) {
            __extends(PersonForm, _super);
            function PersonForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PersonForm.init) {
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
                return _this;
            }
            PersonForm.formKey = 'Default.Person';
            return PersonForm;
        }(Serenity.PrefixedContext));
        Default.PersonForm = PersonForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PersonRow;
        (function (PersonRow) {
            PersonRow.idProperty = 'PersonId';
            PersonRow.nameProperty = 'FullName';
            PersonRow.localTextPrefix = 'Default.Person';
            PersonRow.lookupKey = 'Default.Person';
            function getLookup() {
                return Q.getLookup('Default.Person');
            }
            PersonRow.getLookup = getLookup;
            PersonRow.deletePermission = 'Administration:General:Delete';
            PersonRow.insertPermission = 'Administration:General:Insert';
            PersonRow.readPermission = 'Administration:General:Read';
            PersonRow.updatePermission = 'Administration:General:Modify';
        })(PersonRow = Default.PersonRow || (Default.PersonRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PersonService;
        (function (PersonService) {
            PersonService.baseUrl = 'Default/Person';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PersonService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonService = Default.PersonService || (Default.PersonService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PlantForm = /** @class */ (function (_super) {
            __extends(PlantForm, _super);
            function PlantForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PlantForm.init) {
                    PlantForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PlantForm, [
                        'Plant', w0,
                        'Remarks', w0
                    ]);
                }
                return _this;
            }
            PlantForm.formKey = 'Default.Plant';
            return PlantForm;
        }(Serenity.PrefixedContext));
        Default.PlantForm = PlantForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PlantRow;
        (function (PlantRow) {
            PlantRow.idProperty = 'Id';
            PlantRow.nameProperty = 'Plant';
            PlantRow.localTextPrefix = 'Default.Plant';
            PlantRow.lookupKey = 'Default.Plant';
            function getLookup() {
                return Q.getLookup('Default.Plant');
            }
            PlantRow.getLookup = getLookup;
            PlantRow.deletePermission = 'Administration:General';
            PlantRow.insertPermission = 'Administration:General';
            PlantRow.readPermission = 'Administration:General';
            PlantRow.updatePermission = 'Administration:General';
        })(PlantRow = Default.PlantRow || (Default.PlantRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PlantService;
        (function (PlantService) {
            PlantService.baseUrl = 'Default/Plant';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PlantService[x] = function (r, s, o) {
                    return Q.serviceRequest(PlantService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PlantService = Default.PlantService || (Default.PlantService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PumpmasterForm = /** @class */ (function (_super) {
            __extends(PumpmasterForm, _super);
            function PumpmasterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PumpmasterForm.init) {
                    PumpmasterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(PumpmasterForm, [
                        'Name', w0,
                        'Stock', w1,
                        'Gst', w0,
                        'Pan', w0,
                        'Type', w2,
                        'Address', w3
                    ]);
                }
                return _this;
            }
            PumpmasterForm.formKey = 'Default.Pumpmaster';
            return PumpmasterForm;
        }(Serenity.PrefixedContext));
        Default.PumpmasterForm = PumpmasterForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PumpmasterRow;
        (function (PumpmasterRow) {
            PumpmasterRow.idProperty = 'Id';
            PumpmasterRow.nameProperty = 'Name';
            PumpmasterRow.localTextPrefix = 'Default.Pumpmaster';
            PumpmasterRow.lookupKey = 'master.Pump';
            function getLookup() {
                return Q.getLookup('master.Pump');
            }
            PumpmasterRow.getLookup = getLookup;
            PumpmasterRow.deletePermission = 'Administration:General';
            PumpmasterRow.insertPermission = 'Administration:General';
            PumpmasterRow.readPermission = 'Administration:General';
            PumpmasterRow.updatePermission = 'Administration:General';
        })(PumpmasterRow = Default.PumpmasterRow || (Default.PumpmasterRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PumpmasterService;
        (function (PumpmasterService) {
            PumpmasterService.baseUrl = 'Default/Pumpmaster';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetPumpStock'
            ].forEach(function (x) {
                PumpmasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(PumpmasterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PumpmasterService = Default.PumpmasterService || (Default.PumpmasterService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var StateMasterForm = /** @class */ (function (_super) {
            __extends(StateMasterForm, _super);
            function StateMasterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StateMasterForm.init) {
                    StateMasterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(StateMasterForm, [
                        'State', w0,
                        'StateCode', w0,
                        'Remarks', w0
                    ]);
                }
                return _this;
            }
            StateMasterForm.formKey = 'Default.StateMaster';
            return StateMasterForm;
        }(Serenity.PrefixedContext));
        Default.StateMasterForm = StateMasterForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var StateMasterRow;
        (function (StateMasterRow) {
            StateMasterRow.idProperty = 'Id';
            StateMasterRow.nameProperty = 'State';
            StateMasterRow.localTextPrefix = 'Default.StateMaster';
            StateMasterRow.lookupKey = 'Default.StateMaster';
            function getLookup() {
                return Q.getLookup('Default.StateMaster');
            }
            StateMasterRow.getLookup = getLookup;
            StateMasterRow.deletePermission = 'Administration:General';
            StateMasterRow.insertPermission = 'Administration:General';
            StateMasterRow.readPermission = 'Administration:General';
            StateMasterRow.updatePermission = 'Administration:General';
        })(StateMasterRow = Default.StateMasterRow || (Default.StateMasterRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var StateMasterService;
        (function (StateMasterService) {
            StateMasterService.baseUrl = 'Default/StateMaster';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StateMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(StateMasterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StateMasterService = Default.StateMasterService || (Default.StateMasterService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var TaxForm = /** @class */ (function (_super) {
            __extends(TaxForm, _super);
            function TaxForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TaxForm.init) {
                    TaxForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(TaxForm, [
                        'TaxAmount', w0,
                        'Remarks', w1
                    ]);
                }
                return _this;
            }
            TaxForm.formKey = 'Default.Tax';
            return TaxForm;
        }(Serenity.PrefixedContext));
        Default.TaxForm = TaxForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var TaxRow;
        (function (TaxRow) {
            TaxRow.idProperty = 'Id';
            TaxRow.nameProperty = 'TaxAmountText';
            TaxRow.localTextPrefix = 'Default.Tax';
            TaxRow.lookupKey = 'Default.Tax';
            function getLookup() {
                return Q.getLookup('Default.Tax');
            }
            TaxRow.getLookup = getLookup;
            TaxRow.deletePermission = 'Administration:General';
            TaxRow.insertPermission = 'Administration:General';
            TaxRow.readPermission = 'Administration:General';
            TaxRow.updatePermission = 'Administration:General';
        })(TaxRow = Default.TaxRow || (Default.TaxRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var TaxService;
        (function (TaxService) {
            TaxService.baseUrl = 'Default/Tax';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TaxService[x] = function (r, s, o) {
                    return Q.serviceRequest(TaxService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TaxService = Default.TaxService || (Default.TaxService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnitForm = /** @class */ (function (_super) {
            __extends(UnitForm, _super);
            function UnitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UnitForm.init) {
                    UnitForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(UnitForm, [
                        'UnitName', w0
                    ]);
                }
                return _this;
            }
            UnitForm.formKey = 'Default.Unit';
            return UnitForm;
        }(Serenity.PrefixedContext));
        Default.UnitForm = UnitForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnitRow;
        (function (UnitRow) {
            UnitRow.idProperty = 'Id';
            UnitRow.nameProperty = 'UnitName';
            UnitRow.localTextPrefix = 'Default.Unit';
            UnitRow.lookupKey = 'Default.Unit';
            function getLookup() {
                return Q.getLookup('Default.Unit');
            }
            UnitRow.getLookup = getLookup;
            UnitRow.deletePermission = 'Administration:General';
            UnitRow.insertPermission = 'Administration:General';
            UnitRow.readPermission = 'Administration:General';
            UnitRow.updatePermission = 'Administration:General';
        })(UnitRow = Default.UnitRow || (Default.UnitRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnitService;
        (function (UnitService) {
            UnitService.baseUrl = 'Default/Unit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UnitService[x] = function (r, s, o) {
                    return Q.serviceRequest(UnitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UnitService = Default.UnitService || (Default.UnitService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnloadTripForm = /** @class */ (function (_super) {
            __extends(UnloadTripForm, _super);
            function UnloadTripForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UnloadTripForm.init) {
                    UnloadTripForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(UnloadTripForm, [
                        'LoadingTripId', w0,
                        'TripNo', w1,
                        'TripDate', w2,
                        'Plant', w1,
                        'District', w1,
                        'Destination', w1,
                        'VehicleName', w1,
                        'CustomerName', w1,
                        'Branch', w1,
                        'State', w1,
                        'Item', w1,
                        'Weight', w3,
                        'Wheels', w0,
                        'ExpenseAmount', w3,
                        'UnloadWeight', w3,
                        'UnloadDate', w2,
                        'Remarks', w1,
                        'CreatedDate', w2
                    ]);
                }
                return _this;
            }
            UnloadTripForm.formKey = 'Default.UnloadTrip';
            return UnloadTripForm;
        }(Serenity.PrefixedContext));
        Default.UnloadTripForm = UnloadTripForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnloadTripRow;
        (function (UnloadTripRow) {
            UnloadTripRow.idProperty = 'UnloadTripId';
            UnloadTripRow.nameProperty = 'TripNo';
            UnloadTripRow.localTextPrefix = 'Default.UnloadTrip';
            UnloadTripRow.deletePermission = 'Administration:General';
            UnloadTripRow.insertPermission = 'Administration:General';
            UnloadTripRow.readPermission = 'Administration:General';
            UnloadTripRow.updatePermission = 'Administration:General';
        })(UnloadTripRow = Default.UnloadTripRow || (Default.UnloadTripRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnloadTripService;
        (function (UnloadTripService) {
            UnloadTripService.baseUrl = 'Default/UnloadTrip';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UnloadTripService[x] = function (r, s, o) {
                    return Q.serviceRequest(UnloadTripService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UnloadTripService = Default.UnloadTripService || (Default.UnloadTripService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VLoadingTripDetailsForm = /** @class */ (function (_super) {
            __extends(VLoadingTripDetailsForm, _super);
            function VLoadingTripDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VLoadingTripDetailsForm.init) {
                    VLoadingTripDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(VLoadingTripDetailsForm, [
                        'LoadingTripId', w0,
                        'TripNo', w1,
                        'TripDate', w2,
                        'PlantName', w1,
                        'DistrictName', w1,
                        'DestinationName', w1,
                        'VehicleNumber', w1,
                        'CustomerName', w1,
                        'BranchName', w1,
                        'StateName', w1,
                        'ItemName', w1,
                        'Weight', w3,
                        'Wheels', w0,
                        'ExpenseAmount', w3,
                        'Remarks', w1,
                        'CreatedDate', w2
                    ]);
                }
                return _this;
            }
            VLoadingTripDetailsForm.formKey = 'Default.VLoadingTripDetails';
            return VLoadingTripDetailsForm;
        }(Serenity.PrefixedContext));
        Default.VLoadingTripDetailsForm = VLoadingTripDetailsForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VLoadingTripDetailsRow;
        (function (VLoadingTripDetailsRow) {
            VLoadingTripDetailsRow.idProperty = 'LoadingTripId';
            VLoadingTripDetailsRow.nameProperty = 'TripNo';
            VLoadingTripDetailsRow.localTextPrefix = 'Default.VLoadingTripDetails';
            VLoadingTripDetailsRow.deletePermission = 'Administration:General';
            VLoadingTripDetailsRow.insertPermission = 'Administration:General';
            VLoadingTripDetailsRow.readPermission = 'Administration:General';
            VLoadingTripDetailsRow.updatePermission = 'Administration:General';
        })(VLoadingTripDetailsRow = Default.VLoadingTripDetailsRow || (Default.VLoadingTripDetailsRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VLoadingTripDetailsService;
        (function (VLoadingTripDetailsService) {
            VLoadingTripDetailsService.baseUrl = 'Default/VLoadingTripDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VLoadingTripDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(VLoadingTripDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VLoadingTripDetailsService = Default.VLoadingTripDetailsService || (Default.VLoadingTripDetailsService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VehicleMasterForm = /** @class */ (function (_super) {
            __extends(VehicleMasterForm, _super);
            function VehicleMasterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VehicleMasterForm.init) {
                    VehicleMasterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DateEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(VehicleMasterForm, [
                        'VehicleNumber', w0,
                        'VehicleType', w1,
                        'Brand', w0,
                        'Model', w0,
                        'ManufacturingYear', w2,
                        'FuelType', w1,
                        'EngineNumber', w0,
                        'ChassisNumber', w0,
                        'Color', w0,
                        'SeatingCapacity', w2,
                        'CustomerId', w3,
                        'InsuranceExpiryDate', w4,
                        'Wheels', w0,
                        'IsActive', w5,
                        'CreatedDate', w4
                    ]);
                }
                return _this;
            }
            VehicleMasterForm.formKey = 'Default.VehicleMaster';
            return VehicleMasterForm;
        }(Serenity.PrefixedContext));
        Default.VehicleMasterForm = VehicleMasterForm;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VehicleMasterRow;
        (function (VehicleMasterRow) {
            VehicleMasterRow.idProperty = 'VehicleId';
            VehicleMasterRow.nameProperty = 'VehicleNumber';
            VehicleMasterRow.localTextPrefix = 'Default.VehicleMaster';
            VehicleMasterRow.lookupKey = 'Default.VehicleMaster';
            function getLookup() {
                return Q.getLookup('Default.VehicleMaster');
            }
            VehicleMasterRow.getLookup = getLookup;
            VehicleMasterRow.deletePermission = 'Administration:General';
            VehicleMasterRow.insertPermission = 'Administration:General';
            VehicleMasterRow.readPermission = 'Administration:General';
            VehicleMasterRow.updatePermission = 'Administration:General';
        })(VehicleMasterRow = Default.VehicleMasterRow || (Default.VehicleMasterRow = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VehicleMasterService;
        (function (VehicleMasterService) {
            VehicleMasterService.baseUrl = 'Default/VehicleMaster';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VehicleMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(VehicleMasterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VehicleMasterService = Default.VehicleMasterService || (Default.VehicleMasterService = {}));
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var DieselissueForm = /** @class */ (function (_super) {
            __extends(DieselissueForm, _super);
            function DieselissueForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DieselissueForm.init) {
                    DieselissueForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(DieselissueForm, [
                        'VehicleId', w0,
                        'Tripno', w0,
                        'Plant', w0,
                        'Distict', w0,
                        'Destination', w0,
                        'Pumpid', w0,
                        'Stock', w1,
                        'Today', w2,
                        'Rateofdiesel', w1,
                        'Diesel', w1,
                        'Totalprice', w1
                    ]);
                }
                return _this;
            }
            DieselissueForm.formKey = 'FuelManagement.Dieselissue';
            return DieselissueForm;
        }(Serenity.PrefixedContext));
        FuelManagement.DieselissueForm = DieselissueForm;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var DieselissueRow;
        (function (DieselissueRow) {
            DieselissueRow.idProperty = 'Id';
            DieselissueRow.nameProperty = 'Vehiclenumber';
            DieselissueRow.localTextPrefix = 'FuelManagement.Dieselissue';
            DieselissueRow.deletePermission = 'Administration:General';
            DieselissueRow.insertPermission = 'Administration:General';
            DieselissueRow.readPermission = 'Administration:General';
            DieselissueRow.updatePermission = 'Administration:General';
        })(DieselissueRow = FuelManagement.DieselissueRow || (FuelManagement.DieselissueRow = {}));
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var DieselissueService;
        (function (DieselissueService) {
            DieselissueService.baseUrl = 'FuelManagement/Dieselissue';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetDieselRate',
                'GetTripDetails'
            ].forEach(function (x) {
                DieselissueService[x] = function (r, s, o) {
                    return Q.serviceRequest(DieselissueService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DieselissueService = FuelManagement.DieselissueService || (FuelManagement.DieselissueService = {}));
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDataForm = /** @class */ (function (_super) {
            __extends(FuelDataForm, _super);
            function FuelDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FuelDataForm.init) {
                    FuelDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.BooleanEditor;
                    var w5 = s.EnumEditor;
                    var w6 = FuelManagement.FuelDetailsEditor;
                    Q.initFormType(FuelDataForm, [
                        'InwardNo', w0,
                        'InvoiceNo', w0,
                        'InvoiceDate', w1,
                        'TankerNo', w0,
                        'QtyKl', w2,
                        'RateKl', w2,
                        'BasicAmount', w2,
                        'TotalAmount', w2,
                        'QuantityLtr', w2,
                        'RateLtr', w2,
                        'TransportationRate', w2,
                        'TransportationAmt', w2,
                        'ShortageKl', w2,
                        'ShortageLtr', w2,
                        'ShortageAmt', w2,
                        'ReceiptDate', w1,
                        'TransporterId', w3,
                        'PartyId', w3,
                        'TdsPayable', w4,
                        'TdsAccountId', w3,
                        'TdsSection', w0,
                        'TdsPercent', w2,
                        'TdsAmount', w2,
                        'DrAccountId', w3,
                        'ShortageDrAccount', w3,
                        'ShortageCrAccount', w3,
                        'ShowFuelDetails', w5,
                        'FuelDetails', w6,
                        'AllottedQuantity', w2
                    ]);
                }
                return _this;
            }
            FuelDataForm.formKey = 'FuelManagement.FuelData';
            return FuelDataForm;
        }(Serenity.PrefixedContext));
        FuelManagement.FuelDataForm = FuelDataForm;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDataRow;
        (function (FuelDataRow) {
            FuelDataRow.idProperty = 'Id';
            FuelDataRow.nameProperty = 'InwardNo';
            FuelDataRow.localTextPrefix = 'FuelManagement.FuelData';
            FuelDataRow.deletePermission = 'Administration:General';
            FuelDataRow.insertPermission = 'Administration:General';
            FuelDataRow.readPermission = 'Administration:General';
            FuelDataRow.updatePermission = 'Administration:General';
        })(FuelDataRow = FuelManagement.FuelDataRow || (FuelManagement.FuelDataRow = {}));
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDataService;
        (function (FuelDataService) {
            FuelDataService.baseUrl = 'FuelManagement/FuelData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FuelDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(FuelDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FuelDataService = FuelManagement.FuelDataService || (FuelManagement.FuelDataService = {}));
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDetailsForm = /** @class */ (function (_super) {
            __extends(FuelDetailsForm, _super);
            function FuelDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FuelDetailsForm.init) {
                    FuelDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(FuelDetailsForm, [
                        'PumpId', w0,
                        'TankerNo', w1,
                        'ReceiptDate', w2,
                        'Quantity', w3
                    ]);
                }
                return _this;
            }
            FuelDetailsForm.formKey = 'FuelManagement.FuelDetails';
            return FuelDetailsForm;
        }(Serenity.PrefixedContext));
        FuelManagement.FuelDetailsForm = FuelDetailsForm;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDetailsRow;
        (function (FuelDetailsRow) {
            FuelDetailsRow.idProperty = 'Id';
            FuelDetailsRow.localTextPrefix = 'FuelManagement.FuelDetails';
            FuelDetailsRow.deletePermission = 'Administration:General';
            FuelDetailsRow.insertPermission = 'Administration:General';
            FuelDetailsRow.readPermission = 'Administration:General';
            FuelDetailsRow.updatePermission = 'Administration:General';
        })(FuelDetailsRow = FuelManagement.FuelDetailsRow || (FuelManagement.FuelDetailsRow = {}));
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDetailsService;
        (function (FuelDetailsService) {
            FuelDetailsService.baseUrl = 'FuelManagement/FuelDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FuelDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(FuelDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FuelDetailsService = FuelManagement.FuelDetailsService || (FuelManagement.FuelDetailsService = {}));
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var ExItemForm = /** @class */ (function (_super) {
            __extends(ExItemForm, _super);
            function ExItemForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExItemForm.init) {
                    ExItemForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(ExItemForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            ExItemForm.formKey = 'Inventry.ExItem';
            return ExItemForm;
        }(Serenity.PrefixedContext));
        Inventry.ExItemForm = ExItemForm;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var ItemForm = /** @class */ (function (_super) {
            __extends(ItemForm, _super);
            function ItemForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ItemForm.init) {
                    ItemForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(ItemForm, [
                        'Partnumber', w0,
                        'Partname', w0,
                        'Openingstock', w1,
                        'Rate', w2,
                        'Stocklvlminimum', w2,
                        'Stocklvlmaximum', w2,
                        'Purchasestock', w2,
                        'GrossPrice', w2,
                        'Balancestock', w2
                    ]);
                }
                return _this;
            }
            ItemForm.formKey = 'Inventry.Item';
            return ItemForm;
        }(Serenity.PrefixedContext));
        Inventry.ItemForm = ItemForm;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var ItemRow;
        (function (ItemRow) {
            ItemRow.idProperty = 'Id';
            ItemRow.nameProperty = 'Partname';
            ItemRow.localTextPrefix = 'Inventry.Item';
            ItemRow.lookupKey = 'Inventry.Item';
            function getLookup() {
                return Q.getLookup('Inventry.Item');
            }
            ItemRow.getLookup = getLookup;
            ItemRow.deletePermission = 'Administration:General';
            ItemRow.insertPermission = 'Administration:General';
            ItemRow.readPermission = 'Administration:General';
            ItemRow.updatePermission = 'Administration:General';
        })(ItemRow = Inventry.ItemRow || (Inventry.ItemRow = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var ItemService;
        (function (ItemService) {
            ItemService.baseUrl = 'Inventry/Item';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                ItemService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemService = Inventry.ItemService || (Inventry.ItemService = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PendingPurchaseOrderForm = /** @class */ (function (_super) {
            __extends(PendingPurchaseOrderForm, _super);
            function PendingPurchaseOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PendingPurchaseOrderForm.init) {
                    PendingPurchaseOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(PendingPurchaseOrderForm, [
                        'PoNo', w0,
                        'OrderDate', w1,
                        'PartyId', w2,
                        'BranchId', w2,
                        'DetailId', w2,
                        'ItemId', w2,
                        'PartNo', w0,
                        'PreviousRate', w3,
                        'CurrentRate', w3,
                        'Quantity', w3,
                        'UnitId', w2,
                        'TotalAmount', w3
                    ]);
                }
                return _this;
            }
            PendingPurchaseOrderForm.formKey = 'Inventry.PendingPurchaseOrder';
            return PendingPurchaseOrderForm;
        }(Serenity.PrefixedContext));
        Inventry.PendingPurchaseOrderForm = PendingPurchaseOrderForm;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PendingPurchaseOrderRow;
        (function (PendingPurchaseOrderRow) {
            PendingPurchaseOrderRow.idProperty = 'DetailId';
            PendingPurchaseOrderRow.nameProperty = 'PoNo';
            PendingPurchaseOrderRow.localTextPrefix = 'Inventry.PendingPurchaseOrder';
            PendingPurchaseOrderRow.deletePermission = 'Administration:General';
            PendingPurchaseOrderRow.insertPermission = 'Administration:General';
            PendingPurchaseOrderRow.readPermission = 'Administration:General';
            PendingPurchaseOrderRow.updatePermission = 'Administration:General';
        })(PendingPurchaseOrderRow = Inventry.PendingPurchaseOrderRow || (Inventry.PendingPurchaseOrderRow = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PendingPurchaseOrderService;
        (function (PendingPurchaseOrderService) {
            PendingPurchaseOrderService.baseUrl = 'Inventry/PendingPurchaseOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetSelectedTrips'
            ].forEach(function (x) {
                PendingPurchaseOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(PendingPurchaseOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PendingPurchaseOrderService = Inventry.PendingPurchaseOrderService || (Inventry.PendingPurchaseOrderService = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillDetailForm = /** @class */ (function (_super) {
            __extends(PurchaseBillDetailForm, _super);
            function PurchaseBillDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseBillDetailForm.init) {
                    PurchaseBillDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(PurchaseBillDetailForm, [
                        'PurchaseBillId', w0,
                        'PurchaseOrderId', w0,
                        'ItemId', w0,
                        'ItemName', w1,
                        'Quantity', w2,
                        'CurrentRate', w2,
                        'PreviousRate', w2,
                        'Discount', w2,
                        'TaxableAmount', w2,
                        'CgstRate', w2,
                        'SgstRate', w2,
                        'IgstRate', w2,
                        'CgstAmount', w2,
                        'SgstAmount', w2,
                        'IgstAmount', w2,
                        'TotalAmount', w2,
                        'Remarks', w1
                    ]);
                }
                return _this;
            }
            PurchaseBillDetailForm.formKey = 'Inventry.PurchaseBillDetail';
            return PurchaseBillDetailForm;
        }(Serenity.PrefixedContext));
        Inventry.PurchaseBillDetailForm = PurchaseBillDetailForm;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillDetailRow;
        (function (PurchaseBillDetailRow) {
            PurchaseBillDetailRow.idProperty = 'Id';
            PurchaseBillDetailRow.nameProperty = 'ItemName';
            PurchaseBillDetailRow.localTextPrefix = 'Inventry.PurchaseBillDetail';
            PurchaseBillDetailRow.deletePermission = 'Administration:General';
            PurchaseBillDetailRow.insertPermission = 'Administration:General';
            PurchaseBillDetailRow.readPermission = 'Administration:General';
            PurchaseBillDetailRow.updatePermission = 'Administration:General';
        })(PurchaseBillDetailRow = Inventry.PurchaseBillDetailRow || (Inventry.PurchaseBillDetailRow = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillDetailService;
        (function (PurchaseBillDetailService) {
            PurchaseBillDetailService.baseUrl = 'Inventry/PurchaseBillDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseBillDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseBillDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseBillDetailService = Inventry.PurchaseBillDetailService || (Inventry.PurchaseBillDetailService = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillForm = /** @class */ (function (_super) {
            __extends(PurchaseBillForm, _super);
            function PurchaseBillForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseBillForm.init) {
                    PurchaseBillForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = Inventry.ExPurchaseBillDetailEditor;
                    Q.initFormType(PurchaseBillForm, [
                        'PartyId', w0,
                        'DebitLedgerId', w1,
                        'BillNo', w2,
                        'BillDate', w3,
                        'Gstin', w2,
                        'PoNumber', w2,
                        'RoundOff', w4,
                        'TotalBillAmount', w4,
                        'StockInDate', w3,
                        'PurchaseDetails', w5,
                        'TaxableAmount', w4,
                        'CgstAmount', w4,
                        'SgstAmount', w4,
                        'IgstAmount', w4,
                        'TdsSection', w2,
                        'TdsRate', w4,
                        'TdsAmount', w4,
                        'Remarks', w2,
                        'LedgerTypeId', w1,
                        'TDSLedger', w1,
                        'CgstLedger', w1,
                        'SgstLedger', w1,
                        'IgstLedger', w1
                    ]);
                }
                return _this;
            }
            PurchaseBillForm.formKey = 'Inventry.PurchaseBill';
            return PurchaseBillForm;
        }(Serenity.PrefixedContext));
        Inventry.PurchaseBillForm = PurchaseBillForm;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillRow;
        (function (PurchaseBillRow) {
            PurchaseBillRow.idProperty = 'Id';
            PurchaseBillRow.nameProperty = 'BillNo';
            PurchaseBillRow.localTextPrefix = 'Inventry.PurchaseBill';
            PurchaseBillRow.deletePermission = 'Administration:General';
            PurchaseBillRow.insertPermission = 'Administration:General';
            PurchaseBillRow.readPermission = 'Administration:General';
            PurchaseBillRow.updatePermission = 'Administration:General';
        })(PurchaseBillRow = Inventry.PurchaseBillRow || (Inventry.PurchaseBillRow = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillService;
        (function (PurchaseBillService) {
            PurchaseBillService.baseUrl = 'Inventry/PurchaseBill';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseBillService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseBillService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseBillService = Inventry.PurchaseBillService || (Inventry.PurchaseBillService = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseOrderForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderForm, _super);
            function PurchaseOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderForm.init) {
                    PurchaseOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = Inventry.PurchaseRequestDetailEditor;
                    Q.initFormType(PurchaseOrderForm, [
                        'PoNo', w0,
                        'OrderDate', w1,
                        'PartyId', w2,
                        'BranchId', w2,
                        'Remarks', w0,
                        'DetailList', w3
                    ]);
                }
                return _this;
            }
            PurchaseOrderForm.formKey = 'Inventry.PurchaseOrder';
            return PurchaseOrderForm;
        }(Serenity.PrefixedContext));
        Inventry.PurchaseOrderForm = PurchaseOrderForm;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseOrderRow;
        (function (PurchaseOrderRow) {
            PurchaseOrderRow.idProperty = 'Id';
            PurchaseOrderRow.nameProperty = 'PoNo';
            PurchaseOrderRow.localTextPrefix = 'Inventry.PurchaseOrder';
            PurchaseOrderRow.lookupKey = 'Inventry.PurchaseOrder';
            function getLookup() {
                return Q.getLookup('Inventry.PurchaseOrder');
            }
            PurchaseOrderRow.getLookup = getLookup;
            PurchaseOrderRow.deletePermission = 'Administration:General';
            PurchaseOrderRow.insertPermission = 'Administration:General';
            PurchaseOrderRow.readPermission = 'Administration:General';
            PurchaseOrderRow.updatePermission = 'Administration:General';
        })(PurchaseOrderRow = Inventry.PurchaseOrderRow || (Inventry.PurchaseOrderRow = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseOrderService;
        (function (PurchaseOrderService) {
            PurchaseOrderService.baseUrl = 'Inventry/PurchaseOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderService = Inventry.PurchaseOrderService || (Inventry.PurchaseOrderService = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseRequestDetailForm = /** @class */ (function (_super) {
            __extends(PurchaseRequestDetailForm, _super);
            function PurchaseRequestDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseRequestDetailForm.init) {
                    PurchaseRequestDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(PurchaseRequestDetailForm, [
                        'PoNo', w0,
                        'PurchaseOrderId', w1,
                        'ItemId', w2,
                        'PartNo', w0,
                        'PreviousRate', w3,
                        'BalanceStock', w3,
                        'StockLevelMax', w3,
                        'StockLevelMin', w3,
                        'CurrentRate', w3,
                        'Quantity', w3,
                        'UnitId', w2,
                        'BasicAmount', w3,
                        'CgstRate', w3,
                        'SgstRate', w3,
                        'IgstRate', w3,
                        'CgstAmount', w3,
                        'SgstAmount', w3,
                        'IgstAmount', w3,
                        'TotalAmount', w3
                    ]);
                }
                return _this;
            }
            PurchaseRequestDetailForm.formKey = 'Inventry.PurchaseRequestDetail';
            return PurchaseRequestDetailForm;
        }(Serenity.PrefixedContext));
        Inventry.PurchaseRequestDetailForm = PurchaseRequestDetailForm;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseRequestDetailRow;
        (function (PurchaseRequestDetailRow) {
            PurchaseRequestDetailRow.idProperty = 'Id';
            PurchaseRequestDetailRow.nameProperty = 'PartNo';
            PurchaseRequestDetailRow.localTextPrefix = 'Inventry.PurchaseRequestDetail';
            PurchaseRequestDetailRow.lookupKey = 'Inventry.PurchaseRequestDetail';
            function getLookup() {
                return Q.getLookup('Inventry.PurchaseRequestDetail');
            }
            PurchaseRequestDetailRow.getLookup = getLookup;
            PurchaseRequestDetailRow.deletePermission = 'Administration:General';
            PurchaseRequestDetailRow.insertPermission = 'Administration:General';
            PurchaseRequestDetailRow.readPermission = 'Administration:General';
            PurchaseRequestDetailRow.updatePermission = 'Administration:General';
        })(PurchaseRequestDetailRow = Inventry.PurchaseRequestDetailRow || (Inventry.PurchaseRequestDetailRow = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseRequestDetailService;
        (function (PurchaseRequestDetailService) {
            PurchaseRequestDetailService.baseUrl = 'Inventry/PurchaseRequestDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetItemDetails'
            ].forEach(function (x) {
                PurchaseRequestDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseRequestDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseRequestDetailService = Inventry.PurchaseRequestDetailService || (Inventry.PurchaseRequestDetailService = {}));
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var MaintenanceModule;
    (function (MaintenanceModule) {
        var MaintenanceForm = /** @class */ (function (_super) {
            __extends(MaintenanceForm, _super);
            function MaintenanceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaintenanceForm.init) {
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
                return _this;
            }
            MaintenanceForm.formKey = 'MaintenanceModule.Maintenance';
            return MaintenanceForm;
        }(Serenity.PrefixedContext));
        MaintenanceModule.MaintenanceForm = MaintenanceForm;
    })(MaintenanceModule = SereneMovieTutorial.MaintenanceModule || (SereneMovieTutorial.MaintenanceModule = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var MaintenanceModule;
    (function (MaintenanceModule) {
        var MaintenanceRow;
        (function (MaintenanceRow) {
            MaintenanceRow.idProperty = 'Id';
            MaintenanceRow.nameProperty = 'TruckNumber';
            MaintenanceRow.localTextPrefix = 'MaintenanceModule.Maintenance';
            MaintenanceRow.lookupKey = 'MaintenanceModule.Maintenance';
            function getLookup() {
                return Q.getLookup('MaintenanceModule.Maintenance');
            }
            MaintenanceRow.getLookup = getLookup;
            MaintenanceRow.deletePermission = 'Administration:General';
            MaintenanceRow.insertPermission = 'Administration:General';
            MaintenanceRow.readPermission = 'Administration:General';
            MaintenanceRow.updatePermission = 'Administration:General';
        })(MaintenanceRow = MaintenanceModule.MaintenanceRow || (MaintenanceModule.MaintenanceRow = {}));
    })(MaintenanceModule = SereneMovieTutorial.MaintenanceModule || (SereneMovieTutorial.MaintenanceModule = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var MaintenanceModule;
    (function (MaintenanceModule) {
        var MaintenanceService;
        (function (MaintenanceService) {
            MaintenanceService.baseUrl = 'MaintenanceModule/Maintenance';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetDetails',
                'GetLatestMaintenance'
            ].forEach(function (x) {
                MaintenanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaintenanceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaintenanceService = MaintenanceModule.MaintenanceService || (MaintenanceModule.MaintenanceService = {}));
    })(MaintenanceModule = SereneMovieTutorial.MaintenanceModule || (SereneMovieTutorial.MaintenanceModule = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1,
                        'BranchId', w2,
                        'FinancialYearId', w2
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var CustomerMaster;
            (function (CustomerMaster) {
                var IdentityType;
                (function (IdentityType) {
                    IdentityType[IdentityType["PAN"] = 1] = "PAN";
                    IdentityType[IdentityType["Aadhar"] = 2] = "Aadhar";
                    IdentityType[IdentityType["DrivingLicence"] = 3] = "DrivingLicence";
                })(IdentityType = CustomerMaster.IdentityType || (CustomerMaster.IdentityType = {}));
                Serenity.Decorators.registerEnumType(IdentityType, 'SereneMovieTutorial.Modules.Default.CustomerMaster.IdentityType');
            })(CustomerMaster = Default.CustomerMaster || (Default.CustomerMaster = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = SereneMovieTutorial.Modules || (SereneMovieTutorial.Modules = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Movie;
            (function (Movie) {
                var MovieKind;
                (function (MovieKind) {
                    MovieKind[MovieKind["Film"] = 1] = "Film";
                    MovieKind[MovieKind["TvSeries"] = 2] = "TvSeries";
                    MovieKind[MovieKind["MiniSeries"] = 3] = "MiniSeries";
                })(MovieKind = Movie.MovieKind || (Movie.MovieKind = {}));
                Serenity.Decorators.registerEnumType(MovieKind, 'SereneMovieTutorial.Modules.Default.Movie.MovieKind', 'MovieDB.MovieKind');
            })(Movie = Default.Movie || (Default.Movie = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = SereneMovieTutorial.Modules || (SereneMovieTutorial.Modules = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Person;
            (function (Person) {
                var Gender;
                (function (Gender) {
                    Gender[Gender["Male"] = 1] = "Male";
                    Gender[Gender["Female"] = 2] = "Female";
                })(Gender = Person.Gender || (Person.Gender = {}));
                Serenity.Decorators.registerEnumType(Gender, 'SereneMovieTutorial.Modules.Default.Person.Gender', 'MovieDB.Gender');
            })(Person = Default.Person || (Default.Person = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = SereneMovieTutorial.Modules || (SereneMovieTutorial.Modules = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Pumpmaster;
            (function (Pumpmaster) {
                var TypeState;
                (function (TypeState) {
                    TypeState[TypeState["Company"] = 1] = "Company";
                    TypeState[TypeState["Party"] = 2] = "Party";
                })(TypeState = Pumpmaster.TypeState || (Pumpmaster.TypeState = {}));
                Serenity.Decorators.registerEnumType(TypeState, 'SereneMovieTutorial.Modules.Default.Pumpmaster.TypeState');
            })(Pumpmaster = Default.Pumpmaster || (Default.Pumpmaster = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = SereneMovieTutorial.Modules || (SereneMovieTutorial.Modules = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var VehicleMaster;
            (function (VehicleMaster) {
                var FuelType;
                (function (FuelType) {
                    FuelType[FuelType["Petrol"] = 1] = "Petrol";
                    FuelType[FuelType["Diesel"] = 2] = "Diesel";
                    FuelType[FuelType["CNG"] = 3] = "CNG";
                    FuelType[FuelType["LPG"] = 4] = "LPG";
                })(FuelType = VehicleMaster.FuelType || (VehicleMaster.FuelType = {}));
                Serenity.Decorators.registerEnumType(FuelType, 'SereneMovieTutorial.Modules.Default.VehicleMaster.FuelType');
            })(VehicleMaster = Default.VehicleMaster || (Default.VehicleMaster = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = SereneMovieTutorial.Modules || (SereneMovieTutorial.Modules = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var VehicleMaster;
            (function (VehicleMaster) {
                var VehicleType;
                (function (VehicleType) {
                    VehicleType[VehicleType["Truck"] = 1] = "Truck";
                    VehicleType[VehicleType["Bus"] = 2] = "Bus";
                    VehicleType[VehicleType["Van"] = 3] = "Van";
                    VehicleType[VehicleType["Car"] = 4] = "Car";
                })(VehicleType = VehicleMaster.VehicleType || (VehicleMaster.VehicleType = {}));
                Serenity.Decorators.registerEnumType(VehicleType, 'SereneMovieTutorial.Modules.Default.VehicleMaster.VehicleType');
            })(VehicleMaster = Default.VehicleMaster || (Default.VehicleMaster = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = SereneMovieTutorial.Modules || (SereneMovieTutorial.Modules = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Modules;
    (function (Modules) {
        var FuelManagement;
        (function (FuelManagement) {
            var FuelData;
            (function (FuelData) {
                var YesNo;
                (function (YesNo) {
                    YesNo[YesNo["No"] = 0] = "No";
                    YesNo[YesNo["Yes"] = 1] = "Yes";
                })(YesNo = FuelData.YesNo || (FuelData.YesNo = {}));
                Serenity.Decorators.registerEnumType(YesNo, 'SereneMovieTutorial.Modules.FuelManagement.FuelData.YesNo');
            })(FuelData = FuelManagement.FuelData || (FuelManagement.FuelData = {}));
        })(FuelManagement = Modules.FuelManagement || (Modules.FuelManagement = {}));
    })(Modules = SereneMovieTutorial.Modules || (SereneMovieTutorial.Modules = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Texts;
    (function (Texts) {
        SereneMovieTutorial['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Default: { BranchMaster: { Address: 1, BranchCode: 1, BranchName: 1, GstNo: 1, Id: 1, PanNo: 1, PhoneNumber: 1, PinCode: 1, Remarks: 1, State: 1, State1: 1, StateId: 1, StateRemarks: 1, StateStateCode: 1 }, Customer: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, CustomerId: 1, Fax: 1, Phone: 1, PostalCode: 1, Region: 1 }, CustomerMaster: { AddressLine1: 1, AddressLine2: 1, City: 1, CreatedDate: 1, CustomerCode: 1, CustomerId: 1, DateOfBirth: 1, Email: 1, FirstName: 1, IdentityNumber: 1, IdentityType: 1, IsActive: 1, LastName: 1, MobileNumber: 1, Pincode: 1, State: 1 }, Destination: { Destination: 1, Distict: 1, DistictName: 1, Id: 1, Plant: 1, PlantName: 1, Remarks: 1 }, Distict: { Distict: 1, Id: 1, Plant: 1, PlantName: 1, Remarks: 1 }, Employees: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeId: 1, Extension: 1, FullName: 1, HireDate: 1, HomePhone: 1, PostalCode: 1, Region: 1, Title: 1, TitleOfCourtesy: 1 }, Expense: { Destination: 1, Destination1: 1, DestinationDistict: 1, DestinationPlant: 1, DestinationRemarks: 1, District: 1, DistrictDistict: 1, DistrictPlant: 1, DistrictRemarks: 1, Expense: 1, ExpenseId: 1, Plant: 1, Plant1: 1, PlantRemarks: 1, Remarks: 1, Weight: 1, Wheels: 1 }, FinancialYear: { EndDate: 1, Id: 1, Name: 1, NameOfInvoice: 1, Remarks: 1, StartDate: 1 }, Genre: { Dates: 1, GenreId: 1, Name: 1 }, Invoicedetails: { Billingamount: 1, Challan: 1, Id: 1, Invoicedate: 1, LoadingTripId: 1, Lrno: 1, ManageInvoiceId: 1, VehicleNumber: 1, Vehicleid: 1, Weight: 1, freightRate: 1 }, ItemMaster: { Id: 1, ItemName: 1, Remarks: 1 }, LoadingTrip: { Branch: 1, BranchId: 1, CreateDate: 1, CreatedBy: 1, CreatedByUsername: 1, CreatedDate: 1, Customer: 1, CustomerId: 1, Destination: 1, DestinationId: 1, District: 1, DistrictId: 1, ExpenseAmount: 1, ItemId: 1, ItemName: 1, LoadingTripId: 1, Plant: 1, PlantId: 1, Remarks: 1, State: 1, StateId: 1, TripDate: 1, TripNo: 1, UpdatedBy: 1, UpdatedByUsername: 1, UpdatedDate: 1, VehicleId: 1, VehicleNumber: 1, Weight: 1, Wheels: 1, freightRate: 1 }, MaintenanceHead: { CreatedBy: 1, CreatedByUsername: 1, CreatedDate: 1, Head: 1, Id: 1, Remarks: 1, UpdatedBy: 1, UpdatedByUsername: 1, UpdatedDate: 1 }, Manageinvoice: { Addgst: 1, Branch: 1, Branchid: 1, Cgstamount: 1, Cgstrate: 1, Fromdate: 1, Id: 1, Igstamount: 1, Igstrate: 1, InvoiceDetails: 1, Invoicedate: 1, Invoiceno: 1, LoadingTripId: 1, Localgst: 1, Plant: 1, Plantid: 1, Pono: 1, Saccode: 1, Sgstamount: 1, Sgstrate: 1, Tax: 1, Todate: 1, Totalgstamount: 1, Totalinvoiceamount: 1, Totaltrips: 1, TripNo: 1 }, Movie: { Actors: 1, CastList: 1, Description: 1, GalleryImages: 1, GenreList: 1, Kind: 1, MovieId: 1, PrimaryImage: 1, ReleaseDate: 1, Runtime: 1, Storyline: 1, Title: 1, Year: 1 }, MovieCast: { Character: 1, MovieCastId: 1, MovieDescription: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1, PersonBirthDate: 1, PersonBirthPlace: 1, PersonFirstName: 1, PersonFullName: 1, PersonGender: 1, PersonHeight: 1, PersonId: 1, PersonLastName: 1 }, MovieGenres: { GenreId: 1, GenreName: 1, MovieDescription: 1, MovieGenreId: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1 }, PartyMaster: { Address: 1, Email: 1, Gst: 1, Id: 1, Name: 1, Pan: 1, PhoneNumber: 1, StateId: 1, StateName: 1 }, PendingTripDetailsInvoice: { BranchId: 1, BranchName: 1, CreatedDate: 1, Createdate: 1, Createdby: 1, CustomerId: 1, CustomerName: 1, DestinationId: 1, DestinationName: 1, DistrictId: 1, DistrictName: 1, ExpenseAmount: 1, FreightRate: 1, ItemId: 1, ItemName: 1, LoadingTripId: 1, PlantId: 1, PlantName: 1, Remarks: 1, StateId: 1, StateName: 1, TripDate: 1, TripNo: 1, Updatedby: 1, Updateddate: 1, VehicleId: 1, VehicleNumber: 1, Weight: 1, Wheels: 1 }, Person: { BirthDate: 1, BirthPlace: 1, FirstName: 1, FullName: 1, GalleryImages: 1, Gender: 1, Height: 1, LastName: 1, PersonId: 1, PrimaryImage: 1 }, Plant: { Id: 1, Plant: 1, Remarks: 1 }, Pumpmaster: { Address: 1, Gst: 1, Id: 1, Name: 1, Pan: 1, Stock: 1, Type: 1 }, StateMaster: { Id: 1, Remarks: 1, State: 1, StateCode: 1 }, Tax: { Id: 1, Remarks: 1, TaxAmount: 1, TaxAmountText: 1 }, Unit: { Id: 1, UnitName: 1 }, UnloadTrip: { Branch: 1, CreateDate: 1, CreatedBy: 1, CreatedByUsername: 1, CreatedDate: 1, CustomerName: 1, Destination: 1, District: 1, ExpenseAmount: 1, Item: 1, LoadingTripId: 1, Plant: 1, Remarks: 1, State: 1, TripDate: 1, TripNo: 1, UnloadDate: 1, UnloadTripId: 1, UnloadWeight: 1, UpdatedBy: 1, UpdatedByUsername: 1, UpdatedDate: 1, VehicleName: 1, Weight: 1, Wheels: 1 }, VLoadingTripDetails: { BranchId: 1, BranchName: 1, CreateDate: 1, CreatedBy: 1, CreatedByUsername: 1, CreatedDate: 1, CustomerId: 1, CustomerName: 1, DestinationId: 1, DestinationName: 1, DistrictId: 1, DistrictName: 1, ExpenseAmount: 1, ItemId: 1, ItemName: 1, LoadingTripId: 1, PlantId: 1, PlantName: 1, Remarks: 1, StateId: 1, StateName: 1, TripDate: 1, TripNo: 1, UpdatedBy: 1, UpdatedByUsername: 1, UpdatedDate: 1, VehicleId: 1, VehicleNumber: 1, Weight: 1, Wheels: 1 }, VehicleMaster: { Brand: 1, ChassisNumber: 1, Color: 1, CreatedDate: 1, CustomerId: 1, CustomerName: 1, EngineNumber: 1, FuelType: 1, InsuranceExpiryDate: 1, IsActive: 1, ManufacturingYear: 1, Model: 1, SeatingCapacity: 1, VehicleId: 1, VehicleNumber: 1, VehicleType: 1, Wheels: 1 } }, FuelManagement: { Dieselissue: { CreatedBy: 1, CreatedByUsername: 1, CreatedDate: 1, Destination: 1, DestinationName: 1, Diesel: 1, Distict: 1, DistrictName: 1, Id: 1, Plant: 1, PlantName: 1, PumpName: 1, Pumpid: 1, Rateofdiesel: 1, Stock: 1, Today: 1, Totalprice: 1, TripNumber: 1, Tripno: 1, UpdatedBy: 1, UpdatedByUsername: 1, UpdatedDate: 1, VehicleId: 1, Vehiclenumber: 1 }, FuelData: { AllottedQuantity: 1, BasicAmount: 1, DrAccountId: 1, FuelDetails: 1, Id: 1, InvoiceDate: 1, InvoiceNo: 1, InwardNo: 1, PartyId: 1, QtyKl: 1, QuantityLtr: 1, RateKl: 1, RateLtr: 1, ReceiptDate: 1, ShortageAmt: 1, ShortageCrAccount: 1, ShortageDrAccount: 1, ShortageKl: 1, ShortageLtr: 1, ShowFuelDetails: 1, TankerNo: 1, TdsAccountId: 1, TdsAmount: 1, TdsPayable: 1, TdsPercent: 1, TdsSection: 1, TotalAmount: 1, TransportationAmt: 1, TransportationRate: 1, TransporterId: 1 }, FuelDetails: { FuelDataId: 1, Id: 1, PumpId: 1, PumpName: 1, Quantity: 1, ReceiptDate: 1, TankerNo: 1 } }, Inventry: { Item: { Balancestock: 1, CreatedByUsername: 1, Createdat: 1, Createdby: 1, GrossPrice: 1, Id: 1, Openingstock: 1, Partname: 1, Partnumber: 1, Purchasestock: 1, Rate: 1, Stocklvlmaximum: 1, Stocklvlminimum: 1, UpdatedByUsername: 1, Updatedat: 1, Updatedby: 1 }, PendingPurchaseOrder: { BalanceStock: 1, BasicAmount: 1, BranchId: 1, BranchName: 1, CGSTRate: 1, CgstAmount: 1, CurrentRate: 1, DetailId: 1, IGSTRate: 1, Id: 1, IgstAmount: 1, ItemId: 1, OrderDate: 1, PartNo: 1, Partname: 1, Party: 1, PartyId: 1, PoNo: 1, PreviousRate: 1, PurchaseOrderId: 1, Quantity: 1, SGSTRate: 1, SgstAmount: 1, StockLevelMax: 1, StockLevelMin: 1, TotalAmount: 1, UnitId: 1, UnitName: 1 }, PurchaseBill: { BillDate: 1, BillNo: 1, CgstAmount: 1, CgstLedger: 1, DebitLedgerId: 1, Gstin: 1, Id: 1, IgstAmount: 1, IgstLedger: 1, LedgerTypeId: 1, PartyId: 1, PartyName: 1, PoNumber: 1, PurchaseDetails: 1, Remarks: 1, RoundOff: 1, SgstAmount: 1, SgstLedger: 1, StockInDate: 1, TDSLedger: 1, TaxableAmount: 1, TdsAmount: 1, TdsRate: 1, TdsSection: 1, TotalBillAmount: 1 }, PurchaseBillDetail: { CgstAmount: 1, CgstRate: 1, CurrentRate: 1, Discount: 1, Id: 1, IgstAmount: 1, IgstRate: 1, ItemId: 1, ItemName: 1, PreviousRate: 1, PurchaseBillId: 1, PurchaseOrderId: 1, Quantity: 1, Remarks: 1, SgstAmount: 1, SgstRate: 1, TaxableAmount: 1, TotalAmount: 1 }, PurchaseOrder: { BranchId: 1, BranchName: 1, CreatedBy: 1, CreatedByUsername: 1, CreatedDate: 1, DetailList: 1, Id: 1, OrderDate: 1, PartyId: 1, PartyName: 1, PoNo: 1, Remarks: 1, UpdateDate: 1, UpdatedBy: 1, UpdatedByUsername: 1 }, PurchaseRequestDetail: { BalanceStock: 1, BasicAmount: 1, CgstAmount: 1, CgstRate: 1, CurrentRate: 1, Id: 1, IgstAmount: 1, IgstRate: 1, ItemId: 1, PartName: 1, PartNo: 1, PoNo: 1, PreviousRate: 1, PurchaseOrderId: 1, Quantity: 1, SgstAmount: 1, SgstRate: 1, StockLevelMax: 1, StockLevelMin: 1, TotalAmount: 1, UnitId: 1, UnitName: 1 } }, MaintenanceModule: { Maintenance: { CustomerName: 1, DueDate: 1, EntryDate: 1, EntryNumber: 1, EstimatedPeriod: 1, Head: 1, HeadId: 1, Id: 1, LastMaintenance: 1, ModelNumber: 1, Narration: 1, Owner: 1, PeriodTill: 1, TruckId: 1, TruckNumber: 1, TruckType: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = SereneMovieTutorial.Texts || (SereneMovieTutorial.Texts = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa fa-lock text-red',
                    onClick: function () {
                        new Administration.NewUserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                        console.log(_this.entity.UserId);
                        console.log(_this.entity.Username);
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = SereneMovieTutorial.Authorization || (SereneMovieTutorial.Authorization = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var CustomPermissionEditor = /** @class */ (function (_super) {
            __extends(CustomPermissionEditor, _super);
            function CustomPermissionEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this.hasActionMap = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    //IsGroup: key.charAt(key.length - 1) === ':',
                    IsGroup: false,
                    HasActions: _this.hasActionMap[key] === true,
                    Insert: false,
                    Read: false,
                    Modify: false,
                    Delete: false,
                    Grant: false
                }); });
                var parentMap = {};
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    if (item.ParentKey) {
                        parentMap[item.ParentKey] = true;
                    }
                }
                for (var _a = 0, items_2 = items; _a < items_2.length; _a++) {
                    var item = items_2[_a];
                    if (parentMap[item.Key]) {
                        item.IsGroup = true;
                    }
                }
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            CustomPermissionEditor.prototype.getIdProperty = function () { return "Key"; };
            CustomPermissionEditor.prototype.setItems = function (items) {
                this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, true);
                for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
                    var item = items_3[_i];
                    if (item.IsGroup) {
                        item._collapsed = false;
                    }
                }
                this.view.setItems(items, true);
            };
            CustomPermissionEditor.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item))
                    return false;
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                return true;
            };
            CustomPermissionEditor.prototype.getColumns = function () {
                var _this = this;
                return [
                    {
                        name: "Permission",
                        field: "Title",
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var klass = _this.getEffectiveClass(ctx.item);
                            return "<span class=\"effective-permission " + klass + "\">\n                        " + Q.htmlEncode(ctx.value) + "\n                    </span>";
                        }),
                        width: 550
                    },
                    {
                        name: "Grant",
                        field: "Grant",
                        format: function (ctx) {
                            return "<span class='check-box grant " +
                                (ctx.item.Grant ? "checked" : "") +
                                "'></span>";
                        },
                        width: 70,
                        cssClass: "align-center"
                    },
                    {
                        name: "Insert",
                        field: "Insert",
                        format: function (ctx) {
                            if (ctx.item.IsGroup || !ctx.item.HasActions)
                                return "";
                            return "<span class='check-box insert " + (ctx.item.Insert ? "checked" : "") + "'></span>";
                        },
                        width: 70,
                        cssClass: "align-center"
                    },
                    {
                        name: "Read",
                        field: "Read",
                        format: function (ctx) {
                            if (ctx.item.IsGroup || !ctx.item.HasActions)
                                return "";
                            return "<span class='check-box read " + (ctx.item.Read ? "checked" : "") + "'></span>";
                        },
                        width: 70,
                        cssClass: "align-center"
                    },
                    {
                        name: "Update",
                        field: "Modify",
                        format: function (ctx) {
                            if (ctx.item.IsGroup || !ctx.item.HasActions)
                                return "";
                            return "<span class='check-box modify " + (ctx.item.Modify ? "checked" : "") + "'></span>";
                        },
                        width: 70,
                        cssClass: "align-center"
                    },
                    {
                        name: "Delete",
                        field: "Delete",
                        format: function (ctx) {
                            if (ctx.item.IsGroup || !ctx.item.HasActions)
                                return "";
                            return "<span class='check-box delete " + (ctx.item.Delete ? "checked" : "") + "'></span>";
                        },
                        width: 70,
                        cssClass: "align-center"
                    }
                ];
            };
            /*protected onClick(e, row, cell): void {
    
                super.onClick(e, row, cell);
    
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(
                        e, row, cell, this.view, x => x.Key
                    );
                }
    
                if (e.isDefaultPrevented())
                    return;
    
                
    
                let target = $(e.target);
                let item = this.itemAt(row);
    
                if (!item || item.IsGroup)
                    return;
    
                let field: string = null;
    
                if (target.hasClass("grant")) field = "Grant";
                else if (target.hasClass("insert")) field = "Insert";
                else if (target.hasClass("read")) field = "Read";
                else if (target.hasClass("modify")) field = "Modify";
                else if (target.hasClass("delete")) field = "Delete";
    
                if (!field) return;
    
                e.preventDefault();
    
                let value = !item[field];
                item[field] = value;
    
               
                if (field === "Grant" && item.HasActions) {
    
                    item.Insert = value;
                    item.Read = value;
                    item.Modify = value;
                    item.Delete = value;
                }
    
                this.slickGrid.invalidate();
            }*/
            CustomPermissionEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                console.log("Clicked:", e.target);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented())
                    return;
                //let target = $(e.target);
                var item = this.itemAt(row);
                if (!item)
                    return;
                var target = $(e.target).closest(".check-box");
                if (!target.length)
                    return;
                var field = null;
                if (target.hasClass("grant"))
                    field = "Grant";
                else if (target.hasClass("insert"))
                    field = "Insert";
                else if (target.hasClass("read"))
                    field = "Read";
                else if (target.hasClass("modify"))
                    field = "Modify";
                else if (target.hasClass("delete"))
                    field = "Delete";
                if (!field)
                    return;
                e.preventDefault();
                var value = !item[field];
                item[field] = value;
                // 🔥 If parent clicked → update all children
                if (item.IsGroup && field === "Grant") {
                    var descendants = this.getDescendants(item);
                    for (var _i = 0, descendants_1 = descendants; _i < descendants_1.length; _i++) {
                        var d = descendants_1[_i];
                        d.Grant = value;
                        if (d.HasActions) {
                            d.Insert = value;
                            d.Read = value;
                            d.Modify = value;
                            d.Delete = value;
                        }
                    }
                }
                if (field === "Grant") {
                    if (item.IsGroup) {
                        var descendants = this.getDescendants(item);
                        console.log(descendants);
                        for (var _a = 0, descendants_2 = descendants; _a < descendants_2.length; _a++) {
                            var d = descendants_2[_a];
                            d.Grant = value;
                            if (d.HasActions) {
                                d.Insert = value;
                                d.Read = value;
                                d.Modify = value;
                                d.Delete = value;
                            }
                            // 🔥 VERY IMPORTANT
                            this.view.updateItem(d.Key, d);
                        }
                    }
                    else if (item.HasActions) {
                        item.Insert = value;
                        item.Read = value;
                        item.Modify = value;
                        item.Delete = value;
                    }
                    // 🔥 update parent also
                    this.view.updateItem(item.Key, item);
                }
                //this.expandParents(item);
                this.view.refresh();
                this.slickGrid.invalidateAllRows();
                this.slickGrid.render();
            };
            //private expandParents(item: PermissionItem): void {
            //    let current = item;
            //    while (current.ParentKey) {
            //        let parent = this.view.getItemById(current.ParentKey);
            //        if (!parent)
            //            break;
            //        // find row index of parent
            //        let row = this.view.getIdxById(parent.Key);
            //        // if collapsed, simulate toggle click
            //        if ((parent as any)._collapsed === true) {
            //            Serenity.SlickTreeHelper.toggleClick(
            //                { preventDefault: function () { }, isDefaultPrevented: () => false } as any,
            //                row,
            //                0,
            //                this.view,
            //                x => x.Key
            //            );
            //        }
            //        current = parent;
            //    }
            //    this.slickGrid.invalidateAllRows();
            //    this.slickGrid.render();
            //}
            CustomPermissionEditor.prototype.getParentKey = function (key) {
                var idx = key.lastIndexOf(':');
                if (idx <= 0)
                    return null;
                return key.substring(0, idx);
            };
            CustomPermissionEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var rawKeys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var baseKeys = {};
                var hasAction = {};
                for (var _i = 0, rawKeys_1 = rawKeys; _i < rawKeys_1.length; _i++) {
                    var k = rawKeys_1[_i];
                    if (!k)
                        continue;
                    var parts = k.split(':');
                    // Action level permission
                    if (parts.length > 2) {
                        var baseKey = parts.slice(0, parts.length - 1).join(':');
                        baseKeys[baseKey] = true;
                        hasAction[baseKey] = true;
                    }
                    else {
                        baseKeys[k] = true;
                    }
                }
                // 🔥 Now build full parent chain
                var allKeys = {};
                for (var _a = 0, _b = Object.keys(baseKeys); _a < _b.length; _a++) {
                    var k = _b[_a];
                    var parts = k.split(':');
                    var current = "";
                    for (var i = 0; i < parts.length; i++) {
                        current += (i === 0 ? parts[i] : ":" + parts[i]);
                        allKeys[current] = true;
                    }
                }
                // Save action map
                this.hasActionMap = hasAction;
                var keys = Object.keys(allKeys);
                // Set titles
                for (var _c = 0, keys_1 = keys; _c < keys_1.length; _c++) {
                    var k = keys_1[_c];
                    titleByKey[k] = Q.tryGetText("Permission." + k) || k;
                }
                return keys.sort(function (x, y) { return Q.turkishLocaleCompare(x, y); });
            };
            Object.defineProperty(CustomPermissionEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.IsGroup)
                            continue;
                        if (item.Grant)
                            result.push({ PermissionKey: item.Key, Granted: true });
                        if (item.HasActions) {
                            if (item.Insert)
                                result.push({ PermissionKey: item.Key + ":Insert", Granted: true });
                            if (item.Read)
                                result.push({ PermissionKey: item.Key + ":Read", Granted: true });
                            if (item.Modify)
                                result.push({ PermissionKey: item.Key + ":Modify", Granted: true });
                            if (item.Delete)
                                result.push({ PermissionKey: item.Key + ":Delete", Granted: true });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.Insert = item.Read = item.Modify = item.Delete = item.Grant = false;
                    }
                    if (!value)
                        return;
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var parts = row.PermissionKey.split(':');
                        if (parts.length > 2) {
                            var entityKey = parts.slice(0, parts.length - 1).join(':');
                            var action = parts[parts.length - 1].toLowerCase();
                            var item = this.view.getItemById(entityKey);
                            if (!item)
                                continue;
                            switch (action) {
                                case "insert":
                                    item.Insert = true;
                                    break;
                                case "read":
                                    item.Read = true;
                                    break;
                                case "modify":
                                    item.Modify = true;
                                    break;
                                case "delete":
                                    item.Delete = true;
                                    break;
                            }
                        }
                        else {
                            var item = this.view.getItemById(row.PermissionKey);
                            if (item)
                                item.Grant = true;
                        }
                    }
                    this.view.refresh();
                    this.slickGrid.invalidate();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CustomPermissionEditor.prototype, "rolePermissions", {
                set: function (value) {
                    this._rolePermissions = {};
                    if (!value)
                        return;
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var key = value_2[_i];
                        this._rolePermissions[key] = true;
                    }
                    this.view.refresh();
                    this.slickGrid.invalidate();
                },
                enumerable: true,
                configurable: true
            });
            CustomPermissionEditor.prototype.getDescendants = function (item) {
                var result = [];
                var stack = [item];
                var _loop_1 = function () {
                    var current = stack.pop();
                    var children = this_1.view.getItems()
                        .filter(function (x) { return x.ParentKey === current.Key; });
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        result.push(child);
                        stack.push(child);
                    }
                };
                var this_1 = this;
                while (stack.length > 0) {
                    _loop_1();
                }
                return result;
            };
            CustomPermissionEditor.prototype.getEffectiveClass = function (item) {
                // 🔥 If group → calculate based on children
                if (item.IsGroup) {
                    var descendants = this.getDescendants(item)
                        .filter(function (x) { return !x.IsGroup; });
                    if (!descendants.length)
                        return "";
                    var allowCount = 0;
                    var denyCount = 0;
                    for (var _i = 0, descendants_3 = descendants; _i < descendants_3.length; _i++) {
                        var d = descendants_3[_i];
                        var granted = d.Grant === true ||
                            this._rolePermissions[d.Key];
                        if (granted)
                            allowCount++;
                        else
                            denyCount++;
                    }
                    if (allowCount === descendants.length)
                        return "allow";
                    if (denyCount === descendants.length)
                        return "deny";
                    return "partial";
                }
                // 🔥 Normal row
                if (item.Grant === true || this._rolePermissions[item.Key])
                    return "allow";
                if (item.Grant === false)
                    return "deny";
                return "";
            };
            CustomPermissionEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], CustomPermissionEditor);
            return CustomPermissionEditor;
        }(Serenity.DataGrid));
        Administration.CustomPermissionEditor = CustomPermissionEditor;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var NewUserPermissionDialog = /** @class */ (function (_super) {
            __extends(NewUserPermissionDialog, _super);
            function NewUserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.userId = opt.userID;
                _this.username = opt.username;
                _this.permissions = new Administration.CustomPermissionEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.userId,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.userId,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                return _this;
                //this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
            }
            NewUserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.userId,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.username);
                return opt;
            };
            NewUserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions" class="grid"></div>';
            };
            NewUserPermissionDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                setTimeout(function () {
                    _this.permissions.element.triggerHandler('layout');
                    _this.permissions.slickGrid.resizeCanvas();
                }, 0);
            };
            NewUserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NewUserPermissionDialog);
            return NewUserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.NewUserPermissionDialog = NewUserPermissionDialog;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
                        var child = children_2[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                    var k = keys_2[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_3 = value; _b < value_3.length; _b++) {
                            var row = value_3[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_4 = value; _i < value_4.length; _i++) {
                            var k = value_4[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var PermissionEditor = /** @class */ (function (_super) {
            __extends(PermissionEditor, _super);
            function PermissionEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_3 = children; _i < children_3.length; _i++) {
                        var child = children_3[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
                    var k = keys_3[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_5 = value; _b < value_5.length; _b++) {
                            var row = value_5[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_6 = value; _i < value_6.length; _i++) {
                            var k = value_6[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_2 = l; _b < l_2.length; _b++) {
                                    var s = l_2[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionEditor);
            return PermissionEditor;
        }(Serenity.DataGrid));
        Administration.PermissionEditor = PermissionEditor;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = SereneMovieTutorial.Administration || (SereneMovieTutorial.Administration = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = SereneMovieTutorial.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = SereneMovieTutorial.LanguageList || (SereneMovieTutorial.LanguageList = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var SereneMovieTutorial;
/// <reference path="../Common/Helpers/LanguageList.ts" />
(function (SereneMovieTutorial) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Culture.dateFormat = "dd-MM-yyyy";
        Q.Culture.dateTimeFormat = "dd-MM-yyyy HH:mm";
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('SereneMovieTutorial');
        Serenity.EntityDialog.defaultLanguageList = SereneMovieTutorial.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = SereneMovieTutorial.ScriptInitialization || (SereneMovieTutorial.ScriptInitialization = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var COLORS = ['#00d4aa', '#4f9cf9', '#f0a500', '#f05b5b', '#a78bfa', '#34d399', '#fb923c', '#60a5fa', '#f472b6', '#818cf8'];
        function VendorOutstanding() {
            jQuery.ajax({
                url: '/Dashboard/GetVendorOutstanding',
                type: 'GET',
                success: function (data) {
                    console.log("GetVendorOutstanding " + "Called");
                    if (!data || !data.length) {
                        console.warn("No vendor data");
                        return;
                    }
                    console.log("Data" + data);
                    renderBars('vendor-bars', data, function (d) { return d.vendorOut; }, // ✔ FUNCTION instead of string
                    function (// ✔ FUNCTION instead of string
                    d) { return d.label; }, '#ffffff', fmt);
                }
            });
        }
        Common.VendorOutstanding = VendorOutstanding;
        VendorOutstanding();
        function renderBars(containerId, data, valFn, labelFn, color, fmtFn, maxVal) {
            var el = document.getElementById(containerId);
            if (!el) {
                console.error("Element not found: " + containerId);
                return;
            }
            var max = maxVal || Math.max.apply(Math, data.map(valFn));
            el.innerHTML = data.map(function (d, i) {
                var value = valFn(d);
                return "\n               <div class=\"bar-row\">\n                 <div class=\"bar-label\" title=\"" + labelFn(d) + "\">" + labelFn(d) + "</div>\n                 <div class=\"bar-track\">\n                   <div class=\"bar-fill\"\n                        style=\"width:" + (value / max * 100).toFixed(1) + "%;\n                               background:" + (color || COLORS[i % COLORS.length]) + "\">\n                   </div>\n                 </div>\n                 <div class=\"bar-val\">" + (fmtFn || fmt)(value) + "</div>\n               </div>";
            }).join('');
        }
        function fmt(n) {
            n = Number(n); // safety
            if (n >= 1e7)
                return '₹' + (n / 1e7).toFixed(2) + ' Cr';
            if (n >= 1e5)
                return '₹' + (n / 1e5).toFixed(1) + ' L';
            return '₹' + n.toFixed(0);
        }
        //$(function () {
        //    SereneMovieTutorial.Common.loadBuyers();
        //});
        //SereneMovieTutorial.Common.loadBuyers();
        loadBuyers();
        function loadBuyers() {
            console.log("loadBuyers called");
            jQuery.ajax({
                url: '/Dashboard/GetTopBuyers',
                type: 'GET',
                success: function (data) {
                    console.log("API data:", data);
                    var tb = document.getElementById('buyer-table');
                    if (!tb)
                        return;
                    tb.innerHTML = data.map(function (b) {
                        var mp = ((b.Margin / b.Revenue) * 100).toFixed(1);
                        var chipClass = parseFloat(mp) > 15 ? 'chip-green' :
                            parseFloat(mp) > 10 ? 'chip-blue' :
                                'chip-gold';
                        return "\n                      <tr>\n                      <td>" + b.BuyerName + "</td>\n                      <td>" + b.Qty + "</td>\n                      <td>" + b.Revenue + "</td>\n                      <td>" + b.Margin + "</td>\n                      <td><span class=\"chip " + chipClass + "\">" + mp + "%</span></td>\n                      </tr>";
                    }).join('');
                }
            });
        }
        Common.loadBuyers = loadBuyers;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    SereneMovieTutorial.BasicProgressDialog = BasicProgressDialog;
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new SereneMovieTutorial.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = SereneMovieTutorial.DialogUtils || (SereneMovieTutorial.DialogUtils = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    SereneMovieTutorial.StaticTextBlock = StaticTextBlock;
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                //this.change(e => {
                //    $.cookie('LanguagePreference', select.val(), {
                //        path: Q.Config.applicationPath,
                //        expires: 365
                //    });
                //    window.location.reload();
                //});
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = SereneMovieTutorial.Common || (SereneMovieTutorial.Common = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var BranchMasterDialog = /** @class */ (function (_super) {
            __extends(BranchMasterDialog, _super);
            function BranchMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.BranchMasterForm(_this.idPrefix);
                return _this;
            }
            BranchMasterDialog.prototype.getFormKey = function () { return Default.BranchMasterForm.formKey; };
            BranchMasterDialog.prototype.getIdProperty = function () { return Default.BranchMasterRow.idProperty; };
            BranchMasterDialog.prototype.getLocalTextPrefix = function () { return Default.BranchMasterRow.localTextPrefix; };
            BranchMasterDialog.prototype.getNameProperty = function () { return Default.BranchMasterRow.nameProperty; };
            BranchMasterDialog.prototype.getService = function () { return Default.BranchMasterService.baseUrl; };
            BranchMasterDialog.prototype.getDeletePermission = function () { return Default.BranchMasterRow.deletePermission; };
            BranchMasterDialog.prototype.getInsertPermission = function () { return Default.BranchMasterRow.insertPermission; };
            BranchMasterDialog.prototype.getUpdatePermission = function () { return Default.BranchMasterRow.updatePermission; };
            BranchMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BranchMasterDialog);
            return BranchMasterDialog;
        }(Serenity.EntityDialog));
        Default.BranchMasterDialog = BranchMasterDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var BranchMasterGrid = /** @class */ (function (_super) {
            __extends(BranchMasterGrid, _super);
            function BranchMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            BranchMasterGrid.prototype.getColumnsKey = function () { return 'Default.BranchMaster'; };
            BranchMasterGrid.prototype.getDialogType = function () { return Default.BranchMasterDialog; };
            BranchMasterGrid.prototype.getIdProperty = function () { return Default.BranchMasterRow.idProperty; };
            BranchMasterGrid.prototype.getInsertPermission = function () { return Default.BranchMasterRow.insertPermission; };
            BranchMasterGrid.prototype.getLocalTextPrefix = function () { return Default.BranchMasterRow.localTextPrefix; };
            BranchMasterGrid.prototype.getService = function () { return Default.BranchMasterService.baseUrl; };
            BranchMasterGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            BranchMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BranchMasterGrid);
            return BranchMasterGrid;
        }(Serenity.EntityGrid));
        Default.BranchMasterGrid = BranchMasterGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CustomerForm(_this.idPrefix);
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Default.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Default.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Default.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Default.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Default.CustomerService.baseUrl; };
            CustomerDialog.prototype.getDeletePermission = function () { return Default.CustomerRow.deletePermission; };
            CustomerDialog.prototype.getInsertPermission = function () { return Default.CustomerRow.insertPermission; };
            CustomerDialog.prototype.getUpdatePermission = function () { return Default.CustomerRow.updatePermission; };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Default.CustomerDialog = CustomerDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return 'Default.Customer'; };
            CustomerGrid.prototype.getDialogType = function () { return Default.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Default.CustomerRow.idProperty; };
            CustomerGrid.prototype.getInsertPermission = function () { return Default.CustomerRow.insertPermission; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Default.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Default.CustomerService.baseUrl; };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Default.CustomerGrid = CustomerGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerMasterDialog = /** @class */ (function (_super) {
            __extends(CustomerMasterDialog, _super);
            function CustomerMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CustomerMasterForm(_this.idPrefix);
                return _this;
            }
            CustomerMasterDialog.prototype.getFormKey = function () { return Default.CustomerMasterForm.formKey; };
            CustomerMasterDialog.prototype.getIdProperty = function () { return Default.CustomerMasterRow.idProperty; };
            CustomerMasterDialog.prototype.getLocalTextPrefix = function () { return Default.CustomerMasterRow.localTextPrefix; };
            CustomerMasterDialog.prototype.getNameProperty = function () { return Default.CustomerMasterRow.nameProperty; };
            CustomerMasterDialog.prototype.getService = function () { return Default.CustomerMasterService.baseUrl; };
            CustomerMasterDialog.prototype.getDeletePermission = function () { return Default.CustomerMasterRow.deletePermission; };
            CustomerMasterDialog.prototype.getInsertPermission = function () { return Default.CustomerMasterRow.insertPermission; };
            CustomerMasterDialog.prototype.getUpdatePermission = function () { return Default.CustomerMasterRow.updatePermission; };
            CustomerMasterDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(2, 0, {
                    title: "Save & New", cssClass: "save-and-new-button", icon: " fa fa-save", onClick: function () {
                        _this.save(function () {
                            _this.loadEntity({});
                        });
                    }
                });
                return buttons;
            };
            CustomerMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerMasterDialog);
            return CustomerMasterDialog;
        }(Serenity.EntityDialog));
        Default.CustomerMasterDialog = CustomerMasterDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var CustomerMasterGrid = /** @class */ (function (_super) {
            __extends(CustomerMasterGrid, _super);
            function CustomerMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            //protected getDialogTitle(): string { return "New Owner";  }
            CustomerMasterGrid.prototype.getColumnsKey = function () { return 'Default.CustomerMaster'; };
            CustomerMasterGrid.prototype.getDialogType = function () { return Default.CustomerMasterDialog; };
            CustomerMasterGrid.prototype.getIdProperty = function () { return Default.CustomerMasterRow.idProperty; };
            CustomerMasterGrid.prototype.getInsertPermission = function () { return Default.CustomerMasterRow.insertPermission; };
            CustomerMasterGrid.prototype.getLocalTextPrefix = function () { return Default.CustomerMasterRow.localTextPrefix; };
            CustomerMasterGrid.prototype.getService = function () { return Default.CustomerMasterService.baseUrl; };
            CustomerMasterGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            CustomerMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerMasterGrid);
            return CustomerMasterGrid;
        }(Serenity.EntityGrid));
        Default.CustomerMasterGrid = CustomerMasterGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DestinationDialog = /** @class */ (function (_super) {
            __extends(DestinationDialog, _super);
            function DestinationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DestinationForm(_this.idPrefix);
                return _this;
            }
            DestinationDialog.prototype.getFormKey = function () { return Default.DestinationForm.formKey; };
            DestinationDialog.prototype.getIdProperty = function () { return Default.DestinationRow.idProperty; };
            DestinationDialog.prototype.getLocalTextPrefix = function () { return Default.DestinationRow.localTextPrefix; };
            DestinationDialog.prototype.getNameProperty = function () { return Default.DestinationRow.nameProperty; };
            DestinationDialog.prototype.getService = function () { return Default.DestinationService.baseUrl; };
            DestinationDialog.prototype.getDeletePermission = function () { return Default.DestinationRow.deletePermission; };
            DestinationDialog.prototype.getInsertPermission = function () { return Default.DestinationRow.insertPermission; };
            DestinationDialog.prototype.getUpdatePermission = function () { return Default.DestinationRow.updatePermission; };
            DestinationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DestinationDialog);
            return DestinationDialog;
        }(Serenity.EntityDialog));
        Default.DestinationDialog = DestinationDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DestinationGrid = /** @class */ (function (_super) {
            __extends(DestinationGrid, _super);
            function DestinationGrid(container) {
                return _super.call(this, container) || this;
            }
            DestinationGrid.prototype.getColumnsKey = function () { return 'Default.Destination'; };
            DestinationGrid.prototype.getDialogType = function () { return Default.DestinationDialog; };
            DestinationGrid.prototype.getIdProperty = function () { return Default.DestinationRow.idProperty; };
            DestinationGrid.prototype.getInsertPermission = function () { return Default.DestinationRow.insertPermission; };
            DestinationGrid.prototype.getLocalTextPrefix = function () { return Default.DestinationRow.localTextPrefix; };
            DestinationGrid.prototype.getService = function () { return Default.DestinationService.baseUrl; };
            DestinationGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            DestinationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DestinationGrid);
            return DestinationGrid;
        }(Serenity.EntityGrid));
        Default.DestinationGrid = DestinationGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DistictDialog = /** @class */ (function (_super) {
            __extends(DistictDialog, _super);
            function DistictDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DistictForm(_this.idPrefix);
                return _this;
            }
            DistictDialog.prototype.getFormKey = function () { return Default.DistictForm.formKey; };
            DistictDialog.prototype.getIdProperty = function () { return Default.DistictRow.idProperty; };
            DistictDialog.prototype.getLocalTextPrefix = function () { return Default.DistictRow.localTextPrefix; };
            DistictDialog.prototype.getNameProperty = function () { return Default.DistictRow.nameProperty; };
            DistictDialog.prototype.getService = function () { return Default.DistictService.baseUrl; };
            DistictDialog.prototype.getDeletePermission = function () { return Default.DistictRow.deletePermission; };
            DistictDialog.prototype.getInsertPermission = function () { return Default.DistictRow.insertPermission; };
            DistictDialog.prototype.getUpdatePermission = function () { return Default.DistictRow.updatePermission; };
            DistictDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DistictDialog);
            return DistictDialog;
        }(Serenity.EntityDialog));
        Default.DistictDialog = DistictDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DistictGrid = /** @class */ (function (_super) {
            __extends(DistictGrid, _super);
            function DistictGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            DistictGrid.prototype.getColumnsKey = function () { return 'Default.Distict'; };
            DistictGrid.prototype.getDialogType = function () { return Default.DistictDialog; };
            DistictGrid.prototype.getIdProperty = function () { return Default.DistictRow.idProperty; };
            DistictGrid.prototype.getInsertPermission = function () { return Default.DistictRow.insertPermission; };
            DistictGrid.prototype.getLocalTextPrefix = function () { return Default.DistictRow.localTextPrefix; };
            DistictGrid.prototype.getService = function () { return Default.DistictService.baseUrl; };
            DistictGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                //var distictCol = Q.first(columns, x => x.field === fld.Distict); if (distictCol) { distictCol.format = ctx => this.stringInputFormatter(ctx); }
                //var qtyCol = Q.first(columns, x => x.field === 'Distict'); if (qtyCol) { qtyCol.format = ctx => this.stringInputFormatter(ctx); }
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                var distictCol = Q.first(columns, function (x) { return x.field === "Distict" /* Distict */; });
                if (distictCol) {
                    distictCol.format = str;
                }
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                var supplier = Q.tryFirst(columns, function (x) { return x.field === fld.Plant1; });
                if (supplier) {
                    supplier.referencedFields = ["Plant" /* Plant */];
                    supplier.format = function (ctx) { return _this.selectFormatter(ctx, "Plant" /* Plant */, Default.PlantRow.getLookup()); };
                }
                return columns;
            };
            DistictGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.Id];
                //var column = ctx.column as Slick.Column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='form-control input-sm" + (klass ? " " + klass : "") +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            DistictGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.Id];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            DistictGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var value = input.val();
                var pending = this.pendingChanges[item.Id];
                if (!pending) {
                    this.pendingChanges[item.Id] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                if (field === "Plant" /* Plant */) {
                    var lookup = Default.PlantRow.getLookup();
                    var selected = lookup.itemById[value];
                    if (selected) {
                        item[fld.Plant1] = selected[lookup.textField];
                    }
                }
                this.view.refresh();
                input.addClass('dirty');
            };
            DistictGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SereneMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Default.DistictService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(SereneMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'District List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            DistrictId: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discontinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button',
                    onClick: function () { return _this.saveChanges(); }
                });
                return buttons;
            };
            DistictGrid.prototype.saveChanges = function () {
                var _this = this;
                var keys = Object.keys(this.pendingChanges);
                if (keys.length === 0)
                    return;
                var completed = 0;
                for (var _i = 0, keys_4 = keys; _i < keys_4.length; _i++) {
                    var id = keys_4[_i];
                    Default.DistictService.Update({
                        EntityId: id,
                        Entity: this.pendingChanges[id]
                    }, function (response) {
                        completed++;
                        if (completed === keys.length) {
                            _this.pendingChanges = {};
                            _this.refresh();
                            Q.notifySuccess("All changes saved successfully.");
                        }
                    });
                }
            };
            //private setSaveButtonState() {
            //    let hasChanges = Object.keys(this.pendingChanges).length > 0;
            //    this.toolbar.findButton('apply-changes-button')
            //        .toggleClass('disabled', !hasChanges);
            //}
            DistictGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string distict-input';
                var item = ctx.item;
                var pending = this.pendingChanges[item.Id];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            DistictGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DistictGrid);
            return DistictGrid;
        }(Serenity.EntityGrid));
        Default.DistictGrid = DistictGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var EmployeesDialog = /** @class */ (function (_super) {
            __extends(EmployeesDialog, _super);
            function EmployeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EmployeesForm(_this.idPrefix);
                return _this;
            }
            EmployeesDialog.prototype.getFormKey = function () { return Default.EmployeesForm.formKey; };
            EmployeesDialog.prototype.getIdProperty = function () { return Default.EmployeesRow.idProperty; };
            EmployeesDialog.prototype.getLocalTextPrefix = function () { return Default.EmployeesRow.localTextPrefix; };
            EmployeesDialog.prototype.getNameProperty = function () { return Default.EmployeesRow.nameProperty; };
            EmployeesDialog.prototype.getService = function () { return Default.EmployeesService.baseUrl; };
            EmployeesDialog.prototype.getDeletePermission = function () { return Default.EmployeesRow.deletePermission; };
            EmployeesDialog.prototype.getInsertPermission = function () { return Default.EmployeesRow.insertPermission; };
            EmployeesDialog.prototype.getUpdatePermission = function () { return Default.EmployeesRow.updatePermission; };
            EmployeesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeesDialog);
            return EmployeesDialog;
        }(Serenity.EntityDialog));
        Default.EmployeesDialog = EmployeesDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var EmployeesGrid = /** @class */ (function (_super) {
            __extends(EmployeesGrid, _super);
            function EmployeesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeesGrid.prototype.getColumnsKey = function () { return 'Default.Employees'; };
            EmployeesGrid.prototype.getDialogType = function () { return Default.EmployeesDialog; };
            EmployeesGrid.prototype.getIdProperty = function () { return Default.EmployeesRow.idProperty; };
            EmployeesGrid.prototype.getInsertPermission = function () { return Default.EmployeesRow.insertPermission; };
            EmployeesGrid.prototype.getLocalTextPrefix = function () { return Default.EmployeesRow.localTextPrefix; };
            EmployeesGrid.prototype.getService = function () { return Default.EmployeesService.baseUrl; };
            EmployeesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                var employee = Q.first(columns, function (x) { return x.field == "FullName"; });
                employee.format = function (ctx) {
                    return "<i class='fa fa-user text-danger'></i> " + ctx.value;
                };
                return columns;
            };
            EmployeesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeesGrid);
            return EmployeesGrid;
        }(Serenity.EntityGrid));
        Default.EmployeesGrid = EmployeesGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ExpenseDialog = /** @class */ (function (_super) {
            __extends(ExpenseDialog, _super);
            function ExpenseDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ExpenseForm(_this.idPrefix);
                return _this;
            }
            ExpenseDialog.prototype.getFormKey = function () { return Default.ExpenseForm.formKey; };
            ExpenseDialog.prototype.getIdProperty = function () { return Default.ExpenseRow.idProperty; };
            ExpenseDialog.prototype.getLocalTextPrefix = function () { return Default.ExpenseRow.localTextPrefix; };
            ExpenseDialog.prototype.getNameProperty = function () { return Default.ExpenseRow.nameProperty; };
            ExpenseDialog.prototype.getService = function () { return Default.ExpenseService.baseUrl; };
            ExpenseDialog.prototype.getDeletePermission = function () { return Default.ExpenseRow.deletePermission; };
            ExpenseDialog.prototype.getInsertPermission = function () { return Default.ExpenseRow.insertPermission; };
            ExpenseDialog.prototype.getUpdatePermission = function () { return Default.ExpenseRow.updatePermission; };
            ExpenseDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(2, 0, {
                    title: "Save & New", cssClass: "save-and-new-button", icon: "fa-save", onClick: function () {
                        _this.save(function () {
                            _this.loadEntity({});
                        });
                    }
                });
                return buttons;
            };
            ExpenseDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpenseDialog);
            return ExpenseDialog;
        }(Serenity.EntityDialog));
        Default.ExpenseDialog = ExpenseDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ExpenseGrid = /** @class */ (function (_super) {
            __extends(ExpenseGrid, _super);
            function ExpenseGrid(container) {
                return _super.call(this, container) || this;
            }
            ExpenseGrid.prototype.getColumnsKey = function () { return 'Default.Expense'; };
            ExpenseGrid.prototype.getDialogType = function () { return Default.ExpenseDialog; };
            ExpenseGrid.prototype.getIdProperty = function () { return Default.ExpenseRow.idProperty; };
            ExpenseGrid.prototype.getInsertPermission = function () { return Default.ExpenseRow.insertPermission; };
            ExpenseGrid.prototype.getLocalTextPrefix = function () { return Default.ExpenseRow.localTextPrefix; };
            ExpenseGrid.prototype.getService = function () { return Default.ExpenseService.baseUrl; };
            ExpenseGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            ExpenseGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.showFooterRow = true;
                return opt;
            };
            //protected getSlickOptions() {
            //    var opt = super.getSlickOptions();
            //    opt.enableTextSelectionOnCells = true;
            //    opt.showFooterRow = true;
            //    return opt;
            //}
            ExpenseGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("Expense" /* Expense */),
                        new Slick.Aggregators.Avg("Weight" /* Weight */)
                    ]
                });
                return grid;
            };
            ExpenseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpenseGrid);
            return ExpenseGrid;
        }(Serenity.EntityGrid));
        Default.ExpenseGrid = ExpenseGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var FinancialYearDialog = /** @class */ (function (_super) {
            __extends(FinancialYearDialog, _super);
            function FinancialYearDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.FinancialYearForm(_this.idPrefix);
                return _this;
            }
            FinancialYearDialog.prototype.getFormKey = function () { return Default.FinancialYearForm.formKey; };
            FinancialYearDialog.prototype.getIdProperty = function () { return Default.FinancialYearRow.idProperty; };
            FinancialYearDialog.prototype.getLocalTextPrefix = function () { return Default.FinancialYearRow.localTextPrefix; };
            FinancialYearDialog.prototype.getNameProperty = function () { return Default.FinancialYearRow.nameProperty; };
            FinancialYearDialog.prototype.getService = function () { return Default.FinancialYearService.baseUrl; };
            FinancialYearDialog.prototype.getDeletePermission = function () { return Default.FinancialYearRow.deletePermission; };
            FinancialYearDialog.prototype.getInsertPermission = function () { return Default.FinancialYearRow.insertPermission; };
            FinancialYearDialog.prototype.getUpdatePermission = function () { return Default.FinancialYearRow.updatePermission; };
            FinancialYearDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FinancialYearDialog);
            return FinancialYearDialog;
        }(Serenity.EntityDialog));
        Default.FinancialYearDialog = FinancialYearDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var FinancialYearGrid = /** @class */ (function (_super) {
            __extends(FinancialYearGrid, _super);
            function FinancialYearGrid(container) {
                return _super.call(this, container) || this;
            }
            FinancialYearGrid.prototype.getColumnsKey = function () { return 'Default.FinancialYear'; };
            FinancialYearGrid.prototype.getDialogType = function () { return Default.FinancialYearDialog; };
            FinancialYearGrid.prototype.getIdProperty = function () { return Default.FinancialYearRow.idProperty; };
            FinancialYearGrid.prototype.getInsertPermission = function () { return Default.FinancialYearRow.insertPermission; };
            FinancialYearGrid.prototype.getLocalTextPrefix = function () { return Default.FinancialYearRow.localTextPrefix; };
            FinancialYearGrid.prototype.getService = function () { return Default.FinancialYearService.baseUrl; };
            FinancialYearGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            FinancialYearGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FinancialYearGrid);
            return FinancialYearGrid;
        }(Serenity.EntityGrid));
        Default.FinancialYearGrid = FinancialYearGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var GenreDialog = /** @class */ (function (_super) {
            __extends(GenreDialog, _super);
            function GenreDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.GenreForm(_this.idPrefix);
                return _this;
            }
            GenreDialog.prototype.getFormKey = function () { return Default.GenreForm.formKey; };
            GenreDialog.prototype.getIdProperty = function () { return Default.GenreRow.idProperty; };
            GenreDialog.prototype.getLocalTextPrefix = function () { return Default.GenreRow.localTextPrefix; };
            GenreDialog.prototype.getNameProperty = function () { return Default.GenreRow.nameProperty; };
            GenreDialog.prototype.getService = function () { return Default.GenreService.baseUrl; };
            GenreDialog.prototype.getDeletePermission = function () { return Default.GenreRow.deletePermission; };
            GenreDialog.prototype.getInsertPermission = function () { return Default.GenreRow.insertPermission; };
            GenreDialog.prototype.getUpdatePermission = function () { return Default.GenreRow.updatePermission; };
            GenreDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GenreDialog);
            return GenreDialog;
        }(Serenity.EntityDialog));
        Default.GenreDialog = GenreDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var GenreGrid = /** @class */ (function (_super) {
            __extends(GenreGrid, _super);
            function GenreGrid(container) {
                return _super.call(this, container) || this;
            }
            GenreGrid.prototype.getColumnsKey = function () { return 'Default.Genre'; };
            GenreGrid.prototype.getDialogType = function () { return Default.GenreDialog; };
            GenreGrid.prototype.getIdProperty = function () { return Default.GenreRow.idProperty; };
            GenreGrid.prototype.getInsertPermission = function () { return Default.GenreRow.insertPermission; };
            GenreGrid.prototype.getLocalTextPrefix = function () { return Default.GenreRow.localTextPrefix; };
            GenreGrid.prototype.getService = function () { return Default.GenreService.baseUrl; };
            GenreGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            GenreGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Default.GenreRow.lookupKey
                    },
                    field: 'GenreId',
                    title: 'Contains Product in Details'
                });
                return filters;
            };
            GenreGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GenreGrid);
            return GenreGrid;
        }(Serenity.EntityGrid));
        Default.GenreGrid = GenreGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MultipleDateEditor = /** @class */ (function (_super) {
            __extends(MultipleDateEditor, _super);
            function MultipleDateEditor(input) {
                var _this = _super.call(this, input) || this;
                var picker = input.datepicker({
                    format: "yyyy-mm-dd",
                    multidate: true,
                    todayHighlight: true,
                    autoclose: false
                });
                input.on("changeDate", function () {
                    var dates = picker.datepicker("getDates");
                    var result = [];
                    for (var i = 0; i < dates.length; i++) {
                        result.push(Q.formatDate(dates[i], "yyyy-MM-dd"));
                    }
                    console.log(result);
                    input.val(result.join(","));
                });
                return _this;
            }
            MultipleDateEditor.prototype.get_value = function () {
                return this.element.val();
            };
            MultipleDateEditor.prototype.set_value = function (value) {
                this.element.val(value);
                if (value) {
                    var dates = value.split(",");
                    this.element.datepicker("setDates", dates);
                }
            };
            MultipleDateEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], MultipleDateEditor);
            return MultipleDateEditor;
        }(Serenity.StringEditor));
        Default.MultipleDateEditor = MultipleDateEditor;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ExInvoiceDetailsDialog = /** @class */ (function (_super) {
            __extends(ExInvoiceDetailsDialog, _super);
            function ExInvoiceDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // public parentDialog: FuelDataDialog;
                //private applyParentTanker: boolean = false;
                _this.form = new Default.InvoicedetailsForm(_this.idPrefix);
                return _this;
            }
            //public static Parent: FuelDataDialog;
            ExInvoiceDetailsDialog.prototype.getFormKey = function () { return Default.InvoicedetailsForm.formKey; };
            ExInvoiceDetailsDialog.prototype.getIdProperty = function () { return Default.InvoicedetailsRow.idProperty; };
            ExInvoiceDetailsDialog.prototype.getLocalTextPrefix = function () { return Default.InvoicedetailsRow.localTextPrefix; };
            ExInvoiceDetailsDialog.prototype.getService = function () { return Default.InvoicedetailsService.baseUrl; };
            ExInvoiceDetailsDialog.prototype.getSaveEntity = function () {
                var entity = _super.prototype.getSaveEntity.call(this);
                //entity.TankerNo = this.form.TankerNo.value;
                //// store PumpName so GridEditor can display it
                //let lookup = Default.PumpmasterRow.getLookup();
                //if (entity.PumpId && lookup.itemById[entity.PumpId])
                //    entity.PumpName = lookup.itemById[entity.PumpId].Name;
                return entity;
            };
            ExInvoiceDetailsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                var parent = this.parentDialog;
                //if (parent) {
                //    let latest = parent.getTankerNo();
                //    this.form.TankerNo.value = latest;
                //}
            };
            ExInvoiceDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExInvoiceDetailsDialog);
            return ExInvoiceDetailsDialog;
        }(SereneMovieTutorial.Common.GridEditorDialog));
        Default.ExInvoiceDetailsDialog = ExInvoiceDetailsDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ExInvoiceDetailsEditor = /** @class */ (function (_super) {
            __extends(ExInvoiceDetailsEditor, _super);
            function ExInvoiceDetailsEditor() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExInvoiceDetailsEditor.prototype.getColumnsKey = function () { return "Default.Invoicedetails"; };
            ExInvoiceDetailsEditor.prototype.getDialogType = function () { return Default.ExInvoiceDetailsDialog; };
            ExInvoiceDetailsEditor.prototype.getLocalTextPrefix = function () { return Default.InvoicedetailsRow.localTextPrefix; };
            ExInvoiceDetailsEditor.prototype.getIdProperty = function () { return Default.InvoicedetailsRow.idProperty; };
            ExInvoiceDetailsEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "ID",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            ExInvoiceDetailsEditor.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons[0].onClick = function () {
                    _this.createEntityDialog(_this.getItemType(), function (dlg) {
                        var dialog = dlg;
                        // ✅ pass parent
                        //dialog.parentDialog = this.parentDialog;
                        dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                        var entity = _this.getNewEntity();
                        // ✅ set tanker
                        //entity.TankerNo = this.TankerName;
                        dialog.loadEntityAndOpenDialog(entity);
                    });
                };
                return buttons;
            };
            ExInvoiceDetailsEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // ✅ THIS ALWAYS RUNS (new + edit)
                dialog.parentDialog = this.parentDialog;
            };
            ExInvoiceDetailsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ExInvoiceDetailsEditor);
            return ExInvoiceDetailsEditor;
        }(SereneMovieTutorial.Common.GridEditorBase));
        Default.ExInvoiceDetailsEditor = ExInvoiceDetailsEditor;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var InvoicedetailsDialog = /** @class */ (function (_super) {
            __extends(InvoicedetailsDialog, _super);
            function InvoicedetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.InvoicedetailsForm(_this.idPrefix);
                return _this;
            }
            InvoicedetailsDialog.prototype.getFormKey = function () { return Default.InvoicedetailsForm.formKey; };
            InvoicedetailsDialog.prototype.getIdProperty = function () { return Default.InvoicedetailsRow.idProperty; };
            InvoicedetailsDialog.prototype.getLocalTextPrefix = function () { return Default.InvoicedetailsRow.localTextPrefix; };
            InvoicedetailsDialog.prototype.getNameProperty = function () { return Default.InvoicedetailsRow.nameProperty; };
            InvoicedetailsDialog.prototype.getService = function () { return Default.InvoicedetailsService.baseUrl; };
            InvoicedetailsDialog.prototype.getDeletePermission = function () { return Default.InvoicedetailsRow.deletePermission; };
            InvoicedetailsDialog.prototype.getInsertPermission = function () { return Default.InvoicedetailsRow.insertPermission; };
            InvoicedetailsDialog.prototype.getUpdatePermission = function () { return Default.InvoicedetailsRow.updatePermission; };
            InvoicedetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoicedetailsDialog);
            return InvoicedetailsDialog;
        }(Serenity.EntityDialog));
        Default.InvoicedetailsDialog = InvoicedetailsDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var InvoicedetailsGrid = /** @class */ (function (_super) {
            __extends(InvoicedetailsGrid, _super);
            function InvoicedetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoicedetailsGrid.prototype.getColumnsKey = function () { return 'Default.Invoicedetails'; };
            InvoicedetailsGrid.prototype.getDialogType = function () { return Default.InvoicedetailsDialog; };
            InvoicedetailsGrid.prototype.getIdProperty = function () { return Default.InvoicedetailsRow.idProperty; };
            InvoicedetailsGrid.prototype.getInsertPermission = function () { return Default.InvoicedetailsRow.insertPermission; };
            InvoicedetailsGrid.prototype.getLocalTextPrefix = function () { return Default.InvoicedetailsRow.localTextPrefix; };
            InvoicedetailsGrid.prototype.getService = function () { return Default.InvoicedetailsService.baseUrl; };
            InvoicedetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoicedetailsGrid);
            return InvoicedetailsGrid;
        }(Serenity.EntityGrid));
        Default.InvoicedetailsGrid = InvoicedetailsGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ItemMasterDialog = /** @class */ (function (_super) {
            __extends(ItemMasterDialog, _super);
            function ItemMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ItemMasterForm(_this.idPrefix);
                return _this;
            }
            ItemMasterDialog.prototype.getFormKey = function () { return Default.ItemMasterForm.formKey; };
            ItemMasterDialog.prototype.getIdProperty = function () { return Default.ItemMasterRow.idProperty; };
            ItemMasterDialog.prototype.getLocalTextPrefix = function () { return Default.ItemMasterRow.localTextPrefix; };
            ItemMasterDialog.prototype.getNameProperty = function () { return Default.ItemMasterRow.nameProperty; };
            ItemMasterDialog.prototype.getService = function () { return Default.ItemMasterService.baseUrl; };
            ItemMasterDialog.prototype.getDeletePermission = function () { return Default.ItemMasterRow.deletePermission; };
            ItemMasterDialog.prototype.getInsertPermission = function () { return Default.ItemMasterRow.insertPermission; };
            ItemMasterDialog.prototype.getUpdatePermission = function () { return Default.ItemMasterRow.updatePermission; };
            ItemMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemMasterDialog);
            return ItemMasterDialog;
        }(Serenity.EntityDialog));
        Default.ItemMasterDialog = ItemMasterDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ItemMasterGrid = /** @class */ (function (_super) {
            __extends(ItemMasterGrid, _super);
            function ItemMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            ItemMasterGrid.prototype.getColumnsKey = function () { return 'Default.ItemMaster'; };
            ItemMasterGrid.prototype.getDialogType = function () { return Default.ItemMasterDialog; };
            ItemMasterGrid.prototype.getIdProperty = function () { return Default.ItemMasterRow.idProperty; };
            ItemMasterGrid.prototype.getInsertPermission = function () { return Default.ItemMasterRow.insertPermission; };
            ItemMasterGrid.prototype.getLocalTextPrefix = function () { return Default.ItemMasterRow.localTextPrefix; };
            ItemMasterGrid.prototype.getService = function () { return Default.ItemMasterService.baseUrl; };
            ItemMasterGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            ItemMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemMasterGrid);
            return ItemMasterGrid;
        }(Serenity.EntityGrid));
        Default.ItemMasterGrid = ItemMasterGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var LoadingTripDialog = /** @class */ (function (_super) {
            __extends(LoadingTripDialog, _super);
            function LoadingTripDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.LoadingTripForm(_this.idPrefix);
                return _this;
            }
            LoadingTripDialog.prototype.getFormKey = function () { return Default.LoadingTripForm.formKey; };
            LoadingTripDialog.prototype.getIdProperty = function () { return Default.LoadingTripRow.idProperty; };
            LoadingTripDialog.prototype.getLocalTextPrefix = function () { return Default.LoadingTripRow.localTextPrefix; };
            LoadingTripDialog.prototype.getNameProperty = function () { return Default.LoadingTripRow.nameProperty; };
            LoadingTripDialog.prototype.getService = function () { return Default.LoadingTripService.baseUrl; };
            LoadingTripDialog.prototype.getDeletePermission = function () { return Default.LoadingTripRow.deletePermission; };
            LoadingTripDialog.prototype.getInsertPermission = function () { return Default.LoadingTripRow.insertPermission; };
            LoadingTripDialog.prototype.getUpdatePermission = function () { return Default.LoadingTripRow.updatePermission; };
            LoadingTripDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                // Load branch info
                Default.LoadingTripService.GetBranch({
                    BranchName: this.form.Branch.value,
                    BranchId: this.form.BranchId.value
                }, function (res) {
                    _this.form.Branch.value = res.BranchName;
                    _this.form.BranchId.value = res.BranchId;
                });
                // Vehicle change
                this.form.VehicleId.changeSelect2(function () {
                    _this.getVehicleOwners();
                    if (!_this.form.VehicleId.value) {
                        _this.form.CustomerId.value = null;
                        _this.form.Wheels.value = null;
                        _this.form.ExpenseAmount.value = null;
                    }
                });
                // Wheels change
                this.form.Wheels.change(function () { return _this.getExpense(); });
                //Plant/District/Destination/Weight changes
                this.form.PlantId.changeSelect2(function () { return _this.getExpense(); });
                this.form.DistrictId.changeSelect2(function () { return _this.getExpense(); });
                this.form.DestinationId.changeSelect2(function () { return _this.getExpense(); });
                this.form.Weight.changeSelect2(function () { return _this.getExpense(); });
            };
            LoadingTripDialog.prototype.clearExpenseFields = function () {
                this.form.ExpenseAmount.value = null;
            };
            LoadingTripDialog.prototype.getVehicleOwners = function () {
                var _this = this;
                if (!this.form.VehicleId.value)
                    return;
                Default.LoadingTripService.GetVehicleDetails({
                    VehicleId: Q.toId(this.form.VehicleId.value)
                }, function (res) {
                    var _a;
                    if (!res.Details) {
                        _this.form.CustomerId.value = null;
                        _this.form.Wheels.value = null;
                        _this.form.ExpenseAmount.value = null;
                        return;
                    }
                    _this.form.CustomerId.value = ((_a = res.Details.CustomerId) === null || _a === void 0 ? void 0 : _a.toString()) || null;
                    _this.form.Wheels.value = res.Details.Wheels;
                });
            };
            LoadingTripDialog.prototype.getExpense = function () {
                var _this = this;
                if (!this.form.PlantId.value ||
                    !this.form.DistrictId.value ||
                    !this.form.DestinationId.value ||
                    !this.form.Weight.value) {
                    this.clearExpenseFields();
                    return;
                }
                Default.LoadingTripService.GetExpenseByRoute({
                    PlantId: Q.toId(this.form.PlantId.value),
                    DistrictId: Q.toId(this.form.DistrictId.value),
                    DestinationId: Q.toId(this.form.DestinationId.value),
                    Wheels: this.form.Wheels.value,
                    Weight: this.form.Weight.value
                }, function (res) {
                    if (!res.Details) {
                        _this.clearExpenseFields();
                        return;
                    }
                    _this.form.ExpenseAmount.value = res.Details.Expense;
                });
            };
            LoadingTripDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], LoadingTripDialog);
            return LoadingTripDialog;
        }(Serenity.EntityDialog));
        Default.LoadingTripDialog = LoadingTripDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var LoadingTripGrid = /** @class */ (function (_super) {
            __extends(LoadingTripGrid, _super);
            function LoadingTripGrid(container) {
                var _this = _super.call(this, container) || this;
                Default.LoadingTripService.GetBranch({}, function (response) {
                    _this.branchId = response.BranchId;
                    _this.branchName = response.BranchName;
                    console.log(_this.BranchName + _this.branchId);
                    _this.refresh();
                });
                return _this;
            }
            LoadingTripGrid.prototype.getColumnsKey = function () { return 'Default.LoadingTrip'; };
            LoadingTripGrid.prototype.getDialogType = function () { return Default.LoadingTripDialog; };
            LoadingTripGrid.prototype.getIdProperty = function () { return Default.LoadingTripRow.idProperty; };
            LoadingTripGrid.prototype.getInsertPermission = function () { return Default.LoadingTripRow.insertPermission; };
            LoadingTripGrid.prototype.getLocalTextPrefix = function () { return Default.LoadingTripRow.localTextPrefix; };
            LoadingTripGrid.prototype.getService = function () { return Default.LoadingTripService.baseUrl; };
            LoadingTripGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    //width: 60,
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                //columns.forEach(c => {
                //      c.minWidth = 100;
                //    if(c.field.length)
                //});
                return columns;
            };
            LoadingTripGrid.prototype.onViewProcessData = function (response) {
                var _this = this;
                var result = _super.prototype.onViewProcessData.call(this, response);
                setTimeout(function () {
                    if (!_this.slickGrid)
                        return;
                    var items = _this.view.getItems();
                    var columns = _this.slickGrid.getColumns();
                    columns.forEach(function (col) {
                        var maxLen = col.name ? col.name.length : 5;
                        items.forEach(function (item) {
                            var val = item[col.field];
                            if (val) {
                                var len = val.toString().length;
                                if (len > maxLen)
                                    maxLen = len;
                            }
                        });
                        col.width = (maxLen * 8) + 30; // approximate pixel width
                    });
                    _this.slickGrid.setColumns(columns);
                }, 100);
                return result;
            };
            LoadingTripGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.forceFitColumns = false;
                return opt;
            };
            LoadingTripGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                this.addQuickFilter({
                    field: "PlantId" /* PlantId */,
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Default.PlantRow.lookupKey
                    }
                });
                this.addQuickFilter({
                    field: "BranchId" /* BranchId */,
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Default.BranchMasterRow.lookupKey
                    },
                    init: function (w) {
                        var interval = setInterval(function () {
                            if (_this.branchId == 8) {
                                //w.element.attr('disabled', 'disabled');
                                clearInterval(interval);
                            }
                            else if (_this.branchId) {
                                w.element.attr('disabled', 'disabled');
                                w.value = _this.branchId.toString();
                                clearInterval(interval);
                            }
                        }, 200);
                    }
                });
                this.addDateRangeFilter("TripDate" /* TripDate */);
            };
            LoadingTripGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LoadingTripGrid);
            return LoadingTripGrid;
        }(Serenity.EntityGrid));
        Default.LoadingTripGrid = LoadingTripGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MaintenanceHeadDialog = /** @class */ (function (_super) {
            __extends(MaintenanceHeadDialog, _super);
            function MaintenanceHeadDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.MaintenanceHeadForm(_this.idPrefix);
                return _this;
            }
            MaintenanceHeadDialog.prototype.getFormKey = function () { return Default.MaintenanceHeadForm.formKey; };
            MaintenanceHeadDialog.prototype.getIdProperty = function () { return Default.MaintenanceHeadRow.idProperty; };
            MaintenanceHeadDialog.prototype.getLocalTextPrefix = function () { return Default.MaintenanceHeadRow.localTextPrefix; };
            MaintenanceHeadDialog.prototype.getNameProperty = function () { return Default.MaintenanceHeadRow.nameProperty; };
            MaintenanceHeadDialog.prototype.getService = function () { return Default.MaintenanceHeadService.baseUrl; };
            MaintenanceHeadDialog.prototype.getDeletePermission = function () { return Default.MaintenanceHeadRow.deletePermission; };
            MaintenanceHeadDialog.prototype.getInsertPermission = function () { return Default.MaintenanceHeadRow.insertPermission; };
            MaintenanceHeadDialog.prototype.getUpdatePermission = function () { return Default.MaintenanceHeadRow.updatePermission; };
            MaintenanceHeadDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceHeadDialog);
            return MaintenanceHeadDialog;
        }(Serenity.EntityDialog));
        Default.MaintenanceHeadDialog = MaintenanceHeadDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MaintenanceHeadGrid = /** @class */ (function (_super) {
            __extends(MaintenanceHeadGrid, _super);
            function MaintenanceHeadGrid(container) {
                return _super.call(this, container) || this;
            }
            MaintenanceHeadGrid.prototype.getColumnsKey = function () { return 'Default.MaintenanceHead'; };
            MaintenanceHeadGrid.prototype.getDialogType = function () { return Default.MaintenanceHeadDialog; };
            MaintenanceHeadGrid.prototype.getIdProperty = function () { return Default.MaintenanceHeadRow.idProperty; };
            MaintenanceHeadGrid.prototype.getInsertPermission = function () { return Default.MaintenanceHeadRow.insertPermission; };
            MaintenanceHeadGrid.prototype.getLocalTextPrefix = function () { return Default.MaintenanceHeadRow.localTextPrefix; };
            MaintenanceHeadGrid.prototype.getService = function () { return Default.MaintenanceHeadService.baseUrl; };
            MaintenanceHeadGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceHeadGrid);
            return MaintenanceHeadGrid;
        }(Serenity.EntityGrid));
        Default.MaintenanceHeadGrid = MaintenanceHeadGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ManageinvoiceDialog = /** @class */ (function (_super) {
            __extends(ManageinvoiceDialog, _super);
            function ManageinvoiceDialog(rows) {
                var _this = _super.call(this) || this;
                _this.form = new Default.ManageinvoiceForm(_this.idPrefix);
                _this.rows = rows || [];
                console.log(rows);
                return _this;
            }
            ManageinvoiceDialog.prototype.getFormKey = function () { return Default.ManageinvoiceForm.formKey; };
            ManageinvoiceDialog.prototype.getIdProperty = function () { return Default.ManageinvoiceRow.idProperty; };
            ManageinvoiceDialog.prototype.getLocalTextPrefix = function () { return Default.ManageinvoiceRow.localTextPrefix; };
            ManageinvoiceDialog.prototype.getNameProperty = function () { return Default.ManageinvoiceRow.nameProperty; };
            ManageinvoiceDialog.prototype.getService = function () { return Default.ManageinvoiceService.baseUrl; };
            ManageinvoiceDialog.prototype.getDeletePermission = function () { return Default.ManageinvoiceRow.deletePermission; };
            ManageinvoiceDialog.prototype.getInsertPermission = function () { return Default.ManageinvoiceRow.insertPermission; };
            ManageinvoiceDialog.prototype.getUpdatePermission = function () { return Default.ManageinvoiceRow.updatePermission; };
            ManageinvoiceDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                //this.form.LoadingTripId.value = this.LoadingTripId.toString();
                if (this.rows && this.rows.length > 0) {
                    this.form.InvoiceDetails.value = this.rows;
                }
                if (this.isNew()) {
                    entity.Plantid = this.Plant_Id;
                    this.form.Plantid.value = this.Plant_Id.toString();
                    entity.Branchid = this.Branch_id;
                    this.form.Branchid.value = this.Branch_id.toString();
                    this.form.Totaltrips.value = this.totTrips;
                    this.form.Invoiceno.value = this.invoice.toString();
                    this.form.Saccode.value = this.sac;
                    this.form.LoadingTripId.value = this.LoadingTripId.toString();
                }
            };
            ManageinvoiceDialog.prototype.getBranchStateId = function () {
                var lookup = Default.BranchMasterRow.getLookup();
                if (!lookup || !lookup.items)
                    return null;
                for (var i = 0; i < lookup.items.length; i++) {
                    var item = lookup.items[i];
                    //console.log("Item Id " +item.Id);
                    if (item.Id == this.Branch_id) {
                        console.log("inside if " + item.StateId);
                        return item.StateId;
                    }
                }
                return null;
            };
            ManageinvoiceDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (!this.isNew()) {
                    this.form.InvoiceDetails.value = this.entity.InvoiceDetails || [];
                }
                this.form.Addgst.change(function (e) {
                    if (_this.form.Addgst.value == true) {
                        // Enable TAX field
                        _this.form.Tax.getGridField().toggleClass('readonly', false);
                        _this.form.Tax.readOnly = false;
                    }
                    else {
                        // Disable TAX field
                        _this.form.Tax.readOnly = true;
                    }
                });
                this.form.Tax.change(function (e) {
                    var taxval = 0;
                    // If Tax is a lookup editor
                    var lookup = Default.TaxRow.getLookup();
                    var taxid = Number(_this.form.Tax.value) || 0;
                    for (var i = 0; i < lookup.items.length; i++) {
                        var item = lookup.items[i];
                        if (item.Id == taxid) {
                            taxval = item.TaxAmount;
                        }
                    }
                    console.log(taxval);
                    var freightRate = _this.totalFreightAmount || 0;
                    var weight = _this.TotalWeight || 0;
                    var basicAmount = freightRate * weight;
                    // Get states
                    var branchStateId = _this.getBranchStateId();
                    //console.log("state id " + this.stateid)
                    //console.log("lookup state id " + branchStateId)
                    //console.log("Totweight" + this.TotalWeight)
                    //console.log("Totamount" + this.totalFreightAmount)
                    //console.log("branch id" + this.Branch_id)
                    if (!branchStateId || !_this.stateid) {
                        Q.notifyWarning("State not found");
                        return;
                    }
                    // RESET
                    _this.form.Cgstrate.value = 0;
                    _this.form.Sgstrate.value = 0;
                    _this.form.Igstrate.value = 0;
                    _this.form.Cgstamount.value = 0;
                    _this.form.Sgstamount.value = 0;
                    _this.form.Igstamount.value = 0;
                    if (branchStateId === _this.stateid) {
                        // CGST + SGST
                        var halfTax = taxval / 2;
                        _this.form.Cgstrate.value = halfTax;
                        _this.form.Sgstrate.value = halfTax;
                        var cgstAmt = (basicAmount * halfTax) / 100;
                        var sgstAmt = (basicAmount * halfTax) / 100;
                        _this.form.Cgstamount.value = cgstAmt;
                        _this.form.Sgstamount.value = sgstAmt;
                    }
                    else {
                        // IGST
                        _this.form.Igstrate.value = taxval;
                        var igstAmt = (basicAmount * taxval / 100);
                        _this.form.Igstamount.value = igstAmt;
                    }
                    // TOTAL GST
                    var totalGST = (_this.form.Cgstamount.value || 0) +
                        (_this.form.Sgstamount.value || 0) +
                        (_this.form.Igstamount.value || 0);
                    _this.form.Totalgstamount.value = totalGST;
                    var totalInvoice = _this.totalFreightAmount + totalGST;
                    _this.form.Totalinvoiceamount.value = totalInvoice;
                });
            };
            ManageinvoiceDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], ManageinvoiceDialog);
            return ManageinvoiceDialog;
        }(Serenity.EntityDialog));
        Default.ManageinvoiceDialog = ManageinvoiceDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var ManageinvoiceGrid = /** @class */ (function (_super) {
            __extends(ManageinvoiceGrid, _super);
            function ManageinvoiceGrid(container) {
                return _super.call(this, container) || this;
            }
            ManageinvoiceGrid.prototype.getColumnsKey = function () { return 'Default.Manageinvoice'; };
            ManageinvoiceGrid.prototype.getDialogType = function () { return Default.ManageinvoiceDialog; };
            ManageinvoiceGrid.prototype.getIdProperty = function () { return Default.ManageinvoiceRow.idProperty; };
            ManageinvoiceGrid.prototype.getInsertPermission = function () { return Default.ManageinvoiceRow.insertPermission; };
            ManageinvoiceGrid.prototype.getLocalTextPrefix = function () { return Default.ManageinvoiceRow.localTextPrefix; };
            ManageinvoiceGrid.prototype.getService = function () { return Default.ManageinvoiceService.baseUrl; };
            ManageinvoiceGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                columns.splice(0, 0);
                columns.unshift({
                    field: 'Print',
                    name: '',
                    format: function (ctx) {
                        return '<a class="inline-action print-voucher-row" title="Print">' +
                            '<i class="fa fa-print text-red"></i></a>';
                    },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            ManageinvoiceGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-voucher-row')) {
                        Q.postToUrl({
                            url: "~/Default/Reports/TripInvoice/GetInvoice",
                            params: {
                                'id': item.Id
                            },
                            target: '_blank'
                        });
                    }
                }
            };
            ManageinvoiceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ManageinvoiceGrid);
            return ManageinvoiceGrid;
        }(Serenity.EntityGrid));
        Default.ManageinvoiceGrid = ManageinvoiceGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var GenreListFormatter = /** @class */ (function () {
            function GenreListFormatter() {
            }
            //format(ctx: Slick.FormatterContext) {
            //    let idList = ctx.value as number[];
            //    if (!idList || !idList.length)
            //        return "";
            //    let byId = GenreRow.getLookup().itemById;
            //    return idList.map(x => {
            //        let g = byId[x];
            //        if (!g)
            //            return x.toString();
            //        return Q.htmlEncode(g.Name);
            //    }).join(", ");
            //}
            GenreListFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            GenreListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], GenreListFormatter);
            return GenreListFormatter;
        }());
        Default.GenreListFormatter = GenreListFormatter;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieDialog = /** @class */ (function (_super) {
            __extends(MovieDialog, _super);
            function MovieDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.MovieForm(_this.idPrefix);
                return _this;
            }
            MovieDialog.prototype.getFormKey = function () { return Default.MovieForm.formKey; };
            MovieDialog.prototype.getIdProperty = function () { return Default.MovieRow.idProperty; };
            MovieDialog.prototype.getLocalTextPrefix = function () { return Default.MovieRow.localTextPrefix; };
            MovieDialog.prototype.getNameProperty = function () { return Default.MovieRow.nameProperty; };
            MovieDialog.prototype.getService = function () { return Default.MovieService.baseUrl; };
            MovieDialog.prototype.getDeletePermission = function () { return Default.MovieRow.deletePermission; };
            MovieDialog.prototype.getInsertPermission = function () { return Default.MovieRow.insertPermission; };
            MovieDialog.prototype.getUpdatePermission = function () { return Default.MovieRow.updatePermission; };
            MovieDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieDialog);
            return MovieDialog;
        }(Serenity.EntityDialog));
        Default.MovieDialog = MovieDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieGrid = /** @class */ (function (_super) {
            __extends(MovieGrid, _super);
            function MovieGrid(container) {
                return _super.call(this, container) || this;
                //this.slickGrid.onClick.subscribe((e, args) => {
                //    this.slickGrid.goToCell(args.row, args.cell, true);
                //});
            }
            MovieGrid.prototype.getColumnsKey = function () { return 'Default.Movie'; };
            MovieGrid.prototype.getDialogType = function () { return Default.MovieDialog; };
            MovieGrid.prototype.getIdProperty = function () { return Default.MovieRow.idProperty; };
            MovieGrid.prototype.getInsertPermission = function () { return Default.MovieRow.insertPermission; };
            MovieGrid.prototype.getLocalTextPrefix = function () { return Default.MovieRow.localTextPrefix; };
            MovieGrid.prototype.getService = function () { return Default.MovieService.baseUrl; };
            MovieGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                //columns.
                var downloadColumn = {
                    field: "Download",
                    name: "",
                    format: function (ctx) {
                        var file = ctx.item.PrimaryImage;
                        if (!file)
                            return "<i class=\"fa fa-download text-muted\"></i>";
                        var url = Q.resolveUrl("~/upload/") + file;
                        return "<a href=\"" + url + "\" download target=\"_blank\">\n                <i class=\"fa fa-download text-blue\"></i>\n            </a>";
                    },
                    width: 40,
                    minWidth: 40,
                    maxWidth: 40
                };
                // insert before Title column
                var titleIndex = columns.map(function (x) { return x.field; })
                    .indexOf("Title" /* Title */);
                if (titleIndex >= 0)
                    columns.splice(titleIndex, 0, downloadColumn);
                columns.forEach(function (c) {
                    if (c.field === "Kind" /* Kind */) {
                        c.editor = Serenity.EnumEditor;
                        c.sourceItem = {
                            editorType: "MovieDB.MovieKind"
                        };
                    }
                });
                return columns;
            };
            MovieGrid.prototype.getQuickSearchFields = function () {
                var txt = function (s) { return Q.text("Db." + Default.MovieRow.localTextPrefix + "." + s); };
                //const fld = MovieRow.Fields;
                return [
                    { name: "", title: "All" },
                    { name: "Description" /* Description */, title: txt("Description" /* Description */) },
                    { name: "Storyline" /* Storyline */, title: txt("Storyline" /* Storyline */) },
                    { name: "Year" /* Year */, title: txt("Year" /* Year */) }
                ];
            };
            MovieGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SereneMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Default.MovieService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(SereneMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Movies List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            MovieID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                //buttons.push({
                //    title: 'Save Changes',
                //    cssClass: 'apply-changes-button disabled',
                //    //onClick: this.
                //    separator: true
                //});
                return buttons;
            };
            MovieGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableColumnReorder = true;
                opt.frozenColumn = 2;
                opt.forceFitColumns = false;
                opt.topPanelHeight = 9;
                opt.editable = true;
                opt.autoEdit = false;
                opt.showFooterRow = true;
                return opt;
            };
            MovieGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        //new Slick.Aggregators.Sum(fld.),
                        new Slick.Aggregators.Avg("Runtime" /* Runtime */)
                    ]
                });
                return grid;
            };
            MovieGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieGrid);
            return MovieGrid;
        }(Serenity.EntityGrid));
        Default.MovieGrid = MovieGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SereneMovieTutorial;
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieCastEditDialog = /** @class */ (function (_super) {
            __extends(MovieCastEditDialog, _super);
            function MovieCastEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.MovieCastForm(_this.idPrefix);
                return _this;
            }
            MovieCastEditDialog.prototype.getFormKey = function () { return Default.MovieCastForm.formKey; };
            MovieCastEditDialog.prototype.getNameProperty = function () { return Default.MovieCastRow.nameProperty; };
            MovieCastEditDialog.prototype.getLocalTextPrefix = function () { return Default.MovieCastRow.localTextPrefix; };
            MovieCastEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieCastEditDialog);
            return MovieCastEditDialog;
        }(SereneMovieTutorial.Common.GridEditorDialog));
        Default.MovieCastEditDialog = MovieCastEditDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
/// /*<reference path="../../Common/Helpers/GridEditorBase.ts" />*/
var SereneMovieTutorial;
/// /*<reference path="../../Common/Helpers/GridEditorBase.ts" />*/
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieCastEditor = /** @class */ (function (_super) {
            __extends(MovieCastEditor, _super);
            function MovieCastEditor(container) {
                return _super.call(this, container) || this;
            }
            MovieCastEditor.prototype.getColumnsKey = function () {
                return "Default.MovieCast";
            };
            MovieCastEditor.prototype.getLocalTextPrefix = function () {
                return Default.MovieCastRow.localTextPrefix;
            };
            //protected getDilogType() {
            //    return MovieCastEditorDialog;
            //}
            MovieCastEditor.prototype.getDialogType = function () { return Default.MovieCastEditDialog; };
            MovieCastEditor.prototype.validateEntity = function (row, id) {
                var person = Default.PersonRow.getLookup().itemById[row.PersonId];
                if (person) {
                    row.PersonFullName = person.FullName;
                }
                if (this.view.getItems().some(function (x) { return x.PersonId === row.PersonId && x !== row; })) {
                    Q.alert("This person is already in the cast!");
                    return false;
                }
                return true;
            };
            MovieCastEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            MovieCastEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], MovieCastEditor);
            return MovieCastEditor;
        }(SereneMovieTutorial.Common.GridEditorBase));
        Default.MovieCastEditor = MovieCastEditor;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SereneMovieTutorial;
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var MovieCastEditorDialog = /** @class */ (function (_super) {
            __extends(MovieCastEditorDialog, _super);
            function MovieCastEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.MovieCastForm(_this.idPrefix);
                return _this;
            }
            MovieCastEditorDialog.prototype.getFormKey = function () {
                return Default.MovieCastForm.formKey;
            };
            MovieCastEditorDialog.prototype.getNameProperty = function () {
                return Default.MovieCastRow.nameProperty;
            };
            MovieCastEditorDialog.prototype.getLocalTextPrefix = function () {
                return Default.MovieCastRow.localTextPrefix;
            };
            MovieCastEditorDialog.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            MovieCastEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieCastEditorDialog);
            return MovieCastEditorDialog;
        }(SereneMovieTutorial.Common.GridEditorDialog));
        Default.MovieCastEditorDialog = MovieCastEditorDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PartyMasterDialog = /** @class */ (function (_super) {
            __extends(PartyMasterDialog, _super);
            function PartyMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PartyMasterForm(_this.idPrefix);
                return _this;
            }
            PartyMasterDialog.prototype.getFormKey = function () { return Default.PartyMasterForm.formKey; };
            PartyMasterDialog.prototype.getIdProperty = function () { return Default.PartyMasterRow.idProperty; };
            PartyMasterDialog.prototype.getLocalTextPrefix = function () { return Default.PartyMasterRow.localTextPrefix; };
            PartyMasterDialog.prototype.getNameProperty = function () { return Default.PartyMasterRow.nameProperty; };
            PartyMasterDialog.prototype.getService = function () { return Default.PartyMasterService.baseUrl; };
            PartyMasterDialog.prototype.getDeletePermission = function () { return Default.PartyMasterRow.deletePermission; };
            PartyMasterDialog.prototype.getInsertPermission = function () { return Default.PartyMasterRow.insertPermission; };
            PartyMasterDialog.prototype.getUpdatePermission = function () { return Default.PartyMasterRow.updatePermission; };
            PartyMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PartyMasterDialog);
            return PartyMasterDialog;
        }(Serenity.EntityDialog));
        Default.PartyMasterDialog = PartyMasterDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PartyMasterGrid = /** @class */ (function (_super) {
            __extends(PartyMasterGrid, _super);
            function PartyMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            PartyMasterGrid.prototype.getColumnsKey = function () { return 'Default.PartyMaster'; };
            PartyMasterGrid.prototype.getDialogType = function () { return Default.PartyMasterDialog; };
            PartyMasterGrid.prototype.getIdProperty = function () { return Default.PartyMasterRow.idProperty; };
            PartyMasterGrid.prototype.getInsertPermission = function () { return Default.PartyMasterRow.insertPermission; };
            PartyMasterGrid.prototype.getLocalTextPrefix = function () { return Default.PartyMasterRow.localTextPrefix; };
            PartyMasterGrid.prototype.getService = function () { return Default.PartyMasterService.baseUrl; };
            PartyMasterGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            PartyMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PartyMasterGrid);
            return PartyMasterGrid;
        }(Serenity.EntityGrid));
        Default.PartyMasterGrid = PartyMasterGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PendingTripDetailsInvoiceDialog = /** @class */ (function (_super) {
            __extends(PendingTripDetailsInvoiceDialog, _super);
            function PendingTripDetailsInvoiceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PendingTripDetailsInvoiceForm(_this.idPrefix);
                return _this;
            }
            PendingTripDetailsInvoiceDialog.prototype.getFormKey = function () { return Default.PendingTripDetailsInvoiceForm.formKey; };
            PendingTripDetailsInvoiceDialog.prototype.getIdProperty = function () { return Default.PendingTripDetailsInvoiceRow.idProperty; };
            PendingTripDetailsInvoiceDialog.prototype.getLocalTextPrefix = function () { return Default.PendingTripDetailsInvoiceRow.localTextPrefix; };
            PendingTripDetailsInvoiceDialog.prototype.getNameProperty = function () { return Default.PendingTripDetailsInvoiceRow.nameProperty; };
            PendingTripDetailsInvoiceDialog.prototype.getService = function () { return Default.PendingTripDetailsInvoiceService.baseUrl; };
            PendingTripDetailsInvoiceDialog.prototype.getDeletePermission = function () { return Default.PendingTripDetailsInvoiceRow.deletePermission; };
            PendingTripDetailsInvoiceDialog.prototype.getInsertPermission = function () { return Default.PendingTripDetailsInvoiceRow.insertPermission; };
            PendingTripDetailsInvoiceDialog.prototype.getUpdatePermission = function () { return Default.PendingTripDetailsInvoiceRow.updatePermission; };
            PendingTripDetailsInvoiceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PendingTripDetailsInvoiceDialog);
            return PendingTripDetailsInvoiceDialog;
        }(Serenity.EntityDialog));
        Default.PendingTripDetailsInvoiceDialog = PendingTripDetailsInvoiceDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PendingTripDetailsInvoiceGrid = /** @class */ (function (_super) {
            __extends(PendingTripDetailsInvoiceGrid, _super);
            function PendingTripDetailsInvoiceGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.totalTrip = 0;
                _this.Invoice = Math.floor(Math.random() * 1000000);
                _this.SAC = Math.floor(100000 + Math.random() * 900000);
                _this.TotAmount = 0;
                _this.TotWeight = 0;
                return _this;
            }
            PendingTripDetailsInvoiceGrid.prototype.getColumnsKey = function () { return 'Default.PendingTripDetailsInvoice'; };
            PendingTripDetailsInvoiceGrid.prototype.getDialogType = function () { return Default.PendingTripDetailsInvoiceDialog; };
            PendingTripDetailsInvoiceGrid.prototype.getIdProperty = function () { return Default.PendingTripDetailsInvoiceRow.idProperty; };
            PendingTripDetailsInvoiceGrid.prototype.getInsertPermission = function () { return Default.PendingTripDetailsInvoiceRow.insertPermission; };
            PendingTripDetailsInvoiceGrid.prototype.getLocalTextPrefix = function () { return Default.PendingTripDetailsInvoiceRow.localTextPrefix; };
            PendingTripDetailsInvoiceGrid.prototype.getService = function () { return Default.PendingTripDetailsInvoiceService.baseUrl; };
            PendingTripDetailsInvoiceGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            PendingTripDetailsInvoiceGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
                this.addQuickFilter({
                    field: "LoadingTripId" /* LoadingTripId */,
                    title: "TripNo",
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: SereneMovieTutorial.Default.LoadingTripRow.lookupKey,
                    }
                });
                this.addQuickFilter({
                    field: "PlantId" /* PlantId */,
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: SereneMovieTutorial.Default.PlantRow.lookupKey,
                    }
                });
                this.addDateRangeFilter("TripDate" /* TripDate */);
                this.addQuickFilter({
                    field: "VehicleId" /* VehicleId */,
                    title: "Vehicle",
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: SereneMovieTutorial.Default.VehicleMasterRow.lookupKey,
                    }
                });
                this.addQuickFilter({
                    field: "BranchId" /* BranchId */,
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: SereneMovieTutorial.Default.BranchMasterRow.lookupKey,
                    }
                });
            };
            PendingTripDetailsInvoiceGrid.prototype.addButtonClick = function () {
                var _this = this;
                var rows = [];
                var selectedKeys = this.rowSelection.getSelectedKeys();
                var TripFilter = this.findQuickFilter(Serenity.LookupEditor, "LoadingTripId" /* LoadingTripId */);
                var PlantFilter = this.findQuickFilter(Serenity.LookupEditor, "PlantId" /* PlantId */);
                var BranchFilter = this.findQuickFilter(Serenity.LookupEditor, "BranchId" /* BranchId */);
                var VehicleFilter = this.findQuickFilter(Serenity.LookupEditor, "VehicleId" /* VehicleId */);
                //  Validations
                if (Q.isEmptyOrNull(TripFilter.value)) {
                    Q.alert('Give Tripno as filter criteria.');
                    this.rowSelection.resetCheckedAndRefresh();
                    return;
                }
                //if (Q.isEmptyOrNull(PlantFilter.value)) {
                //    Q.alert('Select plant name as filter criteria.');
                //    this.rowSelection.resetCheckedAndRefresh();
                //    return;
                //}
                //if (Q.isEmptyOrNull(BranchFilter.value)) {
                //    Q.alert('Select branch name as filter criteria.');
                //    this.rowSelection.resetCheckedAndRefresh();
                //    return;
                //}
                //if (Q.isEmptyOrNull(VehicleFilter.value)) {
                //    Q.alert('Select VehicleNo as filter criteria.');
                //    this.rowSelection.resetCheckedAndRefresh();
                //    return;
                //}
                if (!selectedKeys || selectedKeys.length === 0) {
                    Q.alert('Select at least one item to create Bill.');
                    this.rowSelection.resetCheckedAndRefresh();
                    return;
                }
                //  Async call (correct way)
                Default.PendingTripDetailsInvoiceService.GetSelectedTrips({
                    Ids: selectedKeys
                }, function (res) {
                    if (res.ErrorMsg) {
                        Q.alert(res.ErrorMsg);
                        return;
                    }
                    var TripCollection = res.Trips || [];
                    if (!TripCollection.length) {
                        Q.alert('No data returned from server.');
                        return;
                    }
                    //dlg.CgstAmmount = TripCollection.filter(r => r.CgstAmount);
                    for (var _i = 0, TripCollection_1 = TripCollection; _i < TripCollection_1.length; _i++) {
                        var trip = TripCollection_1[_i];
                        _this.LoadingTripId = trip.LoadingTripId;
                        _this.plant = trip.PlantId;
                        _this.branch = trip.BranchId;
                        _this.totalTrip += 1;
                        _this.TotAmount += trip.FreightRate;
                        _this.TotWeight += trip.Weight;
                        _this.stateId = trip.StateId;
                        rows.push({
                            LoadingTripId: trip.LoadingTripId,
                            //VehicleId: trip.VehicleId,
                            VehicleNumber: trip.VehicleNumber,
                            Weight: trip.Weight,
                            freightRate: trip.FreightRate,
                            Billingamount: (trip.FreightRate * trip.Weight),
                        });
                    }
                    // Dialog creation (fixed order)
                    var dlg = new Default.ManageinvoiceDialog(rows);
                    dlg.Plant_Id = _this.plant;
                    dlg.Branch_id = _this.branch;
                    dlg.totTrips = _this.totalTrip;
                    dlg.sac = _this.SAC;
                    dlg.invoice = _this.Invoice;
                    dlg.stateid = _this.stateId;
                    dlg.totalFreightAmount = _this.TotAmount * _this.TotWeight;
                    dlg.TotalWeight = _this.TotWeight;
                    dlg.LoadingTripId = _this.LoadingTripId;
                    dlg.id = _this.manageinvoiceId;
                    _this.initDialog(dlg);
                    dlg.loadNewAndOpenDialog();
                    _this.rowSelection.resetCheckedAndRefresh();
                });
            };
            PendingTripDetailsInvoiceGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SereneMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Default.PendingTripDetailsInvoiceService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                return buttons;
            };
            PendingTripDetailsInvoiceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PendingTripDetailsInvoiceGrid);
            return PendingTripDetailsInvoiceGrid;
        }(Serenity.EntityGrid));
        Default.PendingTripDetailsInvoiceGrid = PendingTripDetailsInvoiceGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PersonDialog = /** @class */ (function (_super) {
            __extends(PersonDialog, _super);
            function PersonDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.PersonForm(_this.idPrefix);
                _this.moviesGrid = new Default.PersonMovieGrid(_this.byId("MoviesGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                return _this;
            }
            PersonDialog.prototype.getFormKey = function () { return Default.PersonForm.formKey; };
            PersonDialog.prototype.getIdProperty = function () { return Default.PersonRow.idProperty; };
            PersonDialog.prototype.getLocalTextPrefix = function () { return Default.PersonRow.localTextPrefix; };
            PersonDialog.prototype.getNameProperty = function () { return Default.PersonRow.nameProperty; };
            PersonDialog.prototype.getService = function () { return Default.PersonService.baseUrl; };
            PersonDialog.prototype.getDeletePermission = function () { return Default.PersonRow.deletePermission; };
            PersonDialog.prototype.getInsertPermission = function () { return Default.PersonRow.insertPermission; };
            PersonDialog.prototype.getUpdatePermission = function () { return Default.PersonRow.updatePermission; };
            PersonDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.moviesGrid.personID = this.entityId;
            };
            PersonDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonDialog);
            return PersonDialog;
        }(Serenity.EntityDialog));
        Default.PersonDialog = PersonDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PersonGrid = /** @class */ (function (_super) {
            __extends(PersonGrid, _super);
            function PersonGrid(container) {
                return _super.call(this, container) || this;
            }
            PersonGrid.prototype.getColumnsKey = function () { return 'Default.Person'; };
            PersonGrid.prototype.getDialogType = function () { return Default.PersonDialog; };
            PersonGrid.prototype.getIdProperty = function () { return Default.PersonRow.idProperty; };
            PersonGrid.prototype.getInsertPermission = function () { return Default.PersonRow.insertPermission; };
            PersonGrid.prototype.getLocalTextPrefix = function () { return Default.PersonRow.localTextPrefix; };
            PersonGrid.prototype.getService = function () { return Default.PersonService.baseUrl; };
            PersonGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            PersonGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonGrid);
            return PersonGrid;
        }(Serenity.EntityGrid));
        Default.PersonGrid = PersonGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PersonMovieGrid = /** @class */ (function (_super) {
            __extends(PersonMovieGrid, _super);
            function PersonMovieGrid(container) {
                return _super.call(this, container) || this;
            }
            PersonMovieGrid.prototype.getColumnsKey = function () { return "Default.PersonMovie"; };
            PersonMovieGrid.prototype.getIdProperty = function () { return Default.MovieCastRow.idProperty; };
            PersonMovieGrid.prototype.getLocalTextPrefix = function () { return Default.MovieCastRow.localTextPrefix; };
            PersonMovieGrid.prototype.getService = function () { return Default.MovieCastService.baseUrl; };
            PersonMovieGrid.prototype.getButtons = function () {
                return null;
            };
            PersonMovieGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PersonMovieGrid.prototype.usePager = function () {
                return false;
            };
            PersonMovieGrid.prototype.getGridCanLoad = function () {
                return this.personID != null;
            };
            Object.defineProperty(PersonMovieGrid.prototype, "personID", {
                get: function () {
                    return this._personID;
                },
                set: function (value) {
                    if (this._personID != value) {
                        this._personID = value;
                        this.setEquality("PersonId" /* PersonId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            PersonMovieGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonMovieGrid);
            return PersonMovieGrid;
        }(Serenity.EntityGrid));
        Default.PersonMovieGrid = PersonMovieGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PlantDialog = /** @class */ (function (_super) {
            __extends(PlantDialog, _super);
            function PlantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PlantForm(_this.idPrefix);
                return _this;
            }
            PlantDialog.prototype.getFormKey = function () { return Default.PlantForm.formKey; };
            PlantDialog.prototype.getIdProperty = function () { return Default.PlantRow.idProperty; };
            PlantDialog.prototype.getLocalTextPrefix = function () { return Default.PlantRow.localTextPrefix; };
            PlantDialog.prototype.getNameProperty = function () { return Default.PlantRow.nameProperty; };
            PlantDialog.prototype.getService = function () { return Default.PlantService.baseUrl; };
            PlantDialog.prototype.getDeletePermission = function () { return Default.PlantRow.deletePermission; };
            PlantDialog.prototype.getInsertPermission = function () { return Default.PlantRow.insertPermission; };
            PlantDialog.prototype.getUpdatePermission = function () { return Default.PlantRow.updatePermission; };
            PlantDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PlantDialog);
            return PlantDialog;
        }(Serenity.EntityDialog));
        Default.PlantDialog = PlantDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PlantGrid = /** @class */ (function (_super) {
            __extends(PlantGrid, _super);
            function PlantGrid(container) {
                return _super.call(this, container) || this;
            }
            PlantGrid.prototype.getColumnsKey = function () { return 'Default.Plant'; };
            PlantGrid.prototype.getDialogType = function () { return Default.PlantDialog; };
            PlantGrid.prototype.getIdProperty = function () { return Default.PlantRow.idProperty; };
            PlantGrid.prototype.getInsertPermission = function () { return Default.PlantRow.insertPermission; };
            PlantGrid.prototype.getLocalTextPrefix = function () { return Default.PlantRow.localTextPrefix; };
            PlantGrid.prototype.getService = function () { return Default.PlantService.baseUrl; };
            PlantGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PlantGrid);
            return PlantGrid;
        }(Serenity.EntityGrid));
        Default.PlantGrid = PlantGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PumpmasterDialog = /** @class */ (function (_super) {
            __extends(PumpmasterDialog, _super);
            function PumpmasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PumpmasterForm(_this.idPrefix);
                return _this;
            }
            PumpmasterDialog.prototype.getFormKey = function () { return Default.PumpmasterForm.formKey; };
            PumpmasterDialog.prototype.getIdProperty = function () { return Default.PumpmasterRow.idProperty; };
            PumpmasterDialog.prototype.getLocalTextPrefix = function () { return Default.PumpmasterRow.localTextPrefix; };
            PumpmasterDialog.prototype.getNameProperty = function () { return Default.PumpmasterRow.nameProperty; };
            PumpmasterDialog.prototype.getService = function () { return Default.PumpmasterService.baseUrl; };
            PumpmasterDialog.prototype.getDeletePermission = function () { return Default.PumpmasterRow.deletePermission; };
            PumpmasterDialog.prototype.getInsertPermission = function () { return Default.PumpmasterRow.insertPermission; };
            PumpmasterDialog.prototype.getUpdatePermission = function () { return Default.PumpmasterRow.updatePermission; };
            PumpmasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PumpmasterDialog);
            return PumpmasterDialog;
        }(Serenity.EntityDialog));
        Default.PumpmasterDialog = PumpmasterDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var PumpmasterGrid = /** @class */ (function (_super) {
            __extends(PumpmasterGrid, _super);
            function PumpmasterGrid(container) {
                return _super.call(this, container) || this;
            }
            PumpmasterGrid.prototype.getColumnsKey = function () { return 'Default.Pumpmaster'; };
            PumpmasterGrid.prototype.getDialogType = function () { return Default.PumpmasterDialog; };
            PumpmasterGrid.prototype.getIdProperty = function () { return Default.PumpmasterRow.idProperty; };
            PumpmasterGrid.prototype.getInsertPermission = function () { return Default.PumpmasterRow.insertPermission; };
            PumpmasterGrid.prototype.getLocalTextPrefix = function () { return Default.PumpmasterRow.localTextPrefix; };
            PumpmasterGrid.prototype.getService = function () { return Default.PumpmasterService.baseUrl; };
            PumpmasterGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            PumpmasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PumpmasterGrid);
            return PumpmasterGrid;
        }(Serenity.EntityGrid));
        Default.PumpmasterGrid = PumpmasterGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var StateMasterDialog = /** @class */ (function (_super) {
            __extends(StateMasterDialog, _super);
            function StateMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.StateMasterForm(_this.idPrefix);
                return _this;
            }
            StateMasterDialog.prototype.getFormKey = function () { return Default.StateMasterForm.formKey; };
            StateMasterDialog.prototype.getIdProperty = function () { return Default.StateMasterRow.idProperty; };
            StateMasterDialog.prototype.getLocalTextPrefix = function () { return Default.StateMasterRow.localTextPrefix; };
            StateMasterDialog.prototype.getNameProperty = function () { return Default.StateMasterRow.nameProperty; };
            StateMasterDialog.prototype.getService = function () { return Default.StateMasterService.baseUrl; };
            StateMasterDialog.prototype.getDeletePermission = function () { return Default.StateMasterRow.deletePermission; };
            StateMasterDialog.prototype.getInsertPermission = function () { return Default.StateMasterRow.insertPermission; };
            StateMasterDialog.prototype.getUpdatePermission = function () { return Default.StateMasterRow.updatePermission; };
            StateMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StateMasterDialog);
            return StateMasterDialog;
        }(Serenity.EntityDialog));
        Default.StateMasterDialog = StateMasterDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var StateMasterGrid = /** @class */ (function (_super) {
            __extends(StateMasterGrid, _super);
            function StateMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            StateMasterGrid.prototype.getColumnsKey = function () { return 'Default.StateMaster'; };
            StateMasterGrid.prototype.getDialogType = function () { return Default.StateMasterDialog; };
            StateMasterGrid.prototype.getIdProperty = function () { return Default.StateMasterRow.idProperty; };
            StateMasterGrid.prototype.getInsertPermission = function () { return Default.StateMasterRow.insertPermission; };
            StateMasterGrid.prototype.getLocalTextPrefix = function () { return Default.StateMasterRow.localTextPrefix; };
            StateMasterGrid.prototype.getService = function () { return Default.StateMasterService.baseUrl; };
            StateMasterGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            StateMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StateMasterGrid);
            return StateMasterGrid;
        }(Serenity.EntityGrid));
        Default.StateMasterGrid = StateMasterGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var TaxDialog = /** @class */ (function (_super) {
            __extends(TaxDialog, _super);
            function TaxDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TaxForm(_this.idPrefix);
                return _this;
            }
            TaxDialog.prototype.getFormKey = function () { return Default.TaxForm.formKey; };
            TaxDialog.prototype.getIdProperty = function () { return Default.TaxRow.idProperty; };
            TaxDialog.prototype.getLocalTextPrefix = function () { return Default.TaxRow.localTextPrefix; };
            TaxDialog.prototype.getNameProperty = function () { return Default.TaxRow.nameProperty; };
            TaxDialog.prototype.getService = function () { return Default.TaxService.baseUrl; };
            TaxDialog.prototype.getDeletePermission = function () { return Default.TaxRow.deletePermission; };
            TaxDialog.prototype.getInsertPermission = function () { return Default.TaxRow.insertPermission; };
            TaxDialog.prototype.getUpdatePermission = function () { return Default.TaxRow.updatePermission; };
            TaxDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TaxDialog);
            return TaxDialog;
        }(Serenity.EntityDialog));
        Default.TaxDialog = TaxDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var TaxGrid = /** @class */ (function (_super) {
            __extends(TaxGrid, _super);
            function TaxGrid(container) {
                return _super.call(this, container) || this;
            }
            TaxGrid.prototype.getColumnsKey = function () { return 'Default.Tax'; };
            TaxGrid.prototype.getDialogType = function () { return Default.TaxDialog; };
            TaxGrid.prototype.getIdProperty = function () { return Default.TaxRow.idProperty; };
            TaxGrid.prototype.getInsertPermission = function () { return Default.TaxRow.insertPermission; };
            TaxGrid.prototype.getLocalTextPrefix = function () { return Default.TaxRow.localTextPrefix; };
            TaxGrid.prototype.getService = function () { return Default.TaxService.baseUrl; };
            TaxGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TaxGrid);
            return TaxGrid;
        }(Serenity.EntityGrid));
        Default.TaxGrid = TaxGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnitDialog = /** @class */ (function (_super) {
            __extends(UnitDialog, _super);
            function UnitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.UnitForm(_this.idPrefix);
                return _this;
            }
            UnitDialog.prototype.getFormKey = function () { return Default.UnitForm.formKey; };
            UnitDialog.prototype.getIdProperty = function () { return Default.UnitRow.idProperty; };
            UnitDialog.prototype.getLocalTextPrefix = function () { return Default.UnitRow.localTextPrefix; };
            UnitDialog.prototype.getNameProperty = function () { return Default.UnitRow.nameProperty; };
            UnitDialog.prototype.getService = function () { return Default.UnitService.baseUrl; };
            UnitDialog.prototype.getDeletePermission = function () { return Default.UnitRow.deletePermission; };
            UnitDialog.prototype.getInsertPermission = function () { return Default.UnitRow.insertPermission; };
            UnitDialog.prototype.getUpdatePermission = function () { return Default.UnitRow.updatePermission; };
            UnitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitDialog);
            return UnitDialog;
        }(Serenity.EntityDialog));
        Default.UnitDialog = UnitDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnitGrid = /** @class */ (function (_super) {
            __extends(UnitGrid, _super);
            function UnitGrid(container) {
                return _super.call(this, container) || this;
            }
            UnitGrid.prototype.getColumnsKey = function () { return 'Default.Unit'; };
            UnitGrid.prototype.getDialogType = function () { return Default.UnitDialog; };
            UnitGrid.prototype.getIdProperty = function () { return Default.UnitRow.idProperty; };
            UnitGrid.prototype.getInsertPermission = function () { return Default.UnitRow.insertPermission; };
            UnitGrid.prototype.getLocalTextPrefix = function () { return Default.UnitRow.localTextPrefix; };
            UnitGrid.prototype.getService = function () { return Default.UnitService.baseUrl; };
            UnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitGrid);
            return UnitGrid;
        }(Serenity.EntityGrid));
        Default.UnitGrid = UnitGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var DownloadFormatter = /** @class */ (function () {
            function DownloadFormatter() {
            }
            DownloadFormatter.prototype.format = function (ctx) {
                return "<a class='download-voucher'>" +
                    "<i class='fa fa-print text-green'></i>" +
                    "</a>";
            };
            DownloadFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], DownloadFormatter);
            return DownloadFormatter;
        }());
        Default.DownloadFormatter = DownloadFormatter;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnloadTripDialog = /** @class */ (function (_super) {
            __extends(UnloadTripDialog, _super);
            function UnloadTripDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.UnloadTripForm(_this.idPrefix);
                return _this;
            }
            UnloadTripDialog.prototype.getFormKey = function () { return Default.UnloadTripForm.formKey; };
            UnloadTripDialog.prototype.getIdProperty = function () { return Default.UnloadTripRow.idProperty; };
            UnloadTripDialog.prototype.getLocalTextPrefix = function () { return Default.UnloadTripRow.localTextPrefix; };
            UnloadTripDialog.prototype.getNameProperty = function () { return Default.UnloadTripRow.nameProperty; };
            UnloadTripDialog.prototype.getService = function () { return Default.UnloadTripService.baseUrl; };
            UnloadTripDialog.prototype.getDeletePermission = function () { return Default.UnloadTripRow.deletePermission; };
            UnloadTripDialog.prototype.getInsertPermission = function () { return Default.UnloadTripRow.insertPermission; };
            UnloadTripDialog.prototype.getUpdatePermission = function () { return Default.UnloadTripRow.updatePermission; };
            UnloadTripDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: "Print Voucher",
                    icon: "fa fa-print",
                    onClick: function () {
                        var id = _this.entityId;
                        window.open(Q.resolveUrl("~/VoucherPrint/Print?id=" + id), "_blank");
                    }
                });
                return buttons;
            };
            UnloadTripDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.LoadingTripId, true);
                Serenity.EditorUtils.setReadOnly(this.form.TripNo, true);
                Serenity.EditorUtils.setReadOnly(this.form.TripDate, true);
                Serenity.EditorUtils.setReadOnly(this.form.Plant, true);
                Serenity.EditorUtils.setReadOnly(this.form.District, true);
                Serenity.EditorUtils.setReadOnly(this.form.Destination, true);
                Serenity.EditorUtils.setReadOnly(this.form.VehicleName, true);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerName, true);
                Serenity.EditorUtils.setReadOnly(this.form.Branch, true);
                Serenity.EditorUtils.setReadOnly(this.form.State, true);
                Serenity.EditorUtils.setReadOnly(this.form.Item, true);
                Serenity.EditorUtils.setReadOnly(this.form.Weight, true);
                Serenity.EditorUtils.setReadOnly(this.form.Wheels, true);
                Serenity.EditorUtils.setReadOnly(this.form.ExpenseAmount, true);
                //Serenity.EditorUtils.setReadOnly(this.form.UnloadWeight, true);
                //Serenity.EditorUtils.setReadOnly(this.form.UnloadDate, true);
            };
            UnloadTripDialog.prototype.loadTripData = function (d) {
                console.log(d);
                this.loadEntity({});
                this.form.LoadingTripId.value = d.LoadingTripId;
                this.form.TripNo.value = d.TripNo;
                this.form.TripDate.value = d.TripDate;
                this.form.Plant.value = d.PlantName;
                this.form.District.value = d.DistrictName;
                this.form.Destination.value = d.DestinationName;
                this.form.VehicleName.value = d.VehicleNumber;
                this.form.CustomerName.value = d.CustomerName;
                this.form.Branch.value = d.BranchName;
                this.form.State.value = d.StateName;
                this.form.Item.value = d.ItemName;
                this.form.Weight.value = d.Weight;
                this.form.Wheels.value = d.Wheels;
                this.form.ExpenseAmount.value = d.ExpenseAmount;
                this.form.CreatedDate.value = d.CreatedDate;
                this.form.Remarks.value = d.Remarks;
                this.setReadonlyFields();
            };
            UnloadTripDialog.prototype.setReadonlyFields = function () {
                Serenity.EditorUtils.setReadonly(this.form.LoadingTripId.element, true);
                Serenity.EditorUtils.setReadonly(this.form.TripNo.element, true);
                Serenity.EditorUtils.setReadonly(this.form.TripDate.element, true);
                Serenity.EditorUtils.setReadonly(this.form.Plant.element, true);
                Serenity.EditorUtils.setReadonly(this.form.District.element, true);
                Serenity.EditorUtils.setReadonly(this.form.Destination.element, true);
                Serenity.EditorUtils.setReadonly(this.form.VehicleName.element, true);
                Serenity.EditorUtils.setReadonly(this.form.CustomerName.element, true);
                Serenity.EditorUtils.setReadonly(this.form.Branch.element, true);
                Serenity.EditorUtils.setReadonly(this.form.State.element, true);
                Serenity.EditorUtils.setReadonly(this.form.Item.element, true);
                Serenity.EditorUtils.setReadonly(this.form.Weight.element, true);
                Serenity.EditorUtils.setReadonly(this.form.Wheels.element, true);
                Serenity.EditorUtils.setReadonly(this.form.ExpenseAmount.element, true);
                Serenity.EditorUtils.setReadonly(this.form.CreatedDate.element, true);
                Serenity.EditorUtils.setReadonly(this.form.Remarks.element, true);
            };
            UnloadTripDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UnloadTripDialog);
            return UnloadTripDialog;
        }(Serenity.EntityDialog));
        Default.UnloadTripDialog = UnloadTripDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var UnloadTripGrid = /** @class */ (function (_super) {
            __extends(UnloadTripGrid, _super);
            function UnloadTripGrid(container) {
                return _super.call(this, container) || this;
            }
            UnloadTripGrid.prototype.getColumnsKey = function () { return 'Default.UnloadTrip'; };
            UnloadTripGrid.prototype.getDialogType = function () { return Default.UnloadTripDialog; };
            UnloadTripGrid.prototype.getIdProperty = function () { return Default.UnloadTripRow.idProperty; };
            UnloadTripGrid.prototype.getInsertPermission = function () { return Default.UnloadTripRow.insertPermission; };
            UnloadTripGrid.prototype.getLocalTextPrefix = function () { return Default.UnloadTripRow.localTextPrefix; };
            UnloadTripGrid.prototype.getService = function () { return Default.UnloadTripService.baseUrl; };
            UnloadTripGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                columns.splice(0, 0);
                columns.unshift({
                    field: 'Print',
                    name: '',
                    format: function (ctx) {
                        return '<a class="inline-action print-voucher-row" title="Print">' +
                            '<i class="fa fa-print text-red"></i></a>';
                    },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            UnloadTripGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                //var item = this.itemAt(row);
                //if ($(e.target).closest('.download-voucher').length > 0) {
                //    e.preventDefault();
                //    window.location.href = Q.resolveUrl('~/Default/UnloadTrip/Print?id=' + item.UnloadTripId);
                //}
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-voucher-row')) {
                        Q.postToUrl({
                            url: "~/Default/UnloadTrip/Print",
                            params: {
                                'id': item.UnloadTripId
                            },
                            target: '_blank'
                        });
                    }
                }
            };
            UnloadTripGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            UnloadTripGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        //new Slick.Aggregators.Sum(fld.),
                        new Slick.Aggregators.Sum("ExpenseAmount" /* ExpenseAmount */)
                    ]
                });
                return grid;
            };
            UnloadTripGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons = buttons.filter(function (b) { return b.cssClass !== "add-button"; });
                return buttons;
            };
            UnloadTripGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UnloadTripGrid);
            return UnloadTripGrid;
        }(Serenity.EntityGrid));
        Default.UnloadTripGrid = UnloadTripGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VLoadingTripDetailsDialog = /** @class */ (function (_super) {
            __extends(VLoadingTripDetailsDialog, _super);
            function VLoadingTripDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.VLoadingTripDetailsForm(_this.idPrefix);
                return _this;
            }
            VLoadingTripDetailsDialog.prototype.getFormKey = function () { return Default.VLoadingTripDetailsForm.formKey; };
            VLoadingTripDetailsDialog.prototype.getIdProperty = function () { return Default.VLoadingTripDetailsRow.idProperty; };
            VLoadingTripDetailsDialog.prototype.getLocalTextPrefix = function () { return Default.VLoadingTripDetailsRow.localTextPrefix; };
            VLoadingTripDetailsDialog.prototype.getNameProperty = function () { return Default.VLoadingTripDetailsRow.nameProperty; };
            VLoadingTripDetailsDialog.prototype.getService = function () { return Default.VLoadingTripDetailsService.baseUrl; };
            VLoadingTripDetailsDialog.prototype.getDeletePermission = function () { return Default.VLoadingTripDetailsRow.deletePermission; };
            VLoadingTripDetailsDialog.prototype.getInsertPermission = function () { return Default.VLoadingTripDetailsRow.insertPermission; };
            VLoadingTripDetailsDialog.prototype.getUpdatePermission = function () { return Default.VLoadingTripDetailsRow.updatePermission; };
            VLoadingTripDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VLoadingTripDetailsDialog);
            return VLoadingTripDetailsDialog;
        }(Serenity.EntityDialog));
        Default.VLoadingTripDetailsDialog = VLoadingTripDetailsDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VLoadingTripDetailsGrid = /** @class */ (function (_super) {
            __extends(VLoadingTripDetailsGrid, _super);
            function VLoadingTripDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            VLoadingTripDetailsGrid.prototype.getColumnsKey = function () { return 'Default.VLoadingTripDetails'; };
            VLoadingTripDetailsGrid.prototype.getDialogType = function () { return Default.VLoadingTripDetailsDialog; };
            VLoadingTripDetailsGrid.prototype.getIdProperty = function () { return Default.VLoadingTripDetailsRow.idProperty; };
            VLoadingTripDetailsGrid.prototype.getInsertPermission = function () { return Default.VLoadingTripDetailsRow.insertPermission; };
            VLoadingTripDetailsGrid.prototype.getLocalTextPrefix = function () { return Default.VLoadingTripDetailsRow.localTextPrefix; };
            VLoadingTripDetailsGrid.prototype.getService = function () { return Default.VLoadingTripDetailsService.baseUrl; };
            VLoadingTripDetailsGrid.prototype.editItem = function (entityOrId) {
                var entity = this.view.getItemById(entityOrId);
                var dlg = new Default.UnloadTripDialog();
                dlg.loadTripData(entity);
                dlg.loadingTripDataRow = entity;
                dlg.dialogOpen();
                this.refresh();
            };
            VLoadingTripDetailsGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                // Example: remove the "New Record" button
                buttons = buttons.filter(function (b) { return b.cssClass !== "add-button"; });
                // Example: remove the "Open Dialog" button if it has a custom cssClass
                //buttons = buttons.filter(b => b.cssClass !== "open-dialog-button");
                return buttons;
            };
            VLoadingTripDetailsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            VLoadingTripDetailsGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            VLoadingTripDetailsGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        //new Slick.Aggregators.Sum(fld.),
                        new Slick.Aggregators.Sum("ExpenseAmount" /* ExpenseAmount */)
                    ]
                });
                return grid;
            };
            VLoadingTripDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VLoadingTripDetailsGrid);
            return VLoadingTripDetailsGrid;
        }(Serenity.EntityGrid));
        Default.VLoadingTripDetailsGrid = VLoadingTripDetailsGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VehicleMasterDialog = /** @class */ (function (_super) {
            __extends(VehicleMasterDialog, _super);
            function VehicleMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.VehicleMasterForm(_this.idPrefix);
                return _this;
            }
            VehicleMasterDialog.prototype.getFormKey = function () { return Default.VehicleMasterForm.formKey; };
            VehicleMasterDialog.prototype.getIdProperty = function () { return Default.VehicleMasterRow.idProperty; };
            VehicleMasterDialog.prototype.getLocalTextPrefix = function () { return Default.VehicleMasterRow.localTextPrefix; };
            VehicleMasterDialog.prototype.getNameProperty = function () { return Default.VehicleMasterRow.nameProperty; };
            VehicleMasterDialog.prototype.getService = function () { return Default.VehicleMasterService.baseUrl; };
            VehicleMasterDialog.prototype.getDeletePermission = function () { return Default.VehicleMasterRow.deletePermission; };
            VehicleMasterDialog.prototype.getInsertPermission = function () { return Default.VehicleMasterRow.insertPermission; };
            VehicleMasterDialog.prototype.getUpdatePermission = function () { return Default.VehicleMasterRow.updatePermission; };
            VehicleMasterDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(2, 0, {
                    title: "Save & New", cssClass: "save-and-new-button", icon: "fa fa-save", onClick: function () {
                        _this.save(function () {
                            _this.loadEntity({});
                        });
                    }
                });
                return buttons;
            };
            VehicleMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleMasterDialog);
            return VehicleMasterDialog;
        }(Serenity.EntityDialog));
        Default.VehicleMasterDialog = VehicleMasterDialog;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Default;
    (function (Default) {
        var VehicleMasterGrid = /** @class */ (function (_super) {
            __extends(VehicleMasterGrid, _super);
            function VehicleMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            VehicleMasterGrid.prototype.getColumnsKey = function () { return 'Default.VehicleMaster'; };
            VehicleMasterGrid.prototype.getDialogType = function () { return Default.VehicleMasterDialog; };
            VehicleMasterGrid.prototype.getIdProperty = function () { return Default.VehicleMasterRow.idProperty; };
            VehicleMasterGrid.prototype.getInsertPermission = function () { return Default.VehicleMasterRow.insertPermission; };
            VehicleMasterGrid.prototype.getLocalTextPrefix = function () { return Default.VehicleMasterRow.localTextPrefix; };
            VehicleMasterGrid.prototype.getService = function () { return Default.VehicleMasterService.baseUrl; };
            VehicleMasterGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            VehicleMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleMasterGrid);
            return VehicleMasterGrid;
        }(Serenity.EntityGrid));
        Default.VehicleMasterGrid = VehicleMasterGrid;
    })(Default = SereneMovieTutorial.Default || (SereneMovieTutorial.Default = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var DieselissueDialog = /** @class */ (function (_super) {
            __extends(DieselissueDialog, _super);
            function DieselissueDialog() {
                var _this = _super.call(this) || this;
                _this.form = new FuelManagement.DieselissueForm(_this.idPrefix);
                if (_this.isNew()) {
                    _this.form.Today.valueAsDate = new Date();
                }
                _this.form.Pumpid.changeSelect2(function (e) {
                    if (!_this.form.Pumpid.value)
                        return;
                    // Only when inserting
                    if (_this.isNew()) {
                        SereneMovieTutorial.Default.PumpmasterService.GetPumpStock({
                            PumpId: Number(_this.form.Pumpid.value)
                        }, function (response) {
                            _this.form.Stock.value = response.Stock;
                        });
                    }
                });
                _this.form.Diesel.change(function (e) { return _this.calculateTotal(); });
                _this.form.Rateofdiesel.change(function (e) { return _this.calculateTotal(); });
                _this.form.Today.change(function (e) {
                    FuelManagement.DieselissueService.GetDieselRate({
                        Date: _this.form.Today.value //.valueAsDate
                    }, function (response) {
                        _this.form.Rateofdiesel.value = response;
                    });
                });
                return _this;
            }
            DieselissueDialog.prototype.getFormKey = function () { return FuelManagement.DieselissueForm.formKey; };
            DieselissueDialog.prototype.getIdProperty = function () { return FuelManagement.DieselissueRow.idProperty; };
            DieselissueDialog.prototype.getLocalTextPrefix = function () { return FuelManagement.DieselissueRow.localTextPrefix; };
            DieselissueDialog.prototype.getNameProperty = function () { return FuelManagement.DieselissueRow.nameProperty; };
            DieselissueDialog.prototype.getService = function () { return FuelManagement.DieselissueService.baseUrl; };
            DieselissueDialog.prototype.getDeletePermission = function () { return FuelManagement.DieselissueRow.deletePermission; };
            DieselissueDialog.prototype.getInsertPermission = function () { return FuelManagement.DieselissueRow.insertPermission; };
            DieselissueDialog.prototype.getUpdatePermission = function () { return FuelManagement.DieselissueRow.updatePermission; };
            DieselissueDialog.prototype.calculateTotal = function () {
                var diesel = Q.toId(this.form.Diesel.value);
                var rate = Q.toId(this.form.Rateofdiesel.value);
                if (diesel && rate)
                    this.form.Totalprice.value = diesel * rate;
            };
            DieselissueDialog.prototype.clearTripFields = function () {
                this.form.Plant.value = null;
                this.form.Distict.value = null;
                this.form.Destination.value = null;
            };
            /*--------------------------------------------------------------------------------------------*/
            DieselissueDialog.prototype.fillTripDetails = function () {
                var _this = this;
                if (!this.form.Tripno.value || !this.form.VehicleId.value) {
                    this.clearTripFields();
                    return;
                }
                FuelManagement.DieselissueService.GetTripDetails({
                    VehicleId: Number(this.form.VehicleId.value),
                    Tripid: Number(this.form.Tripno.value)
                }, function (response) {
                    var _a, _b, _c;
                    if (response.ErrorMsg) {
                        Q.notifyWarning(response.ErrorMsg);
                        _this.clearTripFields();
                        return;
                    }
                    _this.form.Plant.value = (_a = response.Details.PlantId) === null || _a === void 0 ? void 0 : _a.toString();
                    _this.form.Distict.value = (_b = response.Details.DistrictId) === null || _b === void 0 ? void 0 : _b.toString();
                    _this.form.Destination.value = (_c = response.Details.DestinationId) === null || _c === void 0 ? void 0 : _c.toString();
                });
            };
            DieselissueDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.form.Tripno.changeSelect2(function () {
                    _this.fillTripDetails();
                    if (!_this.form.VehicleId.value) {
                        return;
                    }
                });
                if (!this.isNew()) {
                    this.form.Pumpid.readOnly = true;
                }
                if (!this.isNew()) {
                    // show stored stock from DieselIssue
                    this.form.Stock.value = this.entity.Stock;
                }
            };
            DieselissueDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], DieselissueDialog);
            return DieselissueDialog;
        }(Serenity.EntityDialog));
        FuelManagement.DieselissueDialog = DieselissueDialog;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var DieselissueGrid = /** @class */ (function (_super) {
            __extends(DieselissueGrid, _super);
            function DieselissueGrid(container) {
                return _super.call(this, container) || this;
            }
            DieselissueGrid.prototype.getColumnsKey = function () { return 'FuelManagement.Dieselissue'; };
            DieselissueGrid.prototype.getDialogType = function () { return FuelManagement.DieselissueDialog; };
            DieselissueGrid.prototype.getIdProperty = function () { return FuelManagement.DieselissueRow.idProperty; };
            DieselissueGrid.prototype.getInsertPermission = function () { return FuelManagement.DieselissueRow.insertPermission; };
            DieselissueGrid.prototype.getLocalTextPrefix = function () { return FuelManagement.DieselissueRow.localTextPrefix; };
            DieselissueGrid.prototype.getService = function () { return FuelManagement.DieselissueService.baseUrl; };
            DieselissueGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            DieselissueGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DieselissueGrid);
            return DieselissueGrid;
        }(Serenity.EntityGrid));
        FuelManagement.DieselissueGrid = DieselissueGrid;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDataDialog = /** @class */ (function (_super) {
            __extends(FuelDataDialog, _super);
            function FuelDataDialog() {
                var _this = _super.call(this) || this;
                _this.form = new FuelManagement.FuelDataForm(_this.idPrefix);
                //let editor = this.form.FuelDetails as FuelDetailsEditor;
                //// ✅ set parent reference
                //editor.parentDialog = this;
                _this.form.FuelDetails.view.onDataChanged.subscribe(function () {
                    _this.updateAllottedQty();
                });
                _this.form.QtyKl.change(function (e) {
                    _this.calculateQuantityLtr();
                    //this.calculateTransportationAmount();
                });
                _this.form.TotalAmount.change(function (e) {
                    _this.calculateRateKl();
                    _this.calculateRateLtr();
                });
                //this.form.RateKl.change(e => {
                //    this.calculateRateLtr();
                //});
                _this.form.TransportationRate.change(function (e) {
                    _this.calculateTransportationAmount();
                });
                return _this;
                //this.form.TankerNo.changeSelect2(() => {
                //    (this.form.FuelDetails as FuelDetailsEditor).TankerName = this.form.TankerNo.value;
                //    console.log(this.form.FuelDetails as FuelDetailsEditor);
                //});
            }
            FuelDataDialog.prototype.getFormKey = function () { return FuelManagement.FuelDataForm.formKey; };
            FuelDataDialog.prototype.getIdProperty = function () { return FuelManagement.FuelDataRow.idProperty; };
            FuelDataDialog.prototype.getLocalTextPrefix = function () { return FuelManagement.FuelDataRow.localTextPrefix; };
            FuelDataDialog.prototype.getNameProperty = function () { return FuelManagement.FuelDataRow.nameProperty; };
            FuelDataDialog.prototype.getService = function () { return FuelManagement.FuelDataService.baseUrl; };
            FuelDataDialog.prototype.getDeletePermission = function () { return FuelManagement.FuelDataRow.deletePermission; };
            FuelDataDialog.prototype.getInsertPermission = function () { return FuelManagement.FuelDataRow.insertPermission; };
            FuelDataDialog.prototype.getUpdatePermission = function () { return FuelManagement.FuelDataRow.updatePermission; };
            //public currentTankerNo: string;
            FuelDataDialog.prototype.updateAllottedQty = function () {
                var total = 0;
                var items = this.form.FuelDetails.getItems();
                for (var _i = 0, items_4 = items; _i < items_4.length; _i++) {
                    var item = items_4[_i];
                    total += item.Quantity || 0;
                }
                this.form.AllottedQuantity.value = total;
            };
            FuelDataDialog.prototype.calculateQuantityLtr = function () {
                var qtykl = this.form.QtyKl.value || 0;
                this.form.QuantityLtr.value = qtykl * 1000;
            };
            FuelDataDialog.prototype.calculateRateLtr = function () {
                var totalAmount = this.form.TotalAmount.value || 0;
                var qtyLtr = this.form.QuantityLtr.value || 0;
                this.form.RateLtr.value = totalAmount / qtyLtr;
                //this.form.RateLtr.value = ratekl / 1000;
                console.log(this.form.RateLtr + ' // ' + this.form.RateKl);
            };
            FuelDataDialog.prototype.calculateRateKl = function () {
                //let ratekl = this.form.RateKl.value || 0;
                var TotalAmount = this.form.TotalAmount.value || 0;
                var qtyKl = this.form.QtyKl.value || 0;
                this.form.RateKl.value = TotalAmount / qtyKl;
            };
            FuelDataDialog.prototype.calculateTransportationAmount = function () {
                var qtykl = this.form.QtyKl.value || 0;
                var rate = this.form.TransportationRate.value || 0;
                this.form.TransportationAmt.value = qtykl * rate;
            };
            FuelDataDialog.prototype.validateBeforeSave = function () {
                this.updateAllottedQty();
                var allotted = this.form.AllottedQuantity.value || 0;
                var qtyLtr = this.form.QuantityLtr.value || 0;
                if (allotted !== qtyLtr) {
                    Q.alert("Allotted Quantity must be equal to Quantity LTR");
                    return false;
                }
                return _super.prototype.validateBeforeSave.call(this);
            };
            FuelDataDialog.prototype.getTankerNo = function () {
                return this.form.TankerNo.value;
            };
            //protected afterLoadEntity() {
            //    super.afterLoadEntity();
            //    let editor = this.form.FuelDetails as FuelDetailsEditor;
            //    editor.parentDialog = this;
            //    this.handleFuelDetailsVisibility();
            //    this.form.ShowFuelDetails.changeSelect2(e => {
            //        this.handleFuelDetailsVisibility();
            //    });
            //}
            FuelDataDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                var editor = this.form.FuelDetails;
                editor.parentDialog = this;
                if (this.isNew() || !this.form.ShowFuelDetails.value) {
                    this.form.ShowFuelDetails.value = "1";
                }
                this.form.ShowFuelDetails.changeSelect2(function (e) {
                    var val = _this.form.ShowFuelDetails.value;
                    // If user selects "No"
                    if (val === "0" && _this.hasFuelDetailsData()) {
                        Q.alert("You cannot select 'No' because Fuel Details contains data.");
                        // revert back to Yes
                        _this.form.ShowFuelDetails.value = "1";
                        return;
                    }
                    _this.handleFuelDetailsVisibility();
                });
                this.handleFuelDetailsVisibility();
            };
            FuelDataDialog.prototype.hasFuelDetailsData = function () {
                var editor = this.form.FuelDetails;
                return editor.view.getItems().length > 0;
            };
            //private handleFuelDetailsVisibility() {
            //    let show = !! Number(this.form.ShowFuelDetails.value);
            //    this.form.FuelDetails.getGridField().toggle(show);
            //}
            FuelDataDialog.prototype.handleFuelDetailsVisibility = function () {
                var field = this.byId("FuelDetails").closest(".field");
                if (this.form.ShowFuelDetails.value === "1") {
                    field.show();
                }
                else {
                    field.hide();
                }
            };
            FuelDataDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], FuelDataDialog);
            return FuelDataDialog;
        }(Serenity.EntityDialog));
        FuelManagement.FuelDataDialog = FuelDataDialog;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDataGrid = /** @class */ (function (_super) {
            __extends(FuelDataGrid, _super);
            function FuelDataGrid(container) {
                return _super.call(this, container) || this;
            }
            FuelDataGrid.prototype.getColumnsKey = function () { return 'FuelManagement.FuelData'; };
            FuelDataGrid.prototype.getDialogType = function () { return FuelManagement.FuelDataDialog; };
            FuelDataGrid.prototype.getIdProperty = function () { return FuelManagement.FuelDataRow.idProperty; };
            FuelDataGrid.prototype.getInsertPermission = function () { return FuelManagement.FuelDataRow.insertPermission; };
            FuelDataGrid.prototype.getLocalTextPrefix = function () { return FuelManagement.FuelDataRow.localTextPrefix; };
            FuelDataGrid.prototype.getService = function () { return FuelManagement.FuelDataService.baseUrl; };
            FuelDataGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                columns.splice(0, 0);
                columns.unshift({
                    field: 'Print',
                    name: '',
                    format: function (ctx) {
                        return '<a class="inline-action print-voucher-row" title="Print">' +
                            '<i class="fa fa-print text-red"></i></a>';
                    },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            FuelDataGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-voucher-row')) {
                        Q.postToUrl({
                            url: "~/FuelManagement/FuelData/PrintFuelData",
                            params: {
                                'id': item.InwardNo
                            },
                            target: '_blank'
                        });
                    }
                }
            };
            FuelDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FuelDataGrid);
            return FuelDataGrid;
        }(Serenity.EntityGrid));
        FuelManagement.FuelDataGrid = FuelDataGrid;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDetailsDialog = /** @class */ (function (_super) {
            __extends(FuelDetailsDialog, _super);
            function FuelDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new FuelManagement.FuelDetailsForm(_this.idPrefix);
                return _this;
            }
            FuelDetailsDialog.prototype.getFormKey = function () { return FuelManagement.FuelDetailsForm.formKey; };
            FuelDetailsDialog.prototype.getIdProperty = function () { return FuelManagement.FuelDetailsRow.idProperty; };
            FuelDetailsDialog.prototype.getLocalTextPrefix = function () { return FuelManagement.FuelDetailsRow.localTextPrefix; };
            FuelDetailsDialog.prototype.getService = function () { return FuelManagement.FuelDetailsService.baseUrl; };
            FuelDetailsDialog.prototype.getDeletePermission = function () { return FuelManagement.FuelDetailsRow.deletePermission; };
            FuelDetailsDialog.prototype.getInsertPermission = function () { return FuelManagement.FuelDetailsRow.insertPermission; };
            FuelDetailsDialog.prototype.getUpdatePermission = function () { return FuelManagement.FuelDetailsRow.updatePermission; };
            FuelDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FuelDetailsDialog);
            return FuelDetailsDialog;
        }(Serenity.EntityDialog));
        FuelManagement.FuelDetailsDialog = FuelDetailsDialog;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDetailsEditor = /** @class */ (function (_super) {
            __extends(FuelDetailsEditor, _super);
            function FuelDetailsEditor() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FuelDetailsEditor.prototype.getColumnsKey = function () { return "FuelManagement.FuelDetails"; };
            FuelDetailsEditor.prototype.getDialogType = function () { return FuelManagement.FuelDetailsEditorDialog; };
            FuelDetailsEditor.prototype.getLocalTextPrefix = function () { return FuelManagement.FuelDetailsRow.localTextPrefix; };
            FuelDetailsEditor.prototype.getIdProperty = function () { return FuelManagement.FuelDetailsRow.idProperty; };
            FuelDetailsEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "ID",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            FuelDetailsEditor.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons[0].onClick = function () {
                    _this.createEntityDialog(_this.getItemType(), function (dlg) {
                        var dialog = dlg;
                        // ✅ pass parent
                        //dialog.parentDialog = this.parentDialog;
                        dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                        var entity = _this.getNewEntity();
                        // ✅ set tanker
                        entity.TankerNo = _this.TankerName;
                        dialog.loadEntityAndOpenDialog(entity);
                    });
                };
                return buttons;
            };
            FuelDetailsEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // ✅ THIS ALWAYS RUNS (new + edit)
                dialog.parentDialog = this.parentDialog;
            };
            FuelDetailsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FuelDetailsEditor);
            return FuelDetailsEditor;
        }(SereneMovieTutorial.Common.GridEditorBase));
        FuelManagement.FuelDetailsEditor = FuelDetailsEditor;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDetailsEditorDialog = /** @class */ (function (_super) {
            __extends(FuelDetailsEditorDialog, _super);
            function FuelDetailsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //private applyParentTanker: boolean = false;
                _this.form = new FuelManagement.FuelDetailsForm(_this.idPrefix);
                return _this;
            }
            //public static Parent: FuelDataDialog;
            FuelDetailsEditorDialog.prototype.getFormKey = function () { return FuelManagement.FuelDetailsForm.formKey; };
            FuelDetailsEditorDialog.prototype.getIdProperty = function () { return FuelManagement.FuelDetailsRow.idProperty; };
            FuelDetailsEditorDialog.prototype.getLocalTextPrefix = function () { return FuelManagement.FuelDetailsRow.localTextPrefix; };
            FuelDetailsEditorDialog.prototype.getService = function () { return FuelManagement.FuelDetailsService.baseUrl; };
            FuelDetailsEditorDialog.prototype.getSaveEntity = function () {
                var entity = _super.prototype.getSaveEntity.call(this);
                entity.TankerNo = this.form.TankerNo.value;
                // store PumpName so GridEditor can display it
                var lookup = SereneMovieTutorial.Default.PumpmasterRow.getLookup();
                if (entity.PumpId && lookup.itemById[entity.PumpId])
                    entity.PumpName = lookup.itemById[entity.PumpId].Name;
                return entity;
            };
            FuelDetailsEditorDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                var parent = this.parentDialog;
                if (parent) {
                    var latest = parent.getTankerNo();
                    this.form.TankerNo.value = latest;
                }
            };
            FuelDetailsEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FuelDetailsEditorDialog);
            return FuelDetailsEditorDialog;
        }(SereneMovieTutorial.Common.GridEditorDialog));
        FuelManagement.FuelDetailsEditorDialog = FuelDetailsEditorDialog;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var FuelManagement;
    (function (FuelManagement) {
        var FuelDetailsGrid = /** @class */ (function (_super) {
            __extends(FuelDetailsGrid, _super);
            function FuelDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            FuelDetailsGrid.prototype.getColumnsKey = function () { return 'FuelManagement.FuelDetails'; };
            FuelDetailsGrid.prototype.getDialogType = function () { return FuelManagement.FuelDetailsDialog; };
            FuelDetailsGrid.prototype.getIdProperty = function () { return FuelManagement.FuelDetailsRow.idProperty; };
            FuelDetailsGrid.prototype.getInsertPermission = function () { return FuelManagement.FuelDetailsRow.insertPermission; };
            FuelDetailsGrid.prototype.getLocalTextPrefix = function () { return FuelManagement.FuelDetailsRow.localTextPrefix; };
            FuelDetailsGrid.prototype.getService = function () { return FuelManagement.FuelDetailsService.baseUrl; };
            FuelDetailsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            FuelDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FuelDetailsGrid);
            return FuelDetailsGrid;
        }(Serenity.EntityGrid));
        FuelManagement.FuelDetailsGrid = FuelDetailsGrid;
    })(FuelManagement = SereneMovieTutorial.FuelManagement || (SereneMovieTutorial.FuelManagement = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var ExItemDialog = /** @class */ (function (_super) {
            __extends(ExItemDialog, _super);
            function ExItemDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventry.ExItemForm(_this.idPrefix);
                return _this;
            }
            ExItemDialog.prototype.getFormKey = function () { return Inventry.ExItemForm.formKey; };
            ExItemDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            ExItemDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            Inventry.ItemService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                var _a;
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (((_a = response.ErrorList) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            ExItemDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExItemDialog);
            return ExItemDialog;
        }(Serenity.PropertyDialog));
        Inventry.ExItemDialog = ExItemDialog;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var ItemDialog = /** @class */ (function (_super) {
            __extends(ItemDialog, _super);
            function ItemDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventry.ItemForm(_this.idPrefix);
                return _this;
            }
            ItemDialog.prototype.getFormKey = function () { return Inventry.ItemForm.formKey; };
            ItemDialog.prototype.getIdProperty = function () { return Inventry.ItemRow.idProperty; };
            ItemDialog.prototype.getLocalTextPrefix = function () { return Inventry.ItemRow.localTextPrefix; };
            ItemDialog.prototype.getNameProperty = function () { return Inventry.ItemRow.nameProperty; };
            ItemDialog.prototype.getService = function () { return Inventry.ItemService.baseUrl; };
            ItemDialog.prototype.getDeletePermission = function () { return Inventry.ItemRow.deletePermission; };
            ItemDialog.prototype.getInsertPermission = function () { return Inventry.ItemRow.insertPermission; };
            ItemDialog.prototype.getUpdatePermission = function () { return Inventry.ItemRow.updatePermission; };
            ItemDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemDialog);
            return ItemDialog;
        }(Serenity.EntityDialog));
        Inventry.ItemDialog = ItemDialog;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var ItemGrid = /** @class */ (function (_super) {
            __extends(ItemGrid, _super);
            function ItemGrid(container) {
                return _super.call(this, container) || this;
            }
            ItemGrid.prototype.getColumnsKey = function () { return 'Inventry.Item'; };
            ItemGrid.prototype.getDialogType = function () { return Inventry.ItemDialog; };
            ItemGrid.prototype.getIdProperty = function () { return Inventry.ItemRow.idProperty; };
            ItemGrid.prototype.getInsertPermission = function () { return Inventry.ItemRow.insertPermission; };
            ItemGrid.prototype.getLocalTextPrefix = function () { return Inventry.ItemRow.localTextPrefix; };
            ItemGrid.prototype.getService = function () { return Inventry.ItemService.baseUrl; };
            ItemGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            ItemGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SereneMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Inventry.ItemService.baseUrl + "/ListExcel",
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push({
                    title: "Import Item",
                    cssClass: "export-xlsx-button",
                    onClick: function (e) {
                        var dialog = new Inventry.ExItemDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            ItemGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemGrid);
            return ItemGrid;
        }(Serenity.EntityGrid));
        Inventry.ItemGrid = ItemGrid;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PendingPurchaseOrderDialog = /** @class */ (function (_super) {
            __extends(PendingPurchaseOrderDialog, _super);
            function PendingPurchaseOrderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventry.PendingPurchaseOrderForm(_this.idPrefix);
                return _this;
            }
            PendingPurchaseOrderDialog.prototype.getFormKey = function () { return Inventry.PendingPurchaseOrderForm.formKey; };
            PendingPurchaseOrderDialog.prototype.getIdProperty = function () { return Inventry.PendingPurchaseOrderRow.idProperty; };
            PendingPurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return Inventry.PendingPurchaseOrderRow.localTextPrefix; };
            PendingPurchaseOrderDialog.prototype.getNameProperty = function () { return Inventry.PendingPurchaseOrderRow.nameProperty; };
            PendingPurchaseOrderDialog.prototype.getService = function () { return Inventry.PendingPurchaseOrderService.baseUrl; };
            PendingPurchaseOrderDialog.prototype.getDeletePermission = function () { return Inventry.PendingPurchaseOrderRow.deletePermission; };
            PendingPurchaseOrderDialog.prototype.getInsertPermission = function () { return Inventry.PendingPurchaseOrderRow.insertPermission; };
            PendingPurchaseOrderDialog.prototype.getUpdatePermission = function () { return Inventry.PendingPurchaseOrderRow.updatePermission; };
            PendingPurchaseOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PendingPurchaseOrderDialog);
            return PendingPurchaseOrderDialog;
        }(Serenity.EntityDialog));
        Inventry.PendingPurchaseOrderDialog = PendingPurchaseOrderDialog;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PendingPurchaseOrderGrid = /** @class */ (function (_super) {
            __extends(PendingPurchaseOrderGrid, _super);
            function PendingPurchaseOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            PendingPurchaseOrderGrid.prototype.getColumnsKey = function () { return 'Inventry.PendingPurchaseOrder'; };
            PendingPurchaseOrderGrid.prototype.getDialogType = function () { return Inventry.PurchaseBillDialog; };
            PendingPurchaseOrderGrid.prototype.getIdProperty = function () { return Inventry.PendingPurchaseOrderRow.idProperty; };
            PendingPurchaseOrderGrid.prototype.getInsertPermission = function () { return Inventry.PendingPurchaseOrderRow.insertPermission; };
            PendingPurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return Inventry.PendingPurchaseOrderRow.localTextPrefix; };
            PendingPurchaseOrderGrid.prototype.getService = function () { return Inventry.PendingPurchaseOrderService.baseUrl; };
            PendingPurchaseOrderGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            PendingPurchaseOrderGrid.prototype.addButtonClick = function () {
                var _this = this;
                var rows = [];
                var selectedKeys = this.rowSelection.getSelectedKeys();
                var PONOFilter = this.findQuickFilter(Serenity.StringEditor, "PoNo" /* PoNo */);
                console.log("Pono filter val " + PONOFilter.value);
                var PartyFilter = this.findQuickFilter(Serenity.LookupEditor, "PartyId" /* PartyId */);
                //let purchaseOrderIdFilter = this.findQuickFilter(Serenity.LookupEditor, fld.PurchaseOrderId);
                //  Validations
                if (Q.isEmptyOrNull(PONOFilter.value)) {
                    Q.alert('Give PoNo as filter criteria.');
                    this.rowSelection.resetCheckedAndRefresh();
                    return;
                }
                if (Q.isEmptyOrNull(PartyFilter.value)) {
                    Q.alert('Select Party Name as filter criteria.');
                    this.rowSelection.resetCheckedAndRefresh();
                    return;
                }
                if (!selectedKeys || selectedKeys.length === 0) {
                    Q.alert('Select at least one item to create Bill.');
                    this.rowSelection.resetCheckedAndRefresh();
                    return;
                }
                //  Async call (correct way)
                Inventry.PendingPurchaseOrderService.GetSelectedTrips({
                    Ids: selectedKeys
                }, function (res) {
                    if (res.ErrorMsg) {
                        Q.alert(res.ErrorMsg);
                        return;
                    }
                    var TripCollection = res.Trips || [];
                    if (!TripCollection.length) {
                        Q.alert('No data returned from server.');
                        return;
                    }
                    //dlg.CgstAmmount = TripCollection.filter(r => r.CgstAmount);
                    for (var _i = 0, TripCollection_2 = TripCollection; _i < TripCollection_2.length; _i++) {
                        var trip = TripCollection_2[_i];
                        rows.push({
                            PurchaseOrderId: trip.PurchaseOrderId,
                            ItemId: trip.ItemId,
                            PreviousRate: Number(trip.PreviousRate) || 0,
                            CurrentRate: trip.CurrentRate,
                            Quantity: trip.Quantity,
                            ItemName: trip.Partname,
                            Discount: 0,
                            CgstRate: trip.CGSTRate,
                            TaxableAmount: trip.BasicAmount,
                            CgstAmount: trip.CgstAmount,
                            SgstRate: trip.SGSTRate,
                            SgstAmount: trip.SgstAmount,
                            IgstRate: trip.IGSTRate,
                            IgstAmount: trip.IgstAmount,
                            TotalAmount: trip.TotalAmount,
                        });
                    }
                    //  Dialog creation (fixed order)
                    var dlg = new Inventry.PurchaseBillDialog(rows);
                    dlg.SelectedPartyId = Number(PartyFilter.value);
                    dlg.SelectedPoNo = PONOFilter.value.toString();
                    console.log("PonoFilter" + PONOFilter.value);
                    console.log("Dlg pono" + dlg.SelectedPoNo);
                    _this.initDialog(dlg);
                    dlg.loadNewAndOpenDialog();
                    _this.rowSelection.resetCheckedAndRefresh();
                });
            };
            PendingPurchaseOrderGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
                this.addQuickFilter({
                    field: "PoNo" /* PoNo */,
                    title: "PO No",
                    type: Serenity.StringEditor
                });
                this.addQuickFilter({
                    field: "PartyId" /* PartyId */,
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: SereneMovieTutorial.Default.PartyMasterRow.lookupKey,
                    }
                });
                var PONOFilter = this.findQuickFilter(Serenity.StringEditor, "PoNo" /* PoNo */);
                var PartyFilter = this.findQuickFilter(Serenity.LookupEditor, "PartyId" /* PartyId */);
                PONOFilter.element.on('change', function (e) {
                    var poValue = PONOFilter.value;
                    if (!poValue) {
                        _this.refresh();
                        _this.rowSelection.resetCheckedAndRefresh();
                    }
                });
                PartyFilter.element.on('change', function (e) {
                    var partyidvalue = PartyFilter.value;
                    if (!partyidvalue) {
                        _this.refresh();
                        _this.rowSelection.resetCheckedAndRefresh();
                    }
                });
            };
            PendingPurchaseOrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(1, 1);
                buttons.push(SereneMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Inventry/PendingPurchaseOrder/ListExcel',
                    separator: true
                }));
                return buttons;
            };
            PendingPurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PendingPurchaseOrderGrid);
            return PendingPurchaseOrderGrid;
        }(Serenity.EntityGrid));
        Inventry.PendingPurchaseOrderGrid = PendingPurchaseOrderGrid;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillDialog = /** @class */ (function (_super) {
            __extends(PurchaseBillDialog, _super);
            function PurchaseBillDialog(rows) {
                var _this = _super.call(this) || this;
                _this.form = new Inventry.PurchaseBillForm(_this.idPrefix);
                _this.rows = rows || [];
                _this.form.PurchaseDetails.view.onDataChanged.subscribe(function () {
                    var totalAmmount = 0;
                    var taxableamt = 0;
                    var Cgst = 0;
                    var igst = 0;
                    var sgst = 0;
                    for (var _i = 0, _a = _this.form.PurchaseDetails.getItems(); _i < _a.length; _i++) {
                        var i = _a[_i];
                        totalAmmount += i.TotalAmount || 0;
                        taxableamt += i.TaxableAmount || 0;
                        Cgst += i.CgstAmount || 0;
                        sgst += i.SgstAmount || 0;
                        igst += i.IgstAmount || 0;
                    }
                    _this.form.TaxableAmount.value = taxableamt;
                    _this.form.CgstAmount.value = Cgst;
                    _this.form.SgstAmount.value = sgst;
                    _this.form.IgstAmount.value = igst;
                    _this.form.TotalBillAmount.value = totalAmmount;
                });
                return _this;
            }
            PurchaseBillDialog.prototype.getFormKey = function () { return Inventry.PurchaseBillForm.formKey; };
            PurchaseBillDialog.prototype.getIdProperty = function () { return Inventry.PurchaseBillRow.idProperty; };
            PurchaseBillDialog.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseBillRow.localTextPrefix; };
            PurchaseBillDialog.prototype.getNameProperty = function () { return Inventry.PurchaseBillRow.nameProperty; };
            PurchaseBillDialog.prototype.getService = function () { return Inventry.PurchaseBillService.baseUrl; };
            PurchaseBillDialog.prototype.getDeletePermission = function () { return Inventry.PurchaseBillRow.deletePermission; };
            PurchaseBillDialog.prototype.getInsertPermission = function () { return Inventry.PurchaseBillRow.insertPermission; };
            PurchaseBillDialog.prototype.getUpdatePermission = function () { return Inventry.PurchaseBillRow.updatePermission; };
            PurchaseBillDialog.prototype.afterLoadEntity = function () {
                var _a;
                _super.prototype.afterLoadEntity.call(this);
                if (!this.isNew())
                    return;
                this.form.PartyId.value = this.SelectedPartyId.toString();
                //let lookup = SereneMovieTutorial.Default.PartyMasterRow.getLookup();
                // let item = lookup.itemById[this.SelectedPartyId];
                //this.form.PartyId.value = item ? item.Name : '';
                if (this.SelectedPoNo) {
                    this.form.PoNumber.value = this.SelectedPoNo.toString().toUpperCase();
                }
                console.log(this.rows);
                if ((_a = this.rows) === null || _a === void 0 ? void 0 : _a.length) {
                    this.form.PurchaseDetails.value = this.rows;
                }
                if (!this.form.LedgerTypeId.value) {
                    this.form.LedgerTypeId.value = 1;
                }
            };
            PurchaseBillDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], PurchaseBillDialog);
            return PurchaseBillDialog;
        }(Serenity.EntityDialog));
        Inventry.PurchaseBillDialog = PurchaseBillDialog;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillGrid = /** @class */ (function (_super) {
            __extends(PurchaseBillGrid, _super);
            function PurchaseBillGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseBillGrid.prototype.getColumnsKey = function () { return 'Inventry.PurchaseBill'; };
            PurchaseBillGrid.prototype.getDialogType = function () { return Inventry.PurchaseBillDialog; };
            PurchaseBillGrid.prototype.getIdProperty = function () { return Inventry.PurchaseBillRow.idProperty; };
            PurchaseBillGrid.prototype.getInsertPermission = function () { return Inventry.PurchaseBillRow.insertPermission; };
            PurchaseBillGrid.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseBillRow.localTextPrefix; };
            PurchaseBillGrid.prototype.getService = function () { return Inventry.PurchaseBillService.baseUrl; };
            PurchaseBillGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseBillGrid);
            return PurchaseBillGrid;
        }(Serenity.EntityGrid));
        Inventry.PurchaseBillGrid = PurchaseBillGrid;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var ExPurchaseBillDetailDialog = /** @class */ (function (_super) {
            __extends(ExPurchaseBillDetailDialog, _super);
            function ExPurchaseBillDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //private applyParentTanker: boolean = false;
                _this.form = new Inventry.PurchaseBillDetailForm(_this.idPrefix);
                return _this;
                //protected getSaveEntity() {
                //    let entity = super.getSaveEntity();
                //    entity.TankerNo = this.form.TankerNo.value;
                //    // store PumpName so GridEditor can display it
                //    let lookup = Default.PumpmasterRow.getLookup();
                //    if (entity.PumpId && lookup.itemById[entity.PumpId])
                //        entity.PumpName = lookup.itemById[entity.PumpId].Name;
                //    return entity;
                //}
                //protected afterLoadEntity() {
                //    super.afterLoadEntity();
                //    let parent = this.parentDialog;
                //    if (parent) {
                //        let latest = parent.getTankerNo();
                //        this.form.TankerNo.value = latest;
                //    }
                //}
            }
            //public static Parent: FuelDataDialog;
            ExPurchaseBillDetailDialog.prototype.getFormKey = function () { return Inventry.PurchaseBillDetailForm.formKey; };
            ExPurchaseBillDetailDialog.prototype.getIdProperty = function () { return Inventry.PurchaseBillDetailRow.idProperty; };
            ExPurchaseBillDetailDialog.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseBillDetailRow.localTextPrefix; };
            ExPurchaseBillDetailDialog.prototype.getService = function () { return Inventry.PurchaseBillDetailService.baseUrl; };
            ExPurchaseBillDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExPurchaseBillDetailDialog);
            return ExPurchaseBillDetailDialog;
        }(SereneMovieTutorial.Common.GridEditorDialog));
        Inventry.ExPurchaseBillDetailDialog = ExPurchaseBillDetailDialog;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var ExPurchaseBillDetailEditor = /** @class */ (function (_super) {
            __extends(ExPurchaseBillDetailEditor, _super);
            function ExPurchaseBillDetailEditor() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExPurchaseBillDetailEditor.prototype.getColumnsKey = function () { return "Inventry.PurchaseBillDetail"; };
            ExPurchaseBillDetailEditor.prototype.getDialogType = function () { return Inventry.ExPurchaseBillDetailDialog; };
            ExPurchaseBillDetailEditor.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseBillDetailRow.localTextPrefix; };
            ExPurchaseBillDetailEditor.prototype.getIdProperty = function () { return Inventry.PurchaseBillDetailRow.idProperty; };
            //public TankerName: string;
            //public parentDialog: PurchaseBillDialog;
            ExPurchaseBillDetailEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            ExPurchaseBillDetailEditor.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true; // disable footer row
                return opt;
            };
            ExPurchaseBillDetailEditor.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        //new Slick.Aggregators.Sum(fld.TaxableAmount),
                        new Slick.Aggregators.Sum("TotalAmount" /* TotalAmount */),
                        new Slick.Aggregators.Sum("CgstAmount" /* CgstAmount */),
                        new Slick.Aggregators.Sum("SgstAmount" /* SgstAmount */),
                        new Slick.Aggregators.Sum("SgstAmount" /* SgstAmount */)
                    ]
                });
                return grid;
            };
            ExPurchaseBillDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ExPurchaseBillDetailEditor);
            return ExPurchaseBillDetailEditor;
        }(SereneMovieTutorial.Common.GridEditorBase));
        Inventry.ExPurchaseBillDetailEditor = ExPurchaseBillDetailEditor;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillDetailDialog = /** @class */ (function (_super) {
            __extends(PurchaseBillDetailDialog, _super);
            function PurchaseBillDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventry.PurchaseBillDetailForm(_this.idPrefix);
                return _this;
            }
            PurchaseBillDetailDialog.prototype.getFormKey = function () { return Inventry.PurchaseBillDetailForm.formKey; };
            PurchaseBillDetailDialog.prototype.getIdProperty = function () { return Inventry.PurchaseBillDetailRow.idProperty; };
            PurchaseBillDetailDialog.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseBillDetailRow.localTextPrefix; };
            PurchaseBillDetailDialog.prototype.getNameProperty = function () { return Inventry.PurchaseBillDetailRow.nameProperty; };
            PurchaseBillDetailDialog.prototype.getService = function () { return Inventry.PurchaseBillDetailService.baseUrl; };
            PurchaseBillDetailDialog.prototype.getDeletePermission = function () { return Inventry.PurchaseBillDetailRow.deletePermission; };
            PurchaseBillDetailDialog.prototype.getInsertPermission = function () { return Inventry.PurchaseBillDetailRow.insertPermission; };
            PurchaseBillDetailDialog.prototype.getUpdatePermission = function () { return Inventry.PurchaseBillDetailRow.updatePermission; };
            PurchaseBillDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseBillDetailDialog);
            return PurchaseBillDetailDialog;
        }(Serenity.EntityDialog));
        Inventry.PurchaseBillDetailDialog = PurchaseBillDetailDialog;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseBillDetailGrid = /** @class */ (function (_super) {
            __extends(PurchaseBillDetailGrid, _super);
            function PurchaseBillDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseBillDetailGrid.prototype.getColumnsKey = function () { return 'Inventry.PurchaseBillDetail'; };
            PurchaseBillDetailGrid.prototype.getDialogType = function () { return Inventry.PurchaseBillDetailDialog; };
            PurchaseBillDetailGrid.prototype.getIdProperty = function () { return Inventry.PurchaseBillDetailRow.idProperty; };
            PurchaseBillDetailGrid.prototype.getInsertPermission = function () { return Inventry.PurchaseBillDetailRow.insertPermission; };
            PurchaseBillDetailGrid.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseBillDetailRow.localTextPrefix; };
            PurchaseBillDetailGrid.prototype.getService = function () { return Inventry.PurchaseBillDetailService.baseUrl; };
            PurchaseBillDetailGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableColumnReorder = true;
                opt.frozenColumn = 2;
                opt.forceFitColumns = false;
                opt.topPanelHeight = 9;
                opt.editable = true;
                opt.autoEdit = false;
                opt.showFooterRow = true;
                return opt;
            };
            PurchaseBillDetailGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("TaxableAmount" /* TaxableAmount */),
                        new Slick.Aggregators.Sum("TotalAmount" /* TotalAmount */)
                    ]
                });
                return grid;
            };
            PurchaseBillDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseBillDetailGrid);
            return PurchaseBillDetailGrid;
        }(Serenity.EntityGrid));
        Inventry.PurchaseBillDetailGrid = PurchaseBillDetailGrid;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseOrderDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDialog, _super);
            function PurchaseOrderDialog(rows) {
                var _this = _super.call(this) || this;
                _this.rows = rows;
                _this.form = new Inventry.PurchaseOrderForm(_this.idPrefix);
                _this.form.PoNo.changeSelect2(function () {
                    _this.form.DetailList.getPONo = _this.form.PoNo.value;
                });
                return _this;
            }
            PurchaseOrderDialog.prototype.getFormKey = function () { return Inventry.PurchaseOrderForm.formKey; };
            PurchaseOrderDialog.prototype.getIdProperty = function () { return Inventry.PurchaseOrderRow.idProperty; };
            PurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderDialog.prototype.getNameProperty = function () { return Inventry.PurchaseOrderRow.nameProperty; };
            PurchaseOrderDialog.prototype.getService = function () { return Inventry.PurchaseOrderService.baseUrl; };
            PurchaseOrderDialog.prototype.getPONo = function () {
                return this.form.PoNo.value;
            };
            PurchaseOrderDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                // ✅ Inject parent reference into editor
                if (this.form.DetailList) {
                    //this.form.DetailList.parentDialog = this;
                    //console.log("ParentForm: " + this.form.DetailList.parentDialog.entity)
                    this.form.DetailList.getPONo = this.form.PoNo.value;
                    this.form.DetailList;
                }
                // Optional UI sync
                this.form.PoNo.changeSelect2(function () {
                    _this.form.DetailList.getPONo = _this.form.PoNo.value;
                });
            };
            PurchaseOrderDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDialog);
            return PurchaseOrderDialog;
        }(Serenity.EntityDialog));
        Inventry.PurchaseOrderDialog = PurchaseOrderDialog;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseOrderGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderGrid, _super);
            function PurchaseOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderGrid.prototype.getColumnsKey = function () { return 'Inventry.PurchaseOrder'; };
            PurchaseOrderGrid.prototype.getDialogType = function () { return Inventry.PurchaseOrderDialog; };
            PurchaseOrderGrid.prototype.getIdProperty = function () { return Inventry.PurchaseOrderRow.idProperty; };
            PurchaseOrderGrid.prototype.getInsertPermission = function () { return Inventry.PurchaseOrderRow.insertPermission; };
            PurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderGrid.prototype.getService = function () { return Inventry.PurchaseOrderService.baseUrl; };
            PurchaseOrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            PurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderGrid);
            return PurchaseOrderGrid;
        }(Serenity.EntityGrid));
        Inventry.PurchaseOrderGrid = PurchaseOrderGrid;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseRequestDetailDialog = /** @class */ (function (_super) {
            __extends(PurchaseRequestDetailDialog, _super);
            function PurchaseRequestDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventry.PurchaseRequestDetailForm(_this.idPrefix);
                _this.form.CgstRate.change(function (e) { return _this.toggleTaxFields(); });
                _this.form.SgstRate.change(function (e) { return _this.toggleTaxFields(); });
                _this.form.IgstRate.change(function (e) { return _this.toggleTaxFields(); });
                _this.form.CgstRate && _this.form.SgstRate.change(function (e) { return _this.calculateTotal(); });
                _this.form.IgstRate.change(function (e) { return _this.calculateTotal(); });
                return _this;
            }
            PurchaseRequestDetailDialog.prototype.getFormKey = function () { return Inventry.PurchaseRequestDetailForm.formKey; };
            PurchaseRequestDetailDialog.prototype.getIdProperty = function () { return Inventry.PurchaseRequestDetailRow.idProperty; };
            PurchaseRequestDetailDialog.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseRequestDetailRow.localTextPrefix; };
            PurchaseRequestDetailDialog.prototype.getNameProperty = function () { return Inventry.PurchaseRequestDetailRow.nameProperty; };
            PurchaseRequestDetailDialog.prototype.getService = function () { return Inventry.PurchaseRequestDetailService.baseUrl; };
            PurchaseRequestDetailDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(2, 0, {
                    title: "Save & New", cssClass: "save-and-new-button", icon: "fa-save", onClick: function () {
                        _this.save(function () {
                            _this.loadEntity({});
                        });
                    }
                });
                return buttons;
            };
            PurchaseRequestDetailDialog.prototype.toggleTaxFields = function () {
                var cgstVal = Number(this.form.CgstRate.value);
                var sgstVal = Number(this.form.SgstRate.value);
                var igstVal = Number(this.form.IgstRate.value);
                if ((cgstVal && cgstVal !== 0) || (sgstVal && sgstVal !== 0)) {
                    Serenity.EditorUtils.setReadOnly(this.form.IgstRate, true);
                }
                else {
                    Serenity.EditorUtils.setReadOnly(this.form.IgstRate, false);
                }
                if (igstVal && igstVal !== 0) {
                    Serenity.EditorUtils.setReadOnly(this.form.CgstRate, true);
                    Serenity.EditorUtils.setReadOnly(this.form.SgstRate, true);
                }
                else {
                    Serenity.EditorUtils.setReadOnly(this.form.CgstRate, false);
                    Serenity.EditorUtils.setReadOnly(this.form.SgstRate, false);
                }
            };
            PurchaseRequestDetailDialog.prototype.calculateTotal = function () {
                var rate = Number(this.form.CurrentRate.value);
                var qty = Number(this.form.Quantity.value);
                var baseAmount = rate * qty;
                // GST percentages
                var cgst = Number(this.form.CgstRate.value);
                var sgst = Number(this.form.SgstRate.value);
                var igst = Number(this.form.IgstRate.value);
                // Apply GST
                var gstAmount = 0;
                if (cgst > 0 || sgst > 0) {
                    gstAmount += (baseAmount * cgst / 100);
                    gstAmount += (baseAmount * sgst / 100);
                }
                else if (igst > 0) {
                    gstAmount += (baseAmount * igst / 100);
                }
                var total = baseAmount + gstAmount;
                // Update form fields
                this.form.BasicAmount.value = baseAmount;
                this.form.TotalAmount.value = total;
            };
            PurchaseRequestDetailDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.calculateTotal();
                this.form.ItemId.changeSelect2(function (e) {
                    Inventry.PurchaseRequestDetailService.GetItemDetails({
                        Id: Number(_this.form.ItemId.value)
                    }, function (r) {
                        if (r && r.Details) {
                            _this.form.PartNo.value = r.Details.Partnumber.toString();
                            _this.form.PreviousRate.value = r.Details.Rate;
                            _this.form.BalanceStock.value = r.Details.Balancestock;
                            _this.form.StockLevelMax.value = r.Details.Stocklvlmaximum;
                            _this.form.StockLevelMin.value = r.Details.Stocklvlminimum;
                        }
                        else {
                            _this.form.PartNo.value = "";
                            _this.form.PreviousRate.value = null;
                            _this.form.BalanceStock.value = null;
                            _this.form.StockLevelMax.value = null;
                            _this.form.StockLevelMin.value = null;
                        }
                    });
                });
                this.toggleTaxFields();
            };
            PurchaseRequestDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseRequestDetailDialog);
            return PurchaseRequestDetailDialog;
        }(Serenity.EntityDialog));
        Inventry.PurchaseRequestDetailDialog = PurchaseRequestDetailDialog;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseRequestDetailEditor = /** @class */ (function (_super) {
            __extends(PurchaseRequestDetailEditor, _super);
            function PurchaseRequestDetailEditor() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PurchaseRequestDetailEditor.prototype.getColumnsKey = function () { return "Inventry.PurchaseRequestDetail"; };
            PurchaseRequestDetailEditor.prototype.getDialogType = function () { return Inventry.PurchaseRequestDetailEditorDialog; };
            PurchaseRequestDetailEditor.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseRequestDetailRow.localTextPrefix; };
            PurchaseRequestDetailEditor.prototype.getIdProperty = function () { return Inventry.PurchaseRequestDetailRow.idProperty; };
            //public parentDialog: PurchaseOrderDialog;
            PurchaseRequestDetailEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "ID",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
                    var col = columns_2[_i];
                    if (col.field === "PartName") {
                        col.format = function (ctx) {
                            var _a;
                            var lookup = Inventry.ItemRow.getLookup();
                            return ((_a = lookup.itemById[ctx.item.ItemId]) === null || _a === void 0 ? void 0 : _a.Partname) || "";
                        };
                    }
                    if (col.field === "UnitName") {
                        col.format = function (ctx) {
                            var _a;
                            var lookup = SereneMovieTutorial.Default.UnitRow.getLookup();
                            return ((_a = lookup.itemById[ctx.item.UnitId]) === null || _a === void 0 ? void 0 : _a.UnitName) || "";
                        };
                    }
                }
                return columns;
            };
            PurchaseRequestDetailEditor.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons[0].onClick = function () {
                    _this.createEntityDialog(_this.getItemType(), function (dlg) {
                        var dialog = dlg;
                        dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                        var entity = _this.getNewEntity();
                        entity.PoNo = _this.getPONo;
                        dialog.loadEntityAndOpenDialog(entity);
                    });
                };
                return buttons;
            };
            PurchaseRequestDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PurchaseRequestDetailEditor);
            return PurchaseRequestDetailEditor;
        }(SereneMovieTutorial.Common.GridEditorBase));
        Inventry.PurchaseRequestDetailEditor = PurchaseRequestDetailEditor;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseRequestDetailEditorDialog = /** @class */ (function (_super) {
            __extends(PurchaseRequestDetailEditorDialog, _super);
            function PurchaseRequestDetailEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventry.PurchaseRequestDetailForm(_this.idPrefix);
                return _this;
            }
            PurchaseRequestDetailEditorDialog.prototype.getFormKey = function () { return Inventry.PurchaseRequestDetailForm.formKey; };
            PurchaseRequestDetailEditorDialog.prototype.getIdProperty = function () { return Inventry.PurchaseRequestDetailRow.idProperty; };
            PurchaseRequestDetailEditorDialog.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseRequestDetailRow.localTextPrefix; };
            PurchaseRequestDetailEditorDialog.prototype.getService = function () { return Inventry.PurchaseRequestDetailService.baseUrl; };
            //public parentPoNo: string;
            PurchaseRequestDetailEditorDialog.prototype.getSaveEntity = function () {
                var entity = _super.prototype.getSaveEntity.call(this);
                if (this.entity && this.entity.PoNo) {
                    entity.PoNo = this.entity.PoNo;
                }
                var lookup = SereneMovieTutorial.Default.UnitRow.getLookup();
                if (entity.UnitId && lookup.itemById[entity.UnitId])
                    entity.UnitName = lookup.itemById[entity.UnitId].UnitName;
                var unitLookup = Inventry.ItemRow.getLookup();
                if (entity.ItemId && unitLookup.itemById[entity.ItemId]) {
                    entity.PartName = unitLookup.itemById[entity.ItemId].Partname;
                }
                return entity;
            };
            PurchaseRequestDetailEditorDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(2, 0, {
                    title: "Save & New", cssClass: "save-and-new-button", icon: "fa-save", onClick: function () {
                        _this.save(function () {
                            _this.loadEntity({});
                        });
                    }
                });
                return buttons;
            };
            PurchaseRequestDetailEditorDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                Serenity.EditorUtils.setRequired(this.form.TotalAmount, true);
                this.form.PoNo.element.closest(".field").hide();
                this.form.Quantity.changeSelect2(function () {
                    var qty = _this.form.Quantity.value || 0;
                    var rate = _this.form.CurrentRate.value || 0;
                    var basic = qty * rate;
                    _this.form.BasicAmount.value = basic;
                });
                this.form.CurrentRate.changeSelect2(function () {
                    var qty = _this.form.Quantity.value || 0;
                    var rate = _this.form.CurrentRate.value || 0;
                    var basic = qty * rate;
                    _this.form.BasicAmount.value = basic;
                });
                this.form.ItemId.changeSelect2(function (e) {
                    Inventry.PurchaseRequestDetailService.GetItemDetails({
                        Id: Number(_this.form.ItemId.value)
                    }, function (r) {
                        if (r && r.Details) {
                            _this.form.PartNo.value = r.Details.Partnumber.toString();
                            _this.form.PreviousRate.value = r.Details.Rate;
                            _this.form.BalanceStock.value = r.Details.Balancestock;
                            _this.form.StockLevelMax.value = r.Details.Stocklvlmaximum;
                            _this.form.StockLevelMin.value = r.Details.Stocklvlminimum;
                        }
                        else {
                            _this.form.PartNo.value = "";
                            _this.form.PreviousRate.value = null;
                            _this.form.BalanceStock.value = null;
                            _this.form.StockLevelMax.value = null;
                            _this.form.StockLevelMin.value = null;
                        }
                    });
                });
                this.form.CgstRate.changeSelect2(function () {
                    _this.calculateGST();
                    _this.toggleTaxFields();
                });
                this.form.SgstRate.changeSelect2(function () {
                    _this.calculateGST();
                    _this.toggleTaxFields();
                });
                this.form.IgstRate.changeSelect2(function () {
                    _this.calculateGST();
                    _this.toggleTaxFields();
                });
            };
            PurchaseRequestDetailEditorDialog.prototype.toggleTaxFields = function () {
                var cgstVal = Number(this.form.CgstRate.value);
                var sgstVal = Number(this.form.SgstRate.value);
                var igstVal = Number(this.form.IgstRate.value);
                if ((cgstVal && cgstVal !== 0) || (sgstVal && sgstVal !== 0)) {
                    Serenity.EditorUtils.setReadOnly(this.form.IgstRate, true);
                }
                else {
                    Serenity.EditorUtils.setReadOnly(this.form.IgstRate, false);
                }
                if (igstVal && igstVal !== 0) {
                    Serenity.EditorUtils.setReadOnly(this.form.CgstRate, true);
                    Serenity.EditorUtils.setReadOnly(this.form.SgstRate, true);
                }
                else {
                    Serenity.EditorUtils.setReadOnly(this.form.CgstRate, false);
                    Serenity.EditorUtils.setReadOnly(this.form.SgstRate, false);
                }
            };
            PurchaseRequestDetailEditorDialog.prototype.calculateGST = function () {
                var cgst = this.form.CgstRate.value || 0;
                var sgst = this.form.SgstRate.value || 0;
                var igst = this.form.IgstRate.value || 0;
                var basic = this.form.BasicAmount.value || 0;
                var cgstAmount = 0;
                var igstAmount = 0;
                var sgstAmount = 0;
                if (cgst > 0 || sgst > 0) {
                    cgstAmount = (basic * cgst / 100);
                    sgstAmount = (basic * sgst / 100);
                }
                else if (igst > 0) {
                    igstAmount = (basic * igst / 100);
                }
                if (this.form.BasicAmount.value > 0) {
                    this.form.CgstAmount.value = cgstAmount;
                    this.form.SgstAmount.value = sgstAmount;
                    this.form.IgstAmount.value = igstAmount;
                    this.form.TotalAmount.value = basic + cgstAmount + sgstAmount + igstAmount;
                }
            };
            PurchaseRequestDetailEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseRequestDetailEditorDialog);
            return PurchaseRequestDetailEditorDialog;
        }(SereneMovieTutorial.Common.GridEditorDialog));
        Inventry.PurchaseRequestDetailEditorDialog = PurchaseRequestDetailEditorDialog;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Inventry;
    (function (Inventry) {
        var PurchaseRequestDetailGrid = /** @class */ (function (_super) {
            __extends(PurchaseRequestDetailGrid, _super);
            function PurchaseRequestDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseRequestDetailGrid.prototype.getColumnsKey = function () { return 'Inventry.PurchaseRequestDetail'; };
            PurchaseRequestDetailGrid.prototype.getDialogType = function () { return Inventry.PurchaseRequestDetailDialog; };
            PurchaseRequestDetailGrid.prototype.getIdProperty = function () { return Inventry.PurchaseRequestDetailRow.idProperty; };
            PurchaseRequestDetailGrid.prototype.getInsertPermission = function () { return Inventry.PurchaseRequestDetailRow.insertPermission; };
            PurchaseRequestDetailGrid.prototype.getLocalTextPrefix = function () { return Inventry.PurchaseRequestDetailRow.localTextPrefix; };
            PurchaseRequestDetailGrid.prototype.getService = function () { return Inventry.PurchaseRequestDetailService.baseUrl; };
            PurchaseRequestDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseRequestDetailGrid);
            return PurchaseRequestDetailGrid;
        }(Serenity.EntityGrid));
        Inventry.PurchaseRequestDetailGrid = PurchaseRequestDetailGrid;
    })(Inventry = SereneMovieTutorial.Inventry || (SereneMovieTutorial.Inventry = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var MaintenanceModule;
    (function (MaintenanceModule) {
        var MaintenanceDialog = /** @class */ (function (_super) {
            __extends(MaintenanceDialog, _super);
            function MaintenanceDialog() {
                var _this = _super.call(this) || this;
                _this.form = new MaintenanceModule.MaintenanceForm(_this.idPrefix);
                _this.form.TruckId.changeSelect2(function (e) { return _this.loadLastMaintenance(); });
                _this.form.HeadId.changeSelect2(function (e) { return _this.loadLastMaintenance(); });
                _this.form.EntryDate.change(function (e) { return _this.updatePeriodTill(); });
                _this.form.EstimatedPeriod.change(function (e) { return _this.updatePeriodTill(); });
                _this.form.LastMaintenance.change(function (e) { return _this.updateDueDate(); });
                _this.form.EstimatedPeriod.change(function (e) { return _this.updateDueDate(); });
                _this.form.TruckId.changeSelect2(function (e) {
                    console.log(_this.form.TruckId.value);
                    var id = _this.form.TruckId.value;
                    if (!id)
                        return;
                    MaintenanceModule.MaintenanceService.GetDetails({
                        VehicleId: Number(id)
                    }, function (response) {
                        console.log(response);
                        _this.form.TruckType.value = response.Vehicle.VehicleType.toString();
                        _this.form.Owner.value = response.Vehicle.CustomerId.toString();
                        _this.form.ModelNumber.value = response.Vehicle.Model;
                    });
                });
                return _this;
            }
            MaintenanceDialog.prototype.getFormKey = function () { return MaintenanceModule.MaintenanceForm.formKey; };
            MaintenanceDialog.prototype.getIdProperty = function () { return MaintenanceModule.MaintenanceRow.idProperty; };
            MaintenanceDialog.prototype.getLocalTextPrefix = function () { return MaintenanceModule.MaintenanceRow.localTextPrefix; };
            MaintenanceDialog.prototype.getNameProperty = function () { return MaintenanceModule.MaintenanceRow.nameProperty; };
            MaintenanceDialog.prototype.getService = function () { return MaintenanceModule.MaintenanceService.baseUrl; };
            MaintenanceDialog.prototype.getDeletePermission = function () { return MaintenanceModule.MaintenanceRow.deletePermission; };
            MaintenanceDialog.prototype.getInsertPermission = function () { return MaintenanceModule.MaintenanceRow.insertPermission; };
            MaintenanceDialog.prototype.getUpdatePermission = function () { return MaintenanceModule.MaintenanceRow.updatePermission; };
            MaintenanceDialog.prototype.loadLastMaintenance = function () {
                var _this = this;
                var truckId = this.form.TruckId.value;
                var headId = this.form.HeadId.value;
                if (!truckId || !headId)
                    return;
                MaintenanceModule.MaintenanceService.GetLatestMaintenance({
                    TruckId: Number(truckId),
                    HeadId: Number(headId)
                }, function (response) {
                    console.log(response);
                    _this.form.LastMaintenance.value = response.LastMaintenance;
                });
            };
            MaintenanceDialog.prototype.updatePeriodTill = function () {
                var entry = this.form.EntryDate.valueAsDate;
                var last = this.form.LastMaintenance.valueAsDate;
                if (!entry || !last)
                    return;
                var diff = entry.getTime() - last.getTime();
                var days = Math.floor(diff / (1000 * 60 * 60 * 24));
                var years = Math.floor(days / 365);
                days = days % 365;
                var months = Math.floor(days / 30);
                days = days % 30;
                this.form.PeriodTill.value =
                    years + " years " + months + " months " + days + " day";
            };
            MaintenanceDialog.prototype.updateDueDate = function () {
                var last = this.form.EntryDate.valueAsDate;
                var period = this.form.EstimatedPeriod.value;
                if (!last || !period)
                    return;
                var due = new Date(Number(last));
                due.setDate(due.getDate() + Number(period));
                this.form.DueDate.valueAsDate = due;
            };
            MaintenanceDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], MaintenanceDialog);
            return MaintenanceDialog;
        }(Serenity.EntityDialog));
        MaintenanceModule.MaintenanceDialog = MaintenanceDialog;
    })(MaintenanceModule = SereneMovieTutorial.MaintenanceModule || (SereneMovieTutorial.MaintenanceModule = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var MaintenanceModule;
    (function (MaintenanceModule) {
        var MaintenanceGrid = /** @class */ (function (_super) {
            __extends(MaintenanceGrid, _super);
            function MaintenanceGrid(container) {
                return _super.call(this, container) || this;
            }
            MaintenanceGrid.prototype.getColumnsKey = function () { return 'MaintenanceModule.Maintenance'; };
            MaintenanceGrid.prototype.getDialogType = function () { return MaintenanceModule.MaintenanceDialog; };
            MaintenanceGrid.prototype.getIdProperty = function () { return MaintenanceModule.MaintenanceRow.idProperty; };
            MaintenanceGrid.prototype.getInsertPermission = function () { return MaintenanceModule.MaintenanceRow.insertPermission; };
            MaintenanceGrid.prototype.getLocalTextPrefix = function () { return MaintenanceModule.MaintenanceRow.localTextPrefix; };
            MaintenanceGrid.prototype.getService = function () { return MaintenanceModule.MaintenanceService.baseUrl; };
            MaintenanceGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "SerielNo",
                    name: "S. No",
                    format: function (ctx) { return (ctx.row + 1).toString(); }
                });
                return columns;
            };
            MaintenanceGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                //this.rowSelection = new Serenity.GridRowSelectionMixin(this);
                this.addQuickFilter({
                    field: "TruckId" /* TruckId */,
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: SereneMovieTutorial.Default.VehicleMasterRow.lookupKey,
                    }
                });
                this.addQuickFilter({
                    field: "HeadId" /* HeadId */,
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: SereneMovieTutorial.Default.MaintenanceHeadRow.lookupKey,
                    }
                });
            };
            MaintenanceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceGrid);
            return MaintenanceGrid;
        }(Serenity.EntityGrid));
        MaintenanceModule.MaintenanceGrid = MaintenanceGrid;
    })(MaintenanceModule = SereneMovieTutorial.MaintenanceModule || (SereneMovieTutorial.MaintenanceModule = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                //new Serenity.LookupEditor(this.byId("BranchName"), {
                //    lookupKey: "Default.BranchMaster" 
                //});
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 15000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/T1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/TT2.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/T5.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/T3.jpg"), transition: 'swirlLeft' },
                        { src: Q.resolveUrl("~/Content/site/slides/T4.jpg"), transition: 'zoomOut' }
                        //{ src: Q.resolveUrl("~/Content/site/slides/T6.jpg"), transition: 'zoomOut' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    //if (Q.isEmptyOrNull(this.byId('BranchName').val())) {
                    //    Q.notifyError("Please select a branch");
                    //    this.byId('State').focus();
                    //    return;
                    //}
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n\n                <div id=\"~_PropertyGrid\"></div>\n                \n\n                <div class=\"clear\"></div>\n            </div>\n\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n        </div>\n    </form>\n</div>";
            };
            LoginPanel.prototype.afterLoadEntity = function () {
                this.byId('State')
                    .attr('required', 'required')
                    .attr('aria-required', 'true');
                this.byId('ForgotPassword').hide();
                this.byId('SignUp').hide();
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
//<div class="field">
//    <label class="caption required">Branch</label>
//    <input id="~_BranchName" class="editor" />
//</div>
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
var SereneMovieTutorial;
(function (SereneMovieTutorial) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = SereneMovieTutorial.Membership || (SereneMovieTutorial.Membership = {}));
})(SereneMovieTutorial || (SereneMovieTutorial = {}));
//# sourceMappingURL=SereneMovieTutorial.Web.js.map