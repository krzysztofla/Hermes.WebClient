using Hermes.WebClient.Dto;
using Hermes.WebClient.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hermes.WebClient.Services.Auth
{
    public interface IAuthService
    {
        Task<LoginResultDto> Login(SignInModel loginModel);
        Task Logout();
        Task Register(RegisterModel registerModel);
    }
}
