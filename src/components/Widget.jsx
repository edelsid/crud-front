import WidgetAPI from "../api/WidgetAPI";
import { useState, useEffect } from "react";
import { Notes } from "./Notes"
import { Form } from "./Form"
import { Note } from "./Note"
import { Header } from "./Header";

export function Widget() {
   const api = new WidgetAPI('https://crud-df49.onrender.com');

   const [state, setState] = useState([]);
   const [update, setUpdate] = useState(false);

   const getNotes = () => {
      console.log('sending get request');
      const callback = (error, response) => {
         if (error) {
            console.log(error);
            return;
         }
         const newData = [...response];
         setState(newData);
      };
      api.load(callback);
   };

   useEffect(getNotes, []);
   useEffect(() => {
      if (update) {
         setState([])
         getNotes();
         setUpdate(false);
      }
   }, [update]);
   
   const setEntry = (value) => {
      console.log('sending post request');
      const callback = (error) => {
         if (error) {
            console.log(error);
            return;
         }
         getNotes();
      };
      api.add(value, callback);
   }

   const reloadEntries = () => {
      setUpdate(true);
   }

   const deleteEntry = (e) => {
      const callback = (error) => {
         if (error) {
            console.log(error);
            return;
         }
         getNotes();
      };
      api.delete(e.target.id, callback);
   }

   return (
   <div className="container">
      <div className="notesWrapper">
         <Header reloadEntries={reloadEntries}></Header>   
         <Notes>
            {state.map((item) => <Note key={item.id} item={item} deleteEntry={deleteEntry}></Note>)}
         </Notes>
      </div>
      <Form setEntry={setEntry}></Form>
   </div>
   )
}