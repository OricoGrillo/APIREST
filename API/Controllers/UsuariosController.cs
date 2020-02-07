using System.Collections.Generic;
using System.Linq;
using Dominio;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsuariosController : Controller
    {
        private readonly List<Usuario> _usuarios = new List<Usuario>();

        public UsuariosController()
        {
            _usuarios.Add(new Usuario{ Id = 1, Nombre="Lalo Mora"});
            _usuarios.Add(new Usuario{ Id = 2, Nombre="El Buki"});
        }

        [HttpGet]
        [Route("api/[controller]")]
        public ActionResult<IEnumerable<Usuario>> GetUsuarios()
        {
            return Ok(_usuarios);
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public ActionResult<Usuario> GetUsuario(int id)
        {
            var usuario = _usuarios.FirstOrDefault(u => u.Id == id);
            
            if(usuario != null)
            {
                return Ok(usuario);
            }

            return NotFound();
        }

        [HttpPost]
        [Route("api/[controller]")]
        public ActionResult CrearUsuario([FromBody] Usuario usuario)
        {
            return Ok();        
        }

        [HttpPut]
        [Route("api/[controller]/{id}")]
        public ActionResult UpdateUsuario([FromBody] Usuario usuario, int id)
        {
            return Ok();        
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public ActionResult DeleteUsuario(int id)
        {
            return Ok();        
        }
    }
}