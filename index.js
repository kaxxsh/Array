function canNest(arr1, arr2) {
  const min1 = Math.min(...arr1);
  const max1 = Math.max(...arr1);
  const min2 = Math.min(...arr2);
  const max2 = Math.max(...arr2);
  if (min1 > min2 && max1 < max2) {
    return true;
  } else {
    return false;
  }
}

document.write(canNest([1, 2, 3, 4], [0, 6]));
document.write("<br>");
document.write(canNest([1, 2, 3, 4], [2, 3]));
