using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FluentMigrator;

namespace SereneMovieTutorial.Migrations.DefaultDB
{
    [Migration(20221114_183600)]
    public class DefaultDB_20221114_183600_GenreTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Genre")
                .WithColumn("GenreId").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("Name").AsString(100).NotNullable();

            Alter.Table("Movie")
                .AddColumn("GenreId").AsInt32().Nullable()
                    .ForeignKey("FK_Movie_GenreId", "Genre", "GenreId");

            Insert.IntoTable("Genre")
                .Row(new { Name = "Action" })
                .Row(new { Name = "Drama" })
                .Row(new { Name = "Comedy" })
                .Row(new { Name = "Sci-fi" })
                .Row(new { Name = "Fantasy" })
                .Row(new { Name = "Documentary" });
        }
    }
}