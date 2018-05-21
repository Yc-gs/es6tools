{
	console.log('s','\u{20BB7}');
}
{
	let s = '𠮷a';
	console.log('length',s.length);
	console.log(s.codePointAt(0).toString(16));
	console.log(s.codePointAt(1));
	console.log(s.codePointAt(2));//取出a 的十进制编码
	console.log(s.codePointAt(2).toString(16));



	console.log(String.fromCodePoint('0x20bb7'));


}


{
	let str = '\u{20bb7}abc';
	for(let code of str){
		console.log('es6',code);
	}
}


{
	let str = 'string';
	console.log('includes',str.includes('ri'));
	console.log('startsWith',str.startsWith('str'));
	console.log('endsWith',str.endsWith('ing'));
	console.log(str.repeat(2));
}


{
	let name = 'list';
	let info = 'hello world';
	let m = `i am ${name},${info}`;
	console.log(m);
}



{
	console.log('1'.padStart(2,'0'));//前边补0
	console.log('2'.padEnd(2,'0'));
}


{
	let user = {
		name:'list',
		info:'hello world'
	};
	console.log(abc`i am ${user.name},${user.info}`);
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;
	}
}