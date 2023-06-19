
/*############ Handle Local Sessions ##############*/
export function setSession(key , objecValue ){
    let value = JSON.stringify(objecValue); 
    sessionStorage.setItem(key, value);
}

export function getSession(key , object=true){
    if (object){
        return JSON.parse(sessionStorage.getItem(key)); 
    }
    return sessionStorage.getItem(key) ; 
}

export function removeSession (key){
    sessionStorage.removeItem(key);
}
/*############ END Handle Local Sessions ##############*/

/*######### Get current date ##############*/
export function getCurrentTime(){
    //get date
    const timeNow = new Date();
    //format
    let date = (timeNow.getDate()<10)?"0"+timeNow.getDate():timeNow.getDate();
    let month = (timeNow.getMonth()<10)?"0"+timeNow.getMonth():timeNow.getMonth();
    let year = timeNow.getFullYear();
    let hours = (timeNow.getHours()<10)?"0"+timeNow.getHours():timeNow.getHours();
    let minutes = (timeNow.getMinutes()<10)?"0"+timeNow.getMinutes():timeNow.getMinutes();
    return `${year}-${month}-${date}T${hours}:${minutes}`;
}
/*######### END Get current date ##############*/



