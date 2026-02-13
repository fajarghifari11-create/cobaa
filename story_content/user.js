function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5h57jilp0uO":
        Script1();
        break;
      case "5w4wf1NdiYG":
        Script2();
        break;
      case "5kindowVDx2":
        Script3();
        break;
      case "5sX8T628NGx":
        Script4();
        break;
      case "5ysp8iQEmlZ":
        Script5();
        break;
      case "6ihtBTY3RRl":
        Script6();
        break;
      case "5vOCELFFmjQ":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume=0.5
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.1;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.2;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.3;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.4;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.5;
}

