/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day2 ExerciceXPNinja Exercice 3: Get The User’s Geolocation Coordinates
 */


/*
Hint/tip

Use HTML5 and Javascript for this exercise.
Use everything we learned in class, and use all the resources linked in the course.
This exercise is a bit tricky, search Google how to work with HTML5 and the navigator’s geolocation.
*/

let positionData = document.getElementById("positionData");
function getPosition() {
    console.log(navigator);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        positionData.innerHTML = "Geolocation non prise en charge par ce navigateur";
    }
}

function showPosition(position) {
    positionData.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            positionData.innerHTML = "localisation non autorisée par l'utilisateur."
            break;
        case error.POSITION_UNAVAILABLE:
            positionData.innerHTML = "L'information sur la localisation et indisponible."
            break;
        case error.TIMEOUT:
            positionData.innerHTML = "le temps de réponse est dépasé."
            break;
        case error.UNKNOWN_ERROR:
            positionData.innerHTML = "Une erreur inconu a été rencontrée."
            break;
    }
}