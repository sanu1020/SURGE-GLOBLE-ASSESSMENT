FROM node:latest



# make the 'frontend' folder the current working directory
WORKDIR /signupfront

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /signupfront/

# install project dependencies
RUN npm install 


# copy project files and folders to the current working directory (i.e. 'frontend' folder)
COPY . /signupfront/



EXPOSE 8080
CMD [ "npm", "start" ]