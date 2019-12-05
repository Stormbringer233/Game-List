/**
 * @author : M. Le Thiec
 * @date : 04/12/2019
 */




function Datas(){
    const DATAS = [];
    DATAS.push({category:"FPS", name:"Counter Strike", price:10, stored:true});
    DATAS.push({category:"FPS", name:"Splinter Cell Blacklist", price:40, stored:false});
    DATAS.push({category:"FPS", name:"Battle field 4", price:30, stored:false});
    DATAS.push({category:"RPG", name:"Dragon age 2", price:30, stored:true});
    DATAS.push({category:"RPG", name:"Skyrim", price:45, stored:true});
    DATAS.push({category:"RPG", name:"the Witcher 3", price:40, stored:true});
    DATAS.push({category:"AVENTURE", name:"Runaway", price:8, stored:false});
    DATAS.push({category:"AVENTURE", name:"Les chevalier de Baphomet", price:20, stored:true});
    DATAS.push({category:"ACTION", name:"Rayman 4", price:20, stored:true});
    DATAS.push({category:"ACTION", name:"Samourai Shadow", price:20, stored:true});
    DATAS.push({category:"ACTION", name:"Trine 1", price:20, stored:true});

    return DATAS;
}

export default Datas;