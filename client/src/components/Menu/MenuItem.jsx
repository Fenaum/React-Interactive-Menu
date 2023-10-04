import menuDb from "../../db/menu.json"

export function MenuItem() {
    const menuItem = menuDb.menu.map((menuItem) => {
        return (
            <div>
                <h2>{menuItem.name}</h2>
            </div>
        )
    });
    console.log(menuItem);
    
    return (
        <>
            {menuItem}
        </>
    )
}