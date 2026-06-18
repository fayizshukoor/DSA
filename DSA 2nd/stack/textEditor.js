class TextEditor {
    constructor() {
        this.text = "";
        this.undoStack = [];
        this.redoStack = [];
    }

    type(newText) {

        // save current state
        this.undoStack.push(this.text);

        // update text
        this.text = newText;

        // clear redo history
        this.redoStack = [];
    }

    undo() {

        if (this.undoStack.length === 0) {
            console.log("Nothing to undo");
            return;
        }

        // save current state for redo
        this.redoStack.push(this.text);

        // restore previous state
        this.text = this.undoStack.pop();
    }

    redo() {

        if (this.redoStack.length === 0) {
            console.log("Nothing to redo");
            return;
        }

        // save current state into undo
        this.undoStack.push(this.text);

        // restore redo state
        this.text = this.redoStack.pop();
    }

    show() {
        console.log(this.text);
    }
}