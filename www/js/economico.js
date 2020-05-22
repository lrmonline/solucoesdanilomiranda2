function economicocomrepasse() {

  var n1 = parseInt(document.getElementById('n1').value, 10);
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
  var x11 = n1 / 0.9690;
  var x12 = n1 / 0.9690;
  document.getElementById('1x-1').innerHTML = x11.toLocaleString('pt-BR', formato);
  document.getElementById('1x-2').innerHTML = x12.toLocaleString('pt-BR', formato);

  //2x
  var x21 = n1 / 0.9610;
  var x22 = n1 / 0.9610 / 2;
  document.getElementById('2x-1').innerHTML = x21.toLocaleString('pt-BR', formato);
  document.getElementById('2x-2').innerHTML = x22.toLocaleString('pt-BR', formato);

  //3x
  var x31 = n1 / 0.9610;
  var x32 = n1 / 0.9610 / 3;
  document.getElementById('3x-1').innerHTML = x31.toLocaleString('pt-BR', formato);
  document.getElementById('3x-2').innerHTML = x32.toLocaleString('pt-BR', formato);

  //4x
  var x41 = n1 / 0.9610;
  var x42 = n1 / 0.9610 / 4;
  document.getElementById('4x-1').innerHTML = x41.toLocaleString('pt-BR', formato);
  document.getElementById('4x-2').innerHTML = x42.toLocaleString('pt-BR', formato);

  //5x
  var x51 = n1 / 0.9610;
  var x52 = n1 / 0.9610 / 5;
  document.getElementById('5x-1').innerHTML = x51.toLocaleString('pt-BR', formato);
  document.getElementById('5x-2').innerHTML = x52.toLocaleString('pt-BR', formato);

  //6x
  var x61 = n1 / 0.9610;
  var x62 = n1 / 0.9610 / 6;
  document.getElementById('6x-1').innerHTML = x61.toLocaleString('pt-BR', formato);
  document.getElementById('6x-2').innerHTML = x62.toLocaleString('pt-BR', formato);

  //7x
  var x71 = n1 / 0.9610;
  var x72 = n1 / 0.9610 / 7;
  document.getElementById('7x-1').innerHTML = x71.toLocaleString('pt-BR', formato);
  document.getElementById('7x-2').innerHTML = x72.toLocaleString('pt-BR', formato);


  //8x
  var x81 = n1 / 0.9610;
  var x82 = n1 / 0.9610 / 8;
  document.getElementById('8x-1').innerHTML = x81.toLocaleString('pt-BR', formato);
  document.getElementById('8x-2').innerHTML = x82.toLocaleString('pt-BR', formato);

  //9x
  var x91 = n1 / 0.9610;
  var x92 = n1 / 0.9610 / 9;
  document.getElementById('9x-1').innerHTML = x91.toLocaleString('pt-BR', formato);
  document.getElementById('9x-2').innerHTML = x92.toLocaleString('pt-BR', formato);

  //10x
  var x101 = n1 / 0.9610;
  var x102 = n1 / 0.9610 / 10;
  document.getElementById('10x-1').innerHTML = x101.toLocaleString('pt-BR', formato);
  document.getElementById('10x-2').innerHTML = x102.toLocaleString('pt-BR', formato);

  //11x
  var x111 = n1 / 0.9610;
  var x112 = n1 / 0.9610 / 11;
  document.getElementById('11x-1').innerHTML = x111.toLocaleString('pt-BR', formato);
  document.getElementById('11x-2').innerHTML = x112.toLocaleString('pt-BR', formato);

  //12x
  var x121 = n1 / 0.9610;
  var x122 = n1 / 0.9610 / 12;
  document.getElementById('12x-1').innerHTML = x121.toLocaleString('pt-BR', formato);
  document.getElementById('12x-2').innerHTML = x122.toLocaleString('pt-BR', formato);

}




