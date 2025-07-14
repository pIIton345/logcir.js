const LGC={}

LGC.DC=function(){
return 1;
}

//AND
LGC.and=function(A,B){
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
LGC.or=function(A,B){
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
LGC.not=function(A){
if(A==0){
return 1;
}
else{
return 0;
}
}

//NAND
LGC.nand=function(A,B){
return LGC.not(LGC.and(A,B));
}

//NOR
LGC.nor=function(A,B){
return LGC.not(LGC.or(A,B));
}

//XOR
LGC.xor=function(A,B){
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
LGC.tools={}
//半加算器
LGC.tools.half_adder={}
LGC.tools.half_adder.S=0;
LGC.tools.half_adder.C=0;
LGC.tools.half_adder=function(A,B){
	LGC.tools.half_adder.S=LGC.xor(A,B);
	LGC.tools.half_adder.C=LGC.and(A,B);
}
//全加算器
LGC.tools.full_adder={}
LGC.tools.full_adder.S=0;
LGC.tools.full_adder.C_out=0;
LGC.tools.full_adder=function(A,B,C_in){
	LGC.tools.half_adder(A,B);
	LGC.tools.full_adder.half1C=LGC.tools.half_adder.C;
	LGC.tools.half_adder(LGC.tools.half_adder.S,C_in);
	LGC.tools.full_adder.S=LGC.tools.half_adder.S;
	LGC.tools.full_adder.C_out=LGC.or(LGC.tools.half_adder.C,LGC.tools.full_adder.half1C)
}

LGC.tools.half_subtractor={}
LGC.tools.half_subtractor.S=0;
LGC.tools.half_subtractor.D=0;
LGC.tools.half_subtractor=function(A,B){
	LGC.tools.half_subtractor.S=LGC.xor(A,B);
	LGC.tools.half_subtractor.D=LGC.and(LGC.not(A),B);
};

LGC.tools.full_subtractor={};
LGC.tools.full_subtractor.S=0;
LGC.tools.full_subtractor.D_out=0;
LGC.tools.full_subtractor=function(A,B,D_in){
	LGC.tools.half_subtractor(A,B);
	LGC.tools.full_subtractor.half1D=LGC.tools.half_subtractor.D
	LGC.tools.half_subtractor(LGC.tools.half_subtractor.S,D_in);
	LGC.tools.full_subtractor.S=LGC.tools.half_subtractor.S
	LGC.tools.full_subtractor.D_out=LGC.or(LGC.tools.half_subtractor.D,LGC.tools.full_subtractor.half1D);
}