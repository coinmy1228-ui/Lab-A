


const form = document.getElementById('onlyForm')
// const userMail = document.getElementById('exampleFormControlInput1')
// const res = document.getElementById('exampleFormControlTextarea1')


document.getElementById("resSub").addEventListener('click', checkSubmit);

function checkSubmit(event) {
    event.preventDefault();
    alert('已送出信息');
    console.log('送出成功');
    setTimeout(function () { location.reload(); }, 2000);

}

