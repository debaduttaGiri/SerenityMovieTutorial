using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FluentMigrator;

namespace SereneMovieTutorial.Migrations.DefaultDB
{
    [Migration(20221114_182500)]
    public class DefaultDB_20221114_182500_MovieKind:AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Movie")
                .AddColumn("Kind").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}