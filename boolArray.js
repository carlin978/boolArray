function cBoolObj(bool,value){
    if (typeof eval(bool) == "boolean")
        return {bool:bool,value:value};
}
function testBoolObj(boolObj){
    let isValid;
    if (!Array.isArray(boolObj) && Object.keys(boolObj).length > 0){
	    var keys = Object.keys(boolObj);
	    if (keys[0]=="bool" && keys[1]=="value"){
	        if (typeof eval(boolObj[keys[0]])=="boolean"){
	            isValid = true;
	        }else isValid = false;
	    }else isValid = false;
    }else isValid = false;
    return isValid;
}
function BoolArray(...values){
    this.array = [];
    for (let i of values){
        if (testBoolObj(i)) this.array.push(i);
    }
    this.push = (pushedValue) => {if (testBoolObj(pushedValue)) this.array.push(pushedValue);}
    this.pop = () => {if (this.array.length>0) this.array.pop();}
    this.shift = () => {if (this.array.length>0) this.array.shift();}
    this.reverse = () => {if (this.array.length>1) this.array.reverse();}
    this.log = () => {
        let toLog = `--BoolArray--`;
        for (let i of this.array) toLog += `\n{\n  bool:${i["bool"]}\n  value:${i["value"]}\n}${((this.array.indexOf(i)+1)<this.array.length)?',':''}`;
        return toLog;
    }
    this.run = () => {
        if (this.array.length>0) for (let i of this.array){
            if (eval(i["bool"])) return i["value"];
        }
    }
}