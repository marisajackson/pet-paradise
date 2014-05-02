/* exported Pet */
/* global _ */
/* global pets */

let id = 1;

class Pet{
  constructor(species, speciesImg, gender, name, age){
    this.id = id++;
    this.species = species;
    this.speciesImg = '../media/' + speciesImg;
    this.gender = gender;
    this.name = name;
    this.age = age * 1;

    this.health = _.random(10, 100);
    this.full = _.random(5, 50);
    this.mood = _.random(1, 10);
  }

  render(){
    let pet = `<div class='pet' data-id=${this.id}>
        <img class='photo' src='${this.speciesImg}'>
        <div class='stats'>
          <div><b>Name:</b> ${this.name}</div>
          <div><b>Age:</b> ${this.age} years old</div>
          <div><b>Gender:</b> ${this.gender}</div>
          <div><b>Health:</b>
            <div class='healthBar'>
              <div class='${this.id}health health'>
          </div></div></div>
          <div><b>Fullness:</b>
            <div class='fullBar'>
            <div class='${this.id}full full'>
          </div></div></div>
          <div><b>Mood:</b>
            <div class='moodBar'>
            <div class='${this.id}mood mood'>
          </div></div></div>
          <button class='eat actions'>Eat</button>
          <button class='sleep actions'>Sleep</button>
          <button class='play actions'>Play</button>`;

    $('#pets').append(pet);

    this.setStats();
  }

  setStats(){
    $('.'+this.id+'health').css('width', this.health + 'px');
    $('.'+ this.id +'full').css('width', (this.full * 2) + 'px');
    $('.'+ this.id +'mood').css('width', (this.mood * 10) + 'px');
    if(this.mood > 5){
      $('.'+this.id+'mood').css('background-color', 'green');
    } else {
      $('.'+this.id+'mood').css('background-color', 'red');
    }
    if(this.health > 50){
      $('.'+this.id+'health').css('background-color', 'green');
    } else {
      $('.'+this.id+'health').css('background-color', 'red');
    }
    if(this.full > 25){
      $('.'+this.id+'full').css('background-color', 'green');
    } else {
      $('.'+this.id+'full').css('background-color', 'red');
    }

    this.checkHealth();
  }

  checkHealth(){
    if(this.health === 0 || this.full === 0){
      $('div[data-id="'+this.id+'"] > img:first-child').attr('src', '../media/death.png');
    }
  }

  eat(){
    this.full += _.random(1,3);
    if(this.full >= 50){this.full = 50;}
    this.setStats();
  }

  sleep(){
    this.health += _.random(1,5);
    this.mood -= _.random(0,1);
    if(this.health >= 100){this.health = 100;}
    this.setStats();
  }

  play(){
    this.mood += _.random(0,1);
    this.full -= _.random(1,3);
    this.health -= _.random(1,3);
    if(this.mood >= 10){this.mood = 10;}
    this.setStats();
  }

  static find(id){
    return _(pets).find(p=>p.id === id);
  }
}
