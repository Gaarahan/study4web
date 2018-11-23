let picInput = document.getElementById('file');

picInput.onchange = (e)=>{
  console.log(e);
  let file = e.target['files'][0];
  let reader = new FileReader();

  if (!file.type.match('image.*')) {
    return false;
  }

  reader.readAsDataURL(file);

  reader.onload = function(arg) {
    let picContain = document.getElementsByClassName("pic-contain")[0];
    picContain.innerHTML = "";
    let imgEle =document.createElement('img');
    imgEle.width = "300";
    imgEle.height = "300";
    imgEle.src = arg.target['result'];
    picContain.appendChild(imgEle);
  }
};
