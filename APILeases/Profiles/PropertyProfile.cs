using AutoMapper;
using Properties.Dtos;
using Properties.Models;

namespace Properties.Profiles
{
  public class PropertiesProfile : Profile
  {
    public PropertiesProfile()
    {
      CreateMap<PropertyUpdateDto, Property>();
    }
  }

}