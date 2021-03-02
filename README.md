# Microapps Automation Helper
 [![GitHub license](https://img.shields.io/badge/license-ISC-green.svg)](https://github.com/citrix-workspace/microapps-automation-helper/blob/master/LICENSE) ![npm](https://img.shields.io/npm/v/microapps-automation-helper)
### [API reference](https://github.com/citrix-workspace/microapps-automation-helper/blob/master/API-REFERENCE.md)
> Microapps automation helper is a library which provides common functions to test integration between Microapps Admin and Citrix Worskspace

## Getting Started

### Installation

To use microapps-automation-helper in your project, run:

```bash
npm i microapps-automation-helper
# or "yarn add microapps-automation-helper"
```

**Example** - How to use.

Import package and call login to Workspace

```ts
import { CitrixCloud, Workspace, MicroappsAdmin } from "microapps-automation-helper";
const workspace = new Workspace();

(async () => {
  await workspace.login({ page, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider });
  await page.waitForSelector("#notification-home-feed-cards", { visible: true });
})();
