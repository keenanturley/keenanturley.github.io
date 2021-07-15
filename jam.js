const jam = document.getElementById('jam');
jam.volume = 0;

const secondsUntilJam = 32.5;
const timeToPump = 30;
const maxPump = 0.4;
const pump = 0.01;

const startJamming = () => {
  setTimeout(
    () => document.body.classList.add('jamming'), 
    secondsUntilJam * 1000
    );
    
  jam.play();
  const pumpUpTheJam = setInterval(() => {
    console.log(jam.volume);
    if (jam.volume >= maxPump) clearInterval(pumpUpTheJam);
    jam.volume += pump;
  }, (1000 * timeToPump) / (maxPump / pump));
}

jam.addEventListener('canplay', startJamming());