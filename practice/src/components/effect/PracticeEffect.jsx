import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function PracticeEffect() {
    function newPerson(id, name, email) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedProduct, setSelectedProduct] = useState();
    const [people, setPeople] = useState([]);
    const [value, setValue] = useState(true);

    const handleClick = () => {
        setPeople(prev => {
            const newOne = new newPerson((Math.random() * 100) + 1,  name, email);
            const newPeopleList = [...prev,newOne];
            return newPeopleList;
        })
    };

    const handleEdit = () => {
        const array = people;
        array.map((key, index) => {
            console.log(key);
            const indexOfUpdate = array.findIndex(key => key.id === selectedProduct.id);
            array[indexOfUpdate].name = name;
            array[indexOfUpdate].email = email;
            setPeople(array.filter(item => item.id !== 0));

        })
    }

    const handleRemove = () => {
        const array = people;
        setPeople(array.filter(item => item.id != selectedProduct.id));
    };

    const handlePick = (value) => {
        setValue(true);
        const newOne =  new newPerson(value.id,  value.name, value.email);
        setSelectedProduct(newOne);
        setEmail(newOne.email);
        setName(newOne.name);
    }

    useEffect(() => {
    }, [people])
    
  return (
    <div style={{margin:'20px'}}>
        <Button onClick={handleClick} label="Submit" style={{marginRight:'20px'}}/>
        <Button onClick={handleRemove} label="Remove" style={{marginRight:'20px'}}/>
        <Button onClick={handleEdit} label="Edit" style={{marginRight:'20px'}}/>
        <InputText name='name' value={value === true ? name : ""} placeholder='Name' type="text"  onChange={e => setName(e.target.value)} style={{marginRight:'20px'}}/>
        <InputText name='email' value={value === true ? email : ""} placeholder='Email' type="text"  onChange={e => setEmail(e.target.value)} />
        <DataTable value={people} selectionMode="single" selection={selectedProduct}
        onSelectionChange={(e) => handlePick(e.value)} dataKey="id" style={{marginTop:'20px'}}>
            <Column field="id" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
        </DataTable>
    </div>
  )
}

export default PracticeEffect