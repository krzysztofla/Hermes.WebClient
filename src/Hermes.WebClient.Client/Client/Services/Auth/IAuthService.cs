using Hermes.WebClient.Client.Client.Dto;
using Hermes.WebClient.Client.Client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hermes.WebClient.Client.Client.Services.Auth
{
    public interface IAuthService
    {
        Task<LoginResultDto> Login(LoginModel loginModel);
        Task Logout();
        Task Register(RegisterModel registerModel);
    }
}
