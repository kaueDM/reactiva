import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import routes from 'routes'
import Sidebar from './Sidebar'

const Content = ({ ...props }) => (
  <div className='pt-12 flex flex-row flex-wrap h-screen bg-grey-light'>
    <Sidebar {...props} />

    <main className='w-full reactiva-sidebar-spacer'>

      {_renderOverlay(props.isSidebarVisible)}

      <Suspense fallback={<p>Loading</p>}>
        <BrowserRouter>
          <Switch>
            {_renderContent()}
            <Redirect from='/' to='/dashboard' />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </main>
  </div>
)

const _renderOverlay = visible => visible ? <div className='reactiva-sidebar-overlay' /> : null

const _renderContent = _ => routes.map((route, index) => {
  return (
    <Route
      key={index}
      path={route.path}
      name={route.name}
      exact={route.exact}
      render={props => <route.component {...props} />}
    />
  )
})

export default Content
