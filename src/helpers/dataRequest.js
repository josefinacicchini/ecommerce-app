import stock from '../data/MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise ( (resolve, reject) => {
    setTimeout( ()=> {
        resolve(stock)
        
    }, 2000)
    })
}


export const pedirItemPorId = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const item = stock.find((el) => el.id === id)
            if(item){
                resolve(item)
            } else {
                reject({
                    error: 'No se encontró el producto'
                })
            }

        }, 2000)
    })
}