export function Note({ item, deleteEntry }) {
   const { content } = item;
   return (
   <div className="note">
      <button className="btn delBtn" type="button" id={item.id} onClick={deleteEntry}></button>
      <p className="text">{content}</p>
   </div>
   )
}