const buttons = document.querySelectorAll('.click');
let selectedRating; // Variable to store the selected rating

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = "#FF9B50";
        selectedRating = button.innerHTML; // Store the button number
    });
});

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    setTimeout(() => {
        alert(`You rated us a ${selectedRating} star rating`)
    }, 2000)
    alert(`Thanks for the review`)
});
