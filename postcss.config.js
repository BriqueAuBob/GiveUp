module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content:[
             './views/*.hbs'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: [
                'from-red-500', 'to-red-700',
                'from-green-500', 'to-green-700',
                'from-blue-500', 'to-blue-700',
                'from-yellow-500', 'to-yellow-700',
            ]
        })
    ]
}