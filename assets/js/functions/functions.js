
let getCorrespondents = async () =>
{
    let request = "/assets/data/correspondent.json";
    let data = await fetch(request);
    if(!data.ok)
    {
        return;
    }
     let dataCorrespondents = await data.json();
    //    console.log(dataCorrespondents);
    return dataCorrespondents;
}
let displayCorrespondents = async () =>
{
    let discussion = document.getElementById("discussion");
    discussion.innerHTML=""
    let correspondents = await getCorrespondents();
    // console.log(correspondents);
    correspondents.forEach(correspondent => 
    {
        // console.log(correspondent);
        // discussion.innerHTML += ` <div class="discussion-item flex aic gap-10">
        //                             <div class="correspondent-image">
        //                                 <img src=${correspondent.image} width="35" alt="">
        //                             </div>
        //                             <div class="corespondent-content flex-1">
        //                                 <div class="corespondent-pseudo">${correspondent.name}</div>
        //                                 <div class="correspondent-starting-message flex-1">
        //                                     Lorem ipsum...
        //                                 </div>
        //                             </div>
        //                             <div class="discussion-current-time">16:38</div>
        //                         </div>`;

        let discussionItem = document.createElement("div");
        discussionItem.classList.add("discussion-item", "flex", "aic", "gap-10");
        discussionItem.style.userSelect = "none";           
        let correspondentImage  = document.createElement("div");
        correspondentImage.classList.add("correspondent-image");
        let image  = document.createElement("img");
        image.src = `${correspondent.image}`;
        image.width = "35";
        image.height = "35";
        correspondentImage.appendChild(image);
        discussionItem.appendChild(correspondentImage);
        
        let correspondentContent  = document.createElement("div");
        correspondentContent.classList.add("correspondent-content", "flex-1");
        let correspondentPseudo  = document.createElement("div");
        correspondentPseudo.classList.add("correspondent-pseudo");
        correspondentPseudo.innerText = `${correspondent.name}`;
        correspondentContent.appendChild(correspondentPseudo);

        let correspondentStartingMessage  = document.createElement("div");
        correspondentStartingMessage.classList.add("correspondent-starting-message", "flex-1");
        correspondentStartingMessage.innerText = "Lorem ipsum...";
        correspondentContent.appendChild(correspondentStartingMessage);
        discussionItem.appendChild(correspondentContent);

        let discussioCurrentTime  = document.createElement("div");
        discussioCurrentTime.classList.add("discussion-current-time");
        discussioCurrentTime.innerText = "16:35";
        discussionItem.appendChild(discussioCurrentTime);
        discussion.appendChild(discussionItem)
        return discussionItem;
    });
}

displayCorrespondents();

let displayContacts = async () =>
{
    let contactsContainer = document.getElementById("contacts");
    contactsContainer.innerHTML=""
    let contacts = await getCorrespondents();
    // console.log(contacts);
    contacts.forEach(contact => 
    {
        let contactItem = document.createElement("div");
        contactItem.classList.add("contact-item", "flex", "aic", "gap-10");
        contactItem.style.userSelect = "none";           
        let contactImage  = document.createElement("div");
        contactImage.classList.add("contact-image");
        let image  = document.createElement("img");
        image.src = `${contact.image}`;
        image.width = "35";
        image.height = "35";
        contactImage.appendChild(image);
        contactItem.appendChild(contactImage);
        
        let contactContent  = document.createElement("div");
        contactContent.classList.add("contact-content", "flex-1");
        let contactPseudo  = document.createElement("div");
        contactPseudo.classList.add("contact-pseudo");
        contactPseudo.innerText = `${contact.name}`;
        contactContent.appendChild(contactPseudo);

        let contactStartingMessage  = document.createElement("div");
        contactStartingMessage.classList.add("contact-starting-message", "flex-1");
        contactStartingMessage.innerText = `${contact.slogan}`;
        
        contactContent.appendChild(contactStartingMessage);
        contactItem.appendChild(contactContent);

        contactsContainer.appendChild(contactItem);
        
    });
    // console.log(contactsContainer);
        return contactsContainer;


}

