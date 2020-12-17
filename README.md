#Notes
1) I used TypeScript for implementing the API and Non-relational db model in order to model Products.

2) As far as my knowledge, images can be accessed within `React` without needing to be stored in the database. However, I am not sure how to do it.

3) The filter method can be implemented in the front-end dynamically if modern frameworks such as `Angular` and `React` is being used without calling the API.

4) Database is mocked in `Utils/DatabaseClient.ts` file. I used `setTimeOut` in order to mock database delays. 

##Run Locally
`npm install`

`npm start`

Model Schema
-
The model schema is illustrated in `Utils/ProductModel.ts`

EndPoints
-
To mock the provided web page we may have following endpoints:

1) `GET /products/:brand` 

    To display all products for specific brand
    
2) `GET /products/:brand/:id`

    To provide details about a specific product. In order to call this method we can send the product id from our front-end
    
3) `POST /products/:brand`
    
    To add a new product to our data base. name and price are required. we can set all assets in addition to parent and child products in front-end


Test Strategy
--
To test the API, we can use different tools such as Jest and Mocha. 

In order to unit testing our methods we can use mock database to make sure the production data does not get dirty.


