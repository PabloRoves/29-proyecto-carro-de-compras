import { Component } from 'react'
import Productos from './components/Productos.jsx'
import Layout from './components/Layout.jsx'
import Title from './components/Title.jsx'
import Navbar from './components/Navbar.jsx'

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img:'/productos/tomates.jpeg' },
      { name: "Arbejas", price: 2000, img:'/productos/arbejas.jpeg' },
      { name: "Lechuga", price: 500, img:'/productos/lechuga.jpeg' },
    ]
  }

  render(){
    return (    
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={() => console.log('No hace nada')}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App
