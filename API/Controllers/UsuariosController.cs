using System.Collections.Generic;
using System.Linq;
using Aplicacion.Interfaces;
using Dominio;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsuariosController : Controller
    {
        private readonly IUsuarioService _service;

        public UsuariosController(IUsuarioService service)
        {
            _service = service;
        }

        //Usando action Results 
        [HttpGet]
        [Route("api/[controller]")]        
        public ActionResult<IEnumerable<Usuario>> Get()
        {
            var usuarios =  _service.List();

            return Ok(usuarios);
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public ActionResult<Usuario> GetBydId(int id )
        {

            var usuario = _service.GetById(id);

            if(usuario != null )
            {
                return Ok(usuario);
            }

            return NotFound();

        
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public ActionResult Delete(int id )
        {
            var usuario = new Usuario{Id = id};

            _service.Delete(id);

            return Ok();
        }

        [HttpPost]
        [Route("api/[controller]")]
        public ActionResult CreateUsuario([FromBody] Usuario usuario)
        {
            usuario = _service.Create(usuario);

            return Ok(usuario);
        }

        [HttpPut]
        [Route("api/[controller]")]
        public ActionResult UpdateUsuario([FromBody] Usuario usuario)
        {
            usuario = _service.Update(usuario);
            
            return Ok(usuario);
        }
    }
}