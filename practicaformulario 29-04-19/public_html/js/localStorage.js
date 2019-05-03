/* LocalStorage para el almacenamiento de datos*/
var dbRegistros = localStorage.getItem("dbRegistros"); //Obtener datos de localStorage

var operacion = "A"; //"A"=agregar; "E"=editar
dbRegistros = JSON.parse(dbRegistros); // Convertir a objeto
if (dbRegistros === null) {// Si no existe, se crea un array vacio.
    dbRegistros = [];
}

function AgregarRegistro() {
    // Seleccionamos los datos de los inputs de formulario
    var datos_cliente = JSON.stringify({
        Nombre: $("#nombree").val(),
        Ruc: $("#ruce").val(),
        Direccion: $("#direccione").val(),
        CorreoE: $("#correoe").val(),
        TelefonoE: $("#telefonoe").val(),
        Cic: $("#cic").val(),
        NombreC: $("#nombrec").val(),
        ApellidoC: $("#apellidoc").val(),
        CorreoC: $("#correoc").val(),
        TelefonoC: $("#telefonoc").val(),
        NombrePv: $("#nombrepv").val(),
        RucPv: $("#rucpv").val(),
        CiudadPv: $("#ciudadpv").val(),
        DireccionPv: $("#direccionpv").val(),
        TelefonoPv: $("#telefonopv").val()
    });

    if (validarFormulario()) {
        dbRegistros.push(datos_cliente); // Guardar datos en el array definido globalmente
        localStorage.setItem("dbRegistros", JSON.stringify(dbRegistros));

        ListarRegistros();
        limpiarFormulario();
        location.reload();
    }

    return Mensaje(1);
}

