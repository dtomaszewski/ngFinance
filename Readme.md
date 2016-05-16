# ngFinance

Sample AngularJS application

* install newest [node] and [npm]
* !important (npm should be v3.*) if You want to update run :
```sh
> npm install npm -g
```
* clone repo
```sh
> git clone https://github.com/dtomaszewski/ngFinance
```

* go to ngFinance/app and install dependencies and run the server
```sh
> cd ngFinance/app
> npm install
> npm start
```

* to run tests execute below from app folder
```sh
> npm test
```

* to check tests code coverage execute
```sh
> npm run coverage
```

* to import some test data into database from stocks.json 
```sh
> cd ngFinance/server
> npm install
> node import
```

[node]: <https://nodejs.org/en/>
[npm]: <https://www.npmjs.com/>
