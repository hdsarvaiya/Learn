
function sequence(s, temp, index) {
    if (index === s.length) {
        return [temp]; 
    }

    let take = sequence(s, temp + s[index], index + 1);
    let notTake = sequence(s, temp, index + 1);

    return take.concat(notTake);
}

x = sequence("abc", "", 0);

console.log(x);  
