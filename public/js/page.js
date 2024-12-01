$(function() {

        // Check browser support
    if (typeof(Storage) !== "undefined" && localStorage.getItem("username") !== 'undefined') {
        // Store
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        $( "#nameText1" ).text( username+'\'s' );
        $( "#nameText2" ).text( username+'\'s' );

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    });