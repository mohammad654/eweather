
const http = "https://data.buienradar.nl/2.0/feed/json";

$(document).ready(function(){

$.ajax({  
       type: "GET",  
       url: http,  
       data: "{}",  
       success: function (data) {  
    
                for ( let x in data.actual.stationmeasurements) {
                // regio
                $('#submitWeather').append( '<option value="'+data.actual.stationmeasurements[x].regio+'">'+data.actual.stationmeasurements[x].regio+'</option>' );
                //  temperature
                $('#temperature').text(data.actual.stationmeasurements[x].temperature);
               // feeltemperature
               $('#gevoelstemperatuur').text(data.actual.stationmeasurements[x].feeltemperature);
               // groundtemperature
                $('#groundtemperature').text(data.actual.stationmeasurements[x].groundtemperature);
              //sunpower      
                $('#sunpower').text(data.actual.stationmeasurements[x].sunpower);
                //Regen laatste uur
                $('#rainFallLastHour').text(data.actual.stationmeasurements[x].rainFallLastHour);
                //windrichting
                $('#winddirection').text(data.actual.stationmeasurements[x].winddirection);

              $('#submitWeather').on('change', function(e) {
            
                if(data.actual.stationmeasurements[x].regio  == $('#submitWeather option:selected').val()){

                    // temperature
                    $('#temperature').text(data.actual.stationmeasurements[x].temperature);
                    // feeltemperature
                    $('#gevoelstemperatuur').text(data.actual.stationmeasurements[x].feeltemperature);
                    // groundtemperature
                    $('#groundtemperature').text(data.actual.stationmeasurements[x].groundtemperature);
                    //sunpower      
                    $('#sunpower').text(data.actual.stationmeasurements[x].sunpower);
                    //Regen laatste uur
                    $('#rainFallLastHour').text(data.actual.stationmeasurements[x].rainFallLastHour);
                    //windrichting
                    $('#winddirection').text(data.actual.stationmeasurements[x].winddirection);

                    // Test
                  //  console.log(data.actual.stationmeasurements[x].timestamp)
                    }
                });
            }
       }  
   });  

});