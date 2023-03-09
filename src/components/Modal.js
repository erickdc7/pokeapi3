import pokeball from "../images/pokeball.png"
import bg from "../images/bg.jpg"

function Modal({ onClick, id, name, image, type, height, weight, stats, statsName }) {
    return (
        <div style={{ display: "flex", position: "fixed", top: "0", left: "0", zIndex: "10", width: "100%", height: "100px", alignItems: "center", justifyContent: "space-evenly", backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div
                onClick={onClick}
                style={{ position: "absolute", top: "50px", right: "50px", borderRadius: "50%", padding: "5px 10px", background: "#000", color: "#fff", fontWeight: "900", cursor: "pointer" }}
            >
                X
            </div>

            <div>
                <img src={image} alt={name} style={{ filter: "drop-shadow(2px 4px 12px #000)" }} />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column", width: "450px", height: "500px" }}>
                <div className="stat-container-title">

                </div>
            </div>
        </div>

    )
}

export default Modal