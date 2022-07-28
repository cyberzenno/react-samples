using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ReactSamples.Api.Data.CustomContent;
using ReactSamples.Api.Data.DataModels.CustomContent;
using ReactSamples.Api.Data.DataModels.Identity;
using ReactSamples.Api.Models;

namespace ReactSamples.Api.Controllers
{
    [ApiController]
    [Route("api/custom-content")]
    public class CustomContentController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _appDbContext;

        public CustomContentController(UserManager<ApplicationUser> userManager, ApplicationDbContext appDbContext)
        {
            this._userManager = userManager;
            this._appDbContext = appDbContext;
        }

        [HttpGet]
        //[Authorize]
        [Route("todos")]
        public async Task<IActionResult> GetUserTodos()
        {
            var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);
            if (currentUser != null)
            {
                var userTodos = _appDbContext.ToDos.Where(x => x.UserId == currentUser.Id);

                return new JsonResult(userTodos);
            }

            return Unauthorized();
        }

        [HttpPost]
        [Authorize]
        [Route("add-todo")]
        public async Task<IActionResult> AddTodo([FromBody] TodoModel model)
        {
            var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);
            if (currentUser != null)
            {
                var dataModel = new ToDo
                {
                    Title = model.Title,
                    Status = ToDo.TaskStatus.Pending,
                    CreatedDate = DateTime.Now,

                    UserId = currentUser.Id,
                    Username = currentUser.UserName
                };

                _appDbContext.ToDos.Add(dataModel);

                _appDbContext.SaveChanges();


                var userTodos = _appDbContext.ToDos.Where(x => x.UserId == currentUser.Id);

                return new JsonResult(userTodos);
            }

            return Unauthorized();
        }

        [HttpPost]
        [Authorize]
        [Route("change-todo-state")]
        public async Task<IActionResult> ChangeTodoState([FromBody] TodoModel model)
        {
            var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);
            if (currentUser != null)
            {
                var dataModel = _appDbContext.ToDos
                    .Where(x => x.UserId == currentUser.Id)
                    .FirstOrDefault(x => x.Id == model.Id);

                if (dataModel != null)
                {
                    switch (dataModel.Status)
                    {
                        case ToDo.TaskStatus.Pending:
                            dataModel.Status = ToDo.TaskStatus.Done;
                            break;
                        case ToDo.TaskStatus.Done:
                            dataModel.Status = ToDo.TaskStatus.Pending;
                            break;
                    }

                    _appDbContext.SaveChanges();
                }

                var userTodos = _appDbContext.ToDos.Where(x => x.UserId == currentUser.Id);
                return new JsonResult(userTodos);
            }

            return Unauthorized();
        }


        [HttpPost]
        [Authorize]
        [Route("delete-todo")]
        public async Task<IActionResult> DeleteTodo([FromBody] TodoModel model)
        {
            var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);
            if (currentUser != null)
            {
                var dataModel = _appDbContext.ToDos
                    .Where(x => x.UserId == currentUser.Id)
                    .FirstOrDefault(x => x.Id == model.Id);

                if (dataModel != null)
                {
                    _appDbContext.ToDos.Remove(dataModel);
                   
                    _appDbContext.SaveChanges();
                }

                var userTodos = _appDbContext.ToDos.Where(x => x.UserId == currentUser.Id);
                return new JsonResult(userTodos);
            }

            return Unauthorized();
        }


    }
}