const miInfo = new Array();

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",(e)=>{

	let nombre = document.getElementById("txtNombre").value;
	let descripcion = document.getElementById("txtDescripcion").value;
	let cantidad = document.getElementById("txtCantidad").value;
	let costo = parseInt(document.getElementById("txtCosto").value);

	let producto = new Producto(nombre, descripcion, cantidad, costo);
	
	let divDetails = document.getElementById("details");
	details.innerHTML += `
		<div>
			<p><strong>ID: ${producto.id} - </strong>${producto.nombre}</p>
			<p>Descripcion: ${producto.descripcion}</p>
			<p>Valor total: ${producto.valorMercancia}</p>
			<p>${producto.showTextInfo()}</p>
		</div>
	`; 
	console.log(producto.showInfo);
})