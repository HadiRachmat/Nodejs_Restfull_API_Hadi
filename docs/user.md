# User API Spec

## Register User API

Endponint : POST /api/users/register

Request body:

```json
{
  "username": "Hadi Rachmat",
  "password": "rahasia",
  "name": "Hadi Rachmat Supindar"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "Hadi Rachmat",
    "name": "Hadi Rachmat Supindar"
  }
}
```

Respone Body Error

```json
{
  "errors": "username alredy registered"
}
```

## Login User API

Endponint : POST /api/users/login

Request body:

```json
{
  "username": "Hadi Rachmat",
  "password": "rahasia"
}
```

Response Body Success:

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Respone Body Error

```json
{
  "errors": "Username or password wrong"
}
```

## Update User API

Endponint : PATCH /api/users/current

Headers:

- authorization : token

Request body:

```json
{
  "name": "Hadi Rachmat Supindar", //optional
  "password": "sangat rahasia" //optional
}
```

Response Body Success:

```json
{
  "data": {
    "username": "Hadi Rachmat Supindar",
    "name": "Hadi Rachmat Supindar"
  }
}
```

Respone Body Error

```json
{
  "errors": "name length max 100"
}
```

## Get User API

Endponint : GET /api/users/current

Headers:

- authorization : token

Response Body Success:

```json
{
    "data"{
        "username": "Hadi Rachmat Supindar",
        "name":"Hadi Rachmat"
    }
}
```

Respone Body Error

```json
{
  "errors": "username Unauthorized"
}
```

## Logout User API

Endponint : DELETE /api/users

Headers:

- authorization : token

Response Body Success:

```json
{
  "data": "OKE"
}
```

Respone Body Error

```json
{
    "errors": "Username Unauthorized"
}
```
