$(function() {
    //$( "p" ).text( "The DOM is now loaded and can be manipulated." );
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const password = urlParams.get('password');
    
    let elem = document.getElementById('nameText1');
    elem.innerHTML = username; 

    $( "#nameText1" ).text( username+'\'s' );
    $( "#nameText2" ).text( username );
});