function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard-container').style.display = 'block';
        document.getElementById('user').innerText = username;
    } else {
        alert('Please enter both username and password.');
    }
}

function logout() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('dashboard-container').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
