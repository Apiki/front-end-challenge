using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Properties.Models;
using Properties.Data;

namespace Properties.Controllers
{
  
  [ApiController]
  [Route("v1/property")]
  public class PropertiesController : ControllerBase
  {

    private readonly IPropertyRepo _repository;

    public PropertiesController(IPropertyRepo repository)
    {
      _repository = repository;
    }
    [HttpGet]
    public ActionResult <IEnumerable<Property>> GetAllProperties()
    {
      var allProperties = _repository.GetAllProperties();
      return Ok(allProperties);
    }

    [HttpGet("{id}")]
    public ActionResult <Property> GetPropertyById(int id)
    {
      var propertyById = _repository.GetPropertyById(id);
      return Ok(propertyById);
    }

    [HttpPost]

   public async Task<ActionResult<Property>> Post(
     [FromServices] PropertyContext context,
     [FromBody]Property model)
     {
       if (ModelState.IsValid)
       {
         context.Propertie.Add(model);
         await context.SaveChangesAsync();
         return model;
       }
      else
      {
        return BadRequest(ModelState);
      }

     }

  }
}