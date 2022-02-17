window.addEventListener("load", function(){

    let nodes = this.document.querySelectorAll('[data-popup]');

    nodes.forEach(function(item){
        
        item.addEventListener("click",function()
            {
            let target = document.getElementById(this.getAttribute("data-popup"));
            //console.log(target);
            let container = document.createElement("div");
            container.classList.add("popup");
            console.log(container);

            let box = document.createElement("div");
            box.appendChild( target.cloneNode(true));

            let closeBtn = box.querySelector("[data-popup-close]");
            closeBtn.popup = container;
            closeBtn.addEventListener("click", function(){
                console.clear()
                this.popup.remove();
                });

            container.appendChild(box);
            document.body.appendChild(container);

            })   
    });
});