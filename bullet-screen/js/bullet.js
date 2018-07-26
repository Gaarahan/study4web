/*
*     每一个弹幕是一个div,该div会有一个动画,每隔一段时间就会出现,从屏幕右侧移动到
*  左侧
*/
let wall;
let sign;
let colors;
let bulletNum = 0;

window.onload = function(){
  wall = document.getElementById("bullet-wall");
  sign = [1,2,3,4,5,6,7,8,9,10].map( val => [val,true]);
   colors = ['#888888','#33CC99','#00FFFF','#999933','#CC66CC',
    '#FFCC33','#FFCC33','#339966','#003333','#CC0000'];
};

function commitBullet() {

  //发射弹幕之前,假如屏幕上已经有10条弹幕(满),随机清理其中一条
  if(bulletNum === 10){
    let randomNum = Math.floor(Math.random() * 10);
    sign[randomNum][1] = true;
    let removeId = "bullet-" + randomNum;
    let removeNode = document.getElementById(removeId);
    wall.removeChild(removeNode);
    bulletNum --;
  }


  //计算每行弹幕的高度,10行
  let wallHeight = wall.offsetHeight;
  let singleBulletHeight = wallHeight/10;

  //随机生成高度
  let curSign = sign.filter( val => val[1] );
  let bulletFloorIndex = Math.floor(Math.random() * curSign.length);
  let bulletFloor = curSign[bulletFloorIndex][0] - 1;
  let bulletHeight = bulletFloor * singleBulletHeight;

  //随机生成颜色
  let colorIndex = Math.round( Math.random()*9 );
  let color = colors[colorIndex];

  //生成元素结点
  let node = document.createElement('div');
  let input = document.getElementById("input-text").value;
  if(input !== ""){
    node.innerText = input;
    node.className = "bullet";
    node.style = "top:" + bulletHeight + "px;color:" + color +
        ";position:absolute;";
    //为元素添加id,方便清理
    node.id = "bullet-" + bulletFloor;

    wall.appendChild(node);
    document.getElementById("input-text").value = "";

   //将该行标记为false,表示已经存在弹幕,增加弹幕数量
    sign[bulletFloor][1] = false;
    bulletNum ++;
  }
}

function clearScreen(){
  wall.innerHTML = "";
  sign = [1,2,3,4,5,6,7,8,9,10].map( val => [val,true]);
  bulletNum = 0;
}
