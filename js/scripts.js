function getTriangleArea(a, h) {
    if (a <= 0) {
        document.write('Nieprawidłowe dane');
    } else if (h <= 0) {
        document.write('Nieprawidłowe dane');        
    } else if (a > 0) {
        return a * h / 2;
    } else if (h > 0) {
        return a * h / 2;
    } 
}
console.log(getTriangleArea(10, 6));