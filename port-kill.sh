kill $(lsof -t -i :5657)
reset
NODE_ENV=development nodemon app