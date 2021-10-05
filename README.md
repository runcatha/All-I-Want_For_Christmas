# All I Want for Christmas

## Overview

All I Want for Christmas: Wouldn't it be nice if you could get your friends and family exactly what they want for Christmas? Also, isn't it the worst that throughout the year you think of things that would be nice to recieve as gifts, but when someone askes you what you want you draw a blank? Have no fear because All I Want for Christmas is here to solve these problems and more! Create a profile and add items that you want as they come to mind. When the holidays roll around go to your friends/families member's profiles to pick out exactly what they want.

<br>

## MVP

> The All I Want for Christmas MVP is to have an app that utilizes authentication to have a user create an account. The user is then able to go to their wishlist and utilize full CRUD to add, view, edit, and delete items. Users are also able to view other user's wishlists to see what friends and family want. Specifics include:

- a RESTful JSON API.
- Ruby on Rails server
- database with 3 tables and 2 associations (1:1 and m:m)
- uses Rails to define models to interact with the database
- Full CRUD (index, show, create, update, delete) between non-User tables
- working, interactive React app
- 9 separate, rendered components
- utilizes functional or class React components
- utilizes state and props in components
- use only React for DOM Manipulation
- consume and render data from your Ruby on Rails API into components
- use React Router
- styled with CSS, Flexbox, and Grid to match wireframes
- front-end deployed via Netlify
- back-end deployed via Heroku

<br>

### Goals

- Have the back-end set up by Oct 5th
- Code 4 to 5 components and screens for the React app (break with CSS) by Oct 6th
- Code remaining components and screens for the React app (break with CSS) by Oct 7th
- Complete CSS on 4 to 5 screens by Oct 8th
- Complete CSS on remaining screens by Oct 9th

<br>

### Libraries and Dependencies

|     Library      | Description                                                                                             |
| :--------------: | :------------------------------------------------------------------------------------------------------ |
|      React       | _open-source JavaScript library utilized to build user interfaces_                                      |
|   React Router   | _collection on navigation components that compose declaratively with the app_                           |
| React Router Dom | _enables dynamic routing in the app_                                                                    |
|      Axios       | _a promise-based HTTP Client for node.js and the browser_                                               |
|      Bcrypt      | _password-hashing function_                                                                             |
|     Bootsnap     | _library that plugs into Ruby to optimize and cache expensive computations_                             |
|      Faker       | _library for genrating fake data_                                                                       |
|       Jwt        | _ compact URL-safe means of representing claims to be transferred between two parties_                  |
|    Pry-rails     | _causes the rails console to open pry_                                                                  |
|       Puma       | _without arguments, puma will look for a rackup (.ru) file in working directory called config.ru ._     |
|    Rack-cors     | _handles Cross-Origin Resource Sharing (CORS), which makes cross-origin AJAX possible_                  |
|      Rails       | _server-side web application framework written in Ruby_                                                 |
|      Spring      | _a Rails application preloader that speeds up development by keeping the app running in the background_ |
|   Tzinfo-data    | _Time Zone database packaged as Ruby modules for use with TZInfo_                                       |

<br>

### Client (Front End)

#### Wireframes

