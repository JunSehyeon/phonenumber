import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const ContactList = () => {
    const contactList = useSelector((state) => state.contactList); // contactList와 keyword를 개별적으로 선택
  const keyword = useSelector((state) => state.keyword);
    let [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        if (keyword !== "") {
          let list = contactList.filter((item) => item.name.includes(keyword));
    
          setFilteredList(list);
        } else {
          setFilteredList(contactList);
        }
      }, [keyword, contactList]);
  return (
    <div>
     <SearchBox/> 
     <div className="contact-list">
        num:{filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ContactList
