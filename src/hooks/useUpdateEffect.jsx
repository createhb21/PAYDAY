import { useRef, useEffect } from 'react';

const useUpdateEffect = (effect, dependencies) => {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (!isFirstMount.current) effect();
    else isFirstMount.current = false;
  }, [effect, dependencies]);
};

export default useUpdateEffect;
