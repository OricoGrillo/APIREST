using System.Collections.Generic;
using System.Linq;
using Dominio;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsuariosController : Controller
    {
        private readonly DataContext _data;

        public UsuariosController(DataContext data)
        {
            this._data = data;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public ActionResult<IEnumerable<Usuario>> GetUsuarios()
        {
            var usuarios = _data.Usuarios.ToList();
            return Ok(usuarios);
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public ActionResult<Usuario> GetUsuario(int id)
        {
            var usuario = _data.Usuarios.ToList().Find(x => x.Id == id);
            
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
            _data.Usuarios.Add(usuario);
            _data.SaveChanges();
            return Ok();        
        }

        [HttpPut]
        [Route("api/[controller]/{id}")]
        public ActionResult UpdateUsuario([FromBody] Usuario usuario, int id)
        {
            _data.Usuarios.Update(usuario);
            _data.SaveChanges();
            return Ok();        
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public ActionResult DeleteUsuario(int id)
        {
            var usuario = new Usuario { Id = id };
            _data.Usuarios.Remove(usuario);
            _data.SaveChanges();
            return Ok();        
        }
    }
}