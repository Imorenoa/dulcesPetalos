# FloristeriaDulcesPetalos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Problematicas encontradas

1- Dudas respecto a la organizacion de los ficheros y enrutado
2- Interfaces: En el fertilizerType al ser 2 estaticos...
3- El input de flower item component inicializarlo?
4- Flexlayout decprecated :( flex vs grid, finalmente grid
5- Enrutado, al intentar poner el routing de detail como children para los breadcrumbs, a pesar de cambiar la url no me renderiza el componente correspondiente
Creo que tengo que modificar el router outlet del list view. Tal y como esta planteada creo que es muy enrevesada la modificacion, buscando otras maneras de gestionar los breadcrumbs
(Tip para futuro, utilizar nombre unico para el enrutado, list es muy comun en la app)
Creo un componente header, antes estaba harcodeado en el app component
Mediante un observable de los router events, capturo la url cuando se modifica
rollback en local a commit anterior

Se crea un componente header:
Capturado el route event NavigationEnd y de aqui la url para el breadcrumb. Mediante un servicio manejamos la url para obtener los crumbs.
