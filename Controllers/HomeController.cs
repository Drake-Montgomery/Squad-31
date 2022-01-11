using Abar.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AbarMvc.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Registrar() 
        {
            return View();
        }
        public IActionResult Conta_feed()
        {
            return View();
        }
        public IActionResult Perfil_feed()
        {
            return View();
        }
        public IActionResult Feed()
        {
            return View();
        }
        public IActionResult Seguranca_feed()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}