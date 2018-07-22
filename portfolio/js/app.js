function go(num){
  var introOffset = document.getElementById("intro-contain").offsetTop;
  var portOffset =  document.getElementById("prot-contain").offsetTop;
  var contOffset =  document.getElementById("cont-contain").offsetTop;

  var offset = [introOffset,portOffset,contOffset];

  //将页面定位到指定位置
  window.scrollTo({
    top: offset[num] - 70,
    behavior: "smooth"
  });
}

function show(){
  var introOffset = document.getElementById("intro-contain").offsetTop;
  var portOffset =  document.getElementById("prot-contain").offsetTop;
  var contOffset =  document.getElementById("cont-contain").offsetTop;

  var offset = [introOffset,portOffset,contOffset];
  var winOffset = window.pageYOffset;
  if(winOffset < (offset[1]-70) ){
    changeSet(0);
  }else if(winOffset < (offset[2]-70) ){
    changeSet(1);
  }else{
    changeSet(2);
  }
}

//改变每个标签的显示状态
function changeSet(num){
  var list = document.getElementById("navigation").children;
  for(var i = 0;i < list.length; i++){
    if(i !== num){
      list[i].classList.remove("current");
    }
  }
  list[num].classList.add("current");
}

function getInput(ele){

  var value = ele.value;

  var tip = ele.getAttribute("placeholder");
  var tipDiv = document.getElementsByClassName("input-tip");

  if(tip === "Subject"){
    tipDiv[0].setAttribute("class","input-tip inputing");
    if(value ===  ""){
      tipDiv[0].setAttribute("class","input-tip");
    }
  }
  else{
    tipDiv[1].setAttribute("class","input-tip inputing");
    if(value ===  ""){
      tipDiv[1].setAttribute("class","input-tip");
    }
  }

}

function submitEmail() {
  var subject = document.getElementById("email-subject").value;
  var content = document.getElementById("email-content").value;

  var emailLink = "mailto:gaarahan123@gmail.com?subject=" + subject +"&body=" + content;

  if(subject === "" || content === "") {
    alert("You must complete both subject and content");
    return;
  }

  var confrim = window.confirm("This will use you local client");
  if(confrim === true){
    window.location.href=emailLink;
  }
}
