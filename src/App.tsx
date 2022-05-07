import { Component } from 'react'
import { ProjectListScreen } from '@/ProjectList'
import { LoginScreen } from './Screens/Login'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
                {/* <ProjectListScreen /> */}
                <LoginScreen />
            </div>
        )
    }
}

export default App
