
//Use for empty validation checking
function EmptyValidation(obj,Msg)
{
    if(document.getElementById(obj).value.search(/\S/) == -1)
    {
        alert(Msg);
        return false;
    }
}

//use for special character checking
function CheckSpecialCharacters(obj,msg)
{
    var iChars = "!@#$^&*()+=-[]\\\'./{}|\":<>?";
    for (var i = 0; i < document.getElementById(obj).value.length; i++) 
    {
        if (iChars.indexOf(document.getElementById(obj).value.charAt(i)) != -1) 
        {
            alert (msg);
            document.getElementById(obj).focus();
            return false;
        }
    }
}


//Validate File extension 
function Checkfiles(FileID)
{      
    var fup = FileID;
    var fileName = fup.value;      
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1).toUpperCase();
    if (ext == "gif".toUpperCase() || ext == "GIF".toUpperCase() || ext == "JPEG".toUpperCase() || ext == "jpeg".toUpperCase() || ext == "jpg".toUpperCase() || ext == "JPG".toUpperCase() || ext == "png".toUpperCase() || ext == "PNG".toUpperCase())
    {
    return true;
    } 
    else
    {
        alert("Upload Gif, Jpg, Jpeg, png images only");
        fup.focus();
        return false;
    }
}

//Validate File extension 
function CheckDocs(FileID,Msg) {
    var fup = FileID;
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1).toUpperCase();
    if (ext == "pdf".toUpperCase() || ext == "doc".toUpperCase() || ext == "docx".toUpperCase()) {
        return true;
    }
    else {
        alert(Msg);
        fup.focus();
        return false;
    }
}

function Checkkeypress() 
{
    if (navigator.appName.toLowerCase().indexOf('microsoft') >= 0) { if (window.event.keyCode > 0) { return false; } }
    else { { return false; } }
}

//URL Validation
function validateURL(textval) 
{
  var urlregex = new RegExp(
        "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
  return urlregex.test(textval);
}

// Get radio button list value
function GetRadioButtonValue(id)
{
    var radio = document.getElementsByName(id);
    for (var j = 0; j < radio.length; j++)
    {
        if (radio[j].checked)
            alert(radio[j].value);
    }
}

function validateRBL(RBLid)
{
    var listItemArray = document.getElementsByName(RBLid);
    var isItemChecked = false;
    for (var i = 0; i < listItemArray.length; i++)
    {
        var listItem = listItemArray[i];
        if (listItem.checked)
        {
            //alert(listItem.value);
            isItemChecked = true;
        }
    }
    if (isItemChecked == false)
    {
        var answer = confirm("Please confirm selection...")
        if (answer)
            return true;
        else
            return false;
    }

    return true;
}

// Avoid special characters
function avoidSpecialChars(elm, str) 
{
    for(var i = 0; i < str.length; i++) 
    {
        if(elm.value.indexOf(str.charAt(i)) >= 0) 
        {
            elm.focus();
            return false;
        }
    }
    return true;
}

// Avoid special characters
function avoidSpecial(elm) 
{
	str='<>';
    for(var i = 0; i < str.length; i++) 
    {
        if(elm.value.indexOf(str.charAt(i)) >= 0) 
        {
            elm.focus();
            return false;
        }
    }
    return true;
}

//USE FOR VALID EMAIL ADDRESS
function CheckValidEmail(obj)
{    
    var EmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
    var flag = false;
    if(!EmailPattern.test(obj))
    {            
        flag = false;
    }
    else
    {
        flag = true;
    }        
    return flag;
}

//USE FOR NUMERIC CHECKING
function CheckNumeric(obj)
{    
    var numberFormat = /^[0-9]*$/;
    var flag = false;
    if (!numberFormat.test(obj)) 
    {            
        flag = false;
    }
    else
    {
        flag = true;
    }    
    return flag;
}

function isValidURL(url)
    {
        //var RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
        var RegExp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if(RegExp.test(url))
        {
            return true;
        }
        else
        {
            return false;
        }
    }  