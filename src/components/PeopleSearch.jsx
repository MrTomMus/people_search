import React, { useEffect, useState } from "react";
import classes from "../components/PeopleSearch.module.css"

let PeopleSearch = ({value, onChange}) => {

    let [resultPeople, setPeople] = useState([
        {   
            name: 'John Travis',
            id: 1,
         },
        {
            name: 'Mark Black',
            id: 2,
        }])
    let [str, setStr] = useState('');

    useEffect(() => {
        alert(str)
        let url = '';
        fetch(url, {
            method: 'POST',
            body: str
        })
            .then((response) => response.json())
            .then((data) => setPeople([...resultPeople, {
                                      name: data.name,
                                      id: data.id  }]))
    }, [str])


    let list = resultPeople.map(obj => <li key={resultPeople.id} onClick={(event) => setStr(event.currentTarget.innerHTML)} className={classes.peopleName}>{obj.id} {obj.name}</li>)

    
    return (
        <div className={classes.people_seatch}>
            <input onChange={(event) => setStr(event.currentTarget.value)} 
                   value={str} 
                   placeholder="people search" 
                   type="text" />
            <h3 className={classes.text}>press Enter</h3>
            <div>
                <h2>Result</h2>
                <ul>{list}</ul>
            </div>
        </div>
    )
}

export default PeopleSearch;