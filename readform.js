function leer(){

	//Referencia por pseudoclase
	var nom=document.forms["formulario"].elements[0].value;

	 document.getElementById("resultado").innerHTML=nom;
	 //Referencia por ID
	var clave=document.getElementById("pass").value;
	document.getElementById("resultado").innerHTML="Tu nombre es: "+nom+"\<br>Tu password es: "+clave;
	//Referencia por etiqueta 
	var selector=document.getElementsByTagName("select")[0].value;
	document.getElementById("resultado").innerHTML="Tu nombre es: "+nom+"\<br>Tu password es: "+clave+"\<br>Tu carrera es: "+selector;
	//Referencia por name 
	var gen=document.getElementsByName("genero");
	var g,i;
	for(i=0;i<gen.length;i++)
		{
		if(gen[i].checked)
			g=gen[i].value;
	}
	
	//Referencia por id
	var ok= document.getElementById("terminos").checked;

	document.getElementById("resultado").innerHTML="Tu nombre es: "+nom+"\<br>Tu password es: "+clave+"\<br>Tu carrera es: "+selector+"\<br>Tu género es: "+g+"\<br>Aceptacion de los acuerdos: "+ok;

}