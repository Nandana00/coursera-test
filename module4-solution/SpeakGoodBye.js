(function(window) {

    var byespeaker = new Object();
    var speakWord = "Good Bye";


    byespeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.byespeaker = byespeaker;

})(window);