function economicosemrepasse() {

  var n2 = parseInt(document.getElementById('n2').value, 10);
  var formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
  //á vista
  document.getElementById('Iavista1').innerHTML = n2.toLocaleString('pt-BR', formato);


  //debito (1242311234.45).toLocaleString('pt-BR')
  var debitodesc = n2 * 1.9 / 100;
  var debito     = n2 - debitodesc;
  document.getElementById('debito-I').innerHTML = debito.toLocaleString('pt-BR', formato);

  //1x
  var x11 = n2 * 3.1 / 100;
  var x12 = n2 - x11;
  document.getElementById('1ax').innerHTML = x12.toLocaleString('pt-BR', formato);
  document.getElementById('1x').innerHTML = x12.toLocaleString('pt-BR', formato);


  //2x
  var x21 = n2 * 3.9 / 100;
  var x22 = n2 - x21;
  var x23 = x22 / 2

  document.getElementById('2ax').innerHTML = x22.toLocaleString('pt-BR', formato);
  document.getElementById('2x').innerHTML = x23.toLocaleString('pt-BR', formato);

  //3x
  var x31 = n2 * 3.9 / 100;
  var x32 = n2 - x31;
  var x33 = x32 / 3;
  document.getElementById('3ax').innerHTML = x32.toLocaleString('pt-BR', formato);
  document.getElementById('3x').innerHTML = x33.toLocaleString('pt-BR', formato);


  //4x
  var x41 = n2 * 3.9 / 100;
  var x42 = n2 - x41;
  var x43 = x42 / 4;
  document.getElementById('4ax').innerHTML = x42.toLocaleString('pt-BR', formato);
  document.getElementById('4x').innerHTML = x43.toLocaleString('pt-BR', formato);

  //5x
  var x51 = n2 * 3.9 / 100;
  var x52 = n2 - x51;
  var x53 = x52 / 5;
  document.getElementById('5ax').innerHTML = x52.toLocaleString('pt-BR', formato);
  document.getElementById('5x').innerHTML = x53.toLocaleString('pt-BR', formato);

  //6x
  var x61 = n2 * 3.9 / 100;
  var x62 = n2 - x61;
  var x63 = x62 / 6;
  document.getElementById('6ax').innerHTML = x62.toLocaleString('pt-BR', formato);
  document.getElementById('6x').innerHTML = x63.toLocaleString('pt-BR', formato);


  //7x
  var x71 = n2 * 3.9 / 100;
  var x72 = n2 - x71;
  var x73 = x72 / 7;
  document.getElementById('7ax').innerHTML = x72.toLocaleString('pt-BR', formato);
  document.getElementById('7x').innerHTML = x73.toLocaleString('pt-BR', formato);
 

  //8x
  var x81 = n2 * 3.9 / 100;
  var x82 = n2 - x81;
  var x83 = x82 / 8;
  document.getElementById('8ax').innerHTML = x82.toLocaleString('pt-BR', formato);
  document.getElementById('8x').innerHTML = x83.toLocaleString('pt-BR', formato);

  //9x
  var x91 = n2 * 3.9 / 100;
  var x92 = n2 - x91;
  var x93 = x92 / 9;
  document.getElementById('9ax').innerHTML = x92.toLocaleString('pt-BR', formato);
  document.getElementById('9x').innerHTML = x93.toLocaleString('pt-BR', formato);

  //10x
  var x101 = n2 * 3.9 / 100;
  var x102 = n2 - x101;
  var x103 = x102 / 10;
  document.getElementById('10ax').innerHTML = x102.toLocaleString('pt-BR', formato);
  document.getElementById('10x').innerHTML = x103.toLocaleString('pt-BR', formato);

  //11x
  var x111 = n2 * 3.9 / 100;
  var x112 = n2 - x111;
  var x113 = x112 / 11;
  document.getElementById('11ax').innerHTML = x112.toLocaleString('pt-BR', formato);
  document.getElementById('11x').innerHTML = x113.toLocaleString('pt-BR', formato);

  //12x
  var x121 = n2 * 3.9 / 100;
  var x122 = n2 - x121;
  var x123 = x122 / 12;
  document.getElementById('12ax').innerHTML = x122.toLocaleString('pt-BR', formato);
  document.getElementById('12x').innerHTML = x123.toLocaleString('pt-BR', formato);

}