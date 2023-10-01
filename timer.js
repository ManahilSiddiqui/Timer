class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      if (callbacks) {
        this.onStart = callbacks.onStart;
      }
  
      this.startButton.addEventListener('click', this.start);
      this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if (this.onStart) {
          this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
      };
    
      pause = () => {
        clearInterval(this.interval);
      };
    
      tick = () => {
        if (this.timeRemaining <= 0) {
          this.pause();
        } else {
          this.timeRemaining = this.timeRemaining - 1;
        }
      };
    
      get timeRemaining() {
        return parseFloat(this.durationInput.value);
      }
    
      set timeRemaining(time) {
        this.durationInput.value = time;
      }
    }
    