# logcir-js
論理回路をシミュレートしたJSライブラリです。  

##  論理ゲート・算術ゲート
以下の論理ゲートや算術回路が使えます  

|ゲート|関数|説明|
|-----|----|---|
|DC|DC( )|1を出力する|
|AND|and(A,B)||
|OR|or(A,B)||
|NOT|not(A)||
|NAND|nand(A,B)||
|NOR|nor(A,B)||
|XOR|xor(A,B)||
|半加算器|tools.half_adder(A,B)|結果はtools.half_adder.Sとtools.half_adder.Cに格納|
|半減算器|tools.half_subtractor(A,B)|結果はtools.half_subtractor.Sとtools.half_subtractor.Dに格納|
|全加算器|tools.full_adder(A,B,C_in)|結果はtools.half_adder.Sとtools.half_adder.C_outに格納|
|全減算器|tools.full_subtractor(A,B,D_in)|結果はtools.half_adder.Sとtools.half_adder.D_outに格納|

関数の入力は0か1のみであり、trueやfalseでは入力できません。また、出力結果は0か1のみです。

## コード例
### Node(commonJS)
```
const LGC=require("logcir")

//and回路
var result=LGC.and(0,1)
console.log(result)//=>0

//半加算器
LGC.tools.harf_adder(1,1)
console.log(LGC.tools.half_adder.S)//=>1
console.log(LGC.tools.half_adder.C)//=>0
```
ESMは`impot LGC from "logcir"`を使って使用することができます。

### ブラウザ(html)
```
<script src="logcir.js">
<script>
//and回路
var result=LGC.and(0,1)
console.log(result)//=>0

//半加算器
LGC.tools.harf_adder(1,1)
console.log(LGC.tools.half_adder.S)//=>1
console.log(LGC.tools.half_adder.C)//=>0
</script>
```
ブラウザで使用する場合はグローバル変数`LGC`を使用します。