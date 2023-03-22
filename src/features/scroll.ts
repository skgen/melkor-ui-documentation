const callbacks: ((evt: Event) => void)[] = [];
let isListening = false;

function handleScroll(evt: Event) {
  for (const callback of callbacks) {
    callback(evt);
  }
}

function startListeningToSroll() {
  isListening = true;
  document.addEventListener('scroll', handleScroll);
}

function stopListeningToScroll() {
  isListening = false;
  document.removeEventListener('scroll', handleScroll);
}

export function listenToScroll(callback: (evt: Event) => void) {
  callbacks.push(callback);

  if (!isListening) {
    startListeningToSroll();
  }

  return () => {
    const index = callbacks.indexOf(callback);
    callbacks.splice(index, 1);
    if (callbacks.length < 1 && isListening) {
      stopListeningToScroll();
    }
  };
}
