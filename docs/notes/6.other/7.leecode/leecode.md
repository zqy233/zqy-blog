## 7.[整数反转](https://leetcode-cn.com/problems/reverse-integer/)

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果

如果反转后整数超过 32 位的有符号整数的范围 [−2 31次方,  2 31次方 − 1] ，就返回 0

假设环境不允许存储 64 位整数（有符号或无符号）

```ts
// 假设环境不允许存储 64 位整数的意思是不能使用变量存储 64 位整数
function reverse(x: number): number {
	if(x == 0) return x
	var flag = x > 0 ? true : false
	var num:number =Number((Math.abs(x)+'').split('').reverse().join(''))
    var limit = Math.pow(2,31)

    if(!flag && num > limit){
		return 0
    }
    if(flag && num > (limit - 1)){
        return 0
    }

	return flag?num:-num
};
```

