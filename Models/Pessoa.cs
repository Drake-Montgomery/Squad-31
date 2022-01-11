using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Abar.Models
{
    public class Pessoa
    {
        [DataType(DataType.Text)]
        public string ? Nome { get; set; }
        public string ? Sobrenome { get; set; }
        [Key]
        [Required]
        [DataType(DataType.EmailAddress)]
        public string ? Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string ? Senha { get; set; }
        public string ? Identidade_de_Genero {get; set; }
        public string ? Orientacao_Sexual { get; set; }
    }
}