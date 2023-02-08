import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {

    const dispatch = useDispatch();

    const [color, setColor] = useState("");

    /// Change Color Component
    return (
        <div className="change-color">
            <div>Change Color</div>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={() => dispatch(changeColor(color))}>CHANGE COLOR</button>
        </div>
    )
}

export default ChangeColor;
