function creatPop(colors,contain,widthBase){
  //data
  var node = document.createElement('li');
  var setX = Math.random() * widthBase;
  var setY = Math.random() * widthBase;
  var radius = Math.random()*100 + 100;
  var opacity = Math.round(Math.random()*0.3 * 10) /10 ;
  var colorIndex = Math.round( Math.random()*9 );
  var color = colors[colorIndex];

  var styleText = 'left:' + setX + 'px;' + 'top:' + setY + 'px;' + 
            'width:' + radius + 'px;' + 'height:' + radius + 'px;' + 
            'border-radius :' + radius +'px;' + 'opacity:' + opacity +
            ';' + 'background-color : ' + color + ';';


  node.setAttribute('style',styleText);
  console.log(widthBase);
 
  node.className = 'pop';
  contain.appendChild(node);
}
window.onload = function(){
/*
 *  将气泡添加到html文件中去
 *  基本思路:
 *    1. 气泡为一个个绝对定位的div,具有一定的透明度,不同的颜色
 *    2. 将生成气泡的代码及随机定位封装到一个函数中,每次调用会
 *       生成在不同位置
 */
  var colors = ['#888888','#33CC99','#00FFFF','#999933','#CC66CC',
                '#FFCC33','#FFCC33','#339966','#003333','#CC0000'];
  var contain = document.getElementById("container");
  var widthBase = contain.clientWidth;
  var count = widthBase / 20;
  for(var i = 0; i < count; i ++)
    creatPop(colors,contain,widthBase);
}
