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

    search(value){
        let current = this.root;
        for(let char of value){
            if(!current.children[char]){
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    startsWith(prefix){
        let current = this.root;
        for(let char of prefix){
            if(!current.children[char]){
                return false;
            }
            current = current.children[char];
        }
        return true;
    }

    findPrefixNode(prefix){
        let current = this.root;

        for(let char of prefix){
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
            this.collectWords(node.children[char], currentWord + char, suggestions);
        }
    }

    autocomplete(prefix){
        const suggestions = [];
        
        const prefixNode = this.findPrefixNode(prefix);

        if(!prefixNode){
            return suggestions;
        }

        this.collectWords(prefixNode, prefix, suggestions);

        return suggestions;
    }
}

const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert("category");
trie.insert("dog");
trie.insert("dodge");
console.log(trie.search('apple'));
console.log(trie.startsWith('apple'));
console.log(trie.autocomplete('ap'));
console.log(trie.autocomplete('ca'));