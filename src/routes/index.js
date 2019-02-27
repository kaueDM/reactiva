import React from 'react'

const Dashboard = React.lazy(_ => import('views/Dashboard'))

console.log(Dashboard)

const routes = [
  { path: '/', name: 'Dashboard', icon: 'dashboard', component: Dashboard },
  { path: '/', name: 'Customers', icon: 'face', component: Dashboard },
  { path: '/', name: 'Arrivals', icon: 'flight_land', component: Dashboard },
  { path: '/', name: 'Takeoffs', icon: 'flight_takeoff', component: Dashboard }
]

export default routes
