using Dominio;
using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
        
    }
    public DbSet<Usuario> Usuarios
    {
        get;
        set;
    }
    public DbSet<Perfil> Perfiles
    {
        get;
        set;
    }
}