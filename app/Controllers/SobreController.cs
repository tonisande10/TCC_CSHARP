﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app.Controllers
{
    public class SobreController : Controller
    {
        public IActionResult Sobre()
        {
            return View();
        }
    }
}
