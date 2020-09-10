# citrix-iws

> citrix-iws is a library which provides common functions to test integration between Microapps Admin and Citrix Worskspace

## Getting Started

### Installation

To use citrix-iws in your project, run:

```bash
npm i citrix-iws
# or "yarn add citrix-iws"
```

**Example** - How to use.

Import package and call login to Workspace

```js
import { CitrixCloud, Workspace, MicroappsAdmin } from "citrix-iws";
const workspace = new Workspace();

(async () => {
  await workspace.login({ page, url: workspaceUrl, username, password, idp });
  await page.waitForSelector("#notification-home-feed-cards", { visible: true });
})();
```