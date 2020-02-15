//判断是否支持摄像头
function getMediaSupport(){
  //获取摄像头两种方法
  let mediaMethod = false;
  if(navigator.getUserMedia){
    mediaMethod = navigator.getUserMedia;
  }
  else if(navigator.mediaDevices.getUserMedia){
    mediaMethod = navigator.mediaDevices.getUserMedia;
  }
  else{
    alert("您的设备不支持访问用户媒体设备");
  }
  return mediaMethod;
}

function openMediaDevices(option){
  let mediaMethod = getMediaSupport();
  if(!mediaMethod) return false;

  mediaMethod(option)
    .then((stream)=>{
      console.log(stream);
    })
    .catch((err)=>{
      console.log(`获取媒体设备失败:${err.name}`);
    });
}

document.onload=()=>{
  let pcBtn = document.getElementById("pcMedia");
} 
