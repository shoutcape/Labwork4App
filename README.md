# Labwork 4 application
Labwork-4: Demo Mobile App with Ionic Framework and Firebase Authentication

This repository contains the code for a simple mobile application developed using Ionic Framework and Firebase Authentication. This project was completed as part of a school assignment for Labwork-4.

## Team Members
    Ville Kautiainen @shoutcape
    Ville Korhonen @korhvi

## Project Description

The project aims to create a basic mobile application with features including user authentication (login and signup) and a simple forum where users can post and comment.
Project Structure

The project consists of the following main components:

    LoginPage: Allows users to login with their email and password.
    SignupPage: Allows users to create a new account by providing necessary information.
    MainPage: Displays a forum where users can post content and comment on existing posts.

## Instructions for Running the Application locally

    Clone the repository to your local machine.
    Create a .env file to the root of the project and insert firebase authentication variables to it
    Make sure to have the following environment variables from firebase authentication

    VITE_REACT_APP_AUTH_DOMAIN=
    VITE_REACT_APP_API_KEY=
    VITE_REACT_APP_DATABASE_URL=
    VITE_REACT_APP_PROJECT_ID=
    VITE_REACT_APP_STORAGE_BUCKET=
    VITE_REACT_APP_MESSAGING_SENDER_ID=
    VITE_REACT_APP_APP_ID=
    
    Install dependencies using: npm install
    Start the development server using: ionic serve
    Open a web browser and navigate to http://localhost:8100 to view the application.

## Screenshots

![LoginMainSign](https://github.com/shoutcape/Labwork4App/assets/112542569/4d331ed0-b3f7-485c-8b63-5e14f0126cef)


## Link to the netlify release

https://labwork4app.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/26d6bfd2-8e89-40d3-af92-56348e26c62b/deploy-status)](https://app.netlify.com/sites/labwork4app/deploys)

## License

This project is licensed under the MIT License.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
