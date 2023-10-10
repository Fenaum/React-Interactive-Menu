import MenuService from "../../utils/menuService";

export default function Promotion() {

  const menuItems = MenuService.getMenuItems().entree;

  const promotionItem = menuItems.find((item => item.id === 3))
  console.log(promotionItem);

  return (
    <div className="promotion">
      <div className="promotion-section" >
        <h2>Introducing Our Exquisite Osso Buco Special!</h2>
        <div className="content-section">          
          <ul>
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
            Indulge in this Italian classic, crafted with love and passion by our
            skilled chefs. Osso Buco is the ultimate comfort food, and it's
            available now for a limited time. Don't miss out on this exquisite
            culinary journey!
          </p>
        </div>
      </div>
      <img
        src={promotionItem.imgURL}
        alt="Promotion"
        className="promotion-img"
      />
    </div>
  );
}
