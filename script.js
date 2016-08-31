/**
 * Created by aleksandr on 16/06/16.
 */
function RouteObject(pointA, pointB, transport, numOfTransport, seat){
    this.pointA = pointA;
    this.pointB = pointB;
    this.transport = transport;
    this.numOfTransport = numOfTransport;
    this.seat = seat;
}

var arrObjects = []; //массив однотипных объектов

arrObjects[0] = new RouteObject("Barcelona", "Madrid", "plane","S7", "42B");
arrObjects[1] = new RouteObject("Berlin", "Barcelona", "train", "110A", "52");
arrObjects[2] = new RouteObject("Moscow", "Berlin", "car", null, null);

for (var i = 0; i < arrObjects.length; i++){
    for(var j = 0; j < arrObjects.length; j++){
        if(i == j){
            continue;
        }
        if(arrObjects[i].pointA != arrObjects[j].pointB){
            var tmp = arrObjects[0];
            arrObjects[0] = arrObjects[i];
            arrObjects[i] = tmp;
            i++;
            break;
        }
    }
}

for(i = 0; i < arrObjects.length; i++){
    switch(arrObjects[i].transport){
        case "plane":
            alert("Take flight " + arrObjects[i].numOfTransport + " from " + arrObjects[i].pointA + " to " + arrObjects[i].pointB + ". Your seat: " + arrObjects[i].seat);
            break;
        case "train":
            alert("Take train " + arrObjects[i].numOfTransport + " from " + arrObjects[i].pointA + " to " + arrObjects[i].pointB + ". Your seat: " + arrObjects[i].seat);
            break;
        case "bus":
            alert("Take bus " + arrObjects[i].numOfTransport + " from " + arrObjects[i].pointA + " to " + arrObjects[i].pointB + ". Your seat: " + arrObjects[i].seat);
            break;
        default:
            alert("Go by " + arrObjects[i].transport + " from " + arrObjects[i].pointA + " to " + arrObjects[i].pointB + ". Your seat: " + arrObjects[i].seat);

    }
}
