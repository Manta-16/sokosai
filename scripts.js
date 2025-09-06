function play_sound_level() {
  const audio = new Audio("levelup.mp3");
  audio.play().catch(e => alert("再生エラー"));
}
function play_sound_doramu() {
  const audio = new Audio("dramroll.mp3");
  audio.play();
}
function play_sound_jaja_n() {
  const audio = new Audio("jajan.mp3");
  audio.play();
}
function play_sound_doramu_jan() {
  const doramu = new Audio("dramroll.mp3");
  const jan = new Audio("jajan.mp3");
  doramu.onended = () => {
    jan.play();
  };
  doramu.play();
}
function play_sound_yeah() {
  const audio = new Audio("yeah.mp3");
  audio.play();
}
function play_sound_donpafu() {
  const audio = new Audio("donpafu.mp3");
  audio.play();
}
function play_sound_ramen() {
  const audio = new Audio("ramen.mp3");
  audio.play();
}
function play_sound_fuan() {
  const audio = new Audio("fuan.mp3");
  audio.play();
}
function play_sound_hyousigi() {
  const audio = new Audio("hyousigi3.mp3");
  audio.play();
}
function play_sound_kansei() {
  const audio = new Audio("kansei.mp3");
  audio.play();
}
function play_sound_stadium() {
  const audio = new Audio("stadium.mp3");
  audio.play();
}
function play_sound_horagai() {
  const audio = new Audio("horagai.mp3");
  audio.play();
}
