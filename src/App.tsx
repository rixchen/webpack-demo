import { Component } from 'react'
import { ProjectListScreen } from '@/ProjectList'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
                <ProjectListScreen />
            </div>
        )
    }
}

export default App
