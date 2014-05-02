/* global Pet */
/* global pets */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.play', play);
    $('#pets').on('click', '.sleep', sleep);
  }

  function add(){
    let gender = $('#gender').val();
    let speciesImg = $('#species').val();
    let species = $('#species option:selected').text();
    let name = $('#name').val();
    let age = $('#age').val();

    let newPet = new Pet(species, speciesImg, gender, name, age);
    pets.push(newPet);
    newPet.render();
  }

  function eat(){
    let id = $(this).closest('.pet').data('id');
    let pet = Pet.find(id);
    pet.eat();
  }

  function sleep(){
    let id = $(this).closest('.pet').data('id');
    let pet = Pet.find(id);
    pet.sleep();
  }

  function play(){
    let id = $(this).closest('.pet').data('id');
    let pet = Pet.find(id);
    pet.play();
  }

})();
