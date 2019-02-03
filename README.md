# luncher2_backend_api

### HEROKU DEPLOYMENT

    - https://luncher-2-bw-19-lambda.herokuapp.com/

---

#### START SERVER

-   run `yarn server`

---

## `ENDPOINTS`

---

### Users

1.  `Register User`

    -   /users/register

        {

            req/string - firstName

            req/string - lastName

            req/string - userRole

            req/unique/string - username

            req/unique/string - email

            req/string - password

        }

    -+- return id of created user

        [
            4
        ]

1)  `Login User`
    -   /users/login


        {

            req/string - username

            req/string - password

        }

        -+- return object

            {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYkppbSIsInVzZXJSb2xlIjoiYWRtaW4iLCJmaXJzdE5hbWUiOiJCb2IiLCJsYXN0TmFtZSI6IkppbWJvIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWQiOjEsImlhdCI6MTU0OTIxMTU4MSwiZXhwIjoxNTQ5MjE1MTgxfQ.nt3CMFyFMjdPXjA47lQiZUKnhQQrnjjUP2yGXfo3_4U",
                "user": {
                    "id": 1,
                    "username": "bobJim",
                    "role": "admin"
                }
            }

1.  `Get all users` [-- for testing purposes only --]

    -   /users/all


    -+- returns array with all users

        {
            [
                {
                    "id": 1,
                    "username": "bobJim",
                    "email": "test@test.com",
                    "firstName": "Bob",
                    "lastName": "Jimbo",
                    "userRole": "admin"
                },
                {
                    "id": 2,
                    "username": "GB",
                    "email": "test2@test.com",
                    "firstName": "Gob",
                    "lastName": "Bluth",
                    "userRole": "patron"
                }
            ]
        }

1.  `Get User Info`

    -   /users

    {

        req - headers: {authorization: token}

    }

    -- returns array with loged in user info

        [
            {
            "id": 1,
            "username": "bobJim",
            "email": "test@test.com",
            "firstName": "Bob",
            "lastName": "Jimbo",
            "userRole": "admin"
            }
        ]

1.  `Update User Info`

    -   /user

    {

        req - headers: {authorization: token}

    }

    -+= return 1 if successful

1.  `Delete User`

    -   /user

    {

        req - headers: {authorization: token}

    }

    -+- returns 1 if successful
