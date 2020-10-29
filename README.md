# Pets Please

Pet's Please is a single page application that allows users to save pictures of their pets to view on a main social media feed. Users can follow other users to tailor their main feed. Customize your experience by following good pet photographers and using the ability to filter by animal type.

Pets please has been [deployed to Heroku](https://pets-please.herokuapp.com/). Feel free to register with a fake account to test out the features without installing anything.

![github-small](https://user-images.githubusercontent.com/61162758/89109324-2beffc00-d40e-11ea-8265-b52fd3bdd061.PNG)

## Installation

Along with the Pets Please repository, you will need to clone the [Pets Please-API](https://github.com/JaysonRice/pets-please-api) repo as well which contains the data structure and some existing users to follow.

You will need [json-server](https://www.npmjs.com/package/json-server) installed in order to create the persistant data storage.

To start the json server, run the following command in your terminal inside of the pets please api directory:

```bash
json-server -p 8088 -w database.json
```
To start the application, run the following command in your terminal inside of the pets-please directory:

```bash
npm start
```
