/* Augusto Alejandro Roman
 E/S ej 4 DIV E
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro variable
	var nombreIngresado;

	//guardo el dato
	nombreIngresado=prompt ("ingrese su nombre");

	//asigno nombre a la caja de texto
	//txtIdNombre.value = nombreIngresado; otra forma de hacerlo
    document.getElementById ("txtIdNombre").value = nombreIngresado;

}