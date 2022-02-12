var today = new Date();
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
var dia = dias[today.getDay()]
var mes = meses[today.getMonth()]
var date = dia +', ' + today.getDate()+' de '+ mes + ' de ' + today.getFullYear();
document.getElementById("currentDate").value = date;