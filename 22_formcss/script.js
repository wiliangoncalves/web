const user = window.document.querySelector('#user')
const pass = window.document.querySelector('#pass')

user.focus()

function enter(){
    if(user.value.length == 0 )
    {
        window.alert('User Empty!')
    } 
    if(pass.value.length == 0)
    {
        window.alert('Pass Empty!')
    }
}