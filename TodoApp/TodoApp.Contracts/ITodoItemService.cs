using System;
using System.Collections.Generic;
using TodoApp.Domain;

namespace TodoApp.Contracts
{
    public interface ITodoItemService
    {
        IEnumerable<TodoItem> GetAllItems();
        bool AddItem(TodoItem todoItem); 
        bool RemoveItem(string itemText);
    }
}
