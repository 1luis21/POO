class Producto{
    static cont = 0;
    constructor(nombre, descripcion, cantidad, costo){

        this.id =++ Producto.cont;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo = costo;
    }//aqui no cerraste el constructor
        showTextInfo(){
            return "ID: " + this.id + "Nombre: " + this.nombre;
        }

        get valorMercancia(){
            return this.costo * this.cantidad;
        }

        showInfo(){
            return{ID:this.id, Nombre:this.nombre, Descripcion:this.descripcion, Cantidad:this.cantidad,
                   Costo:this.costo}
        }
    }
}
