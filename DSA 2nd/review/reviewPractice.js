class TextEditor{
    constructor(){
        this.undoStack = [];
        this.redoStack = [];
        this.text = "";
    }

    type(newText){

        this.undoStack.push(this.text);
        this.text = newText;
        this.redoStack = [];

    }
    
    undo(){
        if(this.undoStack.length === 0){
            console.log('nothing to undo');
            return;
        }
        this.redoStack.push(this.text);
        this.text = this.undoStack.pop();
    }

    redo(){
        if(this.redoStack.length === 0){
            console.log('nothing to redo');
            return;
        }
        this.undoStack(this.text);
        this.text = this.redoStack.pop();
    }

    print(){
        console.log(this.text);
    }
}

const t = new TextEditor();

t.type('hello');

t.print();