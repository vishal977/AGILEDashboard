## Description
The application is aimed towards aiding IT industries in keeping track of AGILE projects. 
The application's features include:
  - A homepage that helps the authority keep track of all the ongoing projects. 
  - A detailed dive into each project that lists out the scheduled sprints and descriptions about each. 
  - Expanded view of a sprint that provides insights into the tasks that its comprised of, their statuses and an RAG Chart that 
  summarizes the task statuses. 
  - "Meeting Notes" can be utilized to jot down important points that come up during a team meet. 
  - A paginated, pivot-enabled "Task Details" table that will help keeping track of tasks very easy. 
  
## Starting the JSON Server
```
json-server --watch db.json
```
Starts the JSON server on the local machine that serves the data present on *db.json* file. 

## Running the project
```
npm start
```
Starts the project on your machine's localhost. The default port, 3000 will be used by the JSON server. 
So, type in *Y* when the command line says *Would you like to run the app on another port instead? (Y/n)*
