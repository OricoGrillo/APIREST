using System.Collections.Generic;
using Dominio;

namespace Aplicacion.Interfaces
{
    public interface IUsuarioService
    {
         IEnumerable<Usuario> List();
         Usuario GetById(int id);
         bool Delete(int id);
         Usuario Create(Usuario usuario);
         Usuario Update(Usuario usuario);
    }
}