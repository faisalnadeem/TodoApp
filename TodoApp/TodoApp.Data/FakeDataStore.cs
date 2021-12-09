using System;
using System.Collections.Generic;
using System.Linq;
using TodoApp.Domain;

namespace TodoApp.Data
{
    public static class FakeDataStore
    {
        public static List<TodoItem> TodoItems;

        static FakeDataStore()
        {
            TodoItems ??= new List<TodoItem>()
            {
                new TodoItem() {Text = "Go shopping"},
                new TodoItem() {Text = "Go gym"},
                new TodoItem() {Text = "Meet Rob"}
            };
        }

        public static List<TodoItem> GetItems()
        {
            return TodoItems;
        }
        public static void AddItem(TodoItem item)
        {
            TodoItems.Add(item);
        }
        public static void RemoveItem(string itemText)
        {
            var item = TodoItems.FirstOrDefault(x => x.Text == itemText);
            TodoItems.Remove(item);
        }
    }
}
