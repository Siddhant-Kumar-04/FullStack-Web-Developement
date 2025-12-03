

const submitBtn1 = document.getElementById('clickMeButton');
submitBtn1.addEventListener('click', (event)=> {
    console.log('Button Clicked');
    event.preventDefault(); //stops the default behaviour of form submission
})