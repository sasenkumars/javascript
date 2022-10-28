function heightOfTriangularPrism(volume,perimeter,radius){
    let baseArea = radius * (perimeter / 2);

    let height = volume / baseArea ;

    return height ;

}

console.log(heightOfTriangularPrism(270,15,3));