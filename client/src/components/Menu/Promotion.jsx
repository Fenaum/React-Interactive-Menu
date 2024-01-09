import { Fragment } from "react";
import menuAPI from "../../utils/menuService";
import useFetchMenuData from "../../hooks/useFetchMenuData";

export default function Promotion() {
  const categories = ["appetizers", "entrees", "desserts", "drinks"];
  let promotionItems = [];


  const menuData = useFetchMenuData();

  categories.forEach((category) => {
    const categoryItems = menuData[category];
    if (Array.isArray(categoryItems)) {
      const foundItems = categoryItems
        .filter((item) => item.promotion === true)
        .map((item) => ({
          ...item,
          imgURL:
            item.imgURL && item.imgURL.startsWith("http")
              ? item.imgURL
              : `http://localhost:5000${item.imgURL || ""}`,
        }));
      promotionItems = [...promotionItems, ...foundItems];
    }
  });


return (
  <>
    {promotionItems.map((item, index) => (
      <div className="promotion" key={index}>
        <div className="promotion-section">
          <h2 className="promotion-title">{item.name}</h2>
          <div className="content-section">
            <div className="promotion-details">
              {item.promotionDetails ? (
                item.promotionDetails[0].split("\n").map((line, index) => {
                  if (index === 0) {
                    return (
                      <div key={index} className="first-line-centered">
                        {line}
                      </div>
                    );
                  } else {
                    return (
                      <Fragment key={index}>
                        {line}
                        <br />
                      </Fragment>
                    );
                  }
                })
              ) : (
                // Handle the case where promotionDetails is undefined
                <div className="first-line-centered">
                  No promotion details available.
                </div>
              )}
            </div>
            <ul className="promotion-description">
              <li>{item.description}</li>
            </ul>
          </div>
        </div>
        <img
          src={item.imgURL || "default_image_url"}
          alt="Promotion"
          className="promotion-img"
        />
      </div>
    ))}
  </>
);}