let listenersFunction =
{
    mainhome: document.getElementById("main-home"),
    maincontent: document.getElementById("main-content"),
    aside: document.getElementById("aside"),
    asideHome: document.getElementById("aside-home"),
    asideSetting: document.getElementById("aside-setting"),
    asideSettingBody: document.getElementById("aside-setting-body"),
    asideProfil: document.getElementById("aside-profil"),
    asideProfilBody: document.getElementById("aside-profil-body"),
    asideStickers: document.getElementById("aside-stickers"),
    asideContact: document.getElementById("aside-discussion"),
    asideUserStickers: document.getElementById("user-stickers"),
    asideDiscussion: document.getElementById("aside-discussion"),
    mainbox: document.getElementById("main-box"),
    moreOption: document.getElementById("more-options"),
    
    displayMessages: function()
    {
        listenersFunction.mainhome.style.display ="none";   
        listenersFunction.maincontent.style.display ="block";   
        listenersFunction.mainbox.style.borderBottom = "none";
        let bodyWidth = document.body.clientWidth;

        // console.log(bodyWidth);
        if (bodyWidth <= 970)
        {
            listenersFunction.aside.style.display ="none";
            listenersFunction.mainbox.style.display = "block";
        }
    },

    displayAside: function()
    {
        listenersFunction.aside.style.display ="block";
        listenersFunction.mainbox.style.display = "none";
    },

    displayAsideProfil: async function()
    {
        listenersFunction.asideHome.style.display = "none";
        listenersFunction.asideProfil.style.display = "block";
        listenersFunction.asideProfilBody.innerHTML = "";

        let asideProfilImageContainer = document.createElement("div");
        asideProfilImageContainer.classList.add("profil-image-container", "relative");
        
        let asideProfilImage = document.createElement("div");
        asideProfilImage.classList.add("profil-image", "absolute");
        
        let ownerProfiImage = document.createElement("div");
        ownerProfiImage.classList.add("owner-image",  "relative");
        
        let image = document.createElement("img");
        image.src = "/assets/images/logo/franck.jpg";
        image.id = "owner-image";
        image.addEventListener("mouseenter", listenersFunction.displayBoxShadowImage);
        image.addEventListener("mouseout", listenersFunction.hideBoxShadowImage);
        
        let boxShadowImage = document.createElement("div");
        boxShadowImage.classList.add("box-shadow-image", "flex", "column", "gap-10", "jcc", "aic", "text-center", "absolute");
        boxShadowImage.id="box-shadow-image";

        let profilIcon = document.createElement("i");
        profilIcon.classList.add("fas", "fa-image");

        let profilName = document.createElement("div");
        profilName.classList.add("profil-name");
        profilName.innerHTML = "changer la photo de profil";
        
        let profilIconImage = document.createElement("i");
        profilIconImage.classList.add("fas", "fa-pen", "absolute");

        boxShadowImage.appendChild(profilIcon);
        boxShadowImage.appendChild(profilName);

        ownerProfiImage.appendChild(image);
        ownerProfiImage.appendChild(boxShadowImage);

        asideProfilImage.appendChild(ownerProfiImage);
        asideProfilImageContainer.appendChild(asideProfilImage);
        asideProfilImage.appendChild(profilIconImage);
        listenersFunction.asideProfilBody.appendChild(asideProfilImageContainer);

        let profilDetailsContainer = document.createElement("div");
        profilDetailsContainer.classList.add("profil-details-container");
        
        let profilOwnerInfos = document.createElement("div");
        profilOwnerInfos.classList.add("owner-infos", "flex", "gap-10");

        let ownerInfosIcon = document.createElement("i");
        ownerInfosIcon.classList.add("fas", "fa-portrait", "relative");

        let ownerDetails = document.createElement("div");
        ownerDetails.classList.add("owner-details");
        
        let ownerName = document.createElement("div");
        ownerName.classList.add("owner-name");
        ownerName.innerHTML = "Tchoudjang franck";
        
        let ownerVisibility = document.createElement("div");
        ownerVisibility.classList.add("owner-visibility");
        ownerVisibility.innerHTML = `Ce nom séra visible par vos client(e)s WhatsApp 
                                    et pourra etre modifié à partir de l'application 
                                    sur voter appareil mobile`;


        profilOwnerInfos.appendChild(ownerInfosIcon);
        profilOwnerInfos.appendChild(ownerDetails);

        ownerDetails.appendChild(ownerName);
        ownerDetails.appendChild(ownerVisibility);

        profilDetailsContainer.appendChild(profilOwnerInfos);

        let profilOptionsBox = await displayProfilOptions();
        // console.log(profilOptionsBox);
        listenersFunction.asideProfilBody.appendChild(profilDetailsContainer);
        listenersFunction.asideProfilBody.appendChild(profilOptionsBox);

        // console.log(asideProfilBody);

        listenersFunction.asideProfil.appendChild(listenersFunction.asideProfilBody);
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
        listenersFunction.asideHome.style.display = "none";
        listenersFunction.asideSetting.style.display = "block";

        let settingDescriptionBody = document.createElement("div");
        settingDescriptionBody.classList.add("setting-description-body");
        
        let userSetting = document.createElement("div");
        userSetting.classList.add("user-setting");
        
        let userSettingDetails = document.createElement("div");
        userSettingDetails.classList.add("user-setting-details", "flex", "gap-20", "aic");

        let profilImage = document.createElement("div");
        profilImage.classList.add("profil-image");
        
        let image = document.createElement("img");
        image.src = "/assets/images/logo/franck.jpg";
        image.width = "40";
        image.height = "40";
        profilImage.appendChild(image); 

        userSettingDetails.appendChild(profilImage);

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

        userSettingDetails.appendChild(userPseudo);

        userSetting.appendChild(userSettingDetails);
        
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

        userSetting.appendChild(userOptions);

        settingDescriptionBody.appendChild(userSetting);
        listenersFunction.asideSettingBody.innerHTML = "";
        listenersFunction.asideSettingBody.appendChild(settingDescriptionBody);
        // console.log(settingDescriptionBody);
    },
    displayAsideStickers: async function()
    {   
        listenersFunction.asideHome.style.display = "none";
        listenersFunction.asideStickers.style.display = "block";
        listenersFunction.asideUserStickers.innerHTML = "";

        let stickersOptions = await displayStickersOptions();
        listenersFunction.asideUserStickers.appendChild(stickersOptions);
    },
    displayAsidecontact: async function()
    {   
        listenersFunction.asideHome.style.display = "none";
        listenersFunction.asideContact.style.display = "block";
        // listenersFunction.asideContact.innerHTML = "";

        let contactOptions = await displayContacts();
        listenersFunction.asideContact.appendChild(contactOptions);
    },
    displayAsideBlocs: function ()
    {
        listenersFunction.asideHome ? listenersFunction.asideHome.style.display = "block" : null;            
        listenersFunction.asideSetting ? listenersFunction.asideSetting.style.display = "none" : null;
        listenersFunction.asideProfil ? listenersFunction.asideProfil.style.display = "none" : null;
        listenersFunction.asideStickers ? listenersFunction.asideStickers.style.display = "none" : null;
        listenersFunction.asideDiscussion ? listenersFunction.asideDiscussion.style.display = "none" : null;
    },
    displayBoxShadowImage: function()
    {
        let boxShadowImage = document.getElementById("box-shadow-image");
        boxShadowImage.style.display = "flex";
    },
    hideBoxShadowImage: function()
    {
        let boxShadowImage = document.getElementById("box-shadow-image");
        boxShadowImage.style.display = "none";
    }
}

