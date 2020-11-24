

let starting = document.getElementById('work');


function isVisible(element) {
    let elementBox = element.getBoundingClienRect();
    let distaceFromTop = -200;

    if(elementBox.top - window.innerHeight < distaceFromTop) {
        return true;
    }else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(section => {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        }
    });
}

document.addEventListener('scroll', scanDocument);