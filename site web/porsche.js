#menu a:hover /* Lorsque la souris passe sur un des liens */    
{
        color: #000; /* On passe le texte en noir... */
        background: #fff; /* ... et au contraire, le fond en blanc */
}
sfHover = function() {
        var sfEls = document.getElementById("menu").getElementsByTagName("LI");
        for (var i=0; i<sfEls.length; i++) {
                sfEls[i].onmouseover=function() {
                        this.className+=" sfhover";
                }
                sfEls[i].onmouseout=function() {
                        this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
                }
        }
}
if (window.attachEvent) window.attachEvent("onload", sfHover);
