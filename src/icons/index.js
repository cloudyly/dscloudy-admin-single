const requireAll = requireContext => requireContext.keys().map(requireContext)
const allRequireSvg = require.context('./svg', false, /\.svg$/)

requireAll(allRequireSvg)
