var getHost = window.location.protocol + "//" + window.location.host;

const completeOrder = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            if (obj.rescode == 0) {
                document.getElementById("commonname").className = "final_success";
                window.location = obj.final_location;
            } else {
                document.getElementById("commonname").className = "error";
            }
            document.getElementById("commonname").innerHTML = obj.resmsg;
        }
        if (this.status == 500) {
            document.getElementById("commonname").className = "error";
            document.getElementById("commonname").innerHTML = "An error occured while checking the transaction status";
        }
    };
    //xhttp.open("POST", getHost+"/wp-content/plugins/woocommerce_mpesa/callback_scanner.php", true);
    xhttp.open("POST", getHost + "/?scanner_action=1", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

const pay = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj2 = JSON.parse(this.responseText);
            if (obj2.rescode == 0) {
                document.getElementById("commonname").className = "waiting_success";
            } else {
                document.getElementById("commonname").className = "error";
            }
            document.getElementById("commonname").innerHTML = obj2.resmsg;
            // TODO: Debugging purposes, remove when done
            console.log("Payload: ", JSON.parse(obj2.request.payload));
            console.log("Response: ", JSON.parse(obj2.request.response));
        }
        if (this.status == 500) {
            document.getElementById("commonname").className = "error";
            document.getElementById("commonname").innerHTML = "M-PESA Express is unreachabe, please try again later";
        }
    };
    xhttp.open("POST", getHost + "/?payment_action=1", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("type=STK");
}