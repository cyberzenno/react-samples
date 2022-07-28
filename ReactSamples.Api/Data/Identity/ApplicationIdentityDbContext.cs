using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ReactSamples.Api.Data.DataModels;
using ReactSamples.Api.Data.DataModels.Identity;

namespace ReactSamples.Api.Data.Identity
{
    public class ApplicationIdentityDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationIdentityDbContext(DbContextOptions<ApplicationIdentityDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ApplicationUser>().ToTable("aut_Users");
            builder.Entity<IdentityUserRole<string>>().ToTable("aut_UserRoles");
            builder.Entity<IdentityUserClaim<string>>().ToTable("aut_UserClaims");
            builder.Entity<IdentityUserLogin<string>>().ToTable("aut_UserLogins");
            builder.Entity<IdentityUserToken<string>>().ToTable("aut_UserTokens");

            builder.Entity<IdentityRole>().ToTable("aut_Roles");
            builder.Entity<IdentityRoleClaim<string>>().ToTable("aut_RoleClaims");

        }
    }
}
