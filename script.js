/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n  // amount to spend
 *  2. INTEGER c // cost per bar
 *  3. INTEGER m  // wrapper exchange rate
 */

const chocolateFeast = (n, c, m) => {
    let uneatenCount = Math.floor(n / c);;
    let eatenCount = uneatenCount;
    let wrapperCount = uneatenCount;
    
    uneatenCount = 0;
    
    while(wrapperCount >= m) {
        uneatenCount = Math.floor(wrapperCount / m);
        wrapperCount = wrapperCount % m;
        eatenCount +=uneatenCount;
        wrapperCount +=uneatenCount;
        uneatenCount = 0;
    }
    
    console.log(eatenCount);
    return eatenCount
}

////////////////////////////////////////////////////////////
// optimal 
const chocolateFeast = (n, c, m) => {
    let wrappers = Math.floor(n / c);
    return wrappers + Math.ceil(wrappers / (m - 1)) - 1;
}
