using System.ComponentModel.DataAnnotations;

namespace Properties.Dtos
{
  public class PropertyUpdateDto
  {
    [Required(ErrorMessage = "Campo obrigatório")]
    // [MaxLength(50, ErrorMessage = "Preencha um breve título")]
    public string Title { get; set; }

    [Required(ErrorMessage = "Campo obrigatório")]
    // [MaxLength(50, ErrorMessage = "Preencha uma breve descrição")]
    public string Description { get; set; }

    [Required(ErrorMessage = "campo obrigatório")]
    // [MinLength(10, ErrorMessage = "Deescreva os cômodos do imóvel")]
    public string Habitation { get; set; }

    [Required(ErrorMessage = "campo obrigatório")]
    // [MinLength(10, ErrorMessage = "Digite a URL da imagem")]
    public string Picture { get; set; }

    [Required(ErrorMessage = "campo obrigatório")]
    public int Price { get; set; }

    [Required(ErrorMessage = "campo obrigatório")]
    // [MinLength(5, ErrorMessage = "Digite a região do imóvel")]
    public string Region { get; set; }
  }
}