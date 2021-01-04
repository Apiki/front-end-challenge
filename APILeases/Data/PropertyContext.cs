using Microsoft.EntityFrameworkCore;
using Properties.Models;

namespace Properties.Data
{
  public class PropertyContext : DbContext
  {
    public PropertyContext(DbContextOptions<PropertyContext> opt) : base(opt) { }

    public DbSet<Property> Propertie { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    =>
    optionsBuilder
    .UseSqlServer("Server=DESKTOP-87ELJL0\\SQLEXPRESS; Initial Catalog=PropertiesDB; User ID=ApiLeases; Password=123456");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    =>
    modelBuilder.Entity<Property>()
    .HasData(
      new Property { Id=1, Title="Apartamento Luxo Bh", Description="More na região nobre de Bh", Habitation="Apartamento 4 quartos 2 vagas de garagem", Picture="https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/af1a4a2776fd3a38585b08608cd0b6c7.jpg", Price=2599, Region="Belo Horizonte" },
      new Property { Id=2, Title="Apartamento Padrão Bh", Description="More na Sul de Bh", Habitation="Apartamento 3 quartos 2 vagas de garagem", Picture="https://resizedimgs.zapimoveis.com.br/fit-in/800x360/vr.images.sp/72e21bc777bca84140621cd0672e6ee8.jpg", Price=1899, Region="Belo Horizonte" },
      new Property { Id=3, Title="Apartamento em Betim", Description="More na região central de Betim", Habitation="Apartamento 3 quartos 1 vagas de garagem", Picture="https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/c8424f53d4482bce5e9fae7f5fd08ac2.jpg", Price=1599, Region="Betim" },
      new Property { Id=4, Title="Casa Ampla em BH", Description="região noroeste da cidade facil acesso", Habitation="Casa 3 quartos 1 vagas de garagem", Picture="https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/dc68069d6b172f4116f53941fd36480e.jpg", Price=1299, Region="Belo Horizonte" },
      new Property { Id=5, Title="Casa em Venda Nova", Description="More na região nobre de Bh", Habitation="Apartamento 2 quartos 1 vagas de garagem", Picture="https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/005fa8a25dbffd08cc12b0f1a935334e.jpg", Price=2099, Region="Belo Horizonte"  },
      new Property { Id=6, Title="Casa no Barreiro", Description="More na região nobre de Bh", Habitation="Apartamento 4 quartos 2 vagas de garagem", Picture="https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/8c95853f2e99ab3bcbe1aae861aaef8d.jpg", Price=2599, Region="Belo Horizonte"  },
      new Property { Id=7, Title="Apartamento Contagem", Description="More na região central de Contagem", Habitation="Apartamento 4 quartos 2 vagas de garagem", Picture="https://www.quintoandar.com.br/img/med/892939726-362.2953385371208DSC7172.jpg", Price=1299,Region="Contagem"  },
      new Property { Id=8, Title="Casa Luxo Bh", Description="More na região nobre de Bh", Habitation="Apartamento 3 quartos 2 vagas de garagem", Picture="https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/afb129df59406c355e0c245b3e321f0c.jpg", Price=3599, Region="Belo Horizonte" },
      new Property { Id=9, Title="Casa Padrão Bh", Description="More na região norte de Bh", Habitation="Apartamento 2 quartos 2 vagas de garagem", Picture="https://www.quintoandar.com.br/img/med/892953412-268.6248211630229DSC1104.jpg", Price=2699, Region="Belo Horizonte" },
      new Property { Id=10, Title="Casa em Betim", Description="More no centro de Betim", Habitation="Apartamento 1 quartos sem vaga de garagem", Picture="https://www.quintoandar.com.br/img/med/892939726-362.2953385371208DSC7172.jpg", Price=1499, Region="Betim"  },
      new Property { Id=11, Title="Casa em Contagem", Description="More no centro de Contagem", Habitation="Apartamento 2 quartos 2 vagas de garagem", Picture="https://www.quintoandar.com.br/img/med/893218656-360.1517375526222hudsonbuchholzhgbfotos25de33.jpg", Price=1399, Region="Contagem" },
      new Property { Id=12, Title="Casa Grande em Betim", Description="More perto dos hospitais, excelente localização", Habitation="Casa 5 quartos 4 vagas de garagem", Picture="https://www.quintoandar.com.br/img/med/892942267-901.0890635282618IMG4610.JPG", Price=2599, Region="Betim"  }
    );
  }
}