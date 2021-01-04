using Microsoft.EntityFrameworkCore;
using Properties.Models;

namespace Properties.Data
{
  public class PropertyContext : DbContext
  {
    public PropertyContext(DbContextOptions<PropertyContext> opt) : base(opt) { }

    public DbSet<Property> Propertie { get; set; }
  }
}