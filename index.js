function addingEventListener() {
    const input = document.getElementById('button');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  // Calling the addingEventListener function to ensure the listener is set up
  addingEventListener();
  
  // Exporting the function if needed (depending on your test setup)
  // module.exports = addingEventListener;
  