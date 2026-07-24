export const bebidas = [
  {
    id: 'ginger-beer',
    nombre: 'Ginger Beer Artesanal',
    descripcion: 'Bebida fermentada naturalmente con un toque picante y refrescante.',
    preparacion: 'Fermentación en botella por 48-72 horas a temperatura ambiente.',
    ingredientes: ['Agua filtrada', 'Jengibre fresco', 'Azúcar de caña', 'Cultivo iniciador (Ginger Bug)'],
    costos: { precioVenta: 2500, descuentoRetornable: 500 } // Descuento si el cliente devuelve la botella
  },
  {
    id: 'hidromiel-clasica',
    nombre: 'Hidromiel Clásica',
    descripcion: 'Fermento de miel de abeja con un perfil suave y ligeramente dulce.',
    preparacion: 'Primera fermentación en damajuana por 3 semanas, seguida de maduración en botella.',
    ingredientes: ['Agua mineral', 'Miel pura de abeja', 'Levadura especializada', 'Nutrientes de levadura'],
    costos: { precioVenta: 4500, descuentoRetornable: 500 }
  },
  {
    id: 'ginger-ale',
    nombre: 'Ginger Ale Suave',
    descripcion: 'Versión ligera y carbonatada, ideal para mezclar o tomar sola.',
    preparacion: 'Infusión en caliente y carbonatación forzada rápida.',
    ingredientes: ['Agua carbonatada', 'Extracto de jengibre', 'Almíbar simple', 'Jugo de limón'],
    costos: { precioVenta: 2000, descuentoRetornable: 300 }
  }
  // Puedes agregar de 5 a 9 elementos más luego para cumplir con los 8-12 recomendados.
];