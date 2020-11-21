import {createClient} from "contentful"


export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})


// space: "fiu18zddsdzi",
// accessToken: "WFBwzFqJu3oPrp11za5Lxf9VhUOoT2udMkusnKtPeqk"