function test() {
	let a = 1;
	/*let a = 2;*/
}
function last() {
	const PI = 3.1415926;//const必须赋值，而且是只读变量不能修改
	/*PI = 3;*/
	const k = {//对象可以修改，但是指针不能变
		a:1
	};
	k.b = 3;
	console.log(PI,k);
}
//test();
last();