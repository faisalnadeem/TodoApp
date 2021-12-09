using NUnit.Framework;
using TodoApp.Api.Controllers;
using Moq;
using TodoApp.Contracts;
using TodoApp.Domain;

namespace TodoApp.Api.Tests
{
    public class Tests
    {
        private Mock<ITodoItemService> _mockTodoItemService;
        private TodoTasksController _controller;
        
        [SetUp]
        public void Setup()
        {
            _mockTodoItemService = new Mock<ITodoItemService>();
            _mockTodoItemService.Setup(x => x.AddItem(It.IsAny<TodoItem>())).Returns(true);
            _mockTodoItemService.Setup(x => x.RemoveItem(It.IsAny<string>())).Returns(true);

            _controller = new TodoTasksController(_mockTodoItemService.Object);
        }

        [Test]
        public void Get_Returns_AllItems()
        {
            var result = _controller.Get();
            Assert.NotNull(result);
            _mockTodoItemService.Verify(x => x.GetAllItems(), Times.Once);
        }
        
        [Test]
        public void Post_Returns_Success_When_Correct_Item()
        {
            var result = _controller.Post(new TodoItem {Text = "test"});
            Assert.IsTrue(result);
            _mockTodoItemService.Verify(x => x.AddItem(It.IsAny<TodoItem>()), Times.Once);
        }
        
        [Test]
        public void Delete_Returns_Success_When_Correct_Data()
        {
            var result = _controller.Delete("test");
            Assert.IsTrue(result);
            _mockTodoItemService.Verify(x => x.RemoveItem(It.IsAny<string>()), Times.Once);
        }
    }
}