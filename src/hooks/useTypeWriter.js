import { useState, useEffect, useRef } from 'react';

export function useTypeWriter(text, speed = 38, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const started = useRef(false);

  const trigger = () => {
    if (!started.current) {
      started.current = true;
      setEnabled(true);
    }
  };

  useEffect(() => {
    if (!enabled) return;
    setDisplayed('');
    setDone(false);

    const timeout = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(id);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(id);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [enabled, text, speed, startDelay]);

  return { displayed, done, trigger };
}
