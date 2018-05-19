{
	let a,b,rest;
	[a,b] = [1,2];
	console.log(a,b);
}
{
	let a,b,rest;
	[a,b,...rest] = [1,2,3,4,5,6];
	console.log(a,b,rest);
}
//以上两种为数组解构赋值
{
	let a,b;
	({a,b} = {a:1,b:2});
	console.log(a,b);
}
//对象解构赋值
{
	let a,b,c,rest;
	[a,b,c=3] = [1,2];
	console.log(a,b,c);	
}
{
	let a = 1;
	let b = 2;
	[a,b] = [b,a];
	console.log(a,b);
}
{
	function f(){
		return [1,2];
	}
	let a,b;
	[a,b] = f();
	console.log(a,b);
}
{
	function f() {
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,,b] = f();
	console.log(a,b);
}
{
	function f() {
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,...b] = f();
	console.log(a,b);
}





//对象
{
	let o = {
		p:42,
		q:true
	}
	let p,q;
	({p,q} = o);
	console.log(p,q);
}
//上边可以写成
{
	let o = {
		p:42,
		q:true
	}
	let {p,q} = o;
	console.log(p,q);
}
{
	let {p=12,q=43} = {p:3}
	console.log(p,q);
}


//json数据格式
{
	let metaData = {
		title:'abc',
		test:[{
			title:'test',
			desc:'description'
		}]
	}
	let {title:esTitle,test:[{title:cnTitle}]} = metaData;
	console.log(esTitle,cnTitle);
}