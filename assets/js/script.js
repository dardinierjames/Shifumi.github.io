var countJoueur = 0;
var countOrdi = 0;
var tryCount = 0;


$(document).ready(function(){


        $(".icone").draggable({
        revert : true
        
      });
            // je cible les images avec la classe "icone" avec le gestionnaire d'évènement .draggable et limite l'action dans son conteneur
        $( "#droppable" ).droppable({
            accept: ".icone", //Le bloc n'accepte de recevoir que les blocs avec la classe icone
            classes: {
            "ui-droppable-active": "ui-state-default"
            },
            drop: function( event, ui ) {
                $( this )
                .addClass( "ui-state-highlight" )
                .find( "#droppable" )
          }

        //   je cible la boite avec l'id "droppable" avec le gestionnaire d'évènement .droppable
        });

    const images = document.querySelectorAll('.icone');

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseup', function(){
            // console.log("ça marche")
            const joueur = images[i].innerHTML;
            

            const robot = images[Math.floor(Math.random() * images.length)].innerHTML;
            // console.log(`Joueur : ${joueur} VS Robot : ${robot}`);

            if (robot == '<img src="assets/img/rock.PNG.png" alt="" class="img">'){
                $('#randomBlock').css({'background-image': 'url(assets/img/rock.PNG.png)', 'background-size' : '85px' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
            } else if (robot == '<img src="assets/img/paper.PNG.png" alt="" class="img">'){
                $('#randomBlock').css({'background-image': 'url(assets/img/paper.PNG.png)', 'background-size' : '85px' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
            } else if (robot == '<img src="assets/img/cisors.PNG.png" alt="" class="img">'){
                $('#randomBlock').css({'background-image': 'url(assets/img/cisors.PNG.png)', 'background-size' : '85px' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
            }

            if (joueur == '<img src="assets/img/rock.PNG.png" alt="" class="img">'){
                $('#droppable').css({'background-image': 'url(assets/img/rock.PNG.png)', 'background-size' : '85px' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
            } else if (joueur == '<img src="assets/img/paper.PNG.png" alt="" class="img">'){
                $('#droppable').css({'background-image': 'url(assets/img/paper.PNG.png)', 'background-size' : '85px' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
            } else if (joueur == '<img src="assets/img/cisors.PNG.png" alt="" class="img">'){
                $('#droppable').css({'background-image': 'url(assets/img/cisors.PNG.png)', 'background-size' : '85px' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
            }


            let resultat = '';

            if (joueur === robot) {
                resultat = 'Égalité !!!';
            }

            else if ((joueur === '<img src="assets/img/rock.PNG.png" alt="" class="img">' && robot === '<img src="assets/img/cisors.PNG.png" alt="" class="img">') || (joueur === '<img src="assets/img/paper.PNG.png" alt="" class="img">' && robot === '<img src="assets/img/rock.PNG.png" alt="" class="img">') || (joueur === '<img src="assets/img/cisors.PNG.png" alt="" class="img">') && robot === '<img src="assets/img/paper.PNG.png" alt="" class="img">') {
                resultat = 'Gagné !!!';
                countJoueur++ ;
                tryCount++ ;
            }
            else {
                resultat = 'Perdu !!!';
                countOrdi++ ;
                tryCount++ ;
            }

            

            document.querySelector('.resultat').innerHTML = `${resultat}`;
            document.querySelector('#win').innerHTML = countJoueur;
            document.querySelector('#lose').innerHTML = countOrdi;

            if(tryCount != 0){
                $('#pourcent').text(Math.floor(countJoueur/tryCount*100) + '%');
            }
            

        });
    }

        $('#tryAgain').click(function(){
            countJoueur = 0;
            countOrdi = 0;
            tryCount = 0;
        $('#win').text('');
        $('#droppable').css('background-image', 'none');
        $('#randomBlock').css('background-image', 'none');
        $('#lose').text('');
        $('#pourcent').text('');
        $('.resultat').text('A vous de jouer !!!');
        
        });

});
