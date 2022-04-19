# FavMusicList


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### What I'm using except of react? 

1. To handle albums state: Redux Toolkit https://redux-toolkit.js.org/
2. To deal with UI: MUI https://mui.com
3. To handle internationalization: i18nnext https://www.i18next.com/
4. To deal with form stuff: react-hook-form https://react-hook-form.com/
5. And some others packages like react-toastify for notification, uuid for generating random ID

## Before first run
Here I'm including list of some albums which you can paste in your browser console

```js
    localStorage.setItem('albums', JSON.stringify([
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a113", name: "That's the spirit", isFavorite: true, createdAt: 1650305613188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a114", name: "Sempiternal", isFavorite: false, createdAt: 1650305511188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a116", name: "What's Going On", isFavorite: false, createdAt: 1650295610188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a117", name: "Pet Sounds", isFavorite: true, createdAt: 1650285609188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a118", name: "Blue", isFavorite: false, createdAt: 1650305008188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a119", name: "Songs in the Key of Life", isFavorite: true, createdAt: 1650325607188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a111", name: "Abbey Road", isFavorite: false, createdAt: 1650304607188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a112", name: "Nevermind", isFavorite: true, createdAt: 1650303606188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a121", name: "Rumours", isFavorite: false, createdAt: 1650302605188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a123", name: "Purple Rain", isFavorite: false, createdAt: 1650205604188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a124", name: "Blood on the Tracks", isFavorite: false, createdAt: 1650105603188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a125", name: "The Miseducation of Lauryn Hill", isFavorite: false, createdAt: 1650205602188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a126", name: "Revolver", isFavorite: false, createdAt: 1650304101188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a127", name: "Thriller", isFavorite: true, createdAt: 1650305410188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a128", name: "Exile on Main Street", isFavorite: false, createdAt: 1650305510188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a129", name: "London Calling", isFavorite: true, createdAt: 1650305210188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a130", name: "Highway 61 Revisited", isFavorite: false, createdAt: 1650255610188},
        {id: "ee94dbf8-ac8f-4a76-a332-3f361a88a131", name: "To Pimp a Butterfly", isFavorite: false, createdAt: 1650245610188},
    ]))
```

## How to run?

Developed and tested with: 
### `Node v16.13.2 and Npm 8.1.2` 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).