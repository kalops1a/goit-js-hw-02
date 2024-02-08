function getShippingCost(country) {
    let price;
    
    let result;
    switch (country) {
        case "China":
            price = 100;
            result = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Chile": 
            price = 250;
            result = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Australia": 
            price = 170;
            result = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Jamaica": 
            price = 120;
            result = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            result = "Sorry, there is no delivery to your country";
    }

    return result;
}



console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"