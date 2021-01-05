using Properties.Models;
using System.Collections.Generic;
using System.Linq;

namespace Properties.Data
{
  public class SqlPropertyRepo: IPropertyRepo
  {
    // injection dependency
    private readonly PropertyContext _context;
    public SqlPropertyRepo(PropertyContext context)
    {
      _context = context;
    }

    public IEnumerable<Property> GetAllProperties()
    {
      return _context.Propertie.ToList();
    }

    public Property GetPropertyById(int id)
    {
      return _context.Propertie.FirstOrDefault(p => p.Id == id);
    }

    public bool SaveChanges()
    {
       return (_context.SaveChanges() >= 0);
    }
    public void UpdateProperty(Property property) { }
  }
}