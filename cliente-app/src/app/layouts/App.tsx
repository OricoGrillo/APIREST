import React from 'react'
import NavBar from '../../features/nav/NabBar';
import {Container} from 'semantic-ui-react';
import Usuarios from './Usuarios'
import {Route,Switch} from 'react-router-dom'
import Perfiles from './Perfiles'
import Home from './Home'

class App extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <NavBar></NavBar>
                <Container style={{marginTop:'7em'}}>
                    <Switch>
                        <Route exact path="/">
                            <Usuarios></Usuarios>
                        </Route>
                        <Route path="/perfiles">
                            <Perfiles></Perfiles>
                        </Route>
                        <Route path="/">
                            <Usuarios></Usuarios>
                        </Route>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                    </Switch>
                    
                </Container>

            </React.Fragment>
        )
    }
    
}

export default App