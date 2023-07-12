// actions.js
export const startTimer = () => {
    return { type: 'START_TIMER' };
  };
  
  export const pauseTimer = () => {
    return { type: 'PAUSE_TIMER' };
  };
  
  export const resetTimer = () => {
    return { type: 'RESET_TIMER' };
  };
  
  export const decrementTime = () => {
    return { type: 'DECREMENT_TIME' };
  };
  