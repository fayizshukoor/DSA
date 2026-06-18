class Node{
    constructor(data, next=null, prev=null){
      this.data = data;
      this.next = next;
      this.prev = prev;
    }
  }
  
  class MusicPlayer{
    constructor(){
      this.front = null;
      this.rear = null;
      this.current = null;
      
    }
    
    enqueue(music){
      let newNode = new Node(music);
      
      if(!this.front){
        this.front = newNode;
        this.rear = newNode;
        this.current = newNode;
      }else{
        this.rear.next = newNode;
        newNode.prev = this.rear;
        this.rear = newNode;
      }
    }
    
    dequeue(){
      
      if(!this.front){
        console.log("queue is empty");
        return;
      }
      let removingElement = this.front;
      this.front = this.front.next;
      
      if(this.front){
          this.front.prev = null;
      }else{
          this.rear = null;
      }
      
      if(removingElement === this.current){
          this.current = this.front;
      }
      
      return removingElement.data;
      
    }
    
    print(){
      if(!this.front){
        console.log('queue is empty');
        return;
      }
      
      let temp = this.front;
      while(temp){
        console.log(temp.data);
        temp = temp.next;
      }
    }
    
    play(){
      
      if(!this.current){
        console.log("no music playing");
        return;
      }
      
      console.log('playing:',this.current.data);
      
    }
    
    pause(){
      if(!this.current){
        console.log('no music playing');
        return;
      }
      
      console.log('pausing:',this.current.data);
    }
    
    next(){
      
      if(!this.current || !this.current.next){
        console.log('no musics to play next');
        return;
      }
      
      this.current = this.current.next;
      
      console.log("next music:",this.current.data);
      
    }
    
    prev(){
      if(!this.current || !this.current.prev){
        console.log('no songs in prev');
        return;
      }
      this.current = this.current.prev;
      console.log('prev music:', this.current.data);
    }
  }
  
  
  const music = new MusicPlayer();
  music.enqueue("music1");
  music.enqueue("music2");
  music.enqueue("music3");
  music.enqueue("music4");
  
  music.play();
  music.pause();
  music.next();
  music.next();
  music.next();
  music.next();
  music.prev();
  music.prev();
  music.prev();
      
      