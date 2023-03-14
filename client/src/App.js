import React, {useEffect,useState}from 'react'
import "./App.css"
import './styles/btn.css'

import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Button from './components/Button'
import ButtonAll from './components/ButtonAll'
import Table from './components/Table'

function App() {

  const [backEnd, setBackend] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((dataResponse) => { 
        setBackend(dataResponse.message)
        console.log(backEnd)
      } );
  },);


  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(false)
  const [dataAll, setDataAll] = useState(false)

  const cambiarEstado = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }

  
  const cambiarEstadoFalse= () => {
    setLoading(true)
    setData(false)
    setDataAll(false)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }  



  function getHTTPInactive() {
    
    fetch("https://demo-bss.us-e2.cloudhub.io/api/phone-numbers")
      .then(response => response.json())
      .then(data => {
        setData(data)
        //console.log(data)
      })
      .catch(error => console.error(error));
  }

   function getHTTPIAll () {
    console.log('se presiona btn')
     fetch(`https://demo-bss.us-e2.cloudhub.io/api/all-phone-numbers`)
      .then(response => response.json())
      .then(dataAll => {
        setDataAll(dataAll)
        //console.log(dataAll)
      })
      .catch(error => console.error(error));
  }

  function ejecutarFunciones() {
    cambiarEstado()
    getHTTPInactive()
  }

  function ejecutarFuncionesAll() {
    cambiarEstado()
    getHTTPIAll()
  }

  function actualizarData(){
    cambiarEstado()
    getHTTPInactive()
  }

  function actualizarDataAll(){
    cambiarEstado()
    getHTTPIAll()
  }
  
  if(loading){
    return(
      <div>
        <Navbar></Navbar>
        <Loading></Loading>
      </div>  
    )
  }else{
    if(data || dataAll){
      if(data){

        if(data === [ ]){ 
          return(
            <div className='App'>
              <Navbar></Navbar>
              <p className='p'> Demo BSS-Status </p>
              <button onClick={cambiarEstadoFalse} className='btnDos'> Regresar </button>
              <button onClick={actualizarData} className='btnDos-act'> Actualizar tabla</button>

              <p> Tabla vacia... Actualiza</p> 
             
            </div>
          )
        }else{
          return(
            <div className='App'>
              <Navbar></Navbar>
              <p className='p'> Demo BSS-Status </p>
              <button onClick={cambiarEstadoFalse} className='btnDos'> Regresar </button>
              <button onClick={actualizarData} className='btnDos-act'> Actualizar tabla</button>
              
              <Table data={data}></Table>
            </div>
          )
        }
         }
        else if(dataAll){

          if(dataAll === []){
            return(
              <div className='App'>
                <Navbar></Navbar>
                <p className='p'> Demo BSS-Status </p>
                <button onClick={cambiarEstadoFalse} className='btnDos'> Regresar </button>
                <button onClick={actualizarData} className='btnDos-act'> Actualizar tabla</button>
  
                <p> Tabla vacia... Actualiza</p> 
               
              </div>
            )
          } else{
            return(
              <div className='App'>
              <Navbar></Navbar>
              <p className='p'> Demo BSS-Status </p>
              <button onClick={cambiarEstadoFalse} className='btnDos'> Regresar </button>
              <button onClick={actualizarDataAll} className='btnDos-act'> Actualizar tabla</button>
              <Table data={dataAll}></Table>
              </div>
            )}
          }
          
    }else{
      return(
        <div className='App'>
        <Navbar>
        </Navbar>
        <p className='p'> Demo BSS-Status </p>
        <p> Selecciona los datos que deseas visualizar </p>
        <p>Una vez seleccionado podras regresar a esta vista o actualizar la tabla</p>
        <Button onClick={ejecutarFunciones} />
        <ButtonAll onClick={ejecutarFuncionesAll}/>
      </div>
      )
    }
    
  }


}

export default App