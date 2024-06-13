# Contact API Spec

## Create Contact API

Endpoint : POST /api/users/contact

Headers :

- Authorization : token

Request Body :

```json
{
  "firstName": "Hadi Rachmat",
  "lastName": "Supindar",
  "email": "hadirahmat712@gmai.com",
  "phone": "213123123"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firstName": "Hadi Rachmat",
    "lastName": "Supindar",
    "email": "hadirahmat712@gmai.com",
    "phone": "213123123"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Email isn't valid format"
}
```

## Update Contact API

Endpoint : PUT /api/users/contact/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "firstName": "Hadi Rachmat",
  "lastName": "budiman",
  "email": "hadirahmat712@gmai.com",
  "phone": "123123123123"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firstName": "Hadi Rachmat",
    "lastName": "budiman",
    "email": "hadirahmat712@gmai.com",
    "phone": "123123123123"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Email isn't valid format"
}
```

## Get Contact API

Endpoint : GET /api/users/contact/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firstName": "Hadi Rachmat",
    "lastName": "Supindar",
    "email": "hadirahmat712@gmai.com",
    "phone": "213123123"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Contacts Isn't Found"
}
```

## Search Contact API

Endpoint : GET /api/users/contact

Headers :

- Authorization : token

query params :

- name :Search by First name Or Last Name Using Like, Optional
- email:Search by email Using Like, Optional
- phone :Search by phone Using Like, Optional
- page :Search by page, default 1
- size : size per page, default 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "firstName": "Hadi Rachmat",
      "lastName": "budiman",
      "email": "hadirahmat712@gmai.com",
      "phone": "123123123123"
    },
    {
      "id": 2 ,
      "firstName": "Hadi Rachmat",
      "lastName": "budiman",
      "email": "hadirahmat712@gmai.com",
      "phone": "123123123123"
    }
  ]
}
```

Response Body Errors :

```json
{}
```

## Remove Contact API

Endpoint : DELETE /api/users/contact/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OKE"
}
```

Response Body Errors :

```json
{
  "errors": "Contact Isn't Found"
}
```
