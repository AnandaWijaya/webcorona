data();
function data(){
    var url = 'https://api.covid19api.com/summary'

    $.get(url,function(data){
        console.log(data.Countries[77])
        positif = `
        ${data.Countries[77].TotalConfirmed}                       
        `
        sembuh=`${data.Countries[77].TotalRecovered}
        `
        menginggal=`${data.Countries[77].TotalDeaths}
        `
        $("#dataindo-positif").html(positif)
        $("#dataindo-sembuh").html(sembuh)
        $("#dataindo-meninggal").html(menginggal)
       

    })
    $.get(url,function(data){
        console.log(data.Global)
        positif = `
        ${data.Global.TotalConfirmed}                       
        `
        sembuh=`${data.Global.TotalRecovered}
        `
        menginggal=`${data.Global.TotalDeaths}
        `
        $("#data-positif").html(positif)
        $("#data-sembuh").html(sembuh)
        $("#data-meninggal").html(menginggal)
       

    })
}

    
    


    
    
