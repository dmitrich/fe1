import React from "react";
import "./App.css";

function Content() {

    const clickButtonHandler = (value) => {
        console.log('Button Clicked! ' + value);
    };

    const inputHandler = (e) => {
        console.log(e.target.value);
    };
    
    return (
        <main>
            <div className="container">
                <h1>First app</h1>
                <p>
                    Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.
                    Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.
                </p>
                <p>
                    Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.
                    Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.
                </p>
                <input  type="text" onChange={inputHandler}/>
                <button onClick={() => clickButtonHandler(1)}>Add One</button>
                <button onClick={() => clickButtonHandler(2)}>Add Two</button>
            </div>
        </main>
    );
}

export default Content;