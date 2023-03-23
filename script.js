function  myFunction ( )  {
    var  x  =  dokumentum . getElementById ( "myTopnav" ) ;
    if  ( x . osztálynév  ===  "topnav" )  {
      x . className  +=  " reszponzív" ;
    }  másik  {
      x . className  =  "topnav" ;
    }
}

function  calcSum ( )  {
    legyen  szám1  =  dokumentum . getElementsByName ( "szám1" ) [ 0 ] . érték ;
    legyen  szám2  =  dokumentum . getElementsByName ( "szám2" ) [ 0 ] . érték ;
    legyen  összeg  =  Szám ( szám1 )  +  Szám ( szám2 ) ;
    dokumentumot . getElementsByName ( "sum" ) [ 0 ] . érték  =  összeg ;
}
