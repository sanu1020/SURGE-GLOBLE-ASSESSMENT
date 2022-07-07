## send Application

This is an MERN Stack Application which is implemented for students to add their notes in a database for a digital learnig purpose.

There a some crud operation are implemented for both user and admin.Such as,
User Login and Register
Admin Login
A Student can create,update and delete their notes

A Student Note is usually made of 3 columns - *Title*, *Description* & *Note*.
A userDetails which is retrived by an admin is usually made of 8 columns - *id*, *firstname*, *lastname*,*email*,*DateOfBirth*,*mobile*,*status* & *accounttype*.


As already stated this project is an implementation made of 3 separate Docker containers that holds:

- Mongo database
- Node js backend 
- React frontend

The entry point for a user is a website which is available under the address: **http://localhost:3000/**



---

### Prerequisites

In order to run this application you need to install two tools: **Docker** & **Docker Compose**.

Instructions how to install **Docker** on [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/), [Windows](https://docs.docker.com/docker-for-windows/install/), [Mac](https://docs.docker.com/docker-for-mac/install/).

**Docker Compose** is already included in installation packs for *Windows* and *Mac*, so only Ubuntu users needs to follow [this instructions](https://docs.docker.com/compose/install/).

### How to run it?

The entire application can be run with a single command on a terminal:

```
$ docker-compose up 
```

If you want to stop it, use the following command:

```
$ docker-compose down
```

---


#### How to run Unit-Test

Open new terminal

run command -> cd signupbackend
after moved to signupbackend

run command -> npm test



#### backend (Backend)

This is a Node js based application that connects with an database which is used express to perform serving files, handling requests, and handling HTTP methods. It supports multiple HTTP API's like GET, POST, PUT and
DELETE 

This app is also put in Docker container and its definition can be found
in a file *backend/Dockerfile*. 


#### frontend (Frontend)

This is a real endpoint for a user where they can manipulate their
operations.It consumes the API endpoints provided by
*backend*.

It can be entered using link: **http://localhost:4000/**






