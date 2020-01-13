var click = "click";

$(document).ready(function (){

  
    $('#confirmare').on(click, confirmareFunctie);
   

});

function confirmareFunctie(){
   console.log("confirmareFunctie");
   
   
   swal({
  title: "Account created!",
  text: "",
  icon: "success",
})
.then((value) => {
  location.replace("../../after log in/afterLogin.html")
});
   
   

}