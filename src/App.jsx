import Card from "./Card";

export default function App() {


  const cardData=[{
    name: "Nike",
    price: "20000",
    des:" Nike World Is your Price",
    imageUrl:"https://c0.klipartz.com/pngpicture/723/143/gratis-png-zapato-nike-air-force-zapatos-nike-thumbnail.png"
  },
  
  {
    name: "Adidas",
    price: "25000",
    des:" Adidas boost 350",
    imageUrl:"https://storage.apex4u.com/1f2429b4-beda-4c52-971d-545c90ec2bc2.png"
  },
  {
    name: "Bata",
    price: "2000",
    des:" World Class Shoe",
    imageUrl:"https://e7.pngegg.com/pngimages/626/431/png-clipart-bata-shoes-sneakers-dress-shoe-casual-heels-brown-retail.png"
  },
  {
    name: "Apex",
    price: "3000",
    des:" Apex Shoe",
    imageUrl:"https://e7.pngegg.com/pngimages/784/778/png-clipart-nike-sports-shoes-adidas-puma-tsugi-apex-evoknit-nike.png"
  },
  {
    name: "Lotto",
    price: "3000",
    des:" Lotto Shoe",
    imageUrl:"https://e7.pngegg.com/pngimages/784/778/png-clipart-nike-sports-shoes-adidas-puma-tsugi-apex-evoknit-nike.png"
  },
  {
    name: "Nike",
    price: "20000",
    des:" Nike World Is your Price",
    imageUrl:"https://c0.klipartz.com/pngpicture/723/143/gratis-png-zapato-nike-air-force-zapatos-nike-thumbnail.png"
  },
  
  {
    name: "Adidas",
    price: "25000",
    des:" Adidas boost 350",
    imageUrl:"https://storage.apex4u.com/1f2429b4-beda-4c52-971d-545c90ec2bc2.png"
  },
  {
    name: "Bata",
    price: "2000",
    des:" World Class Shoe",
    imageUrl:"https://e7.pngegg.com/pngimages/626/431/png-clipart-bata-shoes-sneakers-dress-shoe-casual-heels-brown-retail.png"
  },
  {
    name: "Apex",
    price: "3000",
    des:" Apex Shoe",
    imageUrl:"https://e7.pngegg.com/pngimages/784/778/png-clipart-nike-sports-shoes-adidas-puma-tsugi-apex-evoknit-nike.png"
  },
  {
    name: "Lotto",
    price: "3000",
    des:" Lotto Shoe",
    imageUrl:"https://e7.pngegg.com/pngimages/784/778/png-clipart-nike-sports-shoes-adidas-puma-tsugi-apex-evoknit-nike.png"
  },

];
console.log(cardData);

  return (

    <div className="flex flex-wrap gap-20">
      {
        cardData.map((shoe, i) => (<Card cardInfo={shoe} key={i}/>))
      }
    </div>
  )
}