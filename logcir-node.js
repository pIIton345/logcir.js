const DC=function(){
return 1;
}

//AND
const and=function(A,B){
if(A==0&&B==0){
return 0;
}
if(A==1&&B==0){
return 0;
}
if(A==0&&B==1){
return 0;
}
if(A==1&&B==1){
return 1;
}
}

//OR
const or=function(A,B){
if(A==0&&B==0){
return 0;
}
if(A==1&&B==0){
return 1;
}
if(A==0&&B==1){
return 1;
}
if(A==1&&B==1){
return 1;
}
}

//NOT
const not=function(A){
if(A==0){
return 1;
}
else{
return 0;
}
}

//NAND
const nand=function(A,B){
return not(and(A,B));
}

//NOR
const nor=function(A,B){
return not(or(A,B));
}

//XOR
const xor=function(A,B){
if(A==0&&B==0){
return 0;
}
if(A==1&&B==0){
return 1;
}
if(A==0&&B==1){
return 1;
}
if(A==1&&B==1){
return 0;
}
}

//tools LEDやALUなど入出力装置を出せます。
const tools={}
//半加算器
tools.half_adder={}
tools.half_adder.S=0;
tools.half_adder.C=0;
tools.half_adder=function(A,B){
	tools.half_adder.S=xor(A,B);
	tools.half_adder.C=and(A,B);
}
//全加算器
tools.full_adder={}
tools.full_adder.S=0;
tools.full_adder.C_out=0;
tools.full_adder=function(A,B,C_in){
	tools.half_adder(A,B);
	tools.full_adder.half1C=tools.half_adder.C;
	tools.half_adder(tools.half_adder.S,C_in);
	tools.full_adder.S=tools.half_adder.S;
	tools.full_adder.C_out=or(tools.half_adder.C,tools.full_adder.half1C)
}

tools.half_subtractor={}
tools.half_subtractor.S=0;
tools.half_subtractor.D=0;
tools.half_subtractor=function(A,B){
	tools.half_subtractor.S=xor(A,B);
	tools.half_subtractor.D=and(not(A),B);
};

tools.full_subtractor={};
tools.full_subtractor.S=0;
tools.full_subtractor.D_out=0;
tools.full_subtractor=function(A,B,D_in){
	tools.half_subtractor(A,B);
	tools.full_subtractor.half1D=tools.half_subtractor.D
	tools.half_subtractor(tools.half_subtractor.S,D_in);
	tools.full_subtractor.S=tools.half_subtractor.S
	tools.full_subtractor.D_out=or(tools.half_subtractor.D,tools.full_subtractor.half1D);
}

module.exports={
	DC,
	and,
	or,
	not,
	nand,
	nor,
	xor,
	tools
}