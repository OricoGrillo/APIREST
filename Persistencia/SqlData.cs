using System.Collections.Generic;
using System.Linq;
using Dominio;
using Persistencia.Interface;

namespace Persistencia
{
    public class SqlData : IData
    {
        private readonly DataContext _context;

        public SqlData(DataContext context)
        {
            _context = context;
        }
        public Usuario CreateUsuario(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();

            return usuario;
        }

        public bool DeleteUsuario(int id)
        {
            var usuario = new Usuario{Id = id};

            _context.Usuarios.Remove(usuario);
            _context.SaveChanges();

            return true;
        }

        public Usuario GetUsuarioById(int id)
        {
            var usuario = _context.Usuarios.Find(id);

            return usuario;
        }

        public IEnumerable<Usuario> GetUsuariosList()
        {
            var usuarios = _context.Usuarios.ToList();

            return usuarios;
        }

        public Usuario UpdateUsuario(Usuario usuario)
        {
            _context.Usuarios.Update(usuario);
            _context.SaveChanges();

            return usuario;
        }
    }
}