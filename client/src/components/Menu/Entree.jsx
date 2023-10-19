import { useEffect, useRef, useState } from "react";
import fetchMenuItems from "../../utils/menuService";
const fetchEntree = fetchMenuItems.fetchEntree;

export default function Entree() {
    const containerRef = useRef(null);
    const [ entreeData, setEntreeData ] = useState([])

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleWheel = function (e) {
                if (e.deltaY > 0) container.scrollLeft += 500;
                else container.scrollLeft -= 500;
                e.preventDefault();
            };
            container.addEventListener("wheel", handleWheel);
            return () => {
                container.removeEventListener("wheel", handleWheel);
            };
        }
    }, []);

    //fetching data and store in in state
    useEffect(() => {
        fetchEntree()
        .then(data => {
            setEntreeData(data);
        })
        .catch( err => console.error(err))
    }, []);

    const EntreeItemsList = entreeData.map((entreeItem) => (
      <div className="item-card" key={entreeItem._id}>
        <img className="item-img" src={entreeItem.imgURL} alt="item-img" />
        <h2>{entreeItem.name}</h2>
        <p className="price">Price: ${entreeItem.price}</p>

        <p>{entreeItem.description}</p>
        {/* Add additional data rendering here */}
      </div>
    ));

    return (
        <div 
            className="card-container" id="card-container" ref={containerRef} 
        >
            {EntreeItemsList}
        </div>
    );
}
