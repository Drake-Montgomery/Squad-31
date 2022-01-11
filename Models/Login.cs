using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Abar.Models
{
    public class Login
    {
     
        [Key]
        public int Id { get; set; }
        [Required]
        [ForeignKey("Email")]
        [DataType(DataType.EmailAddress)]
        public string? Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string? Senha { get; set; }
    }
}
