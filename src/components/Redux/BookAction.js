export const BUY='BUY';
export const SELL='SELL';
export const ADD='ADD';

export const BuyBooks=()=>{
    return{
        type:BUY,
        payload:5
    }

}

export const SellBooks=()=>{
    return{
        type:SELL,
        payload:2
    }
}

    export const AddBooks=(bookName)=>{
        return{
            type:ADD,
            payload:{name:bookName}
        }
    }


