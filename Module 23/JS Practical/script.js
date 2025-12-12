
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
    const image = document.createElement('img');
    image.src = tierUrl;
    newTierImage.appendChild(image);
    const tierImageSection = document.getElementById('no-tier-list');
    tierImageSection.appendChild(newTierImage);

}