import React,{useCallback, useEffect, useRef} from "React"; 

function inputForm(){
    const nameRef = useRef(null);
    const paswordsRef = useRef(null);
    const btnClic=useCallback(()=>{
    

   },[])

return(
    <div clasName="formbox">
        <form>
             <label>
                Name:
                <br />
                <input type = "text" ref={nameRef}></input>
             </label>
             <label>
                Password:
                <br />
                <input type = "text" ref={paswordsRef}></input>
             </label>
             <button onClick={btnClic}></button>
        </form>
    </div>
)

}
export default inputForm;

