function receivesAFunction(callback) {
    return (callback)();
}

function returnsANamedFunction (Pokemon, Type) {
    return function Pokemon(Type) { return
        'This is a'+ Type
    }; 
} 

function returnsAnAnonymousFunction (anything,goes) {
    return function() {
        console.log('Anything goes')
    }
}