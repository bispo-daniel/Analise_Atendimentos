let errorMessage = () => {
    if(!document.getElementById('errorMessage')) {
        let p = document.createElement('p');
        p.setAttribute("id", "errorMessage")
        p.style.color = 'red';
        p.style.margin = '10px'
        p.innerHTML = 'Ocorreu algum erro...'

        let signInMain = document.getElementsByTagName('main')[0];
        signInMain.appendChild(p);
    } 
}

module.exports = errorMessage;