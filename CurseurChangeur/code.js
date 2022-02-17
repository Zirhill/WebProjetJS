window.addEventListener("load", function(){
    var cursor = this.document.createElement("img");
    cursor.classList.add("cursor");
    this.document.body.appendChild(cursor);

    this.document.addEventListener("mousemove", function(event){
        cursor.style.left = (event.clientX+20)+"px";
        cursor.style.top = (event.clientY+20)+"px";
    });

    this.document.querySelectorAll("[data-icon]").forEach(function(item){
        item.addEventListener("mouseover",function(){
            cursor.style.display = "block";
            cursor.setAttribute("data-icon", this.getAttribute("data-icon"));
        });

        item.addEventListener("mouseout",function(){
            cursor.style.display = "none";
            cursor.setAttribute("data-icon", "");
        });
    });

});