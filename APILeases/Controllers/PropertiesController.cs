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
    public ActionResult<IEnumerable<Property>> GetAllProperties()
    {
      var allProperties = _repository.GetAllProperties();
      return Ok(allProperties);
    }

    [HttpGet("{id}")]
    public ActionResult<Property> GetPropertyById(int id)
    {
      var propertyById = _repository.GetPropertyById(id);
      return Ok(propertyById);
    }

    [HttpPost]
    public async Task<ActionResult<Property>> Post(
     [FromServices] PropertyContext context,
     [FromBody] Property model)
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

    [HttpPut("{id}")]

    public ActionResult UpdateProperty(int id)
    {
      var propertyToUpdateById = _repository.GetPropertyById(id);

      if (propertyToUpdateById == null)
      {
        return NotFound();
      }

      _repository.UpdateProperty(propertyToUpdateById);
 
      _repository.SaveChanges();

      return Ok("Atualizado com sucesso");
    }

    // [HttpDelete]

    // public async Task DeleteProperty(int id)
    // {
    //   var property = await PropertyContext.Propertie.FindAsync(id);
    //   remove(property);
    //   await PropertyContext.SaveChangeAsync();
    // }



  }
}