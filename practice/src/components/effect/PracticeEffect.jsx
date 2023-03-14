import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function PracticeEffect() {
    const [value, setValue] = useState(true);

    // state teacher
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedProduct, setSelectedProduct] = useState();
    const [people, setPeople] = useState([]);
    
    //state student
    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [selectedStudent, setSelectedStudent] = useState();
    const [students, setStudents] = useState([]);
    const [studentList, setStudentList] = useState([]);



    function newPerson(id, name, email, students) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.students = students;
    }

    function newStudent(id, name, email, teacherId, teacherName) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.teacherId = teacherId;
        this.teacherName = teacherName; 
    }


    const handleClick = () => {
        setPeople(prev => {
            const newOne = new newPerson(Math.floor(Math.random() * 10001),  name, email, null);
            const newPeopleList = [...prev,newOne];
            return newPeopleList;
        })
    };

    const handleEdit = () => {
        setValue(false);
        const array = people;
        array.foreach((key) => {
            console.log(key);
            const indexOfUpdate = array.findIndex(key => key.id === selectedProduct.id);
            array[indexOfUpdate].name = name;
            array[indexOfUpdate].email = email;
            const studentListOfUpdate = array[indexOfUpdate].students;
            studentListOfUpdate.foreach(( index) => {
                studentListOfUpdate[index].teacherName = name;
            })
            setPeople(array.filter(item => item.id !== 0));
        })
    }

    const handleRemoveAll = () => {
        setValue(false);
        setPeople([]);
        setStudents([]);
    }

    const handleRemove = () => {
        const array = people;
        const array2 = students;
        setStudents(array2.filter(item => item.teacherId !== selectedProduct.id ));
        setPeople(array.filter(item => item.id !== selectedProduct.id));
    };

    const handlePick = (value) => {
        setStudentList(students);
        const array = students;
        setValue(true);
        const newOne =  new newPerson(value.id,  value.name, value.email, value.students);
        setSelectedProduct(newOne);
        setEmail(newOne.email);
        setName(newOne.name);
        if(value.id === null){
            setStudents(array.filter(item => item.teacherId !== selectedProduct.id ));
        } else {
            setStudents(studentList);
        }
    }

    const handleAddStudent = () => {
        const array = people;
        setStudents(prev => {
            const newOne = new newStudent(Math.floor(Math.random() * 10001),  studentName, studentEmail, selectedProduct.id, name);
            const newStudentList = [...prev,newOne];
            array.foreach((key) => {
                const indexOfUpdate = array.findIndex(key => key.id === selectedProduct.id);
                array[indexOfUpdate].students = newStudentList;
            })
            return newStudentList;
        })
    }

    const handleEditStudent = () => {
        const array = students;
        array.foreach((key) => {
            console.log(key);
            const indexOfUpdate = array.findIndex(key => key.id === selectedStudent.id);
            array[indexOfUpdate].name = studentName;
            array[indexOfUpdate].email = studentEmail;
            setStudents(array.filter(item => item.id !== 0));
        })
    }

    const handleRemoveStudent = () => {
        const array = students;
        setStudents(array.filter(item => item.id !== selectedStudent.id));
    }

    const handlePickStudent = (value) => {
        const newOne =  new newStudent(value.id,  value.name, value.email, value.teacherName);
        setSelectedStudent(newOne);
        setStudentEmail(newOne.email);
        setStudentName(newOne.name);
    }

    useEffect(() => {
        setValue(true);
        setStudentName("");
        setStudentEmail("");
    }, [people, students])
    
  return (
    <div style={{margin:'20px'}}>
        <div className='row'>
            <div className='col-lg-3'>
                <div>
                    <InputText name='name' value={value === true ? name : ""} placeholder='Name' type="text"  onChange={e => setName(e.target.value)} style={{marginRight:'20px'}}/>
                    <InputText name='email' value={value === true ? email : ""} placeholder='Email' type="text"  onChange={e => setEmail(e.target.value)} />
                </div>
                <div style={{marginTop: '20px'}}>
                    <Button onClick={handleClick} label="Add" style={{marginRight:'15px'}}/>
                    <Button onClick={handleRemove} label="Remove" style={{marginRight:'15px'}}/>
                    <Button onClick={handleEdit} label="Edit" style={{marginRight:'15px'}}/>
                    <Button onClick={handleRemoveAll} label="Remove All" style={{marginRight:'15px'}}/>
                </div>    
            </div>
            <div className='col-lg-4'>
                <DataTable value={people} selectionMode="single" selection={selectedProduct}
                    onSelectionChange={(e) => handlePick(e.value)} dataKey="id">
                    <Column field="id" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="email" header="Email"></Column>
                </DataTable>
            </div>
            <div className='col-lg-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div>
                            <InputText name='name' value={value === true ? studentName : ""} placeholder='Student name' type="text"  onChange={e => setStudentName(e.target.value)} style={{marginRight:'20px'}}/>
                            <InputText name='email' value={value === true ? studentEmail : ""} placeholder='Student email' type="text"  onChange={e => setStudentEmail(e.target.value)} style={{marginRight:'20px'}}/><Button onClick={handleAddStudent} label="Add" style={{marginRight:'20px'}}/>
                            <Button onClick={handleRemoveStudent} label="Remove" style={{marginRight:'20px'}}/>
                            <Button onClick={handleEditStudent} label="Edit" style={{marginRight:'20px'}}/>
                        </div>
                    </div>
                </div>
                <DataTable value={students} selectionMode="single" selection={selectedStudent} style={{marginTop: '20px'}}
                    onSelectionChange={(e) => handlePickStudent(e.value)} dataKey="id">
                    <Column field="id" header="Code"></Column>
                    <Column field="name" header="Student name"></Column>
                    <Column field="email" header="Student email"></Column>
                    <Column field="teacherName" header="Teacher"></Column>
                </DataTable>
            </div>
        </div>
    </div>
  )
}

export default PracticeEffect