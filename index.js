messagepublicite="ça te dis du l'argent comme si il  en pleuvait?";

function alertepub() {
    if (confirm(messagepublicite)) {
    txt = "Ok";
    window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } else {
    txt = "Cancel";
  }
}

setTimeout(alertepub, 10000);
