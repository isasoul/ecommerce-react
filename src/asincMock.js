const products =[
    {
        id: "1",
        name: "Magic Bunny",
        price: 30000,
        category: "Doble Estimulacion",
        img: "https://www.buttman.com.ar/pub/media/catalog/product/cache/eb19c54992323e23aea605744c7ac078/_/s/_s_a_satisfyer-vibes_magic_bunny_1280x1280.png",
        stock: 25,
        description:"Descripcion de producto"
    },
    {id:"2",name:"Ultra Power Bullet 7",price:20000,category:"Bullets",img:"https://www.buttman.com.ar/pub/media/catalog/product/cache/eb19c54992323e23aea605744c7ac078/c/a/captura_de_pantalla_2022-08-19_a_la_s_17.58.34.png",stock:25,description: "descripcion de producto"},
    {id:"3",name:"Yummy Sunshine",price:25000,category:"Punto G",img:"https://www.buttman.com.ar/pub/media/catalog/product/cache/eb19c54992323e23aea605744c7ac078/_/5/_5_1_51phovsyhtl._sy355_.jpg",stock:25,description: "descripcion de producto"},

]
    export const getProducts = () => {
        return new Promise ((resolve) => {
            setTimeout (() => {
                resolve (products)
            },500)
        })
    }


