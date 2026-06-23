using SereneMovieTutorial.Inventry.Entities;
using Serenity.ComponentModel;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Data;

namespace SereneMovieTutorial.Modules.Inventry.IssueDetails
{
 

    [LookupScript("Inventry.ItemNumber")]
    public class ItemNumberLookup : RowLookupScript<ItemRow>
    {
        public ItemNumberLookup()
        {
            IdField = ItemRow.Fields.Id.PropertyName;
            TextField = ItemRow.Fields.Partnumber.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            query.Select(ItemRow.Fields.Id)
                 .Select(ItemRow.Fields.Partname)
                 .Select(ItemRow.Fields.Partnumber);
        }
    }



    [LookupScript("Inventry.ItemName")]
    public class ItemNameLookup : RowLookupScript<ItemRow>
    {
        public ItemNameLookup()
        {
            IdField = ItemRow.Fields.Id.PropertyName;
            TextField = ItemRow.Fields.Partname.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            query.Select(ItemRow.Fields.Id)
                 .Select(ItemRow.Fields.Partname)
                 .Select(ItemRow.Fields.Partnumber);
        }
    }
}