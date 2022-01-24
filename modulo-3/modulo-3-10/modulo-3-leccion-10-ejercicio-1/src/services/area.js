const getSquareArea = (num) => {
    if (num === undefined) {
        return undefined
    } else {
        return num * num;
    }
} 

const getTriangleArea = (base, height) => (base * height) / 2;

const areas = {
    getSquareArea: getSquareArea,
    getTriangleArea: getTriangleArea
}

export default areas;