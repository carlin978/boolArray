# Boolean Array

A simple file to use a few functions and a **custom Array** based on primitive data types.

This file allows you to easily create a conditional array where you can run an internal function that will return the first value whose correspondent condition returns true.

To add to your project place the script tag before your own script.

```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/carlin978/boolArray@main/boolArray.min.js"></script>
```

### Basic Syntax

`var <name> = new BoolArray(<values>);`

The values should be formatted with the following function:

`cBoolObj(<condition>,<value>);` and it should return this: `{bool:<condition>,value:<value>}`

You might want to shorten the `cBoolObj()` function which you can do like this:

`var <shortened name> = cBoolObj;`

The syntax would look something like this:

`var <name> = new BoolArray(cBoolObj(<condition>,<value>),...);`

The end result should look something like this:

```
var blArray = new BoolArray(cBoolObj("myVar<5",12),cBoolObj("myVar>=5",16));
```

### Functions

#### Push

The push function will test the validity the parameter and, if valid, push it to the array.

##### Syntax:
`<name>.push(cBoolObj(<condition>,<value>));`

#### Log

The log function will return a formatted string representing the array ready to be logged to the console.

##### Syntax:
`console.log(<name>.log());`

#### Pop

The pop function will remove the last element of the array.

##### Syntax:
`<name>.pop();`

#### Shift

The shift function will remove the first element of the array.

##### Syntax:
`<name>.shift();`

#### Reverse

The reverse function will reverse the array.

##### Syntax:
`<name>.reverse();`

#### Run

The run function will iterate the array and it will return the first value whose correspondent condition returns true.

##### Syntax:
`<name>.run();`

>Note: You have to save the value somewhere. Example: `var <varname> = <name>.run();`
