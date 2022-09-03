const path = require('path')

module.exports={
    webpack:{
        alias:{
            '@':path.resolve(__dirname,'./src')
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    }
}