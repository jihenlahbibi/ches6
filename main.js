// function accum(s) {
// let str = s.toLowerCase()	
// return [...str].map((el,index) => {
// return el.toUpperCase(0)+el.repeat(index)
// }).join('-')
// var isSquare = function(n){
//     if (n<0){
//       return false
//     }
// if (Number.isInteger(Math.sqrt(n))) {
//     return true
// }else {
//     return false
// }
// }
// function disemvowel(str) {
// const strv= str.split("") 
// let nvarr =[]
// for (let i = 0; i < strv.length; i++) {
//   if (strv [i]==="i" & strv[i]==="u" & strv[i]==="o"  & strv [i]==="v"& strv[i]==="v") {
//    nvarr= nvarr.push("strv[i]")
//  }

// }
//   return nvarr



//   console.log(disemvowel("jihene"));
//   function XO(str) {
//    let tab = str.toLowerCase().split("")
//  return tab.filter((el)=>el==="x").length===tab.filter((el)=>el==="o").length ?true:false


//     }

//     console.log(XO("xxoo"));
// 
// function positiveSum(arr) {

//    const tab=arr.filter(el=>el>0).reduce(getSum, 0);
//    function getSum(total, num) {
//     return total +num;
//   }
//     return tab

//   }
//   console.log(positiveSum([2,-1,4,-8]));

// function highAndLow(numbers){
//   let num=numbers.split('');
//   let min= Math.min(...num)
// }
// console.log(highAndLow(("1 2 3 4 5")));



// function isIsogram(str){
//   let stre= str.split("");

//  return stre.filter((el)=>stre.indexOf(el)>1)

// }
// console.log(isIsogram("aba"));

// function highAndLow(numbers){
//   let num= numbers.split("")
//   let min= Math.min(num);
//   let max = Math.max(num);



// }
// console.log(highAndLow("1 2 3 4 5"));
// function isIsogram(str){
//     if(str===""){
//       return true 
//     // } else{
//     //    str= str
//     }
//    let newar = str.toLowerCase().split("")
//    let sortarr = newar.slice('').sort()
//    for (let i=0 ; i<sortarr.length ; i++){
//      if (sortarr[i+1]==sortarr[i]){
//        return false
//    }
// }
//   return true
// }



// function highAndLow(numbers){
//     const arr=numbers.split("  ").map(Number)
//     return `${Math.min(...arr)} ${Math.max(...arr)}`
//   }
//   console.log(highAndLow("1 2 3 4 5"));
//   function filter_list(l) {

//    return l.filter((el)=>typeof(el)==="number");
// }
// function isTriangle(a,b,c)
// {
//         if (a <= 0 || b <= 0 || c <= 0){
//           return false;
//         } 
//         if (a+b > c && a+c > b && c+b > a){
//           return true;
//          } else{
//           return false;
//     }
// } 
// function findShort(s){
//     let arr = s.split(" ").sort((a, b) => a.length - b.length);

//     return arr[0].length
//   }
// console.log(findShort("moi suis je jihene"));

// let name = "John"
// console.log(`Hello ${name}, how are you ?`);
// let a = 1;
// let result = (a === 0) ?  "zero" : a> 0 ? "positive"  : "negative";
// console.log(`The number is ${result}.`);

// function nbYear(p0, percent, aug, p) {
//     let perc=percent/100;
//    let taby=[]
//    for (let i=p0; i<=p ;i+=i*perc+aug) {
//       x=i
//      taby.push(x)
//    }
//   return taby.length 
// }
// console.log(nbYear(1500, 5, 100, 5000));


// function removeChar(str){
//     const len=str.length
//     let arr = str.slice(1,len-1)
//     return arr
// }
//    console.log(removeChar("jihene"));

//    function noSpace(x){
//     let  nv=x.split(" ").join("")
//     return nv
//    }
//    console.log(noSpace("jihene lah bibi"));

// function century(year) {

//     if (Number.isInteger(year /100)) {
//         var x= Math.floor(year /100) 
//         return x
//     }else {
//         var x= Math.floor(year /100)
//         return x+1
//     }



//   }
//   console.log(century(1705));
//   function maps(x){

//   }
//   function DNAtoRNA(dna) {
//       let tab = dna.split("")
//     for (let i = 0; i < tab.length; i++) {
//        if (tab[i]==="T") {
//         tab[i]="U"
//        }
//          }
//          return tab.join("")
//   }
//   console.log(DNAtoRNA("GCAT"));


//   function maps(x){
//     return x.forEach((el)=>(el*2))
//     }
//     console.log(maps([1,2,3]));
// function digitize(n) {
//   let str=n.toString().split("").map(el=>Number(el))
//   return str.reverse()
//   }
//   console.log(digitize(35231));
// function removeSmallest(numbers) {
//   let  x=numbers.slice()
//   let y=Math.min.apply(null,x)
//   let z= x.indexOf(y)
// return x.splice(z,numbers.indexOf(numbers.length))
// //   return  x.filter((el)=>x.indexOf(el)!==x.indexOf(y))
// //   
//     }
//   console.log(removeSmallest([2, 2, 1, 2, 4]));
//   function arithmetic(a, b){
//    return a- b}
//     console.log(arithmetic(8, 2));
function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!"
    } else {
        return "Hello, " + name + "!";
    }
}
console.log(greet("Johnny"));

function areYouPlayingBanjo(name) {
    let str = name.split("")

    if (str[0] === "R" || str[0] === "r") {
        return name + " plays banjo"
    } else {
        return name + " does not play banjo";
    }

}
console.log(areYouPlayingBanjo("rango"));

function monkeyCount(n) {
    let x = 0
    for (let i = 1; i <= n; i++) {
        x += i
    }
    return x
}
console.log(monkeyCount(2))


function solution(number) {
    let x = 0
    for (let i = 1; i < number; i++) {
        if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
            x += i
        }
    }
    return x
}
console.log(solution(10));


function likes(names) { 
    
 let x= names.length-2
if (names.length===0) {
    return  "no one likes this"
}
if (names.length===1) {
    return `${names[0] } like this`
}
if (names.length===2) {
    return `${names[0]} and ${names[1]}  likes this`
}
if (names.length===3) {
    return (`${names[0]}, ${names[1]} and ${names[2]} likes this`)
}
else {
return  (`${names[0]}, ${names[1]} and ${x} others likes this`)
  
  }
}

  console.log(likes(["jihene","sousou","ines"]));

  function smash (words) {
    let x= words.toString(" ")
    return x
 };
 console.log(smash (['hello', 'world', 'this', 'is', 'great']) );


 var capitals = function (word) {
    let tab =[]
	for (let i = 0; i < word.length; i++) {
       const regex = /["65"-"90"]/g;
        let y=word.charCodeAt(i).toString()
       
        if (y.match(regex)) {
            tab.push(i)
        }
       
    }
    return tab
};
console.log(capitals ('JIhseNE'));