function singleClick(){
    document.getElementById('Mouse_Event').textContent="Clicked!!!!";
    }
    function doubleClick(){
        document.getElementById('Mouse_Event').textContent="Double Clicked!!!!";
    }
    function handleKeyDown() {
        document.getElementById('Keyboard_Event').textContent = "Key Down!";
    }
    
    function handleKeyUp() {
        document.getElementById('Keyboard_Event').textContent = "Key Up!";
    }
    function handleSubmit(event) {
        event.preventDefault(); 
        const nameInput = document.getElementById('name-input');
        const emailInput = document.getElementById('email-input');
        const name = nameInput.value;
        const email = emailInput.value;
        const formEventResult = document.getElementById('formEventResult');
        formEventResult.textContent = `Name: ${name}\nEmail: ${email}`;
      }
      function allowDrop(event) {
        event.preventDefault();
    }
    
    function dragStart(event) {
        event.dataTransfer.setData("text", event.target.id);
        event.target.textContent = "Dragged";
    }
    
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text"); 
        var dragBox = document.getElementById(data);
        var dropBox = event.target; 
        dropBox.appendChild(dragBox);
        dropBox.textContent = "Dropped";
    }
    const videoPlayer = document.getElementById('videoPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');
    playButton.addEventListener('click', function() {
      videoPlayer.play();
    });
    pauseButton.addEventListener('click', function() {
      videoPlayer.pause();
    });
    resetButton.addEventListener('click', function() {
      videoPlayer.currentTime = 0;
      videoPlayer.pause();
    });function toggleBlur() {
      const image = document.querySelector('img');
      image.classList.toggle('blurred');
  }
  const audioElement = document.getElementById("myAudio");
  
  function playAudio() {
      audioElement.play();
  }
  
  function pauseAudio() {
      audioElement.pause();
  }