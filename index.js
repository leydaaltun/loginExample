const usernameInput = document.querySelector('.username')
//console.log(username)
const passwordInput = document.querySelector('.password')
//console.log(password)
const submitButton = document.querySelector('.submit')
//console.log(submitButton)

const form = document.querySelector('form')
//console.log(form)

form.addEventListener('submit', function (event) {
    console.log(event)
    event.preventDefault()
    console.log(usernameInput.value)
    console.log(passwordInput.value)
    const data = {
        username: usernameInput.value,
        password: passwordInput.value,
    }
    // const jsonData = JSON.stringify(data)
    fetch(`https://login-test.wunnle.dev/api/login`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            let token = data.token
            console.log(token)
        })

    // function checkLogin(data) {
    //     if()
    // }
    

})

