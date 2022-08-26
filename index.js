// Add your code here

function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ name, email })
    }).then((response) => {
        return response.json()

    }).then((data) => {
        const h2 = document.createElement('h2');
        h2.innerHTML = data.id;
        const content = document.getElementById('content');
        content.appendChild(h2);

    }).catch((error) => {
        const p = document.createElement('p');
        p.innerHTML = error.message;
        const content = document.getElementById('content');
        content.appendChild(p);
    })
}

