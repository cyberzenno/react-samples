using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactSamples.Api.Migrations
{
    public partial class firstNameLastName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FavoriteColor",
                table: "aut_Users");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "aut_Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "aut_Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "aut_Users");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "aut_Users");

            migrationBuilder.AddColumn<string>(
                name: "FavoriteColor",
                table: "aut_Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
