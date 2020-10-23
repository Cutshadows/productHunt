var list=readHugeList();
var nextListItem=function(){
	var item= list.pop();
	if(item){
		nextListItem();
	}
};
console.(list);

