$(function() {
    //$( "p" ).text( "The DOM is now loaded and can be manipulated." );
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const password = urlParams.get('password');

    if(username != null){
        $( "#nameText1" ).text( username+'\'s' );
        $( "#nameText2" ).text( username+'\'s' );
    }

    console.log(localStorage.getItem("username"));

        // Check browser support
    if (typeof(Storage) !== "undefined" && localStorage.getItem("username") != null) {
        // Store
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }
    else {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        $( "#nameText1" ).text( username+'\'s' );
        $( "#nameText2" ).text( username+'\'s' );
    }
    });
