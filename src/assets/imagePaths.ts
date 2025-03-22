// src/assets/imagePaths.ts
interface ImageData {
    src: string;
    alt: string;
    name: string;
    description: string;
    price:number;
  }
  
  const imagePaths: ImageData[] = [
      { 
          src: "../../public/images/images-tools/andamio.png", 
          alt: "Imagen 1", 
          name: "Andamio", 
          description:"Andamio ligero galvanizado banquetero de cinco peldaños, es ideal para obras ligeras, trabajos en interior y espacios reducidos, con sus cinco peldaños permite subir con seguridad y comodidad por la escalerilla.",
          price: 150,
      },
      { 
          src: "../../public/images/images-tools/ROTOMARTILLO.png", 
          alt: "Imagen 2", 
          name: "topadora", 
          description:"El rotomartillo GBH432DFR de Bosch es el más rápido de la clase, pues es un 30% superior a los competidores en las perforaciones.",
            price: 85,
      },
      { 
        src: "../../public/images/images-tools/andamio.png", 
        alt: "Imagen 1", 
        name: "Andamio", 
        description:"Andamio ligero galvanizado banquetero de cinco peldaños, es ideal para obras ligeras, trabajos en interior y espacios reducidos, con sus cinco peldaños permite subir con seguridad y comodidad por la escalerilla.",
        price: 150,
    },
    { 
        src: "../../public/images/images-tools/ROTOMARTILLO.png", 
        alt: "Imagen 2", 
        name: "topadora", 
        description:"El rotomartillo GBH432DFR de Bosch es el más rápido de la clase, pues es un 30% superior a los competidores en las perforaciones.",
          price: 85,
    },
      
  ];
  
  export default imagePaths;
  