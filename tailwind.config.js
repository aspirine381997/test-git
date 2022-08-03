/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0a2944',
        secondary:{
          1:'#6C7D8C',
          2:'#5168B5',
        },
        neutral:{
          1:'#151C34',
          2:'#595B62',
          3:'#8C8E96',
          4:'#AFB1BC',
          5:'#F0F0F0',
          6:'#FFFFFF', 
        },
        accent:{
          1:'#F3F5FC',
          2:'#F2994A',
          3:'#2F80ED',
        },
      },
      fontSize:{
        36:['36px','52px'],
        40:['40px','60px'],
        24:['24px','32px'],
        60:['60px','80px'],
        80:['80px','100px'],
        18:['18px','28px'],
        16:['16px','20px'],
        16.2:['16px','24px'],
        14:['14px','20px'],
      },
      fontFamily:{
        1:['Playfair Display'],
        2:['Lato'],
      },
      dropShadow:{
        1:'-4px 8px 32px rgba(21, 28, 52, 0.12)',
      }
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        xxl: '6rem',
      },
    },
  },
  plugins: [],
}