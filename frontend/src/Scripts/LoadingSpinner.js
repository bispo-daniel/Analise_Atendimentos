function LoadingSpinner() {
    let buttonSpinnerArea = document.getElementsByClassName('spinner-border')[0];

    if (buttonSpinnerArea.style.visibility === "" || buttonSpinnerArea.style.visibility === "hidden") {
        buttonSpinnerArea.style.visibility = 'visible'
    } else {
        buttonSpinnerArea.style.visibility = 'hidden';
    }
}

export default LoadingSpinner;