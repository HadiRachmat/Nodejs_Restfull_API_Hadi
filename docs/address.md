# Address Spec API

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "nama jalan",
  "city": "nama kota",
  "province": "nama provinsi",
  "country": "nama negara",
  "postal_code": "kode pos"
}
```

Response Body ( Success ) :

```json
{
  "data": {
    "id": 1,
    "street": "nama jalan",
    "city": "nama kota",
    "province": "nama provinsi",
    "country": "nama negara",
    "postal_code": "kode pos"
  }
}
```

Response Body ( Error ) :

```json
{
  "errors": "City Street isn't found"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/addressId

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "nama jalan",
  "city": "nama kota",
  "province": "nama provinsi",
  "country": "nama negara",
  "postal_code": "kode pos"
}
```

Response Body ( Success ) :

```json
{
  "data": {
    "id": 1,
    "street": "nama jalan",
    "city": "nama kota",
    "province": "nama provinsi",
    "country": "nama negara",
    "postal_code": "kode pos"
  }
}
```

Response Body ( Error ) :

```json
{
    "errors": "City Street isn't found"
}
```

## Get Address API
Endpoint : GET /api/contacts/:contactId/addresses/addressId

Headers :
- Authorization : token

Response Body ( Success ) :

```json
{
  "data": {
    "id": 1,
    "street": "nama jalan",
    "city": "nama kota",
    "province": "nama provinsi",
    "country": "nama negara",
    "postal_code": "kode pos"
  }
}
```

Response Body ( Error ) :

```json
{
    "errors": "Contact isn't found"
}
```

## List Address API
Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Response Body ( Success ) :

```json
{
    "data":[
    {
        "id": 1,
        "street": "nama jalan",
        "city": "nama kota",
        "province": "nama provinsi",
        "country": "nama negara",
        "postal_code": "kode pos"
    },
    {
        "id": 2,
        "street": "nama jalan",
        "city": "nama kota",
        "province": "nama provinsi",
        "country": "nama negara",
        "postal_code": "kode pos"
    },

    ]
}
```

Response Body ( Error ) :

```json
{
    "errors": "cpntact isn't found"
}
```

# Remove Address API
Endpoint : DELETE /api/contacts/:contactId/addresses/addressId

Headers :
- Authorization : token

Response Body ( Success ) :

```json
{
    "data": "OKE"
}
```

Response Body ( Error ) :

```json
{
    "errors" :"Contact Isn't found"
}
```
