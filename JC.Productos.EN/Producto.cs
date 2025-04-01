using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JC.Productos.EN
{
    public class Producto
    {
        public int Id { get; set; }
        [Required (ErrorMessage = "El Nombre es Obligatorio")]
        [MaxLength(50)] 

        public string Nombre { get; set; }

        public decimal Precio { get; set; }

        public int CantidadDisponible { get; set; }

        public DateTime FechaCreacion { get; set; }
    }
}
