# Luncher 2 API

## HEROKU DEPLOYMENT

> https://luncher-2-bw-19-lambda.herokuapp.com/

---

### START SERVER

-   run `yarn server`

---

## NAVIGATION

### USERS

[Register](#register) | [Login](#login) | [Get All Users](#allusers) | [Get User Info](#userInfo) | [Update User](#updateUser) | [Delete User](#deleteUser)

### SCHOOLS

[Get All Schools](#allSchools) | [Get School By ID](#schoolId) | [Get School By UserID](#schoolUserId) | [Add School](#addSchool) | [Update School](#updateSchool) | [Delete School](#deleteSchool)

### DONATIONS

[Get All Donations](#getallcreateddonations) | [Get Donation By ID](#getDonationById) | [Get Donation By UserID](#getdonationbyuserid) | [Get Donation By SchoolID](#getdonationbyschoolid) | [Add New Donation](#addnewdonation) | [Update Donation](#updatedonation) | [Delete Donation](#deletedonation)

### AXIOS

[Axios Post Example](#axiosPost)

---

## ENDPOINTS

## Users

1. `Register User` <a name='register'></a>

    _Method URL: /users/register_

    _HTTP method: [POST]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Body

    | name      | type   | required | description              |
    | --------- | ------ | -------- | ------------------------ |
    | firstName | String | No       |                          |
    | last Name | String | No       |                          |
    | userRole  | String | Yes      | required                 |
    | username  | String | Yes      | required, must be unique |
    | email     | String | Yes      | required, must be unique |
    | password  | String | Yes      | required                 |

    _example_

    ```
        {
            firstName: "John",
            lastName: "",
            userRole: "admin",
            username: "jonnyDo",
            email: "jonD@test.com",
            password: "password123"
        }
    ```

    ### Response

    **201 (OK)**

    > On Success Returns ID

    ```
        [
            4
        ]`
    ```

---

2. `Login User` <a name='login'></a>

    _Method URL: /users/login_

    _HTTP method: [POST]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Body

    | name     | type   | required | description                                   |
    | -------- | ------ | -------- | --------------------------------------------- |
    | username | String | Yes      | Must match existing username                  |
    | password | String | Yes      | Must match password corresponding to username |

    _example_

    ```
        {
            username: "jonnyDo",
            password: "password123"
        }
    ```

    ### Response

    **200 (OK)**

    > On Success Returns Object

    ```
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYkppbSIsInVzZXJSb2xlIjoiYWRtaW4iLCJmaXJzdE5hbWUiOiJCb2IiLCJsYXN0TmFtZSI6IkppbWJvIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWQiOjEsImlhdCI6MTU0OTIxMTU4MSwiZXhwIjoxNTQ5MjE1MTgxfQ.nt3CMFyFMjdPXjA47lQiZUKnhQQrnjjUP2yGXfo3_4U",
            "user": {
                "id": 1,
                "username": "bobJim",
                "role": "admin"
            }
        }
    ```

---

3. `Get All users` <a name='allusers'></a>

    _Method URL: /users/all_

    _HTTP method: [GET]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Response

    **200 (OK)**

    > On Success Return Array of Objects

    ```
        [
            {
                "id": 1,
                "username": "bobJim",
                "firstName": "Bob",
                "lastName": "Jimbo",
            },
            {
                "id": 2,
                "username": "GB",
                "firstName": "Gob",
                "lastName": "Bluth",
            }
        ]
    ```

---

4.  `Get User Info` <a name='userInfo'></a>

    _Method URL: /users/info_

    _HTTP method: [GET]_

    ### Headers

    | name          | type   | required | description |
    | ------------- | ------ | -------- | ----------- |
    | Authorization | String | Yes      | token       |

    ### Response

    **200 (OK)**

    > On Success Return Object

    ```
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
    ```

---

5.  `Update User Info` <a name='updateUser'></a>

    _Method URL: /users/update_

    _HTTP method: [PUT]_

    ### Headers

    | name          | type   | required | description |
    | ------------- | ------ | -------- | ----------- |
    | Authorization | String | Yes      | token       |

    ### Response

    > On Success Returns 1

    ```
        1
    ```

---

6.  `Delete User` <a name='deleteUser'></a>

    _Method URL: /users/delete_

    _HTTP method: [DELETE]_

    ### Headers

    | name          | type   | required | description |
    | ------------- | ------ | -------- | ----------- |
    | Authorization | String | Yes      | token       |

    ### Response

    **200 (OK)**

    > On Success Returns 1

    ```
        1
    ```

---

## Schools

1. `Get ALL Schools` <a name='allSchools'></a>

    _Method URL: /schools_

    _HTTP method: [GET]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Response

    **200 (ok)**

    > On Success Returns ID

    ```
        [
            {
                "id": 1,
                "image": "",
                "schoolname": "Oak Ridge High School",
                "userId": 1
            },
            {
                "id": 2,
                "image": "https://cdn.pixabay.com/photo/2014/04/03/00/43/lion-309219_960_720.png",
                "schoolname": "Boone High School",
                "userId": 2
            },
            {
                "id": 3,
                "image": "",
                "schoolname": "Winter Park High School",
                "userId": 2
            }
        ]
    ```

---

2. `Get School By ID` <a name='schoolId'></a>

    _Method URL: /schools/:id_

    _HTTP method: [GET]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Body

    | name | type   | required | description       |
    | ---- | ------ | -------- | ----------------- |
    | id   | String | Yes      | Matches School ID |

    ### Response

    **200 (OK)**

    > On Success Returns Object

    ```
        [
            {
                "id": 2,
                "image": "https://cdn.pixabay.com/photo/2014/04/03/00/43/lion-309219_960_720.png",
                "schoolname": "Boone High School",
                "userId": 2
            }
        ]
    ```

---

3. `Get Schools by User ID` <a name='schoolUserId'></a>

    _Method URL: /schools/user/:id_

    _HTTP method: [GET]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Body

    | name | type   | required | description     |
    | ---- | ------ | -------- | --------------- |
    | id   | String | Yes      | Matches User ID |

    ### Response

    **200 (OK)**

    > On Success Returns Array of Objects

    ```
        [
            {
                "id": 2,
                "image": "https://cdn.pixabay.com/photo/2014/04/03/00/43/lion-309219_960_720.png",
                "schoolname": "Boone High School",
                "userId": 2
            },
            {
                "id": 3,
                "image": "",
                "schoolname": "Winter Park High School",
                "userId": 2
            },
            {
                "id": 4,
                "image": "",
                "schoolname": "Washington Middle School",
                "userId": 2
            }
        ]
    ```

---

4. `Add School` <a name='addSchool'></a>

    _Method URL: /schools_

    _HTTP method: [POST]_

    ### Headers

    | name          | type   | required | description |
    | ------------- | ------ | -------- | ----------- |
    | Authorization | String | Yes      | token       |

    ### Body

    | name       | type   | required | description  |
    | ---------- | ------ | -------- | ------------ |
    | image      | String | No       | URL of image |
    | schoolname | String | Yes      | required     |

    ### Response

    **201 (OK)**

    > On Success Returns ID

    ```
        [
            5
        ]
    ```

---

5. `Update School` <a name='updateSchool'></a>

    _Method URL: /update/:id_

    _HTTP method: [PUT]_

    ### Headers

    | name          | type   | required | description |
    | ------------- | ------ | -------- | ----------- |
    | Authorization | String | Yes      | token       |

    ### Body

    | name       | type   | required | description  |
    | ---------- | ------ | -------- | ------------ |
    | image      | String | No       | URL of image |
    | schoolname | String | Yes      | required     |

    ### Response

    **200 (OK)**

    > On Success Returns 1

    ```
        1
    ```

---

6. `Delete School` <a name='deleteSchool'></a>

    _Method URL: /delete/:id_

    _HTTP method: [DELETE]_

    ### Headers

    | name          | type   | required | description |
    | ------------- | ------ | -------- | ----------- |
    | Authorization | String | Yes      | token       |

    ### Body

    | name | type   | required | description       |
    | ---- | ------ | -------- | ----------------- |
    | id   | String | Yes      | Matches School ID |

    ### Response

    **200 (OK)**

    > On Success Returns 1

    ```
        1
    ```

---

## Donations

1.  `Get All Donations` <a name="getallcreateddonations"></a>

    _Method URL: /donations/all_

    _HTTP method: [GET]_

    ### Header

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Response

    **200 (OK)**

    > On Success Returns Array of Objects

    ```
        [
            {
                "id": 1,
                "title": "No Kid Starving",
                "description": "Give the gift of food to children and help them become all that they can become!",
                "amount": 5000,
                "userId": 1,
                "schoolId": 6
            },
            {
                "id": 2,
                "title": "Food for Thought",
                "description": "Why isn't a group of squid called a squad?",
                "amount": 3000,
                "userId": 1,
                "schoolId": 1
            }

        ]
    ```

---

2. `Get Donation By ID` <a name="getDonationById"></a>

    _Method URL: /donations/:id_

    _HTTP method: [GET]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Response

    **200 (OK)**

    > On Success Returns Array

    ```
        [
            {
                "id": 1,
                "title": "No Kid Starving",
                "description": "Give the gift of food to children and help them become all that they can become!",
                "amount": 5000,
                "userId": 1,
                "schoolId": 6
            }
        ]
    ```

---

3. `Get Donations By User ID` <a name="getdonationbyuserid"></a>

    _Method URL: /donations/users/:id_

    _HTTP method: [GET]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Response

    **200 (OK)**

    > On Success Returns Array

    ```
        [
            {
                "id": 1,
                "title": "No Kid Starving",
                "description": "Give the gift of food to children and help them become all that they can become!",
                "amount": 5000,
                "userId": 1,
                "schoolId": 6
            },
            {
                "id": 2,
                "title": "Food for Thought",
                "description": "Why isn't a group of squid called a squad?",
                "amount": 3000,
                "userId": 1,
                "schoolId": 1
            }
        ]
    ```

---

4. `Get Donations By School ID` <a name="getdonationbyschoolid"></a>

    _Method URL: /donations/schools/:id_

    _HTTP method: [GET]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Response

    **200 (OK)**

    > On Success Returns Array

    ```
        [
            {
                "id": 2,
                "title": "Food for Thought",
                "description": "Why isn't a group of squid called a squad?",
                "amount": 3000,
                "userId": 1,
                "schoolId": 1
            }
        ]
    ```

---

5. `Add New Donation` <a name="addnewdonation"></a>

    _Method URL: /donations/schools/:id_

    _HTTP method: [POST]_

    ### Headers

    | name          | type   | required | description |
    | ------------- | ------ | -------- | ----------- |
    | Authorization | String | Yes      | token       |

    ### Body

    | name        | type   | required | description |
    | ----------- | ------ | -------- | ----------- |
    | title       | String | Yes      |             |
    | description | String | No       |             |
    | amount      | String | Yes      | integer     |

    ### Response

    **201 (OK)**

    > On Success Returns ID

    ```
        [
            6
        ]
    ```

---

6. `Update Donation` <a name="updatedonation"></a>

    _Method URL: /donations/update/:id_

    _HTTP method: [PUT]_

    ### Headers

    | name          | type   | required | description |
    | ------------- | ------ | -------- | ----------- |
    | Authorization | String | Yes      | token       |

    ### Body

    | name        | type   | required | description |
    | ----------- | ------ | -------- | ----------- |
    | title       | String | No       |             |
    | description | String | No       |             |
    | amount      | String | No       | integer     |

    ### Response

    **200 (OK)**

    > On Success Returns 1

    ```
        1
    ```

---

7. `Delete Donation` <a name="deletedonation"></a>

    _Method URL: /donations/delete/:id_

    _HTTP method: [DELETE]_

    ### Headers

    ### Headers

    | name          | type   | required | description |
    | ------------- | ------ | -------- | ----------- |
    | Authorization | String | Yes      | token       |

    ### Response

    **200 (OK)**

    > On Success Returns 1

    ```
        1
    ```

---

## Axios Examples

1. `Axios Post Request` <a name='axiosPost'></a>

    ```
        axios({
            method: "post",
            url: `https://${API_URL}/schools`,
            headers: {
                Authorization: token
            },
            data: {
                username: "john doe",
                email: "johndoe@email.com",
                password: "password123"
            }
            })
            .then((res) => console.log(res))
            .catch(err => console.log("error", err))
    ```
