// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = [
    {
      "id": 1,
      "nome": "TRUNFA CACEU SHOW LA CASA DE PAPEL 30G",
      "valorUnidade": 2,
      "imgUrl": "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw153eb59b/large/1002494_1.png",
      "quantidade": 1
    },
    {
      "id": 2,
      "nome": "TRUNFA CACEU SHOW NETFLIX 30G",
      "valorUnidade": 2,
      "imgUrl": "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw2076760f/large/1002497_1.png",
      "quantidade": 1
    },
    {
      "id": 3,
      "nome": "TRUNFA CACEU SHOW BRIDGERTON 30G",
      "valorUnidade": 2,
      "imgUrl": "https://valedopontar.com.br/wp-content/uploads/2021/09/trufa-bridgerton.png",
      "quantidade": 1
    },
    {
      "id": 4,
      "nome": "TRUNFA CACEU SHOW THE WITCHER 30G",
      "valorUnidade": 2,
      "imgUrl": "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw902697ab/large/1002493_1.png",
      "quantidade": 1
    }
  ]
  res.status(200).json(data)
}
