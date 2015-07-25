function decodeUTF16LE( binaryStr ) {
    var cp = [];
    for( var i = 0; i < binaryStr.length; i+=2) {
        cp.push(
            binaryStr.charCodeAt(i) |
                ( binaryStr.charCodeAt(i+1) << 8 )
        )
    }

    return String.fromCharCode.apply( String, cp )
}

function encodeTB16( data ) {
    console.log( data )
    return data.slice(0, 8)
    return String.fromCharCode(65)
    var cp = [];
    for( var i = 0; i < binaryStr.length; i += 8) {
        cp.push(
            ( binaryStr.charCodeAt(i+1) << 8 )
        )
    }

    return String.fromCharCode.apply( String, cp )
}

var base64decode = atob; //In chrome and firefox, atob is a native method available for base64 decoding

$(function() {
    console.log('hi')
    var base64 = "VABlAHMAdABpAG4AZwA"
    var binary = atob(base64)
    var binary = ''
    for(var i = 1; i <= 128; i++) {
        binary += Math.random() >= .5 ? '1' : '0'
    }
    var UTF16LE = decodeUTF16LE(binary)
    var tb16 = encodeTB16(binary)
    $('#base64').text(base64)
    $('#UTF16LE').text(UTF16LE)
    $('#tb16').text(tb16)
})
