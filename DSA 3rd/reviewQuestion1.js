// question 1

class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    
    insert(value){
        let current = this.root;
        for(let char of value){
            if(!current.children[char]){
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }
    
    findPrefixNode(node){
        let current = this.root;
        
        for(let char of node){
            if(!current.children[char]){
                return null;
            }
            current = current.children[char];
        }
        return current;
    }
    
    collectWords(node, currentWord, suggestions){
        if(node.isEndOfWord){
            suggestions.push(currentWord);
        }
        
        for(const char in node.children){
            this.collectWords(node.children[char], currentWord+char, suggestions);
        }
    }
    
    autocomplete(prefix){
        let suggestions = [];
        let prefixNode = this.findPrefixNode(prefix);
        if(!prefixNode){
            return suggestions;
        }
        
        this.collectWords(prefixNode, prefix, suggestions);
        return suggestions;
    }

    getAllWords(){
        let words = [];
        this.collectWords(this.root, "", words);
        return words;
    }

    serialize(){
        return JSON.stringify(this.getAllWords());
    }

    static deserialize(data){
        let words = JSON.parse(data);
        let trie = new Trie();

        for(let word of words){
            trie.insert(word);
        }

        return trie;
    }
}

let trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('ape');
trie.insert('bat');
console.log(trie.autocomplete('ap'));
console.log(trie.autocomplete('b'));


// Serialize

let savedData = trie.serialize();
console.log("Serialized data:",savedData);

// Deserialize

let newTrie = Trie.deserialize(savedData);

console.log(newTrie.autocomplete('ap'));
console.log(newTrie.autocomplete('b'));