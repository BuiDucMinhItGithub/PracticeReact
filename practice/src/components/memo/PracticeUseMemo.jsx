import React, { useMemo, useState } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function PracticeUseMemo() {
    // memo la HOC con useMemo la 1 hook (memo viet om lay component, useMemo viet trong function component)
    // memo tranh component bi re-render khi khong can thiet
    // useMemo tranh thuc hien lai 1 logic khong can thiet
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    function product(name, price) {
        this.name = name;
        this.price = price;
    }

    const handleClick = () => {
        const newProduct = new product(name, price);
        setProducts(prev => {
            const newProductList = [...prev, newProduct];
            return newProductList;
        });
        setName('');
        setPrice('');
    }

    const total = useMemo(() => {
        // DAT CONG THUC PHU TAP TRONG NAY DE TRANH XUW LI LAI NHIEU LAN TON TAI NGUYEN
        const result = products.reduce((result, prod) => {
            console.log('Tinh toan lai');
            return result + prod.price
        }, 0)
        return result;
    }, [products])

  return (
    <div>
        <InputText name='name' placeholder='Name' type="text"  onChange={e => setName(e.target.value)} />
        <InputText name='price' placeholder='Price' type="text"  onChange={e => setPrice(parseInt(e.target.value))} />
        <Button onClick={handleClick} label="Count" style={{marginRight:'20px'}}/>
        <h3>Total:{total}</h3>
    </div>
  )
}

export default PracticeUseMemo