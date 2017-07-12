// a simple script to auto update the copyright year

var yearOne = 2016, string = "", diff = 0, currentYear = new Date().getFullYear();

diff = yearOne - currentYear;

string =  diff < 0 ? yearOne.toString() + " - " + currentYear.toString() + " " : yearOne.toString() + " ";

$("#years").html(string);