import { useCallback, useState } from "react";
import { shallowEquals } from "../equals";

export const useShallowState = <T>(initialValue: T | (() => T)): [T, (newValue: T) => void] => {
  const [state, setState] = useState<T>(initialValue);

  const setShallowState = useCallback((newValue: T) => {
    setState((prevState) => {
      if (!shallowEquals(prevState, newValue)) return newValue;
      return prevState;
    });
  }, []);

  return [state, setShallowState];
};
