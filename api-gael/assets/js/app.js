// declaracion de variables

let inputMonto = document.querySelector("#monto"); /* ingresar monto*/
const selectMonedas = document.querySelector("#seleccione-moneda"); /*seleccion de moneda*/
let boton = document.querySelector('#btn-buscar'); /* boton*/
let result = document.querySelector("#result"); /* pintar resultado en el html*/
let html = "";

try {

    cargarApi();
     
    async function cargarApi() {
        let respuesta = await fetch('https://api.gael.cloud/general/public/monedas');
        let data = await respuesta.json();


        html = '<option value="">Seleccione Moneda</option>';

        for (let i = 0; i < data.length; i++) {
            const moneda = data[i];
            if (moneda.Nombre == 'Dolar Americano' ||
                moneda.Nombre == 'Unidad de Fomento' ||
                moneda.Nombre == 'Peso cubano' ||
                moneda.Nombre == 'Peso uruguayo' ||
                moneda.Nombre == 'Euro' ||
                moneda.Nombre == 'Bolivar fuerte venezolano') {
                html += `<option value="${moneda.Valor}">${moneda.Nombre}</option>`;
            }

        }

        selectMonedas.innerHTML = html;

    }

    function convertidor() {
         // validar campos 
         if (inputMonto.value == "") 
         {
           alert("CAMPO VACIO. INGRESE UN MONTO Y VUELVA A INTENTAR");
           return;
         }
         if (selectMonedas.value == "") 
         {
           alert("CAMPO VACIO. SELECCIONE UNA MONEDA Y VUELVA A INTENTAR");
           return;
         }

        //  operacion de conversion
        let monto = inputMonto.value;
        let resultMoneda = selectMonedas.value;

        let valorConversor = parseFloat(monto) * parseFloat(resultMoneda.replace(',', '.'));
       
        result.innerHTML = `Resultado: $${valorConversor.toFixed(2)}`;

        PintarGrafico();
    }

    function PintarGrafico() {
        //forma de obtener el texto que ve el usuario en el option seleccionado
        let resultMoneda = selectMonedas.options[selectMonedas.selectedIndex].text;
       
        if(resultMoneda == 'Dolar Americano') {
            Dolar();
        }

        if(resultMoneda == 'Unidad de Fomento') {
            UnidadFomento();
        }
        if(resultMoneda == 'Peso cubano') {
            PesoCubano();
        }
        if(resultMoneda == 'Peso uruguayo') {
            PesoUruguayo();
        }
        if(resultMoneda == 'Euro') {
            Euro();
        }
        if(resultMoneda == 'Bolivar fuerte venezolano') {
            BolivarVenezolano();
        }      
     

    }

    function Dolar() {
        let chart1 = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light2", "dark1", "dark2"
            animationEnabled: false, // change to true		
            title:{
                text: "Estadistica Del Dólar Americano"
            },
            data: [
            {
                // dias de la semana segun la variablilidad del cambio
                type: "column",
                dataPoints: [

                    { label: "Miercóles 20/07/22",  y: 1006.50  },
                    { label: "Jueves 21/07/22",  y: 994.50  },
                    { label: "Viernes 22/07/22", y: 981.03  },
                    { label: "Sábado 23/07/22", y: 967.09  },
                    { label: "Domingo 24/07/22",  y: 954.34 },
                    { label: "Lunes 25/07/22",  y: 950.50  },
                    { label: "Martes 26/07/22", y: 941.03  },
                    { label: "Miercóles 27/07/22", y: 937.09 },
                    { label: "Jueves 28/07/22",  y: 934  },
                    { label: "Viernes 29/07/22",  y: 911.42 }
                    
                      
                ]
            }
            ]
        });
        chart1.render();
    }

    function UnidadFomento() {
        let chart2 = new CanvasJS.Chart("chartContainer", {
                theme: "light2", // "light2", "dark1", "dark2"
                animationEnabled: false, // change to true		
                title:{
                    text: "Estadistica De La Unidad De Fomento"
                },
                data: [
                {
                    // variabilidad de la UF
                    type: "column",
                    dataPoints: [
                                
                               
                                { label: "Miercóles 20/07/22",  y: 33311.95  },
                                { label: "Jueves 21/07/22", y: 33320.05  },
                                { label: "Viernes 22/07/22", y: 33330.09 },
                                { label: "Sábado 23/07/22",  y: 33340.09 },
                                { label: "Domingo 24/07/22",  y: 33349.72 }, 
                                { label: "lunes 25/07/22",  y: 33359.50  },
                                { label: "martes 26/07/22", y: 33359.36  },
                                { label: "miercóles 27/07/22", y: 33378.65 },
                                { label: "jueves 28/07/22",  y: 33378.95 },
                                { label: "viernes 29/07/22",  y: 33397.95}
                          
                    ]
                }
                ]
            });
            chart2.render();
    }

    function PesoCubano(){
        let chart5 = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light2", "dark1", "dark2"
            animationEnabled: false, // change to true		
            title:{
                text: "Estadistica Del Peso Cubano"
            },
            data: [
            {
                
                type: "column",
                dataPoints: [
                            // variabilidad pesos cubano
                           
                            { label: "Miercóles 20/07/22",  y: 38.68  },
                            { label: "Jueves 21/07/22", y: 38.72  },
                            { label: "Viernes 22/07/22", y: 39.65 },
                            { label: "Sábado 23/07/22",  y: 38.70 },
                            { label: "Domingo 24/07/22",  y: 39.85 }, 
                            { label: "lunes 25/07/22",  y: 39.05  },
                            { label: "martes 26/07/22", y: 38.54  },
                            { label: "miercóles 27/07/22", y: 37.97 },
                            { label: "jueves 28/07/22",  y: 37.86 },
                            { label: "viernes 29/07/22",  y: 37.55}
                      
                ]
            }
            ]
        });
        chart5.render();
    }

    function PesoUruguayo() {
         let chart4 = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light2", "dark1", "dark2"
            animationEnabled: false, // change to true		
            title:{
                text: "Estadistica Del Peso Uruguayo"
            },
            data: [
            {
                
                type: "column",
                dataPoints: [
                            // variabilidad pesos uruguayo
                           
                            { label: "Miercóles 20/07/22",  y: 22.08  },
                            { label: "Jueves 21/07/22", y: 22.19  },
                            { label: "Viernes 22/07/22", y: 22.78 },
                            { label: "Sábado 23/07/22",  y: 22.12 },
                            { label: "Domingo 24/07/22",  y: 22.78 }, 
                            { label: "lunes 25/07/22",  y: 22.42  },
                            { label: "martes 26/07/22", y: 22.18  },
                            { label: "miercóles 27/07/22", y: 21.85 },
                            { label: "jueves 28/07/22",  y: 21.89 },
                            { label: "viernes 29/07/22",  y: 22.00}
                      
                ]
            }
            ]
        });

        chart4.render();
    }

    function Euro() {
        let chart3 = new CanvasJS.Chart("chartContainer", {
                theme: "light2", // "light2", "dark1", "dark2"
                animationEnabled: false, // change to true		
                title:{
                    text: "Estadistica Del Euro"
                },
                data: [
                {
                    // variabilidad euro
                    type: "column",
                    dataPoints: [
                                
                               
                                { label: "Miercóles 20/07/22",  y: 944.95  },
                                { label: "Jueves 21/07/22", y: 944.97  },
                                { label: "Viernes 22/07/22", y: 944.82 },
                                { label: "Sábado 23/07/22",  y: 944.82 },
                                { label: "Domingo 24/07/22",  y: 944.22 }, 
                                { label: "lunes 25/07/22",  y: 975.75  },
                                { label: "martes 26/07/22", y: 951.11  },
                                { label: "miercóles 27/07/22", y: 939.65 },
                                { label: "jueves 28/07/22",  y: 922.42 },
                                { label: "viernes 29/07/22",  y: 930.87}
                          
                    ]
                }
                ]
            });
    
            chart3.render();
    }

    function BolivarVenezolano() {
         let chart6 = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light2", "dark1", "dark2"
            animationEnabled: false, // change to true		
            title:{
                text: "Estadistica Del Bolivar Venezolano"
            },
            data: [
            {
                
                type: "column",
                dataPoints: [
                            // variabilidad bolivar vzla
                           
                            { label: "Miercóles 20/07/22",  y: 169.94  },
                            { label: "Jueves 21/07/22", y: 169.75  },
                            { label: "Viernes 22/07/22", y: 174.07 },
                            { label: "Sábado 23/07/22",  y: 169.05 },
                            { label: "Domingo 24/07/22",  y: 174.85 }, 
                            { label: "lunes 25/07/22",  y: 171.24  },
                            { label: "martes 26/07/22", y: 169.04  },
                            { label: "miercóles 27/07/22", y: 168.97 },
                            { label: "jueves 28/07/22",  y: 166.12 },
                            { label: "viernes 29/07/22",  y: 156.24}
                      
                ]
            }
            ]
        });
        chart6.render();
    }


}

catch (error) {
    alert(error.message);
}
