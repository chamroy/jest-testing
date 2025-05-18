function analyzeArray(arr){
    if(!Array.isArray(arr) || arr.length === 0) throw new Error("input must not be empty and should be an array");

    const sum = arr.reduce((total, num) =>total + num, 0 );
    const average = sum/arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return{
        average, min, max, length
    }

}
module.exports = analyzeArray