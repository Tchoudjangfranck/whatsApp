
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

export let displayCorrespondents = async () =>
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
