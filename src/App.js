import './App.css';

import { useState } from 'react'

const pages = [
  (<>
    <h2>Venus</h2>
    <img style={{ float: 'left', padding: 20 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Venus_2_Approach_Image.jpg/330px-Venus_2_Approach_Image.jpg" />
    <p>
    Venus is the second planet from the Sun. It is sometimes called Earth's "sister" or "twin" planet as it is almost as large and has a similar composition. As an interior planet to Earth, Venus (like Mercury) appears in Earth's sky never far from the Sun, either as morning star or evening star. Aside from the Sun and Moon, Venus is the brightest natural object in Earth's sky, capable of casting visible shadows on Earth at dark conditions and being visible to the naked eye in broad daylight.
    </p>
    <p>
    Venus is the second largest terrestrial object of the Solar System. It has a surface gravity slightly lower than on Earth and has a very weak induced magnetosphere. The atmosphere of Venus, mainly consists of carbon dioxide, and is the densest and hottest of the four terrestrial planets at the surface. With an atmospheric pressure at the planet's surface of about 92 times the sea level pressure of Earth and a mean temperature of 737 K (464 °C; 867 °F), the carbon dioxide gas at Venus's surface is in the supercritical phase of matter. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, making it the planet with the highest albedo in the Solar System. It may have had water oceans in the past, but after these evaporated the temperature rose under a runaway greenhouse effect. The possibility of life on Venus has long been a topic of speculation but convincing evidence has yet to be found.
    </p>
  </>),

  (<>
    <h2>Earth</h2>
    <img style={{ float: 'right', padding: 20 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/330px-The_Blue_Marble_%28remastered%29.jpg" />
    <p>
    Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes, and earthquakes. Earth's liquid outer core generates the magnetic field that shapes the magnetosphere of the Earth, deflecting destructive solar winds.
    </p>
    <p>
    The atmosphere of the Earth consists mostly of nitrogen and oxygen. Greenhouse gases in the atmosphere like carbon dioxide (CO2) trap a part of the energy from the Sun close to the surface. Water vapor is widely present in the atmosphere and forms clouds that cover most of the planet. More solar energy is received by tropical regions than polar regions and is redistributed by atmospheric and ocean circulation. A region's climate is governed by latitude, but also by elevation and proximity to moderating oceans. In most areas severe weather, such as tropical cyclones, thunderstorms, and heatwaves, occurs and greatly impacts life.
    </p>
    <p>
    Earth is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest and most massive. Earth is about eight light minutes away from the Sun and orbits it, taking a year (about 365.25 days) to complete one revolution. Earth rotates around its own axis in slightly less than a day (in about 23 hours and 56 minutes). Earth's axis of rotation is tilted with respect to the perpendicular to its orbital plane around the Sun, producing seasons. Earth is orbited by one permanent natural satellite, the Moon, which orbits Earth at 380,000 km (1.3 light seconds) and is roughly a quarter as wide as Earth. The Moon always faces the Earth with the same side through tidal locking and causes tides, stabilizes Earth's axis, and gradually slows its rotation.
    </p>
  </>),

  (<>
    <h2>Mars</h2>
    <img style={{ float: 'left', padding: 20 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png/330px-Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png" />
    <p>
    Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere (less than 1% that of Earth's), and has a crust primarily composed of elements similar to Earth's crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. It has two small and irregularly shaped moons: Phobos and Deimos.
    </p>
    <p>
    Some of the most notable surface features on Mars include Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System, and Valles Marineris, one of the largest canyons in the Solar System. The Borealis basin in the Northern Hemisphere covers approximately 40% of the planet and may be a large impact feature. Days and seasons on Mars are comparable to those of Earth, as the planets have a similar rotation period and tilt of the rotational axis relative to the ecliptic plane. Liquid water on the surface of Mars cannot exist due to low atmospheric pressure, which is less than 1% of the atmospheric pressure on Earth. Both of Mars's polar ice caps appear to be made largely of water. In the distant past, Mars was likely wetter, and thus possibly more suited for life. However, it is unknown whether life has ever existed on Mars.
    </p>
  </>),
  
]

function App() {
  const [current, setCurrent] = useState(1)
  return (
    <div className="App">
      <header className="App-header">
        <div className="screens">
          {pages.map((page, i) => (
            <div className={`
              screen
              ${i < current && 'prev'}
              ${i === current && 'current'}
              ${i > current && 'next'}
            `}>
              <div className="inner">
                <div className="text">{page}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="buttons">
          <button onClick={() => {
            setCurrent(Math.max(current - 1, 0))
          }}>&lt;--</button>
          <button onClick={() => {
            setCurrent(Math.min(current + 1, pages.length - 1))
          }}>--&gt;</button>
        </div>
      </header>
    </div>
  );
}

export default App;
