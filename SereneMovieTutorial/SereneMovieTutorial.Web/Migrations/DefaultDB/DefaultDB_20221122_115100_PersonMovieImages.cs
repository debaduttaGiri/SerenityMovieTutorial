using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FluentMigrator;

namespace SereneMovieTutorial.Migrations.DefaultDB
{
    [Migration(20221122_115100)]
    public class DefaultDB_20221122_115100_PersonMovieImages : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Person")
                .AddColumn("PrimaryImage").AsString(100).Nullable()
                .AddColumn("GalleryImages").AsString(int.MaxValue).Nullable();

            Alter.Table("Movie")
                .AddColumn("PrimaryImage").AsString(100).Nullable()
                .AddColumn("GalleryImages").AsString(int.MaxValue).Nullable();
        }
    }
}