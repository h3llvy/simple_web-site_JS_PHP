<?php

$date = new DateTime();
// echo $date->format('Y-m-d H:i:s');

$number = $_POST["number"];
// echo $_SERVER [ "REMOTE_ADD 
if (ctype_digit($number)) {
    echo $date->format('Y-m-d H:i:s');
    // $arr1 = array ("number"=>$number);
    
    $arr = json_decode(file_get_contents('array.json'), true);
    $arr["number"]+=$number;
    file_put_contents("array.json",json_encode($arr));


    $str = "Succesfully added ".$number ." pull ups\nTotal : ".$arr["number"];

    
    // echo    $arr->"number"=$number;
    // # array.json => {"a":1,"b":2,"c":3,"d":4,"e":5}
    // $arr2 = json_decode(file_get_contents('array.json'), true);
    // $arr1 === $arr2; # => true

} else {
    $str = "Error: value is NaN";
}

echo $str;

?>