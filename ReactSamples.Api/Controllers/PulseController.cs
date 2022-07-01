using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ReactSamples.Api.Data.DataModels;
using ReactSamples.Api.Data.DataModels.Identity;

namespace ReactSamples.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PulseController : ControllerBase
    {
        private readonly ILogger<PulseController> _logger;
        private readonly UserManager<ApplicationUser> _userManager;

        public PulseController(ILogger<PulseController> logger, UserManager<ApplicationUser> userManager)
        {
            _logger = logger;
            _userManager = userManager;
        }

        [HttpGet]
        public string Get(string x)
        {
            if (!string.IsNullOrEmpty(x))
            {
                return "It's alive! --> " + x;
            }

            return "It's alive!";
        }

        [HttpGet]
        [Authorize]
        [Route("user-details")]
        public async Task<IActionResult> GetUserDetails()
        {
            var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);

            var userRoles = await _userManager.GetRolesAsync(currentUser);

            return new JsonResult(new { currentUser.UserName, currentUser.FullName, userRoles });
        }
    }
}