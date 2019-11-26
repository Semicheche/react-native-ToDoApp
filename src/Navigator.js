// import React from 'react'
import { createSwitchNavigator, createAppContainer} from 'react-navigation'
import Schedule from './screens/Schedule'
import Auth from './screens/Auth'

const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Schedule
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, { initialRouteName: 'Auth'});

const Routes = createAppContainer(MainNavigator)
export default Routes