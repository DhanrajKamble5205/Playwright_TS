
export function getMaxWindowSize(): void {
  window.moveTo(0, 0);
  window.resizeTo(screen.availWidth, screen.availHeight);
}