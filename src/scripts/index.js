// @flow
document.write('Hello, world!');

// auto-refresh in dev mode
// $FlowFixMe - this isn't included in flow's module typedef
if (module.hot) module.hot.dispose(() => window.location.reload());
