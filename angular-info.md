# Installation guide
## - nodejs

- install nodejs from https://nodejs.org
- u can install node-version-manager too for managing multiple node versions (different projects can use different node versions): https://github.com/coreybutler/nvm-windows:
- - download installer
- - nvm list (to list installed node versions)
- - nvm install 20.10.0 (to install specific version)
- - nvm use 20.10.0 (to swithc to a specific version)
- node -v (to check currently installed node version)

# - Angular

- https://angular.io - download it from here.
- - `npm install -g @angular/cli` (-g global - accessible from all projects in the system/computer). 
- - if specific repository is not specified than default packange manager will look at npmjs.com for default version
- - `ng --version` (to check current version)
- - `ng new storefront` (to initialize the project in current directory)
- - `code .` (from command promtpt of poweshell to open app in vs code)
- - `npm install` (to install all packages when copying a node project to local machine for the first time - to install packages/dependencies)

##
- [node_models] folder - contains all packages
- [package.json] file - contains all dependencies used by the project. Also contains **project/version/scripts** of the project. Scripts section very useful for creating/using **CUSTOM commands**
- [package-lock.json] file - contains all dependencies installed alongside with dependencies used by core dependencies. Dependencies are important so when deploying all proper dependencies/subdependencies and versions are used
- [angular.json] - check **architect section** which contains main sections **build**, **serve** - which contain also **configuration** section which says that any configuration params set there will be applied (files size for example). Similarly to build configuration there is the **serve configuration** section, internationalization, test (karma, jasmine...)

##
- [tsconfig.json] file - main TypeScript config file
- [tsconfig.app.json] file - additional TypeScript config file
- [tsconfig.spec.json] file - test TypeScript config file

##

##
- **styles.css** - global style file
- **main.ts** - main/starting point
- **index.html** - main html usually referring <app-root> component defined by app.ts
#
## Commands
`ng generate component home` - command to create component- by default goes to **app** folder<br>
`node server.js` - to run JS file locally - *server.js* in this case<br>
`ng serve` - start local server<br>
`ng serve` - start local server<br>
`ng generate service services/api` - creating a service


<br><br><br><br>
<br><br><br><br>

## Extensions to install#
`Angular Language Service` - provides toolikt for easier angular dev.
`Auto Rename Tag` - for Automatically rename paired HTML/XML tag, same as Visual Studio IDE does.
`Prettier - Code formatter` - for making code more beautiful
#
#
# Comparison of Frontend Frameworks and Node.js Roles

| Technology | Primary Role | Main Purpose | Requires Node.js in **Production**? | What You Deploy |
| :--- | :--- | :--- | :--- | :--- |
| **Angular / React / Vue**<br/>(Default / Client-Side) | **Frontend** | Build interactive User Interfaces (UIs) that run in the user's browser. | **No** | A folder of static files (`index.html`, JS, CSS) to any web server. |
| **Node.js**<br/>(Development Tooling) | **Development Tool** | The "factory" on your local PC. Used to run `npm`, `ng serve`, `npm run build`, and other development commands. | **No** | Nothing. It's only used *before* deployment to build the static files. |
| **Node.js**<br/>(Backend API) | **Backend** | Create a server to handle business logic, connect to a database, and send/receive data (JSON) from the frontend. | **Yes** | A running JavaScript application on a server that listens for API requests. |
| **Node.js**<br/>(with Next.js, Nuxt.js, Angular Universal) | **Backend / Frontend** | Server-Side Rendering (SSR). It runs the frontend framework on the server to pre-render HTML for SEO and faster loads. | **Yes** | A running JavaScript application on a server that renders and serves full HTML pages. |
