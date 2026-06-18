class HashTable{
    constructor(size=11){
        this.table = new Array(size);
        this.size = size;
        this.DELETED = Symbol('deleted');
    }
    
    hash1(key){
        let hash = 0;
        key = key.toString();
        for(let i=0; i<key.length; i++){
            hash = (hash * 31 + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }
    
    hash2(key){
        let hash =0;
        key = key.toString();
        for(let i=0; i<key.length; i++){
            hash = (hash * 17 + key.charCodeAt(i)) % this.size;
        }
        return 1+(hash % (this.size-1));
    }
    
    set(key, value){
        const originalIndex = this.hash1(key);
        const step = this.hash2(key);
        let i=0;
        
        while(i < this.size){
            let index = (originalIndex + i * step) % this.size;
            
            if(this.table[index] === undefined || this.table[index] === this.DELETED){
                this.table[index] = [key, value];
                return;
            }
            
            if(this.table[index][0] === key){
                this.table[index][1] = value;
                return;
            }
            
            i++;
        }
        throw Error('hash table full');
    }
    
    get(key){
        const originalIndex = this.hash1(key);
        const step = this.hash2(key);
        let i=0;
        
        while(i<this.size){
            let index = (originalIndex + i * step) % this.size;
            
            if(this.table[index] === undefined){
                return undefined;
            }
            
            if(this.table[index] !== this.DELETED && this.table[index][0] === key){
                return this.table[index][1];
            }
            
            i++;
        }
        return undefined;
    }
    
    remove(key){
        const originalIndex = this.hash1(key);
        const step = this.hash2(key);
        
        let i=0;
        
        while(i < this.size){
            let index = (originalIndex + i * step) % this.size;
            
            if(this.table[index] === undefined){
                return false;
            }
            
            if(this.table[index] !== this.DELETED && this.table[index][0] === key){
                this.table[index] = this.DELETED;
                return true;
            }
            i++;
        }
        return false;
    }
    
    print(){
        this.table.forEach((item, index)=> console.log(index, item));
    }
}

const ht = new HashTable();
ht.set('name','fayiz');
ht.set('age',20);
ht.set('city','calicut');
console.log(ht.remove('age'));
ht.print();