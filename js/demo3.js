{
  //ES5
  let regex = new RegExp('xyz','i');
  let regex2 = new RegExp(/xyz/i);
  console.log(regex.test('xyz123'),regex2.test('xyz123'));//true true
  //ES6
  let regex3 = new RegExp(/xyz/ig,'i');
  console.log(regex3.flags);//i
}

{
  let s = 'bbb_bb_b';
  let a1=/b+/g;
  let a2=/b+/y;
  console.log('one',a1.exec(s),a2.exec(s));
  console.log('two',a1.exec(s),a2.exec(s));
  //g可以匹配到bb，y没有匹配成功，g修饰符是从上一次匹配的位置继续寻找，y匹配了第一个紧跟着下一个字符必须还能匹配到
  console.log(a1.sticky,a2.sticky);
}

{
  console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); //true 没有u会当成两个字符
  console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//false u会当成1个字符

  console.log(/\u{61}/.test('a')); //false
  console.log(/\u{61}/u.test('a'));//true 如果不加u修饰符

  console.log('\u{20BB7}');

  let s = '𠮷';

  console.log('u',/^.$/.test(s));    //false
  console.log('u-2',/^.$/u.test(s)); //true (如果字符串中有的字符大于两个字节，一定要加上U字符)使用.

  console.log('test',/𠮷{2}/.test('𠮷𠮷'));   //false
  console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));//true

}
