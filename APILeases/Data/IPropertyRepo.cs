using System.Collections.Generic;
using Properties.Models;

namespace Properties.Data
{
  public interface  IPropertyRepo
  { 
    IEnumerable<Property> GetAllProperties();
    Property GetPropertyById(int Id);
  }
}