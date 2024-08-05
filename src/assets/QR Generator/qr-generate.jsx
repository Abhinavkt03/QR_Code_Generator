import { useEffect, useState } from "react"
import "./qrCode.css"

export default function QR() {
    let [value, setValue] = useState("Abhinav");
    let [word, setword] = useState("");
    let [generate, setGenerate] = useState("")
    let [background, setBackground] = useState("ffffff");
    let [dimention, setDimention] = useState(200);

    let handleClick = (e) => {
        setValue(e.target.value);
    };

    function handleWord() {
        setword(value);
        setGenerate(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${dimention}x${dimention}&bgcolor=${background}`);
    };

    let handleBackgroundColor = (e) => {
        setBackground(e.target.value.substring(1));
    };

    let handleDimention = (e) => {
        setDimention(e.target.value);
    };

    useEffect(() => {
        setGenerate(`http://api.qrserver.com/v1/create-qr-code/?data=Abhinav&size=${dimention}x${dimention}&bgcolor=${background}`);
    }, [word, dimention, background]
    );

    return (
        <>
            <h3>QR Code Generator</h3>
            <div className="container">
                <div className="form-container">
                    <input className="qr-input" type="text" onChange={handleClick} />
                    <button className="searchButton" onClick={handleWord}>Search</button>
                    <div className="qr-styling">
                        <div className="qr-background">
                            <h4>Background Color: <input type="color" onChange={handleBackgroundColor} /></h4>
                        </div>
                        <div className="qr-dimentions">
                            <h4>Dimensions:  <input type="range" onChange={handleDimention} min="200" max="600" /></h4>
                        </div>

                        <div className="qr-img">
                            <img src={generate} alt={value} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}