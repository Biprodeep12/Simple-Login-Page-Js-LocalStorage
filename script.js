const kalo = document.getElementById('forg');

kalo.addEventListener('click', function () {
  window.location.href = 'logged.html';
});

const REG = document.getElementById('Rg');

REG.addEventListener('click', function () {
  if (REG.textContent === 'Register') {
    document.getElementById('LOG').textContent = 'Register';
    document.getElementById('REG').textContent = 'Already have an account?';
    document.getElementById('login').textContent = 'Register';
    document.getElementById('Rg').textContent = 'Login';
    document.getElementById('rem').style.display = 'none';
    document.getElementById('forg').textContent = '';
    document.getElementById('Userinput').value = '';
    document.getElementById('passinput').value = '';
  } else {
    document.getElementById('LOG').textContent = 'Login';
    document.getElementById('REG').textContent = "Don't have an account?";
    document.getElementById('login').textContent = 'Login';
    document.getElementById('Rg').textContent = 'Register';
    document.getElementById('rem').style.display = 'flex';
    document.getElementById('forg').textContent = 'Forget Password';
    document.getElementById('Userinput').value = '';
    document.getElementById('passinput').value = '';
  }
});

const SUB = document.getElementById('login');

let LogArray = [
  { key: 'Name', value: '' },
  { key: 'Pass', value: '' },
];

const cucu = function () {
  if (SUB.textContent === 'Register') {
    let user = document.getElementById('Userinput').value;
    let pass = document.getElementById('passinput').value;
    let EMG = document.getElementById('broad');
    let pi = document.getElementById('pi');
    let nameObject = LogArray.find((item) => item.key === 'Name');
    let userObject = LogArray.find((item) => item.key === 'Pass');
    if (user === '' && pass === '') {
      EMG.textContent = 'Set Username and Password';
      EMG.style.color = 'red';
      setTimeout(function () {
        EMG.textContent = '';
      }, 5000);
    } else if (pass === '') {
      EMG.textContent = 'Set a password';
      EMG.style.color = 'red';
      setTimeout(function () {
        EMG.textContent = '';
      }, 5000);
    } else if (user === '') {
      EMG.textContent = 'Set an Username';
      EMG.style.color = 'red';
      setTimeout(function () {
        EMG.textContent = '';
      }, 5000);
    } else {
      if (pass.length < 6) {
        pi.textContent = 'Password must be more than 6 characters';
        EMG.style.color = 'red';
        setTimeout(function () {
          pi.textContent = '';
        }, 5000);
      } else if (pass.length > 20) {
        pi.textContent = 'Password must be less than 20 characters';
        EMG.style.color = 'red';
        setTimeout(function () {
          pi.textContent = '';
        }, 5000);
      } else {
        if (nameObject) {
          nameObject.value = user;
        }
        if (userObject) {
          userObject.value = pass;
        }
        let string = JSON.stringify(LogArray);
        localStorage.setItem('INFO', string); //interesting
        console.log(LogArray);
        EMG.textContent = 'You have successfully Registered';
        EMG.style.color = 'green';
        setTimeout(function () {
          EMG.textContent = '';
        }, 5000);
      }
    }
  } else {
    let user = document.getElementById('Userinput').value;
    let pass = document.getElementById('passinput').value;
    let EMG = document.getElementById('broad');
    let nameObject = LogArray.find((item) => item.key === 'Name');
    let userObject = LogArray.find((item) => item.key === 'Pass');
    if (user === '' && pass === '') {
      EMG.textContent = 'Enter Username and Password';
      EMG.style.color = 'red';
      setTimeout(function () {
        EMG.textContent = '';
      }, 5000);
    } else if (pass === '') {
      EMG.textContent = 'Enter password';
      EMG.style.color = 'red';
      setTimeout(function () {
        EMG.textContent = '';
      }, 5000);
    } else if (user === '') {
      EMG.textContent = 'Enter Username';
      EMG.style.color = 'red';
      setTimeout(function () {
        EMG.textContent = '';
      }, 5000);
    } else {
      const retrievedItem = localStorage.getItem('INFO');
      const retrievedArray = JSON.parse(retrievedItem);
      console.log(retrievedArray);
      if (
        user === retrievedArray[0].value &&
        pass === retrievedArray[1].value
      ) {
        document.getElementById('Userinput').value = '';
        document.getElementById('passinput').value = '';
        let hd = document.getElementById('LOG');
        hd.style.display = 'none';
        let dt = document.getElementById('da');
        dt.style.display = 'block';
        dt.style.backgroundColor = 'white';
        let ut = document.getElementById('Userinput');
        ut.style.display = 'none';
        let pt = document.getElementById('passinput');
        pt.style.display = 'none';
        let is = document.getElementById('issuse');
        is.style.display = 'none';
        let ln = document.getElementById('login');
        ln.style.display = 'none';
        let ll = document.getElementById('ll');
        ll.style.display = 'none';
        EMG.textContent = 'Successfully Logged In';
        EMG.style.color = 'green';
        EMG.style.fontSize = '30px';
        EMG.style.fontWeight = '1000';
        EMG.style.paddingtop = '13px';
        let ld = document.getElementById('ld');
        ld.style.display = 'block';
        setTimeout(function () {
          window.location.href = 'logged.html';
        }, 5000);
      } else {
        EMG.textContent = 'Invalid Username or Password';
        EMG.style.color = 'red';
        setTimeout(function () {
          EMG.textContent = '';
        }, 5000);
      }
    }
  }
};

let ut = document.getElementById('Userinput');
let pt = document.getElementById('passinput');
ut.addEventListener('keyup', function (e) {
  if (e.keyCode == 13) {
    cucu();
  }
});
pt.addEventListener('keyup', function (e) {
  if (e.keyCode == 13) {
    cucu();
  }
});
SUB.addEventListener('click', function () {
  cucu();
});

let IO = document.getElementById('hulle');

IO.addEventListener('mouseover', function () {
  com.style.display = 'block';
});
IO.addEventListener('mouseleave', function () {
  com.style.display = 'none';
});
