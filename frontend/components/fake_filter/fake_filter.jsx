import React from "react";
import { TbBeachOff } from "react-icons/tb";
import { MdCabin, MdHouseboat } from "react-icons/md";
import { GiUfo, GiCampingTent, GiIsland, GiTreehouse, GiCastle, GiFamilyHouse, GiMushroomHouse, GiSpookyHouse } from "react-icons/gi";
import { IoSnowSharp } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";


class FakeFilter extends React.Component {
    render () {
      return (
        <div className="filter">
          <div className="filter-icon" id="beach">
            <a href="https://google.com"><TbBeachOff style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="cabin">
            <a href="https://google.com"><MdCabin style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="omg">
            <a href="https://google.com"><GiUfo style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="camp">
            <a href="https://google.com"><GiCampingTent style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="island">
            <a href="https://google.com"><GiIsland style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="snow">
            <a href="https://google.com"><IoSnowSharp style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="treehouse">
            <a href="https://google.com"><GiTreehouse style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="castle">
            <a href="https://google.com"><GiCastle style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="houseboat">
            <a href="https://google.com"><MdHouseboat style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="familyhouse">
            <a href="https://google.com"><GiFamilyHouse style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="mushroomhouse">
            <a href="https://google.com"><GiMushroomHouse style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="spookyhouse">
            <a href="https://google.com"><GiSpookyHouse style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
          <div className="filter-icon" id="iconiccity">
            <a href="https://google.com"><BsBuilding style={{color: '#2B2B2B', fontSize: '28px'}}/></a>
          </div>
        </div>
      );
    }
  }

  export default FakeFilter;