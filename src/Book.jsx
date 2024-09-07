
import './Book.css'
export default function Book({books}){
    const {name, price} = books;
 return (
    <div className='book'>
        <h3>Name: {name}</h3>
        <h3>Price: {price}</h3>
    </div>
 )
}