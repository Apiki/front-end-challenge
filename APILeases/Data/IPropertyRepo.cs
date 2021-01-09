using System.Collections.Generic;
using Properties.Models;

namespace Properties.Data
{
  public interface  IPropertyRepo
  { 
    bool SaveChanges();
    IEnumerable<Property> GetAllProperties();
    Property GetPropertyById(int Id); 
    void UpdateProperty(Property property);
    void RemoveProperty(Property property);
  }
}