// this file going to contain the scroll methods
export function onscroll(button){
    window.onscroll = function(){
        if(window.scrollY >=280){
            button.style.display = "inline";
        }else{
            button.style.display= "none";
        }
        };
}
