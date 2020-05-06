var x = 0;
var tulisan = "SnoozeDev Site";
var container = document.getElementById('typing');

function typing_effect(){

    if(x < tulisan.length){
        container.innerHTML += tulisan.charAt(x);
        x++;
        setTimeout(typing_effect, 80);
    }

}

typing_effect();
