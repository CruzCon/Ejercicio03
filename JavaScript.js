function alert() {
  alert("mensaje en una ventanita");

}

//-------------------------------------------------------------
function confirmarSalida() {
    navigator.notification.confirm(
        "¿Quieres salir?",
        onConfirm,
        "Salir",
        "Sí,No"
        );
}
function onConfirm(buttonIndex) {
    if (buttonIndex==1){
        ! ! navigator.app.exitApp();
    }
}
//--------------------------------------------------------------
function mostrarNotificacion(){
    navigator.notification.alert(
        ! ! “Texto del mensaje a mostrar”,
        ! ! trasNotificacion,
        ! ! “Título ventana”,
        ! ! “Ok”
        );
}
function trasNotificacion(){
}

//-----------------------------------------------------------------
function beep(){
    navigator.notification.beep(1);
}