let setUpListeners = () =>
{
    let discussionItems = document.getElementsByClassName("discussion-item");

    for (let index = 0; index < discussionItems.length; index++) 
    {
        const discussionItem = discussionItems[index];
        
        discussionItem.addEventListener("click", listenersFunction.displayMessages);    
    }

    let burgerIcon = document.getElementById("burger-icon");
    burgerIcon.addEventListener("click", listenersFunction.displayAside);
    let profilImage = document.getElementById("profil-image");
    profilImage.addEventListener("click", listenersFunction.displayAsideProfil);
    
    let asideSettingDescriptionIcon = document.getElementById("aside-setting-icon");
    asideSettingDescriptionIcon.addEventListener("click", listenersFunction.displayAsideBlocs);
    
    let asideProfilIcon = document.getElementById("aside-profil-icon");
    asideProfilIcon.addEventListener("click", listenersFunction.displayAsideBlocs);
    
    let asideStickersIcon = document.getElementById("aside-stickers-icon");
    asideStickersIcon.addEventListener("click", listenersFunction.displayAsideBlocs);
    
    let showStickers =document.getElementById("show-stickers");
    showStickers.addEventListener("click", listenersFunction.displayAsideStickers);
    
    let showContact = document.getElementById("show-contact");
    showContact.addEventListener("click", listenersFunction.displayAsidecontact);
    
    let asideContactIcon = document.getElementById("aside-discussion-icon");
    asideContactIcon.addEventListener("click", listenersFunction.displayAsideBlocs);

    let ellipsisIcon = document.getElementById("ellipsis-icon");
    ellipsisIcon.addEventListener("click", listenersFunction.displayMoreOptionsBloc);

    listenersFunction.moreOption.addEventListener("mouseleave", listenersFunction.hideMoreOptionsBloc);

    let settingIcon = document.getElementById("setting");
    settingIcon.addEventListener("click", listenersFunction.displaySettingBloc);
 }