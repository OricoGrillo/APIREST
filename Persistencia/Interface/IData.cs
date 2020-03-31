using System.Collections.Generic;
using Dominio;

namespace Persistencia.Interface
{
    public interface IData
    {
        #region Usuarios
         IEnumerable<Usuario> GetUsuariosList();
         Usuario GetUsuarioById(int id);
         Usuario CreateUsuario(Usuario usuario);
         Usuario UpdateUsuario(Usuario usuario);
         bool DeleteUsuario(int id);
         #endregion
    }
}