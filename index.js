

function calculateAll(){ 
    let inputNumTop = parseFloat(document.getElementById('inputNumTop').value)

    function meterToFeet(){
        let result = inputNumTop * 3.260
        document.getElementById('m2f').innerHTML = result.toFixed(3)
    
    }
    function feetToMeter(){
        let result = inputNumTop * 0.304
        document.getElementById('f2m').innerHTML = result.toFixed(3)
    }
    function literToGallon(){
        let result = inputNumTop * 0.264
        document.getElementById('l2g').innerHTML = result.toFixed(3)
    
    }
    function gallonToLiter(){
        let result = inputNumTop * 4.546
        document.getElementById('g2l').innerHTML = result.toFixed(3)
    
    }
    function kiloToPound(){
        let result = inputNumTop * 2.204
        document.getElementById('k2p').innerHTML = result.toFixed(3)
    
    }
    function poundToKilo(){
        let result = inputNumTop * 3.260
        document.getElementById('p2k').innerHTML = result.toFixed(3)
    
    }
    
    
    meterToFeet();
    feetToMeter();
    literToGallon();
    gallonToLiter();
    kiloToPound();
    poundToKilo();
    document.getElementById('firstInput').innerHTML = inputNumTop
    document.getElementById('SecondInput').innerHTML = inputNumTop
    document.getElementById('ThirdInput').innerHTML = inputNumTop
    document.getElementById('FourthInput').innerHTML = inputNumTop
    document.getElementById('FifthInput').innerHTML = inputNumTop
    document.getElementById('SixthInput').innerHTML = inputNumTop

}


