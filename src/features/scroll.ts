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

let scrolling = false;

let deferNotScrolling: number | null = null;

export function isScrolling() {
  return scrolling;
}

let lastScroll: number | null = null;

listenToScroll(() => {
  scrolling = true;
  if (lastScroll !== null) {
    // const diff = Date.now() - lastScroll;
    // if (diff > 100) {
    //   console.log(`Scroll freq: ${diff}`);
    // }
  }
  lastScroll = Date.now();
  if (deferNotScrolling != null) {
    clearTimeout(deferNotScrolling);
  }
  deferNotScrolling = window.setTimeout(() => {
    scrolling = false;
    lastScroll = null;
  }, 500);
});