// displayContacts();

let getSettingOptions = async () =>
{
    let request = "/assets/data/settingOptions.json";
    let data = await fetch(request);
    if(!data.ok)
    {
        return;
    }
    let dataSettingOptions = await data.json();
    //    console.log(dataSettingOptions);
    return dataSettingOptions;
}

let getProfilOptions = async () =>
{
    let request = "/assets/data/profilOptions.json";
    let data = await fetch(request);
    if(!data.ok)
    {
        return;
    }
    let dataProfilOptions = await data.json();
    //    console.log(dataProfilOptions);
    return dataProfilOptions;
} 

let displayProfilOptions = async () =>
{
    let profilOptionsBox = document.createElement("ul");
    profilOptionsBox.classList.add("profil-options");
    
    let profilOptions = await getProfilOptions();
    profilOptions.forEach(profilOption => 
    {
        let profilOptionItem = document.createElement("li");
        profilOptionItem.classList.add("profil-option", "flex", "gap-10", "aic");
        
        let profilOptionIcon = document.createElement("i");
        profilOptionIcon.className = `profil-option-icon ${profilOption.profilOptionIcon}`;
        
        let profilOptionTitle = document.createElement("div");
        profilOptionTitle.classList.add("profil-option-title", "flex-1");
        profilOptionTitle.innerHTML = `${profilOption.profilOptionTitle}`;
        
        
        let profilOptionModified = document.createElement("i");
        profilOptionIcon.className = `profil-option-modified fas fa-pen`;
        
        profilOptionItem.appendChild(profilOptionIcon);
        profilOptionItem.appendChild(profilOptionTitle);
        profilOptionItem.appendChild(profilOptionModified);

        profilOptionsBox.appendChild(profilOptionItem);
    });

    return profilOptionsBox;
}

let getStickersOptions = async () =>
{
    let request = "/assets/data/stickersOptions.json";
    let data = await fetch(request);
    if(!data.ok)
    {
        return;
    }
    let dataStickersOptions = await data.json();
    //    console.log(dataStickersOptions);
    return dataStickersOptions;
}

let displayStickersOptions = async () =>
{
    let stickersOptionContainer = document.createElement("ul");
    stickersOptionContainer.classList.add("stickers-options");
    
    
    let stickersOptions = await getStickersOptions();
    stickersOptions.forEach(stickersOption =>
    {
        // console.log(stickersOption);
        let stickersOptionItem = document.createElement("li");
        stickersOptionItem.classList.add("stickers-option", "flex", "aic", "gap-20");

        let stickersOptionIconContainer = document.createElement("div");
        stickersOptionIconContainer.classList.add("stickers-option-icon");
        stickersOptionIconContainer.style.backgroundColor = `${stickersOption.stickersOptionIconBackgrongColor}`

        let stickersOptionIcon = document.createElement("i");
        stickersOptionIcon.classList.add("bi", "bi-tag");
        
        let optionDescription = document.createElement("div");
        optionDescription.classList.add("option-description");

        let optionName = document.createElement("div");
        optionName.classList.add("option-name");
        optionName.innerHTML = `${stickersOption.stickersOptionName}`;
        
        let optionDetails = document.createElement("div");
        optionDetails.classList.add("option-details");
        optionDetails.innerHTML = `${stickersOption.stickersOptionDetails}`;

        stickersOptionIconContainer.appendChild(stickersOptionIcon);

        optionDescription.appendChild(optionName);
        optionDescription.appendChild(optionDetails);

        stickersOptionItem.appendChild(stickersOptionIconContainer);
        stickersOptionItem.appendChild(optionDescription);
            
        stickersOptionContainer.appendChild(stickersOptionItem);    
    })
    // console.log(stickersOptionContainer);
    return stickersOptionContainer;
} 

displayStickersOptions();