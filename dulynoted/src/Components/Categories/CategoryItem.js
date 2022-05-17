import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoClose } from "react-icons/io5";
import Todo from '../ToDo/Todo';

const CategoryItem = (props) => {  
    const { item, updateCategory, removeCategory } = props;
    const inputRef = useRef(true);
  
    const changeFocus = () => {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    };
  
    const update = (categoryId, value, e) => {
      if (e.which === 13) {
        //here 13 is key code for enter key
        updateCategory({ categoryId, item: value });
        inputRef.current.disabled = true;
      }
    };
   
    return (
      <li
        key={item.categoryId}
        className="card"
      >
        <br />
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.categoryId, inputRef.current.value, e)}
        />
        <div className="btns">
          <button  onClick={() => changeFocus()}>
            <AiFillEdit />
          </button>
          <button
            style={{ color: "red" }}
            onClick={() => removeCategory(item.categoryId)} >
            <IoClose />
          </button>
          <Todo />
        </div>
      </li>
    );
  };
  
  export default CategoryItem;