## To send the GraphQL query { hello } paste this into a terminal (with the server running on port 6789):

curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ hello }"}' \
http://localhost:6789/graphql

#### You should see the following output returned as JSON:

{"data":{"hello":"Hello world!"}}

## You can also send GraphQL queries from the browser console. Open up http://localhost:6789, open a developer console, and paste in:

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
}
xhr.send(JSON.stringify({query: "{ hello }"}));

#### You should see the following logged in the console:

data returned: Object { hello: "Hello world!" }


## ADDITIONAL NOTES

Complex clients aren't needed to send requests to a GraphQL Server. They can also be a bit more