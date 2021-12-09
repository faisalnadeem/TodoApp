using System;
using System.Collections.Generic;
using System.Linq;
using TodoApp.Contracts;
using TodoApp.Data;
using TodoApp.Domain;

namespace TodoApp.Services
{
    public class TodoItemService : ITodoItemService
    {
        public IEnumerable<TodoItem> GetAllItems()
        {
            return FakeDataStore.GetItems();
        }

        public bool AddItem(TodoItem todoItem)
        {
            try
            {
                FakeDataStore.AddItem(todoItem);
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool RemoveItem(string itemText)
        {
            try
            {
                FakeDataStore.RemoveItem(itemText);
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
