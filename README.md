这个项目是由yo react-webpack-redux生成的
用法：
npm start: Will start up the dev webserver
npm test: Run unit tests
npm run dist: Create the packed version

Installation

npm install -g yo
npm install -g generator-react-webpack-redux
Global npm packages

Install the following packages system wide, to decrease the time needed to scaffold a new project:

npm install -g phantomjs-prebuilt
Setting up projects

# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project

# Run the generator
yo react-webpack-redux
Generating new reducers

yo react-webpack-redux:reducer my/namespaced/reducers/name
yo react-webpack-redux:reducer items
Generating new actions

yo react-webpack-redux:action my/namespaced/actions/name
yo react-webpack-redux:action addItem
Generating new components

yo react-webpack-redux:component my/namespaced/components/name
yo react-webpack-redux:component button
Generating new containers

yo react-webpack-redux:container my/namespaced/container/Name
yo react-webpack-redux:container wrapper
