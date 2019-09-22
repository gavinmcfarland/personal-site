module.exports = {
    plugins: [
        require('autoprefixer')(),
        require('postcss-import')(),
        require('tailwindcss')(),
        require('postcss-extend-rule')()
        // require('postcss-responsify')({
        //     breakpoints: [{
        //             prefix: '\31\?',
        //             mediaQuery: '(min-width: 300px)'
        //         },
        //         {
        //             prefix: '\32\?',
        //             mediaQuery: '(min-width: 600px)'
        //         },
        //     ]
        // })
    ]
}