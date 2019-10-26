
var w1 = window;
var w2 = window;
function openWindowTate(url) {
   if ((w1 == window) || w1.closed) {
      w1 = open(url, "_blank", "width=413,height=550, scrollbars=1");
   } else {
      w1.focus();
   }
   return(false);
}
function openWindowYoko(url) {
  if ((w2 == window) || w2.closed) {
      w2 = open(url, "_blank", "width=500,height=400, scrollbars=1");
   } else {
      w2.focus();
   }
   return(false);
}