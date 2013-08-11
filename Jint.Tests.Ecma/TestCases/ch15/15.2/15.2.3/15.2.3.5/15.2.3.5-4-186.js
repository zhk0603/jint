/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-186.js
 * @description Object.create - 'writable' property of one property in 'Properties' is own accessor property that overrides an inherited data property (8.10.5 step 6.a)
 */


function testcase() {

        var proto = {
            writable: false
        };

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var descObj = new ConstructFun();

        Object.defineProperty(descObj, "writable", {
            get: function () {
                return true;
            }
        });

        var newObj = Object.create({}, {
            prop: descObj
        });

        var beforeWrite = (newObj.hasOwnProperty("prop") && typeof (newObj.prop) === "undefined");

        newObj.prop = "isWritable";

        var afterWrite = (newObj.prop === "isWritable");

        return beforeWrite === true && afterWrite === true;
    }
runTestCase(testcase);