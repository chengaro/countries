//
const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql')

//Country Type
const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    name: {type: GraphQLString},
    alpha3Code: {type: GraphQLString},
    capital: {type: GraphQLString},
    region: {type: GraphQLString},
    subregion: {type: GraphQLString},
    population: {type: GraphQLInt},
    flag: {type: GraphQLString},
    currencies: {type: new GraphQLList(CurrencyType)},
    languages: {type: new GraphQLList(LanguageType)}
  })
})

//Currency Type
const CurrencyType = new GraphQLObjectType({
  name: 'Currency',
  fields: () => ({
    code: {type: GraphQLString},
    name: {type: GraphQLString}
  })
})

//Language Type
const LanguageType = new GraphQLObjectType({
  name: 'Language',
  fields: () => ({
    name: {type: GraphQLString}
  })
})

//CountryList Type
const CountryListType = new GraphQLList(CountryType)

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    countries: {
      type: CountryListType,
      resolve(parent, args) {
        return axios
          .get(
            'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;capital;region;flag;currencies;languages'
          )
          .then(res => res.data)
      }
    },
    country: {
      type: CountryType,
      args: {
        alpha3Code: {type: GraphQLString}
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://restcountries.eu/rest/v2/alpha/${args.alpha3Code}?fields=name;alpha3Code;capital;region;subregion;population;flag;currencies;languages`
          )
          .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
