/**
 * Colors of the board drawing. They copy the real board (green PCB, cream breadboards, red and
 * yellow buttons), so they are not site tokens (see LAB-PLAN.md, section 8).
 */
export const BOARD_COLORS = {
  frame: '#3a3e41',
  frameEdge: '#26292b',
  pcb: '#2e7a48',
  pcbDark: '#236239',
  pcbLight: '#3d8d58',
  trace: '#2a6e42',
  silk: '#e4f2e2',
  silkDim: '#a9d2ae',
  chip: '#1c1c1e',
  chipEdge: '#3b3b3f',
  chipText: '#8c8f94',
  pin: '#bcc0c4',
  socket: '#1d1e20',
  socketHole: '#53555a',
  resistor: '#6da3da',
  resistorEdge: '#3e6ca1',
  band: '#24324a',
  led: '#d9342e',
  ledDim: '#9b2622',
  ledGreen: '#5cc44d',
  ledYellow: '#ecd53c',
  segOff: '#8c1c20',
  segOn: '#ff4036',
  segBody: '#2a0a0c',
  segBezel: '#4a1517',
  buttonRed: '#c9232c',
  buttonRedDark: '#861017',
  buttonYellow: '#e9ba3b',
  buttonYellowDark: '#b4871c',
  knob: '#17181a',
  knobCap: '#ebc83b',
  knobRed: '#d62b25',
  screwBlock: '#3fae4a',
  screwBlockDark: '#2a7a33',
  screw: '#b8bcc0',
  capBody: '#2b2d31',
  capTop: '#d7d9dc',
  capCeramic: '#e8c43a',
  white: '#f4f4f0',
  cream: '#f3eedc',
  creamYellow: '#ecdfae',
  creamGroove: '#d6cfb2',
  creamEdge: '#cbc4a3',
  hole: '#5f5a47',
  cable: '#17181a',
} as const;

export const SILK_FONT = "Inter, 'Helvetica Neue', Arial, sans-serif";

/** The jumper wire colors a student can pick, in the order of the toolbar. */
export const WIRE_COLOR_NAMES = [
  'red',
  'black',
  'blue',
  'green',
  'yellow',
  'orange',
  'white',
  'purple',
] as const;
export type WireColor = (typeof WIRE_COLOR_NAMES)[number];

/** Insulation color and a darker rim that keeps every color readable on cream and on green. */
export const WIRE_COLORS: Readonly<Record<WireColor, { body: string; edge: string }>> = {
  red: { body: '#dc3b36', edge: '#7d1714' },
  black: { body: '#2b2d31', edge: '#0d0e10' },
  blue: { body: '#3478d8', edge: '#173f80' },
  green: { body: '#33a553', edge: '#17602c' },
  yellow: { body: '#ecca33', edge: '#8f7608' },
  orange: { body: '#f08c2b', edge: '#8f4d0a' },
  white: { body: '#f3f3ee', edge: '#8b8d86' },
  purple: { body: '#8d57c9', edge: '#4b2678' },
};

/** The signal view: what a wire carries, drawn around it. */
export const SIGNAL_COLORS = {
  /** The glow of a wire at 1 */
  high: '#ffae1a',
  /** The thin dark core of a wire at 0 */
  low: '#101214',
  /** A wire that carries nothing is drawn as dashes of this color over its own */
  floating: '#ffffff',
  /** Two outputs fighting on the wire */
  conflict: '#ff3b30',
} as const;

/** Halo, handles and snap rings drawn over the board while editing wires. */
export const EDIT_COLORS = {
  halo: '#4cc3ff',
  handle: '#ffffff',
  handleEdge: '#0d6b9c',
  /** A chip that cannot go where it is held */
  invalid: '#ff5a52',
  /** The hint badge on a chip, and the text on it */
  badge: '#f3b93b',
  badgeText: '#2b1d00',
} as const;