![image](https://user-images.githubusercontent.com/87097080/135884278-442e2068-87c4-4fb8-8b89-c11991f5708f.png)

- Home

![image](https://user-images.githubusercontent.com/87097080/135884585-ba792e75-71cc-4d9c-8012-92d5fa105670.png)

- Log In

![image](https://user-images.githubusercontent.com/87097080/135884677-f7b10d11-aa14-4120-b958-e0ab5494ad93.png)

- Sign Up

![image](https://user-images.githubusercontent.com/87097080/135884783-a3b6f5d7-08b2-4503-89b3-203a91a6ac20.png)

- About Us

![image](https://user-images.githubusercontent.com/87097080/135884811-78ffa66d-9d16-452b-98d5-981fe6d210bb.png)

- Profile (PMVP)

![image](https://user-images.githubusercontent.com/87097080/135884866-e90276b7-02a8-4d1a-b12b-ea18e3f76797.png)

- My Wishlist

![image](https://user-images.githubusercontent.com/87097080/135885219-b565d9bd-4023-4702-be4d-58f4e9cc7152.png)

- Detail Page

![image](https://user-images.githubusercontent.com/87097080/135885255-09ac27a7-d84b-4df4-9ed5-cbb3168336f5.png)

- Add Item

![image](https://user-images.githubusercontent.com/87097080/135885302-97cd9296-d149-4c7a-96bc-38f5b5c28822.png)

- Edit Item

![image](https://user-images.githubusercontent.com/87097080/135885399-84bec70c-04d9-41e6-9774-ffd065ea17fb.png)

- Group Profile (PMVP) or Member Borad (MVP)

![image](https://user-images.githubusercontent.com/87097080/135885449-f8d3acf7-3b34-4fe4-80c6-ad78b4a6bdab.png)

- Start a Group (PMVP)

![image](https://user-images.githubusercontent.com/87097080/135885536-5217f8db-f2a9-461c-b94d-1b5e1113dec2.png)

- User Wishlist Restricted View (MVP)

![image](https://user-images.githubusercontent.com/87097080/135885592-7c49391b-2128-4420-9d29-dc6323b2d584.png)

- Detail Page Restricted View (MVP)

![image](https://user-images.githubusercontent.com/87097080/135885643-0283f2b6-fb6e-4ede-a7ed-114b5696fa9b.png)

- Cart (PMVP)

https://www.figma.com/file/LMaOHIZwx4D4KMH9BOEXRH/Untitled?node-id=0%3A1

#### Component Hierarchy

![image](https://user-images.githubusercontent.com/87097080/135886075-a7911295-3845-4f22-b7ab-a3297710d6dc.png)

https://whimsical.com/component-hierarchy-WoHfXnF3oMhGeEr3sp6SX4

#### Component Architecture

```structure

src
|__ components/
      |__ Home.jsx
      |__ LogIn.jsx
      |__ SignUp.jsx
      |__ AboutUs.jsx
      |__ Profile.jsx
      |__ MyWishlist.jsx
      |__ Detail.jsx
      |__ Edit.jsx
      |__ AddGift.jsx
      |__ GroupProfile.jsx
      |__ StartGroup.jsx
      |__ Nav.jsx
      |__ Cart.jsx
      |__ Footer.jsx
|__ screens/
      |__ Home.jsx
      |__ LogIn.jsx
      |__ SignUp.jsx
      |__ AboutUs.jsx
      |__ Profile.jsx
      |__ MyWishlist.jsx
      |__ Detail.jsx
      |__ Edit.jsx
      |__ AddGift.jsx
      |__ GroupProfile.jsx
      |__ StartGroup.jsx
      |__ Nav.jsx
      |__ Cart.jsx
      |__ Footer.jsx
|__ services/
      |__ auth.js
      |__ config.js
      |__ wishlists.js
      |__ items.js
      |__ groups.js
|__ App.css/
|__ App.js/
|__ index.css/
|__ index.js/
|__ utils/

```

#### Time Estimates

| Task                          | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Wireframe                     |    H     |     6 hrs      |     6 hrs     |    6 hrs    |
| Component Hierarchy           |    H     |     1 hrs      |     1 hrs     |    1 hrs    |
| ReadMe                        |    H     |     5 hrs      |     5 hrs     |    5 hrs    |
| Create Ruby App               |    H     |     1 hrs      |      TBD      |     TBD     |
| Generate Models               |    H     |     1 hrs      |      TBD      |     TBD     |
| Backend CRUD                  |    H     |     3 hrs      |      TBD      |     TBD     |
| Deploy Heroku                 |    H     |     2 hrs      |      TBD      |     TBD     |
| Authentication                |    H     |     2 hrs      |      TBD      |     TBD     |
| Create React App              |    H     |     1 hrs      |      TBD      |     TBD     |
| App Component/Screen          |    H     |     3 hrs      |      TBD      |     TBD     |
| Home Component/Screen         |    H     |     3 hrs      |      TBD      |     TBD     |
| LogIn Component/Screen        |    H     |     3 hrs      |      TBD      |     TBD     |
| SignUp Component/Screen       |    H     |     3 hrs      |      TBD      |     TBD     |
| AboutUs Component/Screen      |    H     |     3 hrs      |      TBD      |     TBD     |
| Profile Component/Screen      |    H     |     3 hrs      |      TBD      |     TBD     |
| MyWishlist Component/Screen   |    H     |     3 hrs      |      TBD      |     TBD     |
| Detail Component/Screen       |    H     |     3 hrs      |      TBD      |     TBD     |
| Edit Component/Screen         |    H     |     3 hrs      |      TBD      |     TBD     |
| AddGift Component/Screen      |    H     |     3 hrs      |      TBD      |     TBD     |
| GroupProfile Component/Screen |    L     |     3 hrs      |      TBD      |     TBD     |
| StartGroup Component/Screen   |    L     |     3 hrs      |      TBD      |     TBD     |
| Deploy Netlify                |    H     |     2 hrs      |      TBD      |     TBD     |
| Post MVP                      |    L     |      TBD       |      TBD      |     TBD     |
| TOTAL                         |          |     60 hrs     |    12 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[Imgur](https://i.imgur.com/gYaUMhv.png)
<br>

---

## Post-MVP

- Set up a table to make friend and family group
- Group Profile Component/Screen
- Add Group Component/Screen

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
