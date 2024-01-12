import { useState } from "react";

export function Form({ setEntry }) {
   const [data, setData] = useState({
      text: '',
   });

   const { text } = data;

   const submitChange = (e) => {
      e.preventDefault();
      setData({text: ''});
      setEntry(data);
   }

   const inputChange = (e) => {
      const {name, value} = e.target;
      setData ((prevForm) => ({
         ...prevForm,
         text: name === 'text' ? value : prevForm.text,
      }));
   };

   return (
   <form className="inputForm" onSubmit={submitChange}>
      <label htmlFor="name">New Note</label>
      <div className="inputWrapper">
         <textarea 
         className="field"
         id="text"
         name="text"
         value={text}
         onChange={inputChange}>
         </textarea>
         <button className="btn submitBtn" type="submit"></button>
      </div>
   </form>
   )
}