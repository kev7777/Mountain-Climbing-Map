import React, {useState} from 'react';
import Select from 'react-select'

const StarRatings = [
    { label: "All routes", value: 0 },
    { label: "1+ of 5 stars", value: 1 },
    { label: "2+ of 5 stars", value: 2 },
    { label: "3+ of 5 stars", value: 3 },
    { label: "4+ of 5 stars", value: 4 },
    { label: "5 of 5 stars", value: 5 }
  ];
const Types = [
    { label: "All types", value: '' },
    { label: "Trad", value: 'Trad' },
    { label: "Sport", value: 'Sport' },
    { label: "Toprope", value: 'TR' }
  ];

const Filter = ({ climbs, setFilterClimbs }) => {
    const [stars, setStars] = useState({ label: "All ratings", value: 0 });
    const [type, setType] = useState({ label: "All types", value: '' });
    const onChangeStars = (e) => {
        const newClimbs = climbs.filter(x => x.stars >= e.value && x.type.includes(type.value))
        setFilterClimbs(newClimbs)
        setStars(e);
      };
      const onChangeType = (e) => {
        const newClimbs = climbs.filter(x => x.type.includes(e.value) && x.stars >= stars.value )
        setFilterClimbs(newClimbs)
        setType(e);
      };
    return (
        <div>
            <b>Select Rating:</b>
            <Select options={StarRatings} value={stars} onChange={onChangeStars}/>
            <b>Select Type:</b>
            <Select options={Types} value={type} onChange={onChangeType}/>
        </div>      
    )
  }
  
export default Filter