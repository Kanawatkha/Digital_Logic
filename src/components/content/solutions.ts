import { createContext, useContext } from 'react';

export type SolutionsState = { show: boolean; setShow: (show: boolean) => void };

/** Whether the solutions of the exam pages are shown. Outside an exam page they are always shown. */
export const SolutionsContext = createContext<SolutionsState>({ show: true, setShow: () => {} });

export const useSolutions = () => useContext(SolutionsContext);
