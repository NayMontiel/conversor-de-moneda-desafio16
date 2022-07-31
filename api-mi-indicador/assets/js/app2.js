// declaracion de variables

let inputMonto = document.querySelector("#monto"); /* ingresar monto*/
const selectMonedas = document.querySelector("#seleccione-moneda"); /*seleccion de moneda*/
let result = document.querySelector("#result"); /* pintar resultado en el html*/
let html = "";

try {

    cargarApi();
     
    async function cargarApi() {
        let respuesta = await fetch('https://mindicador.cl/api/');
        let data = await respuesta.json();


        html = '<option value="">Seleccione Moneda</option>';

        html += `<option value="${data['uf'].valor}">${data['uf'].nombre}</option>`;
        html += `<option value="${data['dolar'].valor}">${data['dolar'].nombre}</option>`;
        html += `<option value="${data['euro'].valor}">${data['euro'].nombre}</option>`;
        
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

        // conversion
        let monto = inputMonto.value;
        let resultMoneda = selectMonedas.value;

        let valorConversor = parseFloat(monto) * parseFloat(resultMoneda.replace(',', '.'));
        // alert(valorConversor);
        result.innerHTML = `Resultado: $${valorConversor.toFixed(2)}`;

        PintarGrafico();
    }

    function PintarGrafico() {
        //forma de obtener el texto que ve el usuario en el option seleccionado
        let resultMoneda = selectMonedas.options[selectMonedas.selectedIndex].text;
       
        if(resultMoneda == 'Dólar observado') {
            Dolar();
        }

        if(resultMoneda == 'Unidad de fomento (UF)') {
            UnidadFomento();
        }

        if(resultMoneda == 'Euro') {
            Euro();
        }

       

    }

    async function Dolar() {

        let respuesta = await fetch('https://mindicador.cl/api/dolar');
        let data = await respuesta.json();

        let linea_json = '';
        linea_json += `[{ "label": "${data['serie'][9].fecha}",  "y": ${data['serie'][9].valor}  },`;
        linea_json += `{ "label": "${data['serie'][8].fecha}",  "y": ${data['serie'][8].valor}  },`;
        linea_json += `{ "label": "${data['serie'][7].fecha}",  "y": ${data['serie'][7].valor}  },`;
        linea_json += `{ "label": "${data['serie'][6].fecha}",  "y": ${data['serie'][6].valor}  },`;
        linea_json += `{ "label": "${data['serie'][5].fecha}",  "y": ${data['serie'][5].valor}  },`;
        linea_json += `{ "label": "${data['serie'][4].fecha}",  "y": ${data['serie'][4].valor}  },`;
        linea_json += `{ "label": "${data['serie'][3].fecha}",  "y": ${data['serie'][3].valor}  },`;
        linea_json += `{ "label": "${data['serie'][2].fecha}",  "y": ${data['serie'][2].valor}  },`;
        linea_json += `{ "label": "${data['serie'][1].fecha}",  "y": ${data['serie'][1].valor}  },`;
        linea_json += `{ "label": "${data['serie'][0].fecha}",  "y": ${data['serie'][0].valor}  }]`;

        let linea_json_parse = JSON.parse(linea_json);

        let chart1 = new CanvasJS.Chart("chartContainer", {
            theme: "dark2", // "light2", "dark1", "dark2"
            animationEnabled: false, // change to true		
            title:{
                text: "Estadistica Del Dólar Americano"
            },
            data: [
            {
                // dias de la semana segun la variablilidad del cambio
                type: "column",
                dataPoints: linea_json_parse
            }
            ]
        });
        chart1.render();
    }

    async function UnidadFomento() {

        let respuesta = await fetch('https://mindicador.cl/api/uf');
        let data = await respuesta.json();

        let linea_json = '';
        linea_json += `[{ "label": "${data['serie'][9].fecha}",  "y": ${data['serie'][9].valor}  },`;
        linea_json += `{ "label": "${data['serie'][8].fecha}",  "y": ${data['serie'][8].valor}  },`;
        linea_json += `{ "label": "${data['serie'][7].fecha}",  "y": ${data['serie'][7].valor}  },`;
        linea_json += `{ "label": "${data['serie'][6].fecha}",  "y": ${data['serie'][6].valor}  },`;
        linea_json += `{ "label": "${data['serie'][5].fecha}",  "y": ${data['serie'][5].valor}  },`;
        linea_json += `{ "label": "${data['serie'][4].fecha}",  "y": ${data['serie'][4].valor}  },`;
        linea_json += `{ "label": "${data['serie'][3].fecha}",  "y": ${data['serie'][3].valor}  },`;
        linea_json += `{ "label": "${data['serie'][2].fecha}",  "y": ${data['serie'][2].valor}  },`;
        linea_json += `{ "label": "${data['serie'][1].fecha}",  "y": ${data['serie'][1].valor}  },`;
        linea_json += `{ "label": "${data['serie'][0].fecha}",  "y": ${data['serie'][0].valor}  }]`;

        let linea_json_parse = JSON.parse(linea_json);

        let chart2 = new CanvasJS.Chart("chartContainer", {
            theme: "dark2", // "light2", "dark1", "dark2"
            animationEnabled: false, // change to true		
            title:{
                text: "Estadistica De La Unidad De Fomento (UF)"
            },
            data: [
            {
                // dias de la semana segun la variablilidad del cambio
                type: "column",
                dataPoints: linea_json_parse
            }
            ]
        });
        chart2.render();
    }

    async function Euro() {

        let respuesta = await fetch('https://mindicador.cl/api/euro');
        let data = await respuesta.json();

        let linea_json = '';
        linea_json += `[{ "label": "${data['serie'][9].fecha}",  "y": ${data['serie'][9].valor}  },`;
        linea_json += `{ "label": "${data['serie'][8].fecha}",  "y": ${data['serie'][8].valor}  },`;
        linea_json += `{ "label": "${data['serie'][7].fecha}",  "y": ${data['serie'][7].valor}  },`;
        linea_json += `{ "label": "${data['serie'][6].fecha}",  "y": ${data['serie'][6].valor}  },`;
        linea_json += `{ "label": "${data['serie'][5].fecha}",  "y": ${data['serie'][5].valor}  },`;
        linea_json += `{ "label": "${data['serie'][4].fecha}",  "y": ${data['serie'][4].valor}  },`;
        linea_json += `{ "label": "${data['serie'][3].fecha}",  "y": ${data['serie'][3].valor}  },`;
        linea_json += `{ "label": "${data['serie'][2].fecha}",  "y": ${data['serie'][2].valor}  },`;
        linea_json += `{ "label": "${data['serie'][1].fecha}",  "y": ${data['serie'][1].valor}  },`;
        linea_json += `{ "label": "${data['serie'][0].fecha}",  "y": ${data['serie'][0].valor}  }]`;

        let linea_json_parse = JSON.parse(linea_json);

        let chart3 = new CanvasJS.Chart("chartContainer", {
            theme: "dark2", // "light2", "dark1", "dark2"
            animationEnabled: false, // change to true		
            title:{
                text: "Estadistica Del Euro"
            },
            data: [
            {
                // dias de la semana segun la variablilidad del cambio
                type: "column",
                dataPoints: linea_json_parse
            }
            ]
        });
        chart3.render();
    }


}

catch (error) {
    alert(error.message);
}
