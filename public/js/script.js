let button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

    let email = document.getElementById('email')
    let password = document.getElementById('password')

    if (email.value == "") {
        email.classList.add('errorinput')
    } else {
        email.classList.add('nonerrorinput')
    }

        if (password.value == "") {
            password.classList.add('errorinput')
        } else {
            password.classList.add('nonerrorinput')
        }
        
            if(email.value.indexOf('@') == -1 || email.value.indexOf('.') || (email.value.indexOf('.') - email.value.indexOf('@') == 1)) {
                email.classList.add('errorinput')
            } else {
                email.classList.add('nonerrorinput')
            } /*(email.value.indexOf('.') - email.value.indexOf('@') == 1) - this check does the following: whether the person wrote asdasd@. trying to bypass email validation, the "@" is p6 and the "." p7, so it's done 7-6 = 1, will be return error.*/

                if(!isNaN(email.value) == true && email.value.length == 11) {
                    email.classList.add('nonerrorinput') 
                } /* this validation verify if phone number have 11 numbers. This validation is for brazilian phone numbers*/

                    if(password.value.length <= 7 ){
                        password.classList.add('errorinput')
                    } else {
                        password.classList.add('nonerrorinput')
                    }

})