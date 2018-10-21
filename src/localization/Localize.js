import translationCN from "./translation_CN";
import translationEN from "./translation_EN";

export const Localize = (id, option) => {
    if(option === "CN"){
        return translationCN[id];
    } else if(option === "EN"){
        return translationEN[id];
    }
    return null;
};

export default Localize;