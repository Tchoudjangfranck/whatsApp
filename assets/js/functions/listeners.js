import { displayCorrespondents } from "./functions.js";

let profilTop = document.getElementById("profil-top").innerHTML;
let profilBody = document.getElementById("discussion").innerHTML;
let profilContentTop = profilTop;
// displayCorrespondents();
let ss = async () =>
{
    let dd =displayCorrespondents();
    console.log(dd);
}

ss()

let listenersFunction =
{
    mainhome: document.getElementById("main-home"),
    maincontent: document.getElementById("main-content"),
    profil: document.getElementById("profil"),
    profilTop: document.getElementById("profil-top"),
    profilBody: document.getElementById("profil-body"),
    mainbox: document.getElementById("main-box"),
    moreOption: document.getElementById("more-options"),
    
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
        
    },

    displayProfilDescription: function()
    {
        listenersFunction.profilTop.    innerHTML = "";
        listenersFunction.profilBody.innerHTML = "";
    },

    displayMoreOptionsBloc: function()
    {
        listenersFunction.moreOption.style.display = "block";
    },

    hideMoreOptionsBloc: function()
    {
        listenersFunction.moreOption.style.display = "none";
    },

    displaySettingBloc: async function()
    {
        listenersFunction.profilTop.innerHTML = "";
        
        let profilDescriptionTop = document.createElement("div");
        profilDescriptionTop.classList.add("profil-description-top", "flex", "aie", "gap-20");
        
        let arrowLeft = document.createElement("i");
        arrowLeft.addEventListener("click", () =>
        {    
            // listenersFunction.profil.innerHTML = profilContent;            
            // console.log(profilContent);
        })
        arrowLeft.classList.add("fas", "fa-arrow-left");
        profilDescriptionTop.appendChild(arrowLeft);

        let description = document.createElement("div");
        description.innerHTML = "Paramètres";
        description.classList.add("description");
        profilDescriptionTop.appendChild(description);
        listenersFunction.profilTop.appendChild(profilDescriptionTop);
        // console.log(profilDescriptionTop);

        listenersFunction.profilBody.innerHTML = "";

        let profilDescriptionBody = document.createElement("div");
        profilDescriptionBody.classList.add("profil-description-body");
        
        let userProfil = document.createElement("div");
        userProfil.classList.add("user-profil");
        
        let userProfilDetails = document.createElement("div");
        userProfilDetails.classList.add("user-profil-details", "flex", "gap-20", "aic");

        let profilImage = document.createElement("div");
        profilImage.classList.add("profil-image");
        
        let image = document.createElement("img");
        image.src = "/assets/images/logo/franck.jpg";
        image.width = "40";
        profilImage.appendChild(image); 

        userProfilDetails.appendChild(profilImage);

        let userPseudo = document.createElement("div");
        userPseudo.classList.add("user-pseudo");

        let userName = document.createElement("div");
        userName.classList.add("user-name");
        userName.innerHTML = "Michel Franck";
        userPseudo.appendChild(userName);
        
        let userSlogan = document.createElement("div");
        userSlogan.classList.add("user-slogan");
        userSlogan.innerHTML = "C'est le travail qui paie !";
        userPseudo.appendChild(userSlogan);

        userProfilDetails.appendChild(userPseudo);

        userProfil.appendChild(userProfilDetails);
        
        let userOptions = document.createElement("ul");
        userOptions.classList.add("user-options");

        let settingOptions = await getSettingOptions();
        settingOptions.forEach(settingOption => 
        {
            // console.log(settingOption);     

            let userOption = document.createElement("li");
            userOption.classList.add("user-option", "flex", "aic", "gap-20");
            
            let userOptionIcon = document.createElement("i");
            userOptionIcon.className = settingOption.userOptionIcon;
            userOption.appendChild(userOptionIcon);
            
            let userOptionName = document.createElement("div");
            userOptionName.classList.add("option-name");
            userOptionName.innerHTML = settingOption.userOptionName;
            userOption.appendChild(userOptionName);
            userOptions.appendChild(userOption);
        });
        // console.log(settingOptions);        

        userProfil.appendChild(userOptions);

        profilDescriptionBody.appendChild(userProfil);
        listenersFunction.profilBody.appendChild(profilDescriptionBody);
        // console.log(profilDescriptionBody);
    },
}

let setUpListeners = () =>
{
    let discussionItems = document.getElementsByClassName("discussion-item");

    for (let index = 0; index < discussionItems.length; index++) {
        const discussionItem = discussionItems[index];
        
        discussionItem.addEventListener("click", listenersFunction.displayMessages);    
    }

    let burgerIcon = document.getElementById("burger-icon");
    burgerIcon.addEventListener("click", listenersFunction.displayProfil);

    let profilImage = document.getElementById("profil-image");
    profilImage.addEventListener("click", listenersFunction.displayProfilDescription);

    let ellipsisIcon = document.getElementById("ellipsis-icon");
    ellipsisIcon.addEventListener("click", listenersFunction.displayMoreOptionsBloc);

    listenersFunction.moreOption.addEventListener("mouseleave", listenersFunction.hideMoreOptionsBloc);

    let settingIcon = document.getElementById("setting");
    settingIcon.addEventListener("click", listenersFunction.displaySettingBloc);
}