#Introduction

This is a client API to Teravoz services made with Node JS, with Angular 8 administrative front-end

###Basic usage
    To run the project execute the follow commands:

        - docker-compose up
    You will have the frontend on http://yourhost:8000 
    
###How does it work?

In order of get a better customer experience with low cost, it was defined a workflow of the URA service, taking the conclusions below:

    - When a call.new type arrives at /webhook endpoint, the call is registred in a mongodb instance for analytics and control of process
    - When a call.standby type arrives, the API search for the customer in customer's schema:
        - if it's not found, the system registrates the client in "prospect" status to possible future customers and delegates the call to 900
        - if it's found, the system only delegates the call to 901
    - When a actor.entered type arrives, the API registers the new actor in a list on the call schema
    - When a actor.left type arrives, the API registers the time of the left to indicate how many time were spend
    - When a call.finished type arrives, the API registers the time that the call was finished to register the total time spent

###Technical understanding

    ####API
        The API is a node js application running in port 8000, wrote with express js framework and has three endpoints: 
            - POST http://hostname:8000/webhook
                - webhook post of Teravoz API about the calls
                - this endpoint uses a function to decide which controller to use based on type of the call event

            - GET http://hostname:8000/calls/:query
                - a query abstractor of the Call's schema to get calls on mongodb
                - query types: 
                    - actoratending
                    - callfinished
                    - callstandby
                    - callnew
                    - actorleft
                    - all
                    
            - GET http://hostname:8000/customers/:query
                - a query abstractor of the Customer's schema to get customers on mongodb
                -query types:
                    - prospects
                    - onboard
                    - exclients
                    - all
        

        