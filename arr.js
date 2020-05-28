const numbers=[10,20,30]

Array.prototype.dctForEach=function(callback){
    for(let i=0;i<this.length;i++){
             callback(this[i],i,this)
    }
}

numbers.dctForEach(function(ele){
    console.log(ele)
})