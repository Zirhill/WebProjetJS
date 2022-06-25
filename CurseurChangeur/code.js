window.addEventListener("load", function(){
    var cursora = this.document.createElement("img");
    cursora.classList.add("cursor");
    this.document.body.appendChild(cursora);

    this.document.addEventListener("mousemove", function(event){
        cursora.style.left = (event.clientX+20)+"px";
        cursora.style.top = (event.clientY+20)+"px";
    });

    this.document.querySelectorAll("[data-icon]").forEach(function(item){
        item.addEventListener("mouseover",function(){
            cursora.style.display = "block";
            cursora.setAttribute("data-icon", this.getAttribute("data-icon"));
        });

        item.addEventListener("mouseout",function(){
            cursora.style.display = "none";
            cursora.setAttribute("data-icon", "");
        });
    });

});