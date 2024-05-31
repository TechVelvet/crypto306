module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        gillRoy200: ['GillroyL'],
        gillRoy400: ['GillroyR'],
        gillRoy500: ['GillroyM'],
        gillRoy600: ['GillroyS'],
        gillRoy700: ['GillroyB'],
        gillRoy900: ['GillroyEB'],
        Livvik: ['Livvic']
      },
      colors: {
        maincolor: "#21C3E7",
        buttonbg: "#00809C",
        subheading: "#A8A8A8",
        blackcolor: "#000000",
        cardBG: "#AAEFFF",
        tablebg: "#F0F0F0",
        tabletext: "#616161",
        buttonborder: "#A7EEFE",
        tableunselect: "#EEE",
        tablefontmobilecolor: "#AEAEAE",
        buttonhover: "#1DA7C6",
        cardtextcolor: "#CECECE",
        dotsColor: "#E3E3E3",
        subscribeBg: "#005365"
      },
      borderRadius:{
        30: "30px",
        20: "20px"
      },
      border:{
        border1: "1px"
      },
      fontSize:{
        40: "40px",
        106: "106px"
      },
      boxShadow:{
        cardShadow: "0px 22.5px 113.62px 0px #CACACA",
        introDiv: "0 15px 16px 0px #0046564D",
        unselectshadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        unselectionbuttonshadow: "0px 0px 6px 0px #00000040 inset",
        flipfront: "0px 24px 20px 0px rgba(0, 0, 0, 0.10)"
      },
      screens: {
        'largeTab': '919px' 
      }
    },
  },
  plugins: [require("daisyui")],
}