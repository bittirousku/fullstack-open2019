# Puhelinluettelo backend

Backend repository. This requires the frontend code which
lives in `../../part2/puhelinluettelo`.

To make a production build of the frontend code and copy into backend
root call

```
npm run build:ui
```

Now frontend code can be served from the backend server. Add directory `build`
and commit into git repository (you should have the backend repo as a single)
repository.

To deploy into heroku, use
```
npm run deploy
```

The URL of the server is https://mysterious-waters-13484.herokuapp.com

You can find the backend api in https://mysterious-waters-13484.herokuapp.com/api/persons
