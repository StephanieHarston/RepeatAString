function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return ''
  }
  else if (num === 1) {
    return str;
  }
   else {
    return str + repeatStringNumTimes(str,num-1);
  }
}

repeatStringNumTimes("*", 3);
