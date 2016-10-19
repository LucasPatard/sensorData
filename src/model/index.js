export const enumeration = ["TEMPERATURE","HUMIDITY","LIGHT","DOOR","FAN_SPEED","NO_TYPE"];
export class Data{
    constructor(){
    }

}
 export class Datum extends Data{
    constructor(data){
        super();
        this.value = data.value
    }
    get value(){
        return this._value;
    }
    set value(val){
        this._value = val;
    }
}
export class TimeSeries extends Data{
    constructor(data){
        super();
        this.values= data.values;
        this.labels = data.labels;
    }
    get values(){
        return this._values;
    }
    set values(val){
        this._values = val;
    }
    get labels(){
        return this._labels;
    }
    set labels(val){
        this._labels = val;
    }
}
export class Sensor{
    constructor(data){
        this.id = data.id
        this.name = data.name
        if(enumeration.includes(data.type)) this.type = data.type;
        else this.type='NO_TYPE';

        if(isNaN(data.data.value)) this.data = new TimeSeries(data.data);
        else if(isNaN(data.data.values)) this.data = new Datum(data.data);

    }
    get id(){
        return this._id;
    }
    set id(val){
        this._id = val;
    }
    get name(){
        return this._name;
    }
    set name(val){
        this._name = val;
    }
    get data(){
        return this._data;
    }
    set data(val){
        this._data = val;
    }
    get type(){
        return this._type;
    }
    set type(val){
        this._type = val;
    }

}
