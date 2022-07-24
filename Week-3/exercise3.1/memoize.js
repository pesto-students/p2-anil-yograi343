const add=(...args)=> {
    let sum=0;
    for (let i of args){
        sum=sum+i;
    }
    return sum;
}


const memoize = (fn) => {
    let cache = new Map();
    return function (...args) {
        let key=args.toString();
        if (cache.has(key)) {
            console.log('Without Computing:');
            console.log(cache);
            return cache.get(key);
        }
        cache.set(key,fn(...args));
        console.log('Adding to cache:');
        console.log(cache);
        return cache.get(key);
    }
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100)); // => 200
console.log(memoizeAdd(100)); // => 100
console.log(memoizeAdd(100, 200)); // => 300
console.log(memoizeAdd(100, 100)); // => 200 - without computing
console.log(memoizeAdd(200, 100)); // => 300 - without computing