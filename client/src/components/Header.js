import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav style={{backgroundColor:'lightyellow' , padding:10, fontWeight:"bold",textDecoration:'none', color:"black",  margin:100,  textAlign:"center", display:"flex", justifyContent: "space-between"}}>
            <Link to='/'>Home</Link>
                <Link to='/search-food-nutritions'>Food Nutritions</Link>
                <Link to='/Diet-recommendation'>Diet Recommandation</Link>
                <Link to='/calorie-calculator'>Calorie Calculator</Link>
                <Link to='/fitness-plan'>Fitness Plan</Link>
            </nav>
        </header>
    )
}

export default Header;