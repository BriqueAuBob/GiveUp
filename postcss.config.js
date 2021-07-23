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
                'bg-red-500', 'bg-red-700',
                'bg-green-500', 'bg-green-700',
                'bg-blue-500', 'bg-blue-700',
                'bg-yellow-500', 'bg-yellow-700',
            ]
        })
    ]
}