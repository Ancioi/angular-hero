# Angular-Seed: the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app. I created it following the Quick Start official tutorial @https://angular.io/docs/ts/latest/quickstart.html.

Prerequisite: Install Node.js and npm
-------------------------------------

If Node.js and npm aren't already on your machine, [install](http://blog.npmjs.org/post/85484771375/how-to-install-npm)  them. This example requires node v4.x.x or higher and npm 3.x.x or higher. To check which version you are using, run node -v and npm -v in a terminal window. As newbie I found updating npm quite challenging, so the following is a useful [link](https://github.com/felixrieseberg/npm-windows-upgrade).

Step 1: Create and Configure the project
----------------------------------------

AngularJS has 4 main configuration files:

- **package.json** identifies npm package dependencies for the project.
- **tsconfig.json** defines how the TypeScript compiler generates JavaScript from the project's files.
- **typings.json** provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
- **systemjs.config.js** provides information to a module loader about where to find application modules, and registers all the necessary packages.

Learn more about these configuration files in the Npm Package Configuration guide and the TypeScript Configuration guide.

Install Packages
----------------

Using npm from the command line, install the packages listed in package.json with the command:

```
npm install
```

If the typings folder doesn't show up after running npm install, you'll need to install it manually with the command:

```
npm typings install
```

Step 2: Create the application
------------------------------

Angular applications are composed into closely related blocks of functionality with **NgModules**. Angular itself is split into separate Angular Modules. This makes it possible for to keep the project modular and easy to maintain by only importing the parts of Angular that your application needs.

Every Angular application has at least one module: the root module, usually named AppModule here. This is the entry point to your application.

Since this basic application is a web application that runs in a browser, the root module needs to import the BrowserModule from @angular/platform-browser to the imports array. This is the smallest amount of Angular that is needed for a minimal application to run in the browser.

Step 3: Create a component
--------------------------

Every Angular application has at least one component: the root component, usually named AppComponent here.

Components are the basic building blocks of Angular applications. A component controls a portion of the screen—a view—through its associated template.

The QuickStart application has the same essential structure as any other Angular component:

- **An import statement**. Importing gives your component access to Angular's core @Component decorator function.
- **A @Component decorator** that associates metadata with the AppComponent component class:
    - a selector that specifies a simple CSS selector for an HTML element that represents the component.
    - a template that tells Angular how to render the component's view.
- **A component class** that controls the appearance and behavior of a view through its template.

Since we don't need any application logic in this simple example, it's empty.

You export the AppComponent class so that you can import it into the application that you just created.

Step 4: Define the web page that hosts the application
------------------------------------------------------

In the project root folder, create an **index.html** containing the stub in html of the web page.

**Add some style:** Styles aren't essential, but they're nice, and index.html assumes that you have a stylesheet called styles.css.

Tour of Heroes
--------------

The project is to build an app to help a staffing agency manage its stable of heroes.

What we do build will have many of the features we expect to find in a full-blown, data-driven application: acquiring and displaying a list of heroes, editing a selected hero's detail, and navigating among different views of heroic data.

The Tour of Heroes covers the core fundamentals of Angular. We’ll use built-in directives to show/hide elements and display lists of hero data. We’ll create a component to display hero details and another to show an array of heroes. We'll use one-way data binding for read-only data. We'll add editable fields to update a model with two-way data binding. We'll bind component methods to user events like key strokes and clicks. We’ll learn to select a hero from a master list and edit that hero in the details view. We'll format data with pipes. We'll create a shared service to assemble our heroes. And we'll use routing to navigate among different views and their components. 

Listing with ngFor
------------------

One of the many feature covered in this application is displaying a list of objects. In particular here we want to list heroes. To achieve that we use the built-in command **ngFor** in our app component class. 

```
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
```

The (*) prefix to ngFor indicates that the list element and its children constitute a master template.

The ngFor directive iterates over the heroes array returned by the AppComponent.heroes property and stamps out instances of this template.

The quoted text assigned to ngFor means “take each hero in the heroes array, store it in the local hero variable, and make it available to the corresponding template instance”.

The let keyword before "hero" identifies hero as a template input variable. We can reference this variable within the template to access a hero’s properties.

Selecting a Hero
----------------

We have a list of heroes and we have a single hero displayed in our app. The list and the single hero are not connected in any way. We want the user to select a hero from our list, and have the selected hero appear in the details view. This UI pattern is widely known as "master-detail". In our case, the master is the heroes list and the detail is the selected hero.

Let’s connect the master to the detail through a selectedHero component property bound to a click event.

```
<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
</li>
```

Focus on the event binding

```
(click)="onSelect(hero)"
```

