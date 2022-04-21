// this chunk going to contain the methods of the nav bar burger menu

export function makingNav(container){
    const array = [
       {element : "p" , inner : "Home"},
       {element : "p" , inner : "Offres"},
       {element : "p" , inner : "Demendes"},
       {element : "button" , inner : "Log-in"}
    ] 
    const nav = document.createElement("nav");
    array.map((item) => {
        console.log(typeof(item.element));
        const p = document.createElement(item.element)
        p.innerText = item.inner;
        console.log(typeof(p));
        nav.append(p);
    })
   container.append(nav);
   container.style.display = "none";
}

