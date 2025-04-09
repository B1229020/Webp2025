var container = document.getElementById('container');

function getRandomChars(min, max){
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let length = Math.floor(Math.random() * (max - min + 1)) + min;
  let result = "";
  for(let i = 0; i < length; i++){
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

window.onload = function(){
  container.textContent = getRandomChars(0, 2);
};

var wrongCount = 0; // 錯誤次數計數器
window.addEventListener("keyup", function(e){
  console.log(e.key);
  if(container.textContent.length > 0 && container.textContent[0] === e.key){
    container.textContent = container.textContent.substring(1);
    wrongCount = 0; // 正確輸入則重置錯誤次數
  }else wrongCount++;
  add_new_chars();

  if(wrongCount >= 3){
    console.log("連續輸入錯誤3次，額外增加6組亂數字串");
    for(let i = 0; i < 6; i++){
      let extra = getRandomChars(1, 3);
      container.textContent += extra;
      console.log("額外新增字串：", extra);
    }
    wrongCount = 0; // 重置錯誤次數
  }
});

function add_new_chars(){
  let newChars = getRandomChars(1, 3);
  console.log("新增字元：", newChars);
  container.textContent += newChars;
}