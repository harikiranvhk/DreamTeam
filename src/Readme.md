<!-- This is how to run UI application -->
ng serve


Interview Questions:
1)Two way data binding
2)what is the role of component
3)what are selectors
4)what are modules
5)String Interpolation
6)Angular lifecycle Hooks
Routing:
 1) What is SPA
 2)What is routing
 3)Programatic Routing
 4)How will you pass Dynamic paramters to URL
 5)How to extract parameters from url
 6)Lazy Loading
 7)child routing
 
 Forms(Reactive Forms):
 1)How to add reactive Validations
 


Two Way Data Binding:
** if we change from template, that change should reflect in component - [(ngModel)]
same way, if we change in component it should get updated in template
It is the method where we listen to element change and syntax is [(ngModel)]
Refer code in app.component.ts(106),app.component.html(59)

Components:

 consits of various functions and global variables and by default it comes with  a constructor and the components is a combination of 4 files ie html,css,ts,testing
--Each component must be registered to a module



Selector:
Example: header and footer components are placed in app.component.html using selector
Selector is nothing but the address of the component  which can be used in different components to render a particular component



Module:

A module is where you need to  register the components in declarations and Packages( routing, forms etc) in imports.

Refer to app.module.ts

String Interpolation : 

Its One Way data binding which is used to display the output in template from ts

SPA :

Spa's are nothing but , only app.component.html is loaded in the whole application and within app.component.html different components will come and go based on routing (router-outlet) , refer in app.component.html


Routing :

Routing is used to navigate through different parts of the application adding router allows you to redirect to different pages and still stay on spa

Dynamic Parameters in url:

The parameter can be passed into the url when you save the required data in a certain variable and you can use the syntax

Var = this.route.snapshot.paramMap.get(id)
The data saved is in the var and the (id) is the data that is passed to the url	

Programatic Routing : 

this.router.navigate in header.component.ts refers to programmatic routing

=>adding data into store
//dispatch an action
//action will call reducer
//reducer will update store

=>receiving data into component from store
//just subscribe store variable in ngOnInIt in the component.


==>var a=1;
var  b='1';
console.log(a==b);
console.log(a===b);





Dependecncy injection:?