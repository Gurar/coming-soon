(function () {
    const form = document.querySelector("#form");

    const input = {
        email: form.querySelector('input[name = "email"]')
    }

    const expression = {
        email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        name: /^[A-Za-z]+$/
    }

    function writeValidate(e) {
        const target = e.target.dataset.input;
        const attr = `[data-input='${target}']`;
        const node = document.querySelector(attr);
        const value = node.value;
        node.removeAttribute('placeholder');
        if(value.trim()) {
            if(expression[target].test(value)) {
                node.classList.remove('error');
            }else {
                node.classList.add('error');
            }
        }else {
            node.classList.add('error');
        }
    }

    form.addEventListener('input', writeValidate, false);
   
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(input.email.value.trim()) {
           if(expression.email.test(input.email.value)) {
               alert('mail sucessfuly sended');
               form.reset();
           }
        }else {
            for (const [key, value] of Object.entries(input)) {
                value.classList.add('error');
            }
        }
    });

})();
