/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { type DependencyList } from "react";
import { useMemo } from "./useMemo";

export function useCallback<T extends Function>(factory: T, deps: DependencyList): T {
  return useMemo(() => factory, deps);
}
