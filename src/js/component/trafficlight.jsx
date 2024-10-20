import React,{useState} from "react";

const TrafficLight = () => {

    const [color, setColor] = useState("");


    return (<>
        <div className= "bg-dark mx-auto" style={{width:"25px", height:"250px"}}></div>
        <div className= "bg-dark mx-auto rounded-4 align-items-around d-flex flex-column justify-content-center align-items-center" style={{width:"200px", height:"500px"}}>
            <div onClick= { () => {
                setColor("red")
            }} className={"bg-danger rounded-circle " + (color=="red"? "onlightred" : "")} style={{height:"150px", width:"150px"}}></div>
            <div onClick={() => {
                setColor("yellow")
            }} className={"bg-warning rounded-circle " + (color=="yellow" ? "onlightyellow" : "")} style={{height:"150px", width:"150px"}}></div>
            <div onClick={ ()=> {
                setColor("green")
            }} className={"bg-success rounded-circle "+ (color =="green" ? "onlightgreen" : "")} style={{height:"150px", width:"150px"}}></div>
        
        </div>
        
        </>
    )}


export default TrafficLight;

