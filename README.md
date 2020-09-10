# React Server Side Rendering Space X Launch Programs
A server side rendering React application which displays all the space missions. Use can also filter the missions based on filter buttons available on left side. 

## Getting started
Clone the repo with
```git clone https://github.com/alexnm/react-ssr```

Install dependencies with
```npm i```

Run dev mode with
```npm run dev```

Now open the browser and navigate to `http://localhost:2048` and you get your server rendered React app. You can inspect the page source and see that the html coming from your local server has all the nodes defined in the React app.

# Responsive Design
The application is designed keeping in mind all the device specifications  

- @media (min-width: 1025px) and (max-width: 1280px) // Device = Laptops, Desktops,  Screen = B/w 1025px to 1280px
- @media (min-width: 768px) and (max-width: 1024px) // Device = Tablets, Ipads (portrait) ,Screen = B/w 768px to 1024px
- @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) // Device = Tablets, Ipads (landscape), Screen = B/w 768px to 1024px
- @media (min-width: 481px) and (max-width: 767px) // Device = Low Resolution Tablets, Mobiles (Landscape), Screen = B/w 481px to 767px
- @media (min-width: 320px) and (max-width: 480px) // Device = Most of the Smartphones Mobiles (Portrait), Screen = B/w 320px to 479px
