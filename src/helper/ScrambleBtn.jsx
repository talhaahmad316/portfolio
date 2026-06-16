import { useRef, useState, useEffect } from 'react';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

export default function ScrambleBtn({
  label,
  href,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
  download,
}) {
  const intervalRef = useRef(null);
  const [text, setText] = useState(label);

  useEffect(() => {
    setText(label);
  }, [label]);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = label
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (pos / CYCLES_PER_LETTER > index) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');
      setText(scrambled);
      pos++;
      if (pos >= label.length * CYCLES_PER_LETTER) stopScramble();
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(label);
  };

  const shared = {
    className: `${className} btn-scramble`,
    onMouseEnter: scramble,
    onMouseLeave: stopScramble,
  };

  const inner = (
    <>
      <span className="btn-scramble-text">{text}</span>
      <span className="btn-scramble-shine" aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <a {...shared} href={href} download={download} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <button {...shared} type={type} onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}