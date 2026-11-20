import type { Term } from '@/config/site';

/** The exam page of a term, for the switch between the midterm and the final. */
export const examPath = (term: Term): string => `/exam/${term}`;

/** The formula sheet of a term. */
export const formulasPath = (term: Term): string => `/formulas/${term}`;
