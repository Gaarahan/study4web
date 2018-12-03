//创建构造函数:
let Puzzle = function(option){
	this.init(option); //	调用原型上的init函数，通过传入的参数，创建Puzzle的实例化对象
}
//为Puzzle创建原型方法
Puzzle.prototype = {
	//初始化函数
	init:function(option){
		//辅助数据：
		this.start;//判断游戏是否开始
		this.imgUrl;//存储获取到的图片base63编码
		this.level;//通过参数初始化对象，设置等级level

		//数组存储对应下标元素的现有位置
		this.origin;//	原数组origin ：初始位置
		this.random;//	随机数组random ：目前所在的位置
		
		this.flag;//标识符flag ：存储点击元素，与当前点击元素index作对比，做出不同处理
		//	flag === null ：第一次点击  => 将点击元素标红
		//	flag === index : 两次点击同一个元素
		//				=> 交换元素位置，同时交换数组中的数字，再将flag置空
		//
		this.imgCells;//imgcells ：存储创建的每一个格子（初始为空）
		//
		//---------------------------------------------------------------------------------------------------
		//
		//dom元素
		//
		this.btn;//btn ：按钮：点击上传图像
		this.file;//file ：上传文件的input标签
	},
	
}


