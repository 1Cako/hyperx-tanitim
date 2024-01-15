function gonder(){
  var email=document.getElementById("exampleInputEmail1").value;
  var mesaj=document.getElementById("form-text").value;
  var checkedValue=document.querySelector('.form-check-input:checked');
  if(email=="" || mesaj=="" || checkedValue==null){
      document.getElementById("emailHelp").className="alert alert-danger";
      document.getElementById("emailHelp").innerHTML="E-mail Ve Mesaj Alanları ve Robot değilim Boş bırakılamaz";
    }
    else{
      $('#exampleModal').modal('hide');

          window.location.href = window.location.origin + "/thanks.html";
    if(cevap==true){
      window.location.href =
      window.location.origin + "/thanks.html";  
            
            
    }

  } 
      
}
