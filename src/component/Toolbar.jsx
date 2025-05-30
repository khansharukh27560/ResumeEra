import React,{memo} from 'react';


    export const changeAlignment = (alignment) => {
        document.execCommand('justify' + alignment, false, null);
    };
    
    
    export const toggleStyle = (style) => {
        document.execCommand(style, false, null);
    };

    // Function to toggle lists (bullet and numbered)
    export const toggleList = (listType) => {
        document.execCommand(listType, false, null);
    };
// Reusable Toolbar Component
 function Toolbar({ toggleStyle, changeAlignment, toggleList }) {
    
    return (
        <div style={{
          display:'flex', justifyContent:'start', alignItems:'center', width:'fit-content',borderRadius:'15px', position: 'fixed', top: '150px', left: '10px', right: '10px', zIndex: '1000', backgroundColor: 'transparent', padding: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '20px'
        }}>
            <button onClick={() => toggleStyle('bold')}><b>B</b></button>
            <button onClick={() => toggleStyle('italic')}><i>I</i></button>
            <button onClick={() => toggleStyle('underline')}><u>U</u></button>
            <button onClick={() => toggleList('insertUnorderedList')}><i className="fa-solid fa-list-ul"></i></button>
            <button onClick={() => toggleList('insertOrderedList')}><i className="fa-solid fa-list-ol"></i></button>
            <button onClick={() => changeAlignment('Left')}><i className="fa-solid fa-align-left"></i></button>
            <button onClick={() => changeAlignment('Center')}><i className="fa-solid fa-align-center"></i></button>
            <button onClick={() => changeAlignment('Right')}><i className="fa-solid fa-align-right"></i></button>
            <button onClick={() => changeAlignment('Justify')}><i className="fa-solid fa-align-justify"></i></button>
        </div>
    );
}
export default memo(Toolbar);