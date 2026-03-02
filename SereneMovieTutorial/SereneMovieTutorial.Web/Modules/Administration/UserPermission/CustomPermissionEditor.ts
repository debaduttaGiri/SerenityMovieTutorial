namespace SereneMovieTutorial.Administration {

    @Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
    export class CustomPermissionEditor extends Serenity.DataGrid<PermissionItem, PermissionEditorOptions> {

        protected getIdProperty() { return "Key"; }

        private _rolePermissions: Q.Dictionary<boolean> = {};
        private hasActionMap: Q.Dictionary<boolean> = {};
        private byParentKey: Q.Grouping<PermissionItem>;

        constructor(container: JQuery, opt: PermissionEditorOptions) {
            super(container, opt);
            

            let titleByKey: Q.Dictionary<string> = {};
            let permissionKeys = this.getSortedGroupAndPermissionKeys(titleByKey);

            let items = permissionKeys.map(key => <PermissionItem>{
                Key: key,
                ParentKey: this.getParentKey(key),
                Title: titleByKey[key],
                //IsGroup: key.charAt(key.length - 1) === ':',
                IsGroup: false, // temporary
                HasActions: this.hasActionMap[key] === true,
                Insert: false,
                Read: false,
                Modify: false,
                Delete: false,
                Grant: false
            });
            let parentMap: Q.Dictionary<boolean> = {};

            for (let item of items) {
                if (item.ParentKey) {
                    parentMap[item.ParentKey] = true;
                }
            }

            for (let item of items) {
                if (parentMap[item.Key]) {
                    item.IsGroup = true;
                }
            }

            this.byParentKey = Q.toGrouping(items, x => x.ParentKey);
            this.setItems(items);
        }
        public setItems(items: PermissionItem[]): void {

            this.byParentKey = Q.toGrouping(items, x => x.ParentKey);

            Serenity.SlickTreeHelper.setIndents(
                items,
                x => x.Key,
                x => x.ParentKey,
                true
            );
            for (let item of items) {
                if (item.IsGroup) {
                    (item as any)._collapsed = false;
                }
            }

            this.view.setItems(items, true);
        }
        protected onViewFilter(item: PermissionItem): boolean {

            if (!super.onViewFilter(item))
                return false;

            if (!Serenity.SlickTreeHelper.filterById(
                item,
                this.view,
                x => x.ParentKey))
                return false;

            return true;
        }

       
        protected getColumns(): Slick.Column[] {

            return [

                {
                    name: "Permission",
                    field: "Title",
                    format: Serenity.SlickFormatting.treeToggle(
                        () => this.view,
                        x => x.Key,
                        ctx => {

                            let klass = this.getEffectiveClass(ctx.item);

                            return `<span class="effective-permission ${klass}">
                        ${Q.htmlEncode(ctx.value)}
                    </span>`;
                        }
                    ),
                    width: 550
                },
                   

                {
                    name: "Grant",
                    field: "Grant",
                    format: ctx => {

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
                    format: ctx => {
                        if (ctx.item.IsGroup || !ctx.item.HasActions) return "";
                        return `<span class='check-box insert ${ctx.item.Insert ? "checked" : ""}'></span>`;
                    },
                    width: 70,
                    cssClass: "align-center"
                },

                {
                    name: "Read",
                    field: "Read",
                    format: ctx => {
                        if (ctx.item.IsGroup || !ctx.item.HasActions) return "";
                        return `<span class='check-box read ${ctx.item.Read ? "checked" : ""}'></span>`;
                    },
                    width: 70,
                    cssClass: "align-center"
                },

                {
                    name: "Update",
                    field: "Modify",
                    format: ctx => {
                        if (ctx.item.IsGroup || !ctx.item.HasActions) return "";
                        return `<span class='check-box modify ${ctx.item.Modify ? "checked" : ""}'></span>`;
                    },
                    width: 70,
                    cssClass: "align-center"
                },

                {
                    name: "Delete",
                    field: "Delete",
                    format: ctx => {
                        if (ctx.item.IsGroup || !ctx.item.HasActions) return "";
                        return `<span class='check-box delete ${ctx.item.Delete ? "checked" : ""}'></span>`;
                    },
                    width: 70,
                    cssClass: "align-center"
                }
            ];
        }

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

        protected onClick(e, row, cell): void {

            super.onClick(e, row, cell);
            console.log("Clicked:", e.target);
            if (!e.isDefaultPrevented()) {
                Serenity.SlickTreeHelper.toggleClick(
                    e, row, cell, this.view, x => x.Key
                );
            }

            if (e.isDefaultPrevented())
                return;

            //let target = $(e.target);
            let item = this.itemAt(row);

            if (!item)
                return;

            let target = $(e.target).closest(".check-box");

            if (!target.length)
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

            // 🔥 If parent clicked → update all children
            if (item.IsGroup && field === "Grant") {

                let descendants = this.getDescendants(item);

                for (let d of descendants) {

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

                    let descendants = this.getDescendants(item);

                    console.log(descendants);
                    for (let d of descendants) {

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
        }
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

        private getParentKey(key: string): string {

            let idx = key.lastIndexOf(':');

            if (idx <= 0)
                return null;

            return key.substring(0, idx);
        }

        private getSortedGroupAndPermissionKeys(titleByKey: Q.Dictionary<string>): string[] {

            let rawKeys = <string[]>Q.getRemoteData('Administration.PermissionKeys').Entities;

            let baseKeys: Q.Dictionary<boolean> = {};
            let hasAction: Q.Dictionary<boolean> = {};

            for (let k of rawKeys) {

                if (!k) continue;

                let parts = k.split(':');

                // Action level permission
                if (parts.length > 2) {

                    let baseKey = parts.slice(0, parts.length - 1).join(':');
                    baseKeys[baseKey] = true;
                    hasAction[baseKey] = true;
                }
                else {
                    baseKeys[k] = true;
                }
            }

            // 🔥 Now build full parent chain
            let allKeys: Q.Dictionary<boolean> = {};

            for (let k of Object.keys(baseKeys)) {

                let parts = k.split(':');
                let current = "";

                for (let i = 0; i < parts.length; i++) {

                    current += (i === 0 ? parts[i] : ":" + parts[i]);
                    allKeys[current] = true;
                }
            }

            // Save action map
            this.hasActionMap = hasAction;

            let keys = Object.keys(allKeys);

            // Set titles
            for (let k of keys) {
                titleByKey[k] = Q.tryGetText("Permission." + k) || k;
            }

            return keys.sort((x, y) => Q.turkishLocaleCompare(x, y));
        }

        get value(): UserPermissionRow[] {

            let result: UserPermissionRow[] = [];

            for (let item of this.view.getItems()) {

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
        }

        set value(value: UserPermissionRow[]) {

            for (let item of this.view.getItems()) {
                item.Insert = item.Read = item.Modify = item.Delete = item.Grant = false;
            }

            if (!value) return;

            for (let row of value) {

                let parts = row.PermissionKey.split(':');

                if (parts.length > 2) {

                    let entityKey = parts.slice(0, parts.length - 1).join(':');
                    let action = parts[parts.length - 1].toLowerCase();
                    let item = this.view.getItemById(entityKey);

                    if (!item) continue;

                    switch (action) {
                        case "insert": item.Insert = true; break;
                        case "read": item.Read = true; break;
                        case "modify": item.Modify = true; break;
                        case "delete": item.Delete = true; break;
                    }
                }
                else {
                    let item = this.view.getItemById(row.PermissionKey);
                    if (item)
                        item.Grant = true;
                }
            }

            this.view.refresh();
            this.slickGrid.invalidate();
        }

        set rolePermissions(value: string[]) {

            this._rolePermissions = {};

            if (!value) return;

            for (let key of value)
                this._rolePermissions[key] = true;

            this.view.refresh();
            this.slickGrid.invalidate();
        }

        private getDescendants(item: PermissionItem): PermissionItem[] {

            let result: PermissionItem[] = [];
            let stack = [item];

            while (stack.length > 0) {

                let current = stack.pop();
                let children = this.view.getItems()
                    .filter(x => x.ParentKey === current.Key);

                for (let child of children) {
                    result.push(child);
                    stack.push(child);
                }
            }

            return result;
        }

        private getEffectiveClass(item: PermissionItem): string {

            // 🔥 If group → calculate based on children
            if (item.IsGroup) {

                let descendants = this.getDescendants(item)
                    .filter(x => !x.IsGroup);

                if (!descendants.length)
                    return "";

                let allowCount = 0;
                let denyCount = 0;

                for (let d of descendants) {

                    let granted =
                        d.Grant === true ||
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
        }
       
    }

    export interface PermissionItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        HasActions?: boolean;
        Insert?: boolean;
        Read?: boolean;
        Modify?: boolean;
        Delete?: boolean;
        Grant?: boolean;
    }

    export interface PermissionEditorOptions {
        showRevoke?: boolean;
    }
}