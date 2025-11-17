let cache = {}

function add(a,b){
    const res=a+b;
    if(!cache[res]){
        cache[res]=res;
        return cache[res];
    } else if(cache[res]!=res){
        
    }

}

memoizedOne=add(1,2)