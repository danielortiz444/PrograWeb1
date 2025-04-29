function sumar(){
	var n1=document.getElementById("numero1").value;
	var n2=document.getElementById("numero2").value;
	//parseInt parseFloat

	var result=parseInt(n1)+parseInt(n2);
	document.getElementById("r").innerHTML=result;
}

function restar(){
	var n1=document.getElementById("numero1").value;
	var n2=document.getElementById("numero2").value;
	//parseInt parseFloat

	var result=parseInt(n1)-parseInt(n2);
	document.getElementById("r").innerHTML=result;
}

function mult(){
	var n1=document.getElementById("numero1").value;
	var n2=document.getElementById("numero2").value;
	//parseInt parseFloat

	var result=parseInt(n1)*parseInt(n2);
	document.getElementById("r").innerHTML=result;
}

function division(){
	var n1=document.getElementById("numero1").value;
	var n2=document.getElementById("numero2").value;
	//parseInt parseFloat

	var result=parseFloat(n1)/parseFloat(n2);
	document.getElementById("r").innerHTML=result;
}