import "./PokemonCard.css"
import pokeball from "../images/pokeball.png"
import { useState } from "react"

function PokemonCard({ id, name, image, type, weight, height, stats, statsName }) {
    const [isShown, setIsShown] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function modalHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="container">
            {
                isShown && (
                    <div className="show">
                        <div className="stat-container-title">
                            <img src={image} alt={name} className="image-title" />
                            <p style={{ width: "180px", color: "#000" }}>No. {id}</p>
                            <p>{name}</p>
                            <img src={pokeball} alt="pokeball" className="pokeball-title" />
                        </div>

                        <img src={image} alt={name} />

                        <div style={{ display: "flex", width: "100%" }}>
                            <div className="stats-left" style={{ background: "#dbdbd9", textAlign: "center" }}>
                                <p>Type</p>
                                <p>Height</p>
                                <p>Weight</p>
                            </div>

                            <div className="stats-right" style={{ background: "#fff" }}>
                                <p>{type}</p>
                                <p>{height}0 cm</p>
                                <p>{weight} lbs</p>
                            </div>
                        </div>

                        <div className="base_stats">
                            <div>
                                {
                                    statsName.map((stats) => (
                                        <p className="stats">{stats}</p>
                                    ))
                                }
                            </div>

                            <div>
                                {
                                    stats.map((stats) => (
                                        <p className="stats">{stats}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }

            <div
                className="right"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <img src={image} alt={name} style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }} />
                <p style={{ width: "270px" }}>No. {id}</p>
                <p>{name}</p>
                <img src={pokeball} alt="pokeball" style={{ marginLeft: "auto", width: "40px" }} />
            </div>


        </div>
    )
}

export default PokemonCard