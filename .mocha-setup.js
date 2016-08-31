const expect = require('expect');
const jsdom = require('jsdom').jsdom;
const doc = jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global['document'] = doc;
global['window'] = win;
global['navigator'] = {userAgent: 'node.js'};
global['HTMLElement'] = global['window'].HTMLElement;

global['expect'] = expect
global['createSpy'] = expect.createSpy
global['spyOn'] = expect.spyOn
global['isSpy'] = expect.isSpy