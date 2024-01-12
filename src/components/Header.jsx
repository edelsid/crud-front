export function Header({ reloadEntries }) {
   return (
   <div className="headerWrapper">
      <h1 className="header">Notes</h1>
      <button className="btn reloadBtn" type="button" onClick={reloadEntries}></button>
   </div>  
   )
 }