
const tier = document.getElementById('tier-input');
const submitBtn1 = document.getElementById('clickMeButton');
submitBtn1.addEventListener('click', (event)=> {
    alert('Button Clicked');
    event.preventDefault()
    // const trg = event.target;
    // alert(trg);
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