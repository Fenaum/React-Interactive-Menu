import { useState, useEffect } from "react";
import menuAPI from "../../utils/menuService";
import useFetchMenuData from "../../hooks/useFetchMenuData";

export default function Promotion() {
  const { appetizers, entrees, desserts, drinks } = useFetchMenuData();

  const promotionItem = entrees.find((item) => item.promotion === true);

  return (
    <div className="promotion">
      <div className="promotion-section">
        <h2 className="promotion-title">
          Introducing Our Exquisite Osso Buco Special!
        </h2>
        <div className="content-section">
          <ul className="promotion-description">
            <li>
              Tender veal shanks braised to perfection in a savory white wine
              and broth reduction.
            </li>
            <li>
              Complemented by the rich flavors of onions, carrots, and celery.
            </li>
            <li>
              Served over a bed of creamy risotto milanese for an unforgettable
              Italian experience.
            </li>
            <li>Finished with gremolata for that perfect zest.</li>
          </ul>
          <p>
            Indulge in this Italian classic, crafted with love and passion by
            our skilled chefs. Osso Buco is the ultimate comfort food, and it's
            available now for a limited time. Don't miss out on this exquisite
            culinary journey!
          </p>
        </div>
      </div>
      <img
        src={promotionItem ? promotionItem.imgURL : "default_image_url"}
        alt="Promotion"
        className="promotion-img"
      />
    </div>
  );
}
