import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import GetHelp from "./layouts/GetHelpPage"
import GetInvolved from "./layouts/GetInvolvedPage"
import Resources from "./layouts/ResourcePage"
import Post from "./layouts/Post"
import Locations from "./layouts/LocationsPage"
import Groups from "./layouts/GroupPage"
import FaqQ from "./layouts/FAQPage"
import About from "./layouts/AboutPage"
import Contact from "./layouts/ContactPage"
import Donate from "./layouts/DonatePage"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Donate,
      GetHelp,
      FaqQ,
      GetInvolved,
      Resources,
      Locations,
      Groups,
      About,
      Contact,
      Post,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
