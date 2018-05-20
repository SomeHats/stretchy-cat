// @flow
import invariant from 'invariant';

const canvas = document.getElementById('canvas');
invariant(canvas && canvas instanceof HTMLCanvasElement, 'canvas must exist');
const ctx = canvas.getContext('2d');

const body = document.body;
invariant(body, 'body must exist');

const width = body.clientWidth;
const height = body.clientHeight;
const vw = width / 100;
const vh = height / 100;
const scale = window.devicePixelRatio || 1;

canvas.width = width * scale;
canvas.height = height * scale;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
ctx.scale(scale, scale);

export { body, canvas, ctx, width, height, scale, vw, vh };
