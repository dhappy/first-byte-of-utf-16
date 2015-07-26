String.prototype.each_slice = function(size, callback) {
    var out = []
    for(var i = 0, l = this.length; i < l; i += size) {
        out.push(callback.call(this, this.slice(i, i + size)))
    }
    return out
}

function encodeTB16(data) {
    return data.each_slice(2, function(hex) {
        return String.fromCharCode(parseInt(hex, 16))
    })
        .join()
}

function encodeUTF16(data) {
    return data.each_slice(4, function(hex) {
        return String.fromCharCode(parseInt(hex, 16))
    })
        .join()
}

$(function() {
    var hex = ''
    var count = 128 * 128
    for(var i = 1; i <= count; i++) {
        hex += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]
    }
    var vars = {
        count: count,
        hex: hex,
        tb16: encodeTB16(hex),
        utf16: encodeUTF16(hex)
    }
    for(type in vars) {
        var length = vars[type].length
        var val = vars[type]
        if(val.split !== undefined) {
            val = val.each_slice(1, function(letter) {
                return letter
            }).join(String.fromCharCode(parseInt('AD', 16))) // soft hyphens
        }
        $('#' + type).text('(ℓ:' + length + '): ' + val)
    }
})
