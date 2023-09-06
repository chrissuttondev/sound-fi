//form validation function 

function handleSubmit(event) {
    event.preventDefault();
    let p1 = form.elements['password'].value;
    let p2 = form.elements['confirm-password'].value;

    if (p1 !== p2) {
        let errorDiv = document.getElementById('errors');
        errorDiv.innerHTML = "<p>Please ensure your passwords match.</p>";
        errorDiv.style.display = 'block';
    } else {
        console.log('Validation successful!');
        form.submit();
    }
}

let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);