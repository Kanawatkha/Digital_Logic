/** Turns a content node id ("worked-solutions/04/h2-3.h3-5") into a safe DOM id. */
export function anchorId(nodeId: string): string {
  return `n-${nodeId.replace(/[^A-Za-z0-9._-]+/g, '-')}`;
}
