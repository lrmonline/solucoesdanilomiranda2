
  function antecipadocomrepasse() {

  var n1 = document.getElementById('n1').value;
  var formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
  //á vista
  document.getElementById('avista1').innerHTML = n1.toLocaleString('pt-BR', formato);
  document.getElementById('avista2').innerHTML = n1.toLocaleString('pt-BR', formato);

  //debito (1242311234.45).toLocaleString('pt-BR')
  var debito1 = n1 / 0.9810;
  var debito2 = n1 / 0.9810;
  document.getElementById('debito1.1').innerHTML = debito1.toLocaleString('pt-BR', formato);
  document.getElementById('debito1.2').innerHTML = debito2.toLocaleString('pt-BR', formato);

  //1x
  var x11 = n1 / 0.9540;
  var x12 = n1 / 0.9540;
  document.getElementById('x11').innerHTML = x11.toLocaleString('pt-BR', formato);
  document.getElementById('x12').innerHTML = x12.toLocaleString('pt-BR', formato);

  //2x
  var x21 = n1 / 0.9390;
  var x22 = n1 / 0.9390 / 2;
  document.getElementById('2x-1').innerHTML = x21.toLocaleString('pt-BR', formato);
  document.getElementById('2x-2').innerHTML = x22.toLocaleString('pt-BR', formato);

  //3x
  var x31 = n1 / 0.9240;
  var x32 = n1 / 0.9240 / 3;
  document.getElementById('3x-1').innerHTML = x31.toLocaleString('pt-BR', formato);
  document.getElementById('3x-2').innerHTML = x32.toLocaleString('pt-BR', formato);

  //4x
  var x41 = n1 / 0.9090;
  var x42 = n1 / 0.9090 / 4;
  document.getElementById('4x-1').innerHTML = x41.toLocaleString('pt-BR', formato);
  document.getElementById('4x-2').innerHTML = x42.toLocaleString('pt-BR', formato);

  //5x
  var x51 = n1 / 0.8940;
  var x52 = n1 / 0.8940 / 5;
  document.getElementById('5x-1').innerHTML = x51.toLocaleString('pt-BR', formato);
  document.getElementById('5x-2').innerHTML = x52.toLocaleString('pt-BR', formato);

  //6x
  var x61 = n1 / 0.8790;
  var x62 = n1 / 0.8790 / 6;
  document.getElementById('6x-1').innerHTML = x61.toLocaleString('pt-BR', formato);
  document.getElementById('6x-2').innerHTML = x62.toLocaleString('pt-BR', formato);

  //7x
  var x71 = n1 / 0.8640;
  var x72 = n1 / 0.8640 / 7;
  document.getElementById('7x-1').innerHTML = x71.toLocaleString('pt-BR', formato);
  document.getElementById('7x-2').innerHTML = x72.toLocaleString('pt-BR', formato);


  //8x
  var x81 = n1 / 0.8490;
  var x82 = n1 / 0.8490 / 8;
  document.getElementById('8x-1').innerHTML = x81.toLocaleString('pt-BR', formato);
  document.getElementById('8x-2').innerHTML = x82.toLocaleString('pt-BR', formato);

  //9x
  var x91 = n1 / 0.8340;
  var x92 = n1 / 0.8340 / 9;
  document.getElementById('9x-1').innerHTML = x91.toLocaleString('pt-BR', formato);
  document.getElementById('9x-2').innerHTML = x92.toLocaleString('pt-BR', formato);

  //10x
  var x101 = n1 / 0.8190;
  var x102 = n1 / 0.8190 / 10;
  document.getElementById('10x-1').innerHTML = x101.toLocaleString('pt-BR', formato);
  document.getElementById('10x-2').innerHTML = x102.toLocaleString('pt-BR', formato);

  //11x
  var x111 = n1 / 0.8040;
  var x112 = n1 / 0.8040 / 11;
  document.getElementById('11x-1').innerHTML = x111.toLocaleString('pt-BR', formato);
  document.getElementById('11x-2').innerHTML = x112.toLocaleString('pt-BR', formato);

  //12x
  var x121 = n1 / 0.7890;
  var x122 = n1 / 0.7890 / 12;
  document.getElementById('12x-1').innerHTML = x121.toLocaleString('pt-BR', formato);
  document.getElementById('12x-2').innerHTML = x122.toLocaleString('pt-BR', formato);

}




function antecipadosemrepasse() {

  var n2 = document.getElementById('n2').value;
  var formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
  //á vista
  document.getElementById('Iavista1').innerHTML = n2.toLocaleString('pt-BR', formato);


  //debito (1242311234.45).toLocaleString('pt-BR')
  var debitodesc = n2 * 1.9 / 100;
  var debito     = n2 - debitodesc;
  document.getElementById('debito-I').innerHTML = debito.toLocaleString('pt-BR', formato);

  //1x
  var x11 = n2 * 4.6 / 100;
  var x12 = n2 - x11;

  document.getElementById('12x').innerHTML = x12.toLocaleString('pt-BR', formato);


  //2x
  var x21 = n2 * 6.1 / 100;
  var x22 = n2 - x21;

  document.getElementById('22x').innerHTML = x22.toLocaleString('pt-BR', formato);

  //3x
  var x31 = n2 * 7.6 / 100;
  var x32 = n2 - x31;

  document.getElementById('32x').innerHTML = x32.toLocaleString('pt-BR', formato);


  //4x
  var x41 = n2 * 9.1 / 100;
  var x42 = n2 - x41;
  var x43 = x42 / 4;
  document.getElementById('42x').innerHTML = x42.toLocaleString('pt-BR', formato);

  //5x
  var x51 = n2 * 10.6 / 100;
  var x52 = n2 - x51;
  var x53 = x52 / 5;
  document.getElementById('52x').innerHTML = x52.toLocaleString('pt-BR', formato);

  //6x
  var x61 = n2 * 12.1 / 100;
  var x62 = n2 - x61;
  var x63 = x62 / 6;
  document.getElementById('62x').innerHTML = x62.toLocaleString('pt-BR', formato);


  //7x
  var x71 = n2 * 13.6 / 100;
  var x72 = n2 - x71;
  var x73 = x72 / 7;
  document.getElementById('72x').innerHTML = x72.toLocaleString('pt-BR', formato);
 

  //8x
  var x81 = n2 * 15.1 / 100;
  var x82 = n2 - x81;
  var x83 = x82 / 8;
  document.getElementById('82x').innerHTML = x82.toLocaleString('pt-BR', formato);

  //9x
  var x91 = n2 * 16.6 / 100;
  var x92 = n2 - x91;
  var x93 = x92 / 9;
  document.getElementById('92x').innerHTML = x92.toLocaleString('pt-BR', formato);

  //10x
  var x101 = n2 * 18.1 / 100;
  var x102 = n2 - x101;
  var x103 = x102 / 10;
  document.getElementById('102x').innerHTML = x102.toLocaleString('pt-BR', formato);

  //11x
  var x111 = n2 * 19.6 / 100;
  var x112 = n2 - x111;
  var x113 = x112 / 11;
  document.getElementById('112x').innerHTML = x112.toLocaleString('pt-BR', formato);

  //12x
  var x121 = n2 * 21.1 / 100;
  var x122 = n2 - x121;
  var x123 = x122 / 12;
  document.getElementById('122x').innerHTML = x122.toLocaleString('pt-BR', formato);

}