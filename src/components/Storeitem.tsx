import { Card } from "react-bootstrap"

type StoreitemProps = {
    id: number,
    name: string,
    price: number,
    image: string,
}


export const Storeitem = ({id, name, price, image} : StoreitemProps) => {
  return (
    <Card key={id}>
        <Card.Body>
        <Card.Img variant="top" src={image} height='200px' style={{objectFit: 'cover'}}/>
            <Card.Title className="d-flex justify-content-space-between align-items-baseline" style={{textOverflow:'ellipsis'}} >{name}</Card.Title>
           
        </Card.Body>
    </Card>
  )
}
