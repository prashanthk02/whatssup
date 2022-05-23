# What's sup?
What's sup is a recipe application that provides the user with mutiple recipe options based on four search criteria: cuisine, ingredients, calories and diet preference. Registered user can create a favorite list of recipes.

## Setup

### Getting started
1. Fork and clone this repository to your local device.
2. Create a database 'postgreSQL' and create a .env file providing database credentials.
3. Register at `spoonacular.com` to get apiKey and provide it in .env file.
### Front-end
4. Navigate to front-end using `cd frontend`.
5. Install dependencies using `npm install`.
6. Start the server using `npm start`. The app will be served at `http://localhost:3000`.
### Back-end
7. Navigate to back-end using `cd backend`.
8. Install dependencies using `npm install`.
9. Start the server using `npm start`. The app will be served at `http://localhost:8080`.
10. You can reset the database by using `npm run db:reset` command.


## Screenshots
![Home Page](https://github.com/prashanthk02/whatssup/blob/main/frontend/docs/Img1.png?raw=true)

![Home page with search](https://github.com/prashanthk02/whatssup/blob/main/frontend/docs/Img2.png?raw=true)

![Recipe search by cuisine](https://github.com/prashanthk02/whatssup/blob/main/frontend/docs/Img3.png?raw=true)

![Recipe details](https://github.com/prashanthk02/whatssup/blob/main/frontend/docs/Img4.png?raw=true)

## Dependencies
* Axios
* Express
* Morgan
* NodeJs
* Postgres
* React
* Sass