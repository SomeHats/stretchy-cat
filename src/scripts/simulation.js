// @flow
import rebound from 'rebound';
import { vw, vh } from './canvas';

const HEAD_TENSION = 30;
const HEAD_FRICTION = 2;
const HEAD_DEFAULT_X = 50 * vw;
const HEAD_DEFAULT_Y = 50 * vh;

const looper = new rebound.SteppingSimulationLooper();
const springSystem = new rebound.SpringSystem(looper);

let isCatHeadLocked = true;
export const lockCatHead = () => {
  isCatHeadLocked = true;
};
export const unlockCatHead = () => {
  isCatHeadLocked = false;
};

const catHeadXSpring = springSystem.createSpring(HEAD_TENSION, HEAD_FRICTION);
const catHeadYSpring = springSystem.createSpring(HEAD_TENSION, HEAD_FRICTION);
catHeadXSpring.setCurrentValue(HEAD_DEFAULT_X);
catHeadYSpring.setCurrentValue(HEAD_DEFAULT_Y);

export const getCatHeadPosition = (): { x: number, y: number } => ({
  x: catHeadXSpring.getCurrentValue(),
  y: catHeadYSpring.getCurrentValue(),
});

export const translateCatHead = (dx: number, dy: number) => {
  catHeadXSpring.setEndValue(catHeadXSpring.getEndValue() + dx);
  catHeadYSpring.setEndValue(catHeadYSpring.getEndValue() + dy);
};

export const tick = (dt: number) => {
  if (isCatHeadLocked) {
    catHeadXSpring.setEndValue(HEAD_DEFAULT_X);
    catHeadYSpring.setEndValue(HEAD_DEFAULT_Y);
  }

  looper.step(dt);
};
