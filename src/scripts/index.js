document.write('Hello, world!');

// auto-refresh
if (module.hot) module.hot.dispose(() => window.location.reload());
