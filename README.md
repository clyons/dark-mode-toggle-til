# Two states are enough

A tiny, dependency-free dark-mode toggle inspired by Lea Verou’s [Dark mode toggles: two states are enough](https://lea.verou.me/blog/2026/dark-mode-toggles/).

[View the live demo](https://clyons.github.io/dark-mode-toggle-til/)

[Read the TIL](https://ciaranlyons.com/til/2026/09/07/two-state-dark-mode-toggles)

The browser preference remains the default. When a reader toggles, the demo stores only the opposite colour scheme as an explicit override. Toggling back to the system-resolved colour removes that override, so the page follows the browser again.

Open `index.html` in a browser, or serve this directory with any static HTTP server. The selected scheme is applied in the document head before the stylesheet loads, and the same toggle logic drives the desktop and compact mobile controls.

The palette comes from [CiaranLyons.com](https://ciaranlyons.com): green `#062b20`, cream `#f3ead8`, mint `#a8c4b9`, and orange `#ff9b55`.
