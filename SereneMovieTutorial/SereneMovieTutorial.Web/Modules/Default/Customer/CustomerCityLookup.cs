using SereneMovieTutorial.Default.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;

namespace SereneMovieTutorial.Modules.Default.Customer
{

    [LookupScript]
    public class CustomerCityLookup : RowLookupScript<SereneMovieTutorial.Default.Entities.CustomerRow>
    {
        public CustomerCityLookup()
        {
            IdField = TextField = CustomerRow.Fields.City.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = SereneMovieTutorial.Default.Entities.CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.Country)
                .Select(fld.City)
                .Where(
                    new Criteria(fld.Country) != "" &
                    new Criteria(fld.Country).IsNotNull() &
                    new Criteria(fld.City) != "" &
                    new Criteria(fld.City).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}