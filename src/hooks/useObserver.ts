import { RefObject } from 'react';

interface useObserverPropsType<T> {
  ref: RefObject<T>;
  callback: () => void;
  threshold: number;
}

type useObserverReturnType = [() => void, () => void];

const useObserver = <T extends Element>({
  ref,
  callback,
  threshold,
}: useObserverPropsType<T>): useObserverReturnType => {
  let observer: IntersectionObserver;

  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    });
  };

  const observe = () => {
    if (ref.current) {
      observer = new IntersectionObserver(handleIntersection, {
        threshold,
      });
      observer.observe(ref.current);
    }
  };

  const disconnect = () => observer && observer.disconnect();

  return [observe, disconnect];
};

export default useObserver;
