import MenuService from "../../utils/menuService";

export default function Promotion() {

  const menuItems = MenuService.getMenuItems().entree;

  const promotionItem = menuItems.find((item => item.id === 3))
  console.log(promotionItem);

  return (
    <div className="promotion" >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sunt nemo at laborum quas quam velit nisi fuga cupiditate cum id quisquam, harum reprehenderit consectetur assumenda asperiores repellendus doloremque rem?</p>
        <img src={promotionItem.imgURL} alt="Promotion" className="promotion-img" />
    </div>
  );
}
