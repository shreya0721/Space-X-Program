export const filterUrl = (year,launchSuccess,landSuccess) =>{
    let url

    if(year==null && launchSuccess== null && landSuccess==null){
        url="https://api.spaceXdata.com/v3/launches?limit=100"
    }
    if(launchSuccess && landSuccess && year){
        url="https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchSuccess+"&land_success="+landSuccess+"&launch_year="+year
    }else if(launchSuccess && year){
        url="https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchSuccess+"&launch_year="+year
    }else if(landSuccess && year){
        url="https://api.spaceXdata.com/v3/launches?limit=100&land_success="+landSuccess+"&launch_year="+year
    }else if(launchSuccess && landSuccess){
        url="https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchSuccess+"&land_success="+landSuccess
    } else if(launchSuccess ){
        url="https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchSuccess
    } else if(landSuccess){
        url="https://api.spaceXdata.com/v3/launches?limit=100&land_success="+landSuccess
    }else if(year){
        url="https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year
    }
    return url
}