// 4.	Point Distance

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2){
        const px = p1.x - p2.x;
        const py = p1.y - p2.y;
        return Math.sqrt(px ** 2 + py ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
