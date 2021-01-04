using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Properties.Models;
using Properties.Data;

namespace Properties.Controllers
{
  
  [Route("v1/property")]
  [ApiController]
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

  }
}