/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'640px',
      md:'768px',
      lg:'976px',
      xl:'1280px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#0f172a',
      'secondary': '#facc15',
      'Onsecondary':'#fef08a',
      'Onprimary':'#f4f4f5',
      'Accent':'#7dd3fc',
      'background':'#f5f5f4',
      'card':'#FFFFFF'
    },
    fontSize:{
      'header1': ['96px', {
        lineHeight: '144px',
        fontWeight: '700',
      }],
      'header2':['64px',
        {
          lineHeight:'96px',
          fontWeight:'600'
        }
      ],
      'title':[
        '36px',
        {
          lineHeight:'54px',
          fontWeight:'500'
        }
      ],
      'nav':[
        '24px',
        {
          lineHeight:'36px',
          fontWeight:'500'
        }
      ],
      'miniTitle':[
        '24px',
        {
          lineHeight:'36px',
          fontWeight:'500'
        }
      ],
      'btn':[
        '24px',
        {
          lineHeight:'36px',
          fontWeight:'500'
        }
      ],
      'body':[
        '16px',{
          lineHeight:'24px',
          fontWeight:'400'
        }
      ],
      'icon':[
        '25px'
      ]
      
    },
    extend: {
      padding:{
        'btn':[
          '55px 20px'
        ]
      },
      width:{
        'container':'1200px',
        'card':'600px'
      },
      height:{
        'card':'320px'
      },
      fontFamily:{
        'Noto Serif Khmer':['Noto serif khmer']
      },
      borderRadius:{
        'radius':'15px' 
      },
      margin:{
        'top-content':'6rem',
        'top-title':'2rem'
      }
    },
  },
  plugins: [],
}
