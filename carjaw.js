//  copyright lexilogos.com
function alpha(item) {
var input = document.conversion.saisie;
if (document.selection) {
input.focus();
range = document.selection.createRange();
range.text = item;
range.select();
}
else if (input.selectionStart || input.selectionStart === '0') {
var startPos = input.selectionStart;
var endPos = input.selectionEnd;
var cursorPos = startPos;
var scrollTop = input.scrollTop;
var baselength = 0;
input.value = input.value.substring(0, startPos)
+ item
+ input.value.substring(endPos, input.value.length);
cursorPos += item.length;
input.focus();
input.selectionStart = cursorPos;
input.selectionEnd = cursorPos;
input.scrollTop = scrollTop;
}
else {
input.value += item;
input.focus();
}
}

function copier() {
document.conversion.saisie.focus();
document.conversion.saisie.select();
copietxt = document.selection.createRange();
copietxt.execCommand("Copy");
}

var car;


function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "\'");
car = car.replace(/[aâàā]/g, "ا");
car = car.replace(/b/g, "ب");
car = car.replace(/t/g, "ت");;
car = car.replace(/تs/g, "ث");
car = car.replace(/ṯ/g, "ث");
car = car.replace(/[jǧ]/g, "ج");

car = car.replace(/c/g, "چ");
car = car.replace(/[HḥḤ]/g, "ح");
//car = car.replace(/ح'/g, "خ");
car = car.replace(/k/g, "ک");
car = car.replace(/کh/g, "خ");
car = car.replace(/[xẖK]/g, "خ");
car = car.replace(/d/g, "د");
car = car.replace(/دz/g, "ذ");
car = car.replace(/ḏ/g, "ذ");
car = car.replace(/r/g, "ر");
//car = car.replace(/ر'/g, "ز");
car = car.replace(/z/g, "ز");
car = car.replace(/s/g, "س");
car = car.replace(/سy/g, "ش");
//car = car.replace(/š/g, "ش");
car = car.replace(/سh/g, "ص");
//car = car.replace(/ص'/g, "ض");
car = car.replace(/دh/g, "ض");
car = car.replace(/تh/g, "ط");
//car = car.replace(/ط'/g, "ظ");
car = car.replace(/زh/g, "ظ");
car = car.replace(/'/g, "ع");
car = car.replace(/n/g, "ن");
car = car.replace(/نg/g, "ڠ");
car = car.replace(/g/g, "ݢ");
car = car.replace(/ݢh/g, "غ");
//car = car.replace(/ġ/g, "غ");

//car = car.replace(/N/g, "ڠ");
car = car.replace(/f/g, "ف");
car = car.replace(/ف'/g, "ڤ");
car = car.replace(/p/g, "ڤ");
car = car.replace(/q/g, "ق");
car = car.replace(/ق'/g, "ڨ");


car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");

car = car.replace(/نy/g, "ڽ");
//car = car.replace(/ñ/g, "ڽ");
car = car.replace(/h/g, "ه");
car = car.replace(/ه\./g, "ة");
car = car.replace(/[wouôûōū]/g, "و");
car = car.replace(/v/g, "ۏ");
//car = car.replace(/و'/g, "ۏ");
car = car.replace(/[yiîī]/g, "ي");
car = car.replace(/e/g, "ى");
car = car.replace(/ء-/g, "ئ");
car = car.replace(/ئ-/g, "ؤ");

car = car.replace(/-/g, "ء");

car = car.replace(/ʾ/g, "ء");

car = car.replace(/اءء/g, "إ");
car = car.replace(/[AIE]/g, "أ");
car = car.replace(/أ\./g, "إ");



car = car.replace(/_/g, "ـ");
car = car.replace(/\?/g, "؟");
car = car.replace(/\;/g, "؛");
car = car.replace(/\,/g, "،");


car = car.replace(/ث\./g,"تس");
car = car.replace(/خ\./g,"که");
car = car.replace(/ذ\./g,"دز");
car = car.replace(/ش\./g,"سي");
car = car.replace(/ص\./g,"سه");
car = car.replace(/ض\./g,"ده");
car = car.replace(/ط\./g,"ته");
car = car.replace(/ظ\./g,"زه");
car = car.replace(/غ\./g,"ݢه");
car = car.replace(/ڠ\./g,"نݢ");
car = car.replace(/ڽ\./g,"ني");

car = car.replace(/1/g,'\u064e')
car = car.replace(/\u064e\./g,'\u064b')
car = car.replace(/\u064b\./g,'\u0670')
car = car.replace(/\u0670\./g,'\u0653')
car = car.replace(/2/g,'\u0650')
car = car.replace(/\u0650\./g,'\u064d')
car = car.replace(/3/g,'\u064f')
car = car.replace(/\u064f\./g,'\u064c')
car = car.replace(/\u064c\./g,'\u0657')
car = car.replace(/4/g,'\u0652')
car = car.replace(/\u0652\./g,'\u0651')


startPos = document.conversion.saisie.selectionStart;
endPos = document.conversion.saisie.selectionEnd;

beforeLen = document.conversion.saisie.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

document.conversion.saisie.value = car;

document.conversion.saisie.selectionStart = startPos + adjustment;
document.conversion.saisie.selectionEnd = endPos + adjustment;

var obj = document.conversion.saisie;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}