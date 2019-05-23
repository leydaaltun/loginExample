
const usernameInput = document.querySelector('.loginUsername')
//console.log(usernameInput)
const passwordInput = document.querySelector('.password')
//console.log(password)
const submitButton = document.querySelector('.submit')
//console.log(submitButton)
const loginToken = localStorage.getItem(`loginToken`)
if(loginToken){
    checkLogin(loginToken)
}
const form = document.querySelector('form')
//console.log(form)

form.addEventListener('submit', function (event) {
    //console.log(event)
    event.preventDefault()
    //console.log(usernameInput.value)
    //console.log(passwordInput.value)
    const data = {
        username: usernameInput.value,
        password: passwordInput.value,
    }
    //console.log(data)
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
            checkLogin(data.token)

        })
        .catch(function (error) {
            console.log(error)
            showError()
        })

})

function showError() {
    const error = document.querySelector('.error')
    error.classList.add('visible')

}


function hideError() {
    const error = document.querySelector('.error')
    error.classList.remove('visible')
    
}

function checkLogin(token) {
    console.log(token)
    if (token) {
        console.log(`you're logged in `)
        hideError()
        document.querySelector('.signinWrapper').classList.add('invisible')
        localStorage.setItem(`loginToken`,token)
        fetch('https://login-test.wunnle.dev/api/secret',{
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`
            } 
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)

            showUserInfo(data.user)
        })
    }
}


function showUserInfo(user){
    const username = document.querySelector('.username')
    console.log(username)
    const userMail = document.querySelector('.userMail')
    console.log(userMail)

    username.innerHTML = user.username
    userMail.innerHTML = user.email
}