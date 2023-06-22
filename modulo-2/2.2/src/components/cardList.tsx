import Card from "./card";

const infoRioDeJaneiro = {
  city: 'Rio de Janeiro',
  country: 'Brasil',
  imageUrl: 'https://th.bing.com/th/id/R.9d212d4b95619492238690980b9ddfea?rik=je5PvQ9%2fZQy7hg&pid=ImgRaw&r=0',
  visited: true,
};

const infoCidadeDoCabo = {
  city: 'Cidade do Cabo',
  country: 'África do Sul',
  imageUrl: 'https://th.bing.com/th/id/OIP.zLQg_46iC2AK8NAZdCdj0QHaE0?pid=ImgDet&rs=1',
  visited: true,
};

const infoAcapulco = {
  city: 'Acapulco',
  country: 'México',
  imageUrl: 'https://th.bing.com/th/id/R.96fcfe094ba9327eafde907bd892dc5e?rik=cGeLWtVvs%2fJwMw&pid=ImgRaw&r=0',
};

function CardList() {
  return (
    <div className="card-list">
        <Card cityInfo={ infoRioDeJaneiro } />
        <Card cityInfo={ infoCidadeDoCabo } />
        <Card cityInfo={ infoAcapulco } />
    </div>
  );
}

export default CardList;