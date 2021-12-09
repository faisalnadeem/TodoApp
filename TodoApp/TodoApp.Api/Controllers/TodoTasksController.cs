using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TodoApp.Contracts;
using TodoApp.Domain;

namespace TodoApp.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoTasksController : ControllerBase
    {
        private readonly ITodoItemService _todoItemService;

        public TodoTasksController(ITodoItemService todoItemService)
        {
            _todoItemService = todoItemService;
        }

        [HttpGet]
        public IEnumerable<TodoItem> Get()
        {
            return _todoItemService.GetAllItems();
        } 
        
        [HttpPost]
        public bool Post(TodoItem todoItem)
        {
            return _todoItemService.AddItem(todoItem);
        }
        
        [HttpDelete]
        public bool Delete([FromQuery] string text)
        {
            _todoItemService.RemoveItem(text);
            return true;
        }
    }
}