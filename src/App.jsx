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
    ],
    carro: [
      //{ name: "Tomate", price: 1500, img:'/productos/tomates.jpeg', cantidad:1 },
    ],
  }

  agregarAlCarro = (producto) => {
    //console.log(this)
    //console.log(producto)
    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }


  render(){
    console.log(this.state.carro)
    return (    
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App