function ListarRegistros() {
    $("#dbRegistros-list").html(
            "<thead>" +
            "<tr>" +
            "<th> ID </th>" +
            "<th> Empresa </th>" +
            "<th> Ruc Empresa </th>" +
            "<th> Direccion </th>" +
            "<th> Correo </th>" +
            "<th> Telefono </th>" +
            "<th style='background: #FF7659'> CI Cliente </th>" +
            "<th style='background: #FF7659'> Nombre Cliente </th>" +
            "<th style='background: #FF7659'> Apellido Cliente </th>" +
            "<th style='background: #FF7659'> Correo </th>" +
            "<th style='background: #FF7659'> Teléfono </th>" +
            "<th> Proveedor </th>" +
            "<th> RUC </th>" +
            "<th> Ciudad </th>" +
            "<th> Dirección </th>" +
            "<th> Teléfono </th>" +
            "<th> </th>" +
            "<th>  </th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            );

    for (var i in dbRegistros) {
        var d = JSON.parse(dbRegistros[i]);
        $("#dbRegistros-list").append(
                "<tr>" +
                "<td>" + i + "</td>" +
                "<td>" + d.Nombre + "</td>" +
                "<td>" + d.Ruc + "</td>" +
                "<td>" + d.Direccion + "</td>" +
                "<td>" + d.CorreoE + "</td>" +
                "<td>" + d.TelefonoE + "</td>" +
                "<td style='color: red;font-weight: bold'>" + d.Cic + "</td>" +
                "<td>" + d.NombreC + "</td>" +
                "<td>" + d.ApellidoC + "</td>" +
                "<td>" + d.CorreoC + "</td>" +
                "<td>" + d.TelefonoC + "</td>" +
                "<td style='color:red;font-weight: bold;'>" + d.NombrePv + "</td>" +
                "<td>" + d.RucPv + "</td>" +
                "<td>" + d.CiudadPv + "</td>" +
                "<td>" + d.DireccionPv + "</td>" +
                "<td>" + d.TelefonoPv + "</td>" +
                "<td> <button id='" + i + "' class='btnEditar' href='#'> <span class=''>Editar</span>  </button> </td>" +
                "<td> <button id='" + i + "' class='btnEliminar' href='#'> <span class=''>Borrar</span> </button> </td>" +
                "</tr>"
                );
    }

}

if (dbRegistros.length !== 0) {
    ListarRegistros();
} else {
    $("#dbRegistros-list").append("<h2>No tienes registros </h2>");
}

function Eliminar(e) {
    dbRegistros.splice(e, 1); // Args (posición en el array, numero de items a eliminar)
    localStorage.setItem("dbRegistros", JSON.stringify(dbRegistros));
    location.reload();
    return Mensaje(2);
}

function Editar() {
    console.log("Funcion editar" + d);
    dbRegistros[d] = JSON.stringify({
        Nombre: $("#nombree").val(),
        Ruc: $("#ruce").val(),
        Direccion: $("#direccione").val(),
        CorreoE: $("#correoe").val(),
        TelefonoE: $("#telefonoe").val(),
        Cic: $("#cic").val(),
        NombreC: $("#nombrec").val(),
        ApellidoC: $("#apellidoc").val(),
        CorreoC: $("#correoc").val(),
        TelefonoC: $("#telefonoc").val(),
        NombrePv: $("#nombrepv").val(),
        RucPv: $("#rucpv").val(),
        CiudadPv: $("#ciudadpv").val(),
        DireccionPv: $("#direccionpv").val(),
        TelefonoPv: $("#telefonopv").val()
    });

    if (validarFormulario()) {
        localStorage.setItem("dbRegistros", JSON.stringify(dbRegistros));
        operacion = "A"; //Regresamos el valor original
        ListarRegistros();
        limpiarFormulario();
        location.reload();
    }

    return true;
}

$(".btnEliminar").on("click", function () {
    alert("Registro eliminado");
    d = $(this).attr("id"); // "this" contiene el elemento clikeado en el contexto actual
    console.log(d);
    console.log(this);
    Eliminar(d); // Eliminamos el elemento llamando la funcion de eliminar
    ListarRegistros();
});

$(".btnEditar").on("click", function () {
    alert("¿ Quieres editar ?");
    // Cambiamos el modo ( operacion )
    $(".modo").html("<span class=''>Edit</span> Modo edición");
    operacion = "E";
    d = $(this).attr("id");
    console.log(d);
    console.log(this);
    // Llenanos el formulario con los datos actuales del registro a editar
    var RegistroItem = JSON.parse(dbRegistros[d]);
    $("#nombree").val(RegistroItem.Nombre);
    $("#ruce").val(RegistroItem.Ruc);
    $("#direccione").val(RegistroItem.Direccion);
    $("#correoe").val(RegistroItem.CorreoE);
    $("#telefonoe").val(RegistroItem.TelefonoE);
    $("#cic").val(RegistroItem.Cic);
    $("#nombrec").val(RegistroItem.NombreC);
    $("#apellidoc").val(RegistroItem.ApellidoC);
    $("#correoc").val(RegistroItem.CorreoC);
    $("#telefonoc").val(RegistroItem.TelefonoC);
    $("#nombrepv").val(RegistroItem.NombrePv);
    $("#rucpv").val(RegistroItem.RucPv);
    $("#ciudadpv").val(RegistroItem.CiudadPv);
    $("#direccionpv").val(RegistroItem.DireccionPv);
    $("#telefonopv").val(RegistroItem.TelefonoPv);
    $("#nombree").focus();
});

function limpiarFormulario() {
    $("#nombree").val("");
    $("#ruce").val("");
    $("#direccione").val("");
    $("#correoe").val("");
    $("#telefonoe").val("");
    $("#cic").val("");
    $("#nombrec").val("");
    $("#apellidoc").val("");
    $("#correoc").val("");
    $("#telefonoc").val("");
    $("#nombrepv").val("");
    $("#rucpv").val("");
    $("#ciudadpv").val("");
    $("#direccionpv").val("");
    $("#telefonopv").val("");
}
