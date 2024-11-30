$(function() {
    $( "p" ).text( "The DOM is now loaded and can be manipulated." );
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('username');
    console.log(myParam);
    });