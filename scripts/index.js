window.onload = function(){
    document.getElementById("form").onsubmit = (e)=>{
        e.preventDefault();
        var form = document.getElementById("form")

        emailjs.sendForm('service_1g3i9ql','template_6izb0rk', form,'efS6z_ld_57tQ-tzl')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
           console.log('FAILED...', err);
        });
        e.target.reset()

    }
}
