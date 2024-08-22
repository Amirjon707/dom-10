const LocalUser = JSON.parse(localStorage.getItem('user') || '[]')

document.querySelector('.user-count').innerHTML = LocalUser[0].id
document.querySelector('.name').innerHTML = LocalUser[0].name
document.querySelector('.person').innerHTML = string()

function string() {
    let user = JSON.stringify(LocalUser[0]).split(',').join('<br> ')
    user = user.split('}').join('}<br>')
    user = user.split('{').join('{ <br> ')
    user = user.split('"').join('')
    user = user.split(':').join(': ')
    return user
}

string()