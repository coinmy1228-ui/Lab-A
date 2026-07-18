const form = document.getElementById("onlyForm");
const userMail = document.getElementById("exampleFormControlInput1");
const res = document.getElementById("exampleFormControlTextarea1");

document.getElementById("resSub").addEventListener("click", checkSubmit);

function checkSubmit(event) {
  //   event.preventDefault();

  let a = userMail.value.trim();
  let b = res.value.trim();

  if ((a === "") | (b === "")) {
    alert("內容不可為空白！");
    return;
  }

  alert("已送出信息！");
  console.log("送出成功");
  setTimeout(function () {
    location.reload();
  }, 2000);
}
