const notes = {
    "C": new Audio("https://www.soundjay.com/button/beep-07.wav"),
    "C#": new Audio("https://www.soundjay.com/button/beep-06.wav"),
    "D": new Audio("https://www.soundjay.com/button/beep-05.wav"),
    "D#": new Audio("https://www.soundjay.com/button/beep-04.wav"),
    "E": new Audio("https://www.soundjay.com/button/beep-03.wav"),
    "F": new Audio("https://www.soundjay.com/button/beep-02.wav"),
    "F#": new Audio("https://www.soundjay.com/button/beep-01.wav"),
    "G": new Audio("https://www.soundjay.com/button/beep-08.wav"),
    "G#": new Audio("https://www.soundjay.com/button/beep-09.wav"),
    "A": new Audio("https://www.soundjay.com/button/beep-10.wav"),
    "A#": new Audio("https://www.soundjay.com/button/beep-11.wav"),
    "B": new Audio("https://www.soundjay.com/button/beep-12.wav"),
    "C2": new Audio("https://www.soundjay.com/button/beep-13.wav")
  };
  
  document.querySelectorAll('.white-key').forEach(key => {
    key.addEventListener('click', () => {
      const note = key.getAttribute('data-note');
      notes[note].play();
    });
  });
  
  document.querySelectorAll('.black-key').forEach(key => {
    key.addEventListener('click', () => {
      const note = key.getAttribute('data-note');
      notes[note].play();
    });
  });
  
  document.addEventListener('keydown', (event) => {
    switch(event.key) {
      case 'a': notes['C'].play(); break;
      case 'w': notes['C#'].play(); break;
      case 's': notes['D'].play(); break;
      case 'e': notes['D#'].play(); break;
      case 'd': notes['E'].play(); break;
      case 'f': notes['F'].play(); break;
      case 't': notes['F#'].play(); break;
      case 'g': notes['G'].play(); break;
      case 'y': notes['G#'].play(); break;
      case 'h': notes['A'].play(); break;
      case 'u': notes['A#'].play(); break;
      case 'j': notes['B'].play(); break;
      case 'k': notes['C2'].play(); break;
    }
  });
  