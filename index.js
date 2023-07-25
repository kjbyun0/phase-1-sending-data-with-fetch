// Add your code here
function submitData(username, emailAddr) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: username,
            email: emailAddr,
        }),
    })
    .then(resp => resp.json())
    .then(data => {
        const body = document.querySelector('body');
        body.innerHTML = `${body.innerHTML} <p>name: ${data.name}, email: ${data.email}, id: ${data.id}</p>`;
        return data;
    })
    .catch(error => {
        const body = document.querySelector('body');
        body.innerHTML = `${body.innerHTML} <p>${error.message}</p>`;
        return error;
    });
}


// fetch('http://localhost:3000/dogs', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify({
//         dogName: 'Byron',
//         dogBreed: 'Poodle',
//     }),
// }).then(resp => resp.json())
// .then(data => console.log(data));
// .catch(error => {
//     alert("Error!!!!");
//     console.log(error.message);
// });


// fetch('http://localhost:3000/dogs/3', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify({
//         dogName: 'Liz',
//         dogBreed: 'Chiwawa',
//     }),
// })
// .then(resp => resp.json())
// .then(data => console.log(data));


// fetch('http://localhost:3000/dogs/4', {
//     method: 'DELETE',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'applicaton/json',
//     },
// })
// .then(resp => resp.json())
// .then(data => console.log(data));