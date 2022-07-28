using Microsoft.EntityFrameworkCore;
using ReactSamples.Api.Data.DataModels.CustomContent;

namespace ReactSamples.Api.Data.CustomContent
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<ToDo> ToDos { get; set; }
    }
}

