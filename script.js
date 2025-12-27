function stringChop(str, size) {
	if (str === null || str === undefined) {
    return [];
  }
	size=Number(size);
	let arr=[];
	if(size<=0){
		return [];
	}
	
	for(let i=0;i<str.length;i+=size){
		arr.push(str.slice(i,i+size));
	}
	return arr;
}


const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

