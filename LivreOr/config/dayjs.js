
const dayJs = require("dayjs")

const relativeTime = require('dayjs/plugin/relativeTime') // Nécessaire pour utiliser le fromNow()
require("dayjs/locale/fr-ch")

dayJs.extend(relativeTime) // Permet d'utiliser le fromNow() pour afficher comparer le temps depuis maintenant
dayJs.locale("fr-ch") 

module.exports = dayJs