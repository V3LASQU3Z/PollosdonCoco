// funcion para entrar al sistema //
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function login() {
    var usr = document.getElementById("usuario").value;
    var contra = document.getElementById("myInput").value;
    i = 1;
    u = usr;
    c = contra;
    if (usr == u && c == contra) {
        location.replace('index4.html')
        i = 1;
    } else {
        document.write('contraseña y usuario incorrecto')
        i = i + 1;
        if (i == 4) {
            document.write('bloqueado')
        }
    }
}