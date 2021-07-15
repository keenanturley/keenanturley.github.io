const jamButton = document.getElementById('jam-button');
const jam = document.getElementById('jam');
jam.volume = 0;

const secondsUntilJam = 32.5;
const timeToPump = 30;
const maxPump = 0.25;
const pump = 0.0025;

const startJamming = () => {
  jamButton.remove();
  document.body.classList.add('jammer', 'pre-jam');
  setTimeout(
    () => {
      document.body.classList.remove('pre-jam');
      document.body.classList.add('jamming');
    }, 
    secondsUntilJam * 1000
  );
    
  jam.play();
  const pumpUpTheJam = setInterval(() => {
    if (jam.volume >= maxPump) clearInterval(pumpUpTheJam);
    jam.volume += pump;
  }, (1000 * timeToPump) / (maxPump / pump));
}

jamButton.addEventListener('click', startJamming);