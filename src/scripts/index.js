// @flow
import 'pepjs';
import * as simulation from './simulation';
import draw from './draw';

type Drag = {
  startX: number,
  startY: number,
  currentX: number,
  currentY: number,
};

let drag: Drag | null = null;
const onPointerDown = (e: MouseEvent) => {
  drag = {
    startX: e.clientX,
    startY: e.clientY,
    currentX: e.clientX,
    currentY: e.clientY,
  };

  simulation.unlockCatHead();
};
const onPointerMove = (e: MouseEvent) => {
  if (!drag) return;
  const lastX = drag.currentX;
  const lastY = drag.currentY;
  drag.currentX = e.clientX;
  drag.currentY = e.clientY;

  simulation.translateCatHead(drag.currentX - lastX, drag.currentY - lastY);
};
const onPointerUp = (e: MouseEvent) => {
  if (!drag) return;
  drag = null;
  simulation.lockCatHead();
};

// $FlowFixMe - flow doesnt know about pointer events
document.addEventListener('pointerdown', onPointerDown, false);
// $FlowFixMe - flow doesnt know about pointer events
document.addEventListener('pointermove', onPointerMove, false);
// $FlowFixMe - flow doesnt know about pointer events
document.addEventListener('pointerup', onPointerUp, false);

let lastT = null;
const step = t => {
  if (lastT !== null) {
    const dt = t - lastT;
    simulation.tick(dt);
    draw();
  }

  lastT = t;
  window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);

// auto-refresh in dev mode
// $FlowFixMe - this isn't included in flow's module typedef
if (module.hot) module.hot.dispose(() => window.location.reload());
