var javascript = {
    name: 'Javascript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function(){
        this.libraries.forEach(function (a){
            console.log('{$this.name} loves ${a}');
        })
    }
};

javascript.printLibraries();