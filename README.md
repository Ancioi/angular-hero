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
