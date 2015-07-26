String.prototype.each_slice = function(size, callback) {
    var out = []
    for(var i = 0, l = this.length; i < l; i += size) {
        out.push(callback.call(this, this.slice(i, i + size)))
    }
    return out
}

function encodeTB16( data ) {
    var out = ''
    for(var i = 0; i < data.length; i += 8) {
        out += String.fromCharCode(parseInt(data.slice(i, i + 7), 2))
    }

    return out
}

function encodeUTF16( data ) {
    var out = ''
    for(var i = 0; i < data.length; i += 16) {
        out += String.fromCharCode(parseInt(data.slice(i, i + 15), 2))
    }

    return out
}

var base64decode = atob; //In chrome and firefox, atob is a native method available for base64 decoding

$(function() {
    var binary = ''
    for(var i = 1; i <= 128 * 128; i++) {
        binary += Math.random() >= .5 ? '1' : '0'
    }
    var vars = {
        binary: (function() {
            return binary.each_slice(1, function(bit) {
                return bit
            }).join(String.fromCharCode(parseInt('AD', 16))) // soft hyphens
        })(),
        hex: (function() {
            return binary.each_slice(64, function(bits) {
                return parseInt(bits, 2).toString(16)
            }).join(String.fromCharCode(parseInt('AD', 16))) // soft hyphens
        })(),
        tb16: encodeTB16(binary),
        utf16: encodeUTF16(binary)
    }
    for(type in vars) {
        $('#' + type).text('(ℓ:' + vars[type].length + '): ' + vars[type])
    }
})
