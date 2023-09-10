import { useEffect, useRef } from 'react';

const useOutsideClick = (handler, listenCaputring = true) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler('');
    };

    // Because events work in bubling phase but we need to change that to capuring phase, so we add true as the third argument to event listener (add and remove)
    document.addEventListener('click', handleClick, listenCaputring);
    return () =>
      document.removeEventListener('click', handleClick, listenCaputring);
  }, [handler, listenCaputring]);

  return ref;
};

export default useOutsideClick;
