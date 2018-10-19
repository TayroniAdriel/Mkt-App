class mktController {    
    constructor(){        
        this._Audio = new Audio();
        
        this._getAudio=function(_person, _action){
            let _audio = 'sounds/'+_person+ (_action || 'Teste') + '.mp3';
            console.log(_audio);
            return new Audio(_audio).play();
        };

        //this._sub = document.getElementById("SubZero");

        //this._sub.addEventListener("click", playsub);

        this._container = document.querySelectorAll('.person');

        this.initButtonsEvents(this);
        
        this._play = this.execAudio;
        
    }

    initButtonsEvents(_event){
        let _callback = this._getAudio;
        this._container.forEach(function(_person){
            _person.addEventListener('click', function (e) {                
                _callback(e.target.id, 'Wins');
            })
        })
    }        

}