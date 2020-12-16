using Hermes.WebClient.Client.Dto;
using Hermes.WebClient.Client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hermes.WebClient.Client.Services.Auth
{
    public interface IAuthService
    {
        Task<LoginResultDto> Login(SignInModel loginModel);
        Task Logout();
        Task Register(RegisterModel registerModel);
    }
}
