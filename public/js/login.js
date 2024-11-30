function submitLoginForm() {
    var form = $(this);
    const user = $("#username").val();
    const pass = $("#password").val();
    $.ajax({
        type: "POST",
        url: '/login',
        data: {username:user,password:pass}, // serializes the form's elements.
 
        success: function(data)
        {
           window.location.href = 'index';
        }
    });
  }

