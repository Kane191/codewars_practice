function getMiddle(s)
{
  switch (s.length%2){
        case 0:
          return `${s.charAt((s.length/2) - 1)}${s.charAt(s.length/2)}`
        default:
          return s.charAt(Math.floor(s.length/2))
    }
}