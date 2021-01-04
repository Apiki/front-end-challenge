using Microsoft.EntityFrameworkCore.Migrations;

namespace APILeases.Migrations
{
    public partial class PopularBank : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Propertie",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Habitation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Picture = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Propertie", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Propertie",
                columns: new[] { "Id", "Description", "Habitation", "Picture", "Price", "Region", "Title" },
                values: new object[,]
                {
                    { 1, "More na região nobre de Bh", "Apartamento 4 quartos 2 vagas de garagem", "https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/af1a4a2776fd3a38585b08608cd0b6c7.jpg", 2599, "Belo Horizonte", "Apartamento Luxo Bh" },
                    { 2, "More na Sul de Bh", "Apartamento 3 quartos 2 vagas de garagem", "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/vr.images.sp/72e21bc777bca84140621cd0672e6ee8.jpg", 1899, "Belo Horizonte", "Apartamento Padrão Bh" },
                    { 3, "More na região central de Betim", "Apartamento 3 quartos 1 vagas de garagem", "https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/c8424f53d4482bce5e9fae7f5fd08ac2.jpg", 1599, "Betim", "Apartamento em Betim" },
                    { 4, "região noroeste da cidade facil acesso", "Casa 3 quartos 1 vagas de garagem", "https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/dc68069d6b172f4116f53941fd36480e.jpg", 1299, "Belo Horizonte", "Casa Ampla em BH" },
                    { 5, "More na região nobre de Bh", "Apartamento 2 quartos 1 vagas de garagem", "https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/005fa8a25dbffd08cc12b0f1a935334e.jpg", 2099, "Belo Horizonte", "Casa em Venda Nova" },
                    { 6, "More na região nobre de Bh", "Apartamento 4 quartos 2 vagas de garagem", "https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/8c95853f2e99ab3bcbe1aae861aaef8d.jpg", 2599, "Belo Horizonte", "Casa no Barreiro" },
                    { 7, "More na região central de Contagem", "Apartamento 4 quartos 2 vagas de garagem", "https://www.quintoandar.com.br/img/med/892939726-362.2953385371208DSC7172.jpg", 1299, "Contagem", "Apartamento Contagem" },
                    { 8, "More na região nobre de Bh", "Apartamento 3 quartos 2 vagas de garagem", "https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/afb129df59406c355e0c245b3e321f0c.jpg", 3599, "Belo Horizonte", "Casa Luxo Bh" },
                    { 9, "More na região norte de Bh", "Apartamento 2 quartos 2 vagas de garagem", "https://www.quintoandar.com.br/img/med/892953412-268.6248211630229DSC1104.jpg", 2699, "Belo Horizonte", "Casa Padrão Bh" },
                    { 10, "More no centro de Betim", "Apartamento 1 quartos sem vaga de garagem", "https://www.quintoandar.com.br/img/med/892939726-362.2953385371208DSC7172.jpg", 1499, "Betim", "Casa em Betim" },
                    { 11, "More no centro de Contagem", "Apartamento 2 quartos 2 vagas de garagem", "https://www.quintoandar.com.br/img/med/893218656-360.1517375526222hudsonbuchholzhgbfotos25de33.jpg", 1399, "Contagem", "Casa em Contagem" },
                    { 12, "More perto dos hospitais, excelente localização", "Casa 5 quartos 4 vagas de garagem", "https://www.quintoandar.com.br/img/med/892942267-901.0890635282618IMG4610.JPG", 2599, "Betim", "Casa Grande em Betim" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Propertie");
        }
    }
}
