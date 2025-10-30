function calculateVolume(length, breadth, height) {
    return length * breadth * height;
}

const volume = calculateVolume(10, 5, 2);
console.log(volume);


function curryCalculateVolume(length) {
    return function (breadth)
    {
        return function (height)
        {
            return length * breadth * height;
        }
    }
}

const leng = curryCalculateVolume(10);
const bred = leng(5);
const hgt = bred(2);
console.log(hgt);

const vol = curryCalculateVolume(10)(2)(5);
console.log(vol);
