//cach_1
function decryptCode(code) {
    let decryptedCode = '';
    for (let i = 0; i < code.length; i++) {
      if (code[i] === code[i].toLowerCase()) {
        decryptedCode += code[i].toUpperCase();
      } else if (code[i] === code[i].toUpperCase()) {
        decryptedCode += code[i].toLowerCase();
      } else {
        decryptedCode += code[i];
      }
    }
    return decryptedCode;
  }
  
  console.log(decryptCode("K6 Challenge"));

  //cach_2
  function decryptCode2(code) {
    let codeAfterDecrypt = "";
    for (const character of code) {
      if (character === character.toLowerCase()) {
        codeAfterDecrypt += character.toUpperCase();
      } else if (character === character.toUpperCase()) {
        codeAfterDecrypt += character.toLowerCase();
      } else {
        codeAfterDecrypt += character;
      }
    }
    return codeAfterDecrypt;
  }
  
  console.log(decryptCode2("K6 Challenge"));