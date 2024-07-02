import GreenPressedBottle from '../assets/greenPressedBottle.png'; //Remove/Change Image

const itemsArray = [
    {
        id: 1,
        title: "Green",
        image: GreenPressedBottle,
        price: 4.99,
        shortDescription: "WIP",
        LongDescription: "WIP",
        newItem: false,
        available: false
    },
    {
        id: 2,
        title: "5x5 Detox Carrot Juice",
        image: GreenPressedBottle,
        price: 29.99,
        shortDescription: "WIP",
        LongDescription: "WIP",
        newItem: false,
        available: false
    }
]

const getItemData = (id) => {
    const itemData = itemsArray.find(item.id === id)

    if(itemData === undefined){
        return undefined
    }else{
        return itemData;
    }
}

export {itemsArray, getItemData}