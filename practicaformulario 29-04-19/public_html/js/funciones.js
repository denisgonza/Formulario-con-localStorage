/*Funciones para el formulario */

function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode;
    return ((key >= 48 && key <= 57) || (key == 8));
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

function validarFormulario() {
    var valor = true;

    if ($("#telefonopv").val().trim() === "") {
        valor = false;
        $("#telefonopv").focus();
    }

    if ($("#direccionpv").val().trim() === "") {
        valor = false;
        $("#direccionpv").focus();
    }

    if ($("#ciudadpv").val().trim() === "") {
        valor = false;
        $("#ciudadpv").focus();
    }

    if ($("#rucpv").val().trim() === "") {
        valor = false;
        $("#rucpv").focus();
    }

    if ($("#nombrepv").val().trim() === "") {
        valor = false;
        $("#nombrepv").focus();
    }

    if ($("#telefonoc").val().trim() === "") {
        valor = false;
        $("#telefonoc").focus();
    }

    if ($("#correoc").val().trim() === "") {
        valor = false;
        $("#correoc").focus();
    }

    if ($("#apellidoc").val().trim() === "") {
        valor = false;
        $("#apellidoc").focus();
    }

    if ($("#nombrec").val().trim() === "") {
        valor = false;
        $("#nombrec").focus();
    }

    if ($("#cic").val().trim() === "") {
        valor = false;
        $("#cic").focus();
    }

    if ($("#telefonoe").val().trim() === "") {
        valor = false;
        $("#telefonoe").focus();
    }

    if ($("#correoe").val().trim() === "") {
        valor = false;
        $("#correoe").focus();
    }

    if ($("#direccione").val().trim() === "") {
        valor = false;
        $("#direccione").focus();
    }

    if ($("#ruce").val().trim() === "") {
        valor = false;
        $("#ruce").focus();
    }

    if ($("#nombree").val().trim() === "") {
        valor = false;
        $("#nombree").focus();
    }

    return valor;
}

/**/
function dar_formato_numero(numero, separador_decimal, separador_miles) {
    var fnumero = "";
    var snumero = numero.toString().replace(/\./g, "");
    snumero = snumero.replace(/[a-z]|_|%/ig, "");
    var pdecimal = snumero.indexOf(",");
    var psigno = snumero.indexOf("-");
    var enumero = snumero;
    var edecimal = "";
    var esigno = "";
    if (psigno !== -1) {
        esigno = "-";
        enumero = snumero.substr(1, snumero.length);
    }
    if (pdecimal !== -1) {
        if (psigno === -1) {
            enumero = snumero.substr(0, pdecimal);
        } else {
            enumero = snumero.substr(1, pdecimal - 1);
        }
        edecimal = snumero.substr(pdecimal, snumero.length);
        console.log("--> " + enumero);
    }
    var longitud = enumero.length;
    for (pos = longitud - 1; pos >= 0; pos--) {
        var cnumero = enumero.charAt(pos);
        fnumero = cnumero + fnumero;
        if ((longitud - pos) !== longitud) {
            if ((longitud - pos) % 3 === 0) {
                fnumero = separador_miles + fnumero;
            }
        }
    }
    fnumero = esigno + fnumero + edecimal;
    return fnumero;
}

function formatearNumero(id) {
    var tecla = event.which;
    if (tecla !== 37 && tecla !== 38 && tecla !== 39 && tecla !== 40 && tecla !== 9) {
        var monto = $(id).val();
        $(id).val(dar_formato_numero(monto, ",", "."));
    }
}

function validarCorreo(v) {
    
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(v)){
		alert('Correo no valido');
	}
	else {
            
	}
}

function capitalize(inputField) {
  inputField.value = inputField.value.replace(/\b[a-z](?=[a-z]{1})/gi, function(letter) {
    return letter.toUpperCase();
  });
}