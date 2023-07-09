function LoadingSpinner(area) {

    let spinner = document.getElementsByClassName('spinner-border')[0];

    if(spinner) {
        area.removeChild(spinner)

    } else {
        let div = document.createElement('div')
        div.className = 'spinner-border text-success'
    
        area.appendChild(div);
    }
}

export default LoadingSpinner;