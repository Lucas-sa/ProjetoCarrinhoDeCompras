import React, { useState, useEffect } from 'react'

export default function Home() {

  let [lista, setLista] = useState([]);
  const [valfinal, setValfinal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [frete, setFrete] = useState(0);

  useEffect(() => {

    async function carregarLista() {
      fetch('https://tempapi.proj.me/api/kYj20FGZD')
      .then( async (resp)=>resp.json())
      .then(data => {
        let res = [];
        let val = 0;
        data.map(data => {
          res.push(data)
          val = val + data.valorUnidade
          setSubtotal(val)
        })
        setLista(res)
      })
    }

    carregarLista()

  }, [])

  useEffect(() => {

    async function caclculaValorFinal(){
      if(subtotal >= 12 || subtotal === 0){
        setValfinal(subtotal)
        setFrete(0)
      } else {
        setValfinal(subtotal + frete)
        setFrete(10)
      }
    }
    caclculaValorFinal()
  })

  function adicionar(id) {
    var item = lista.filter((item) => item.id == id);
    item[0].quantidade = item[0].quantidade + 1 ;
    lista = item;
    console.log(item[0]);
    console.log(lista)

    let v = subtotal + item[0].valorUnidade;
    setSubtotal(v)
  }

  function remover(id) {
    var item = lista.filter((item) => item.id == id);
    if(item[0].quantidade > 1) {
      item[0].quantidade = item[0].quantidade - 1 ;
      lista = item;
      console.log(item[0]);
      console.log(lista)

      let v = subtotal - item[0].valorUnidade;
      setSubtotal(v)
    }
  }

  function excluir(id, valorUnidade, quantidade) {
    let novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista)
    let v = subtotal - (quantidade * valorUnidade);
    setSubtotal(v)
  }

  return (
    <div>
      <div className="barra col-12 mb-3 color p-2 py-4 text-white text-center h5 animate__animated animate__slideInDown">
        <strong>Meu carrinho</strong>
      </div>
      <div className=" container-fluid">
        <div className="row">

          <div className="lista col-lg-5 m-auto">
            <div className="row">
            {lista.map(lista => (
              <div className="col-11 col-sm-9 col-md-7 col-lg-11 my-2 m-auto mb-3 color rounded text-white shadow p-2 pb-3 pl-1 animate__animated animate__lightSpeedInLeft" key={lista.id}>
                <div className="container-fluid">  
                  <div className="row">
                    <div className="col-3  mt-1">
                      <img 
                        className=" bg-white img-fluid rounded"
                        src={lista.imgUrl}
                        alt="new"
                      />
                    </div>

                    <div className="col-9 mt-3">
                      <div className="">
                        <strong>{lista.nome}</strong>
                      </div>
                    </div>

                    <div className="col-7 mt-3">
                      <div className="">
                        <strong>Valor Unidade R$</strong> {lista.valorUnidade},00
                      </div>
                    </div>

                    <div className="col-5 py-1 text-center mt-2">
                      <div className="row border border-2 border-white rounded">

                        <button onClick={() => excluir(lista.id, lista.valorUnidade, lista.quantidade)} className="col-3 border-0 bg-none">
                          <img src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png" width="20" />
                        </button>

                        <button onClick={() => remover(lista.id) } className="col-3 border-0">
                          <strong>-</strong>
                        </button>

                        <div className="col-3">
                          <strong>{lista.quantidade}</strong>
                        </div>

                        <button onClick={() => adicionar(lista.id) } className="col-3 border-0">
                          <strong>+</strong>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div id="box-final-pai" className="col-12 col-md-12 col-lg-6 m-auto color px-5 py-4 text-white animate__animated animate__slideInUp">
            <div className='box-final-filho'>
            <div className="row">
              <div className="col-12 py-1">
                <div className="row">
                  <div className="col-6">
                    <strong>Subtotal</strong>
                  </div>
                  <div className="col-6 text-end">
                    R$ {subtotal},00
                  </div>
                </div>
              </div>

              {frete >= 0 &&
                <div className="col-12 py-1">
                  <div className="row">
                    <div className="col-9">
                      <strong>Valor Frete: </strong><small><em>Acima de 12,00, frete fica grátis</em></small>
                    </div>
                    <div className="col-3 text-end">
                      R$ {frete},00
                    </div>
                  </div>
                </div>
              }

              {subtotal >= 12 &&
                <div className="col-12 p-1 color-alert text-center rounded shadow">
                  <strong>Parabéns você ganhou frete grátis</strong>
                </div>
              }

              <div className="border-top border-white mt-3 mb-4"></div>

              <div className="col-7 col-md-4 col-lg-7 m-auto">
              <a href='/finalizar' className="form-control btn btn-finalizar py-3 mt-1 shadow text-white"><strong>Finalizar compra</strong></a>
              </div>
              <div className="col-5 col-md-4 col-lg-5 m-auto text-center py-2 rounded ">
                <strong>
                Valor Final <br/>
                R$ {valfinal},00
                </strong>
              </div>


            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
