using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactSamples.Api.Migrations.ApplicationDb
{
    public partial class AddedUserId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "ToDos",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "ToDos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "ToDos");

            migrationBuilder.DropColumn(
                name: "Username",
                table: "ToDos");
        }
    }
}
