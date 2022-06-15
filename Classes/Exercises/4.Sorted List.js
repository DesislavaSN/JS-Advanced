// 4.	Sorted List

class List {
    constructor(){
        this.collection = [];
        this.size = this.collection.length;
    }

    add(el){
        this.collection.push(el);
        this.size = this.collection.length;
        this.collection.sort((a,b) => a-b);
    }

    remove(index){
        if (index < 0 || index >= this.collection.length) {
            throw new Error('The index is outside the boundary');
        } 
        this.collection.splice(index,1);
        this.size = this.collection.length;
        // this.collection.sort((a,b) => a-b);
    }

    get(index){
        // this.collection.sort((a,b) => a-b);
        return this.collection[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
// list.remove(10);
list.add(7);
// console.log(list);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
// console.log(list);

