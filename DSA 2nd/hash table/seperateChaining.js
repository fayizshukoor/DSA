class HashTable{
    constructor(size = 11){
        this.table = new Array(size);
        this.size = size;
    }
    
    hash(key){
        let hash = 0;
        let prime = 31;
        key = key.toString();
        for(let char of key){
            hash = (hash * prime + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }
    
    set(key, value){
        const index = this.hash(key);
        if(!this.table[index]){
            this.table[index] =[];
        }
        
        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair[1] = value;
                return;
            }
        }
        
        this.table[index].push([key, value]);
    }
    
    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        
        if(bucket){
            for(let pair of bucket){
            if(pair[0] === key){
                return pair[1];
            }
        }
    }
        return undefined;
        
    }
    
    remove(key){
        const index = this.hash(key);
        let bucket = this.table[index];
        
        if(bucket){
            this.table[index] = this.table[index].filter(pair => pair[0] !== key);
        }
    }
    
    print(){
        this.table.forEach((bucket, index)=>{
            console.log(index, bucket);
        })
    }
}

const ht = new HashTable();
ht.set('name', 'fayiz');
ht.set('age', 'fayiz');
ht.set('mane','colission test');
// console.log(ht.get('name'));
// console.log(ht.get('age'));
ht.print();

