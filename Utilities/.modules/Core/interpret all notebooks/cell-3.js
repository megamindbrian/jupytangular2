// Output the imported service functions for interpretObject and intend() so that only this file has to be imported and reduce the change of reocurrance.
var interpretObject = (result) => importedInterpretObject(result);
//interpretObject(['How to test import.ipynb[1]']).then(r => console.log(r))
module.exports = interpretObject;