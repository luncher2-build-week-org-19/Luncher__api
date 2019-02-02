# luncher2_backend_api

## `ENDPOINTS`

---

### Users

1.  `Register User`

    -   /users/register

        {

            req/string - firstName

            req/string - lastName

            req/string - userRole

            req/unique/string - userName

            req/unique/string - email

            req/string - password

        }

    -- return id of created user

1.  `Login User`

    -   /users/login

        {

            req/string - userName

            req/string - password

        }

    -- returns token that expires 1h after creation

1.  `Get all users` for testing purposes only

    -   /users

    -- returns array with all users
