const url = 'https://api.github.com/users/mikashii';
const xhttp = new XMLHttpRequest();
xhttp.open("GET", url , true);
xhttp.send()

xhttp.onreadystatechange = function () {
    if(xhttp.readyState == 4 && xhttp.status == 200){
        console.log(xhttp.responseText);
    }
}
xhttp.send()


document.querySelector('#scrollTop').addEventListener('click', (event) => {
    alert('button click')
})