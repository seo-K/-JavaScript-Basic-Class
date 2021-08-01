/* 
연산자

잘해야 코드가 줄어든다

and / or
&& / ||
모든 조건이 참일 때 = 참 / 한조건이라도 참일 때 = 참

*/

const n1 = 5
const n2 = 8
const n3 = 12

const isOver10 = n1 > 10 && n2 > 10 && n3 > 10
const isOver7 = n1 > 7 || n2 > 7 || n3 > 7

/*
falsy

undefined
null
0
''

*/

const b = undefined
const b1 = null
const b2 = 0
const b3 = ""

const isAllTure = b && b1 && b2 && b3

if (b === undefinde) {
}
if (bt === null) {
}

if (!b2) {
  //b2 가 거짓이 아닐때!! 이걸로 쓰는게 조음
}
