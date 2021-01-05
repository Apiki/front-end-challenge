using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Properties.Models;
using Properties.Data;
using Properties.Dtos;
using AutoMapper;

namespace Properties.Controllers
{

  [ApiController]
  [Route("v1/property")]
  public class PropertiesController : ControllerBase
  {
    private readonly IPropertyRepo _repository;
    private readonly IMapper _mapper;
    public PropertiesController(IPropertyRepo repository, IMapper mapper)
    {
      _repository = repository;
      _mapper = mapper;
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

    public ActionResult UpdateProperty(int id, PropertyUpdateDto propertyUpdateDto)
    {
      var propertyModelFromRepo = _repository.GetPropertyById(id);

      if (propertyModelFromRepo == null)
      {
        return NotFound();
      }
      _mapper.Map(propertyUpdateDto, propertyModelFromRepo);

      _repository.UpdateProperty(propertyModelFromRepo);
      _repository.SaveChanges();

      return Ok(new { response = "Update With Sucess" });
    }

    [HttpDelete("{id}")]
    public ActionResult RemoveProperty(int id)
    {
      var propertyModelFromRepo = _repository.GetPropertyById(id);

      if (propertyModelFromRepo == null)
      {
        return NotFound();
      }

      _repository.RemoveProperty(propertyModelFromRepo);
      _repository.SaveChanges();

      return Ok(new { response = "Delete With Sucess"});
    }
  }
}