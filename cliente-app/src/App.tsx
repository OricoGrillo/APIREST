import React from 'react';

// Imports others components.
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App:React.FC = () => {
    return(
        <div>
            <Header titulo="Este es un titulo"></Header>
            <Main titulo="Principal">Este es el contenido del Main</Main>
            <Footer></Footer>
        </div>
    );
};

export default App;