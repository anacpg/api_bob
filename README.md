# api_bob

Install package dependencies
```
npm i
```

Run the seed to create the ddbb with some users
```
npm init:seed
```

Init the server:
```
npm run dev
```

## Routes

List. Return a user list with only some fields of the users
```
curl -v 'http://localhost:4000/users'
```

Fetch:
```
curl -v 'http://localhost:4000/user/{id}'
```

Add:
```
curl -X POST -d name=Jose -d surname=Santos -d username=joses -d password=Pass6 -d bags=8 -d email=josesantos@bob.io 'http://localhost:4000/users'
```