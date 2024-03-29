
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {CardComponent} from './CardComponent'
import {data} from './data'

// const heading1 = React.createElement("h1", {},  "hello");
// const nestedHeading = React.createElement("div", {} ,[
//     React.createElement("h1", {},  "Namaste javascript"),
//     React.createElement("h2", {},  "learn React"),
//     React.createElement("h3", {},  "in 3 months"),
// ] )

// const heading2 = (
//     <div id="title">
//         <h1>Hi Namaste</h1>
//         <h2>This is JSX</h2>
//         <h3>Hello</h3>
//     </div>
// )

// const HeaderComponentPractice = () => {
//     return (
//         <div id="title">
//             <h1>Hi Namaste</h1>
//             <h2>This is JSX</h2>
//             <h3>Header Component</h3>
//         </div>
//     )
// }

// const TitleComponent = () => <div> Title </div>

const WrapperComponent = () => {
    return(
        <>
         <HeaderComponent/>
         <div className="card-wrap">
            <CardWrapperComponent/>
         </div>
        </>
      
    )
}

const CardWrapperComponent = () => {
   return  data.map((element,index)=>{
      return <CardComponent data={element} key={index}/>
   })
}


const HeaderComponent = ( )=> {
    return (
        <div className="header_wrapper">
            <div>
                <img className="logo" src="https://thumbs.dreamstime.com/b/bird-logo-vector-icon-flying-silhouette-illustration-isolated-white-background-119625470.jpg"></img>
                <div>Debugger</div>
            </div>
            <input className="input-text"></input>
            <img className="user-icon" src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"></img>
        </div>

    )
}
    const child = ReactDOM.createRoot(document.getElementById("child"));
    child.render(<WrapperComponent></WrapperComponent>)