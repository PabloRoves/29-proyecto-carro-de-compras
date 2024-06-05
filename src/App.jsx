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

  /*
  //Esta implementación de agregarAlCarro no estaría siguiendo el principio de inmutabilidad ya que
  //estamos modificando directamente el valor de cantidad del producto en el array "carro" en el state
  //de APP, lo cual provocaría por ejemplo, que React no se entere que tiene que volver a renderizar.
  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    const productoEncontrado = carro.find(x => x.name === producto.name);
    //console.log(productoEncontrado);
    if (productoEncontrado){
      productoEncontrado.cantidad = productoEncontrado.cantidad + 1;
      return;
    }
    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    });
  }
*/

/*
//En esta implementación, buscamos si ya existe el producto en el array carro.
//Si existe, copiamos todos los productos del carro a un nuevo carro, menos el del producto
//que estamos agregando, en su caso, creamos un nuevo objeto producto con la cantidad + 1
//del producto anterior y lo agregamos al nuevo carro. Por ultimo, asignamos este nuevo carro
//al estado de app con SetState.
//(si es que ya existe en el array), 
  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad +1
        })
        : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    });
  }*/

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    let encontre = false;
    let newCarro = []
    newCarro = carro.map(x => {
      if(x.name === producto.name){
        encontre = true;
        const nuevoProducto = {...x, cantidad: x.cantidad + 1}
        //console.log(nuevoProducto)
        return nuevoProducto
      }
      else{
        console.log("Agrego al array producto existente")
        return x;
      }
    })
    //console.log("asd" + {newCarro})
    //console.log(newCarro)
    if (!encontre) {
      const nuevoProducto = {...producto, cantidad: 1,}
      newCarro = carro.concat(nuevoProducto)
    }
    this.setState({carro: newCarro});    
  }

/*
    if (carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad +1
        })
        : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    });

  }
  */


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
