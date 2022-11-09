import { Router } from './routes/Router';
import { Theme } from './components/Theme';

const App = () => {
    return (
        <Theme>
            <Router />
        </Theme>
    );    
}

export default App;