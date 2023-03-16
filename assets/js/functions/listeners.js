let listenersFunction =
{
    mainhome: document.getElementById("main-home"),
    maincontent: document.getElementById("main-content"),
    profil: document.getElementById("profil"),
    mainbox: document.getElementById("main-box"),
    displayMessages: function()
    {
        // console.log(this);
        listenersFunction.mainhome.style.display ="none";   
        listenersFunction.maincontent.style.display ="block";   
        // listenersFunction.maincontent.classList.remove("none");
        listenersFunction.mainbox.style.borderBottom = "none";
        let bodyWidth = document.body.clientWidth;
        // console.log(bodyWidth);
        if (bodyWidth <= 970)
        {
            listenersFunction.profil.style.display ="none";
            listenersFunction.mainbox.style.display = "block";
        }
        
        // console.log(displayCorrespondents());
        
    }, 
    displayProfil: function()
    {
        listenersFunction.profil.style.display ="block";
        listenersFunction.mainbox.style.display = "none";
        
    }
}

let setUpListeners = () =>
{
    let discussionItems = document.getElementsByClassName("discussion-item");

    for (let index = 0; index < discussionItems.length; index++) {
        const discussionItem = discussionItems[index];
        
        discussionItem.addEventListener("click", listenersFunction.displayMessages);    
    }

    let burgerIcon = document.getElementById("burger-icon");
    burgerIcon.addEventListener("click", listenersFunction.displayProfil)
}