The parenthesis identify the element’s click event as the target. The expression to the right of the equal sign calls the AppComponent method, onSelect(), passing the template input variable hero as an argument. That’s the same hero variable we defined previously in the ngFor.

**REMARK**
**ngIf** and **ngFor** are called “structural directives” because they can change the structure of portions of the DOM. In other words, they give structure to the way Angular displays content in the DOM.

Single Responsibility Principle
-------------------------------

The Single Responsibility Principle [(SRP)](https://8thlight.com/blog/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html) states that each software module should have one and only one reason to change.

This is one of the main principle in software architecture and it focuses on modular composition of the code. 

Naming Convention
-----------------

We like to identify at a glance which classes are components and which files contain components.

Notice that we have an AppComponent in a file named app.component.ts and our new HeroDetailComponent is in a file named hero-detail.component.ts. All of our component names end in "Component". All of our component file names end in ".component".

We spell our file names in lower dash case (AKA kebab-case) so we don't worry about case sensitivity on the server or in source control.

Services
--------

Multiple components will need access to hero data and we don't want to copy and paste the same code over and over. Instead, we'll create a single reusable data service and learn to inject it in the components that need it.

Refactoring data access to a separate service keeps the component lean and focused on supporting the view. It also makes it easier to unit test the component with a mock service.

The consumer of our service doesn't know how the service gets the data. Our HeroService could get Hero data from anywhere. It could get the data from a web service or local storage or from a mock data source.

That's the beauty of removing data access from the component. We can change our minds about the implementation as often as we like, for whatever reason, without touching any of the components that need heroes.

Async Services and Promises
---------------------------

Someday we're going to get heroes from a remote server. We don’t call http yet, but we aspire to in later chapters.

When we do, we'll have to wait for the server to respond and we won't be able to block the UI while we wait, even if we want to (which we shouldn't) because the browser won't block.

We'll have to use some kind of asynchronous technique and that will change the signature of our getHeroes method.

We'll use Promises. The Hero Service makes a Promise

A Promise is ... well it's a promise to call us back later when the results are ready. We ask an asynchronous service to do some work and give it a callback function. It does that work (somewhere) and eventually it calls our function with the results of the work or an error.

**Act on the Promise:** As a result of our change to HeroService, we're now setting this.heroes to a Promise rather than an array of heroes.
                        
We have to change our implementation to act on the Promise when it resolves. When the Promise resolves successfully, then we will have heroes to display.
                        
We pass our callback function as an argument to the Promise's **then** method:

```
getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
```

Routing and Navigation
----------------------

Routing is another name for navigation. The router is the mechanism for navigating from view to view.

For code maintenance the navigation is usually encoded in the App Component that becomes a shell for this purpose. All the other components are moved out and separated from the App one.

The Angular router is an external, optional Angular **NgModule** called **RouterModule**. The router is a combination of multiple provided services (**RouterModule**), multiple directives (**RouterOutlet**, **RouterLink**, **RouterLinkActive**), and a configuration (**Routes**). We'll configure our routes first.

Routes tell the router which views to display when a user clicks a link or pastes a URL into the browser address bar. The Routes are an array of route definitions. This route definition has the following parts:

- **path:** the router matches this route's path to the URL in the browser address bar (heroes).
- **component:** the component that the router should create when navigating to this route (HeroesComponent).

We use the ```forRoot``` method because we're providing a configured ```router``` at the root of the application. The ```forRoot``` method gives us the ```Router``` service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.


Add the base tag
----------------

Open index.html and add ```<base href="/">``` at the top of the ```<head>``` section.

Refactor routes to a Routing Module
-----------------------------------

Almost 20 lines of ```AppModule``` are devoted to configuring four ```routes```. Most application have many more ```routes``` and they add guard services to protect against unwanted or unauthorized navigations. Routing considerations could quickly dominate this module and obscure its primary purpose which is to establish key facts about the entire app for the Angular compiler.

We should refactor the routing configuration into its own class. What kind of class? The current ```RouterModule.forRoot()``` produces an Angular ```ModuleWithProviders``` which suggests that a class dedicated to routing should be some kind of module. It should be a ```Routing Module```.

By convention the name of a ```Routing Module``` contains the word "Routing" and aligns with the name of the module that declares the components navigated to.

Noteworthy points, typical of Routing Modules:

- Pull the ```routes``` into a variable. You might export it in future and it clarifies the ```Routing Module``` pattern.
- Add ```RouterModule.forRoot(routes)``` to imports.
- Add ```RouterModule``` to exports so that the components in the companion module have access to ```Router``` declarables such as ```RouterLink``` and ```RouterOutlet```.
- No declarations! Declarations are the responsibility of the companion module.
- Add module providers for guard services if you have them; there are none in this example.
