const monboutton = document.getElementById("mon_boutton");
const menucache = document.getElementById("menu-caché");
const sortie = document.getElementById("menu-click");

monboutton.addEventListener("click",function(){
    menucache.style.display = "flex";
});
sortie.addEventListener("click",function(){
    menucache.style.display = "none";
});
