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

var base64decode = atob; //In chrome and firefox, atob is a native method available for base64 decoding

$(function() {
    var base64 = "VABlAHMAdABpAG4AZwA"
    var binaryStr = atoixs(base64)
    var result = decodeUTF16LE(binaryStr)
    $('#base64').text(base64)
    $('#UTF16LE').text(result)
})
