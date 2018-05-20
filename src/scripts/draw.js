// @flow
import { width, height, ctx, vw, vh } from './canvas';
import { getCatHeadPosition } from './simulation';

const EYE_COLOR = '#97DB4F';
const BOD_COLOR = '#42253B';
const DETAIL_COLOR = 'rgba(255, 255, 255, 0.5)';
const BG_1 = '#F1FFE7';
const BG_2 = '#C2E7DA';
const BG_3 = '#6290C3';

const draw = () => {
  ctx.fillStyle = BG_1;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = BG_2;
  ctx.fillRect(0, 80 * vh, width, 20 * vh);

  ctx.beginPath();
  const catHeadPosition = getCatHeadPosition();
  ctx.arc(catHeadPosition.x, catHeadPosition.y, 10 * vh, 0, 2 * Math.PI);
  ctx.fillStyle = BOD_COLOR;
  ctx.fill();
};

export default draw;
