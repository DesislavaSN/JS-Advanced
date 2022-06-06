//6.	List Processor

function listProcessor(inputArr){
    let inner = [];

    for (const el of inputArr) {
        let [command, str] = el.split(' ');
        // console.log(command, str);
        if (command == 'add') {
            add(str);
        } else if (command == 'remove') {
            remove(str);
        } else {
            print();
        }
    }


    function add(str){
        inner.push(str);
    }

    function remove(str){
        inner = inner.filter(el => el !== str);
    }

    function print(){
        console.log(inner.join(','));
    }

}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log('---');
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])