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


const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      GetHelp,
      GetInvolved,
      Resources,
      Post,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
