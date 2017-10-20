const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const app = express()
const port = (process.env.port || 6789)

// Construct a schema using GraphQL schema language
const schema = buildSchema(`
	type Query {
		hello: String,
		greetings: String
	}
`)

// The root provides a resolver function for each API endpoint
const root = {
	hello: () => {
		return 'Hello World!'
	},

	greetings: () => {
		return 'Bumblebee Tuna!'
	}
}

// Mount a GraphQL API server onto the /graphql HTTP endpoint
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	// Configuring graphqlHTTP with graphiql: true, automatically generates a React app with the GraphiQL tool.
	// This tool allows you to manually issue GraphQL queries.
	// Navigate to http://localhost:6789/graphql in a web browser to pull up interface that lets you enter queries.
	graphiql: true
}))

app.listen(port, () => {
	console.log('running a GraphQL API server on port', port)
})