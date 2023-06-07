let message = (messageSended) => {
    if(!document.getElementById('htmlMessage')) {
        let p = document.createElement('p');

            p.setAttribute("id", "htmlMessage");
            p.style.color = 'white';
            p.style.margin = '10px';
            p.innerHTML = messageSended;

        let signInMain = document.getElementsByTagName('main')[0];
        signInMain.appendChild(p);
    } else {
        let messageTag = document.getElementById('htmlMessage');
        messageTag.innerHTML = messageSended;
    }
}

module.exports = message;