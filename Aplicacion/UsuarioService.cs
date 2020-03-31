using System.Collections.Generic;
using Aplicacion.Interfaces;
using Dominio;
using Persistencia.Interface;

namespace Aplicacion
{
    public class UsuarioService : IUsuarioService
    {

        private readonly IData _data;
        public UsuarioService(IData data)
        {
            _data = data;
        }
        public Usuario Create(Usuario usuario)
        {
            return _data.CreateUsuario(usuario);
        }

        public bool Delete(int id)
        {
            return _data.DeleteUsuario(id);
        }

        public Usuario GetById(int id)
        {
            return _data.GetUsuarioById(id);
        }

        public IEnumerable<Usuario> List()
        {
            return _data.GetUsuariosList();
        }

        public Usuario Update(Usuario usuario)
        {
            return _data.UpdateUsuario(usuario);
        }
    }
}