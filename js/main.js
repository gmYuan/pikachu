!function (){
  let $styleTag = document.querySelector("#styleTag")
  let $codecontainer = document.querySelector(".code")

  let duration = 40   //动画速度

  let code = `
* 首先，需要准备皮卡丘的皮肤色 */
.preview{
  background: #FEE433;
}

/* 2 鼻子部分*/
.nose {
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%);
  border: 12px solid;
  border-radius: 50%;
  border-color: black transparent transparent;
}

/* 3 眼睛部分*/
.eyes {
  position: absolute;
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  border-radius: 50%;
  border: 2px solid #000;
}
.eyes::after {
  position: absolute;
  left: 6px;
  top:-1px;
  display: block;
  content: '';
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #000;
}
.left.eyes {
  right: 50%;
  margin-right: 90px;
}
.right.eyes {
  left: 50%;
  margin-left: 90px;
}

/* 4 脸颊部分*/
.cheek {
  position: absolute;
  top: 85px;
  width: 68px;
  height: 68px;
  background: #fc0d1c;
  border: 2px solid #000;
  border-radius: 50%;
}
.left.cheek {
  right: 50%;
  margin-right: 116px;
}
.right.cheek {
  left: 50%;
  margin-left: 116px;
}

/* 5 上嘴唇部分*/
.upperLip {
  position: absolute;
  top: 50px;
  width: 80px; 
  height: 25px;
  border: 2px solid black; 
  background: #FDE348;
  z-index: 1;
}
.left.upperLip {
  right: 50%;
  border: none;
  border-bottom: 2px solid #000;
  border-bottom-left-radius: 40px 25px;
  transform: rotate(-20deg);
}
.right.upperLip {
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}

/* 6 下嘴唇部分*/
.lowerLip-wrapper {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
  width: 280px;
  height: 120px;
  overflow: hidden;
}
.lowerLip {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 180px;
  height: 2000px;
  border-radius: 180px/800px;
  border: 2px solid #000;
  background: #990513;
  overflow: hidden;
}
.lowerLip::after {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%);
  display: block;
  content: '';
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #FC4A62;
}
`
 	writeCode('',code)

 	// 11 通过事件委托 让当前点击的变速按钮 添加激活态
 	document.addEventListener('click', function(e){
 		let $buttons = document.querySelectorAll("[data-speed]")
    let target = e.target
    //console.log(target)

    if (!target.dataset.speed){
      return    // 3.S1 如果当前触发事件元素 不是指定的元素(通过data-speed)，则直接退出
    }
    
    [].forEach.call($buttons, (button) =>{
  		button.classList.remove('active')
  	})
  	target.classList.add("active")

  	switch(target.dataset.speed){
  	case "slow":
  	  duration = 60
  	  break
  	case "normal":
  		duration = 40
  		break
  	case "fast":
  		duration = 10
  		break
  	}
  })


 	// 8.S3 同步 显示代码区和效果区
 	function writeCode(prefix,code,fn){
 		let n = 0
 		let timer = setTimeout( function run(){
 			n += 1
 			$styleTag.innerHTML = code.slice(0,n)
 			$codecontainer.innerHTML = code.slice(0,n)
 			$codecontainer.scrollTop = $codecontainer.scrollHeight
	    //console.log($codecontainer.scrollTop)

	    setTimeout(run,duration)

	    if (n >= code.length) {
	  	  clearTimeout(timer)
	  	  fn && fn()
	    }  // if语句

	  },duration)  //setTimeout函数
 	}  // writecode

}()