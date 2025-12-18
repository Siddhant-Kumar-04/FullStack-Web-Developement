
const tier = document.getElementById('tier-input');

const submitBtn1 = document.getElementById('clickMeButton');
submitBtn1.addEventListener('click', (event)=> {
    alert('Button Clicked');
    event.preventDefault()
    // const trg = event.target;
    // alert(trg);
    if (tier.value === '')
    {
        alert('Please enter a tier name');
        return;
    }
    createTierList(tier.value);
    tier.value = '';
})

function createTierList(tierlistName) {
    const newTierList = document.createElement('div');
    newTierList.classList.add('tier-list');
    const heading = document.createElement('h1');
    heading.textContent = tierlistName;
    const newTierListItem = document.createElement('div');
    newTierListItem.classList.add('tier-list-item');
    newTierList.appendChild(heading);
    newTierList.appendChild(newTierListItem);
     
    const tierSection = document.getElementById('tier-list-section');
    tierSection.appendChild(newTierList);
    setUpDropZone(newTierListItem); 
   
}

document.getElementById("ImageForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const tierUrl = document.getElementById("tier-image-input").value;
    if (tierUrl == '') {
        alert('Please enter an image URL');
        return;
    }
    createTierImageList(tierUrl);
    document.getElementById("tier-image-input").value = '';
});

function createTierImageList(tierUrl) {
    
    const newTierImage = document.createElement('div');
    newTierImage.classList.add('tierItem');
    newTierImage.setAttribute('draggable', 'true');
    setUpItemConatainer(newTierImage);
    const image = document.createElement('img');
    image.src = tierUrl;
    newTierImage.appendChild(image);
    const tierImageSection = document.getElementById('no-tier-list');
    tierImageSection.appendChild(newTierImage);
    setUpItemConatainer(newTierImage);


}
let currentDraggedItem;
const itemContent = document.getElementsByClassName('tierItem');
for (const itemContents of itemContent) {
    setUpItemConatainer(itemContents);
}
function setUpItemConatainer(itemContainer) {
    
    console.log("Setting up item container");
    itemContainer.addEventListener('dragstart', () => {
        // currentDraggedItem = event.target; //To get a element to whome we are dragging
        // console.log('Drag Start:', currentDraggedItem);
        //Note: If we want to get a parent element of the element we are dragging then we can use parentNode property
        currentDraggedItem = event.target.parentNode;
        console.log('Drag Start:', currentDraggedItem);
    });
    
}

// DragSDrop Functinality for Tier Lists
// const tierlistClass=document.querySelectorAll('.tier-list');
// tierlistClass.forEach((tierlist) => {
//     setUpDropZone(tierlist);
// })

function setUpDropZone(tierlist) {

    tierlist.addEventListener('drop', (event) => { 
        // event.preventDefault();  //to drop the default behavior of the browser 
        console.log('Drop Event on Tier List');
       event.target.appendChild(currentDraggedItem);
        
    });

    tierlist.addEventListener('dragover', function(event) {
        // console.log("Dragged Over on Tier List");
        //event.target.appendChild(currentDraggedItem);
        event.preventDefault();
        console.log("event comming on",event)
        if (this === currentDraggedItem.parentNode)
        {
            appendChild(currentDraggedItem);
        }
    }); 
    
    
}