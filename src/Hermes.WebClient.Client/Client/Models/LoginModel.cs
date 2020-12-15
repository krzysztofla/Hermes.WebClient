using System.ComponentModel.DataAnnotations;

namespace Hermes.WebClient.Client.Client.Models
{
    public class LoginModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
