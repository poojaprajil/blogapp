import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
        <div>
            <nav className='header'>
                <h2 className='logo'> Blog</h2>
                <div className='articles'>
                    <Link  className="link" to ="/">Home</Link>
                    <Link  className="link" to ="/about">About</Link>
                    <Link  className="link" to ="/article-list">Articles</Link>
                    <Link  className="link" to ="/add-article">Add Article</Link>
                    <Link  className="link" to ="/edit-article">Edit Article</Link>
                    <Link  className="link" to ="/signup">Signup</Link>
                    <Link  className="link" to ="/login">Login</Link>

                </div>

            </nav>
        </div>
    );
}

export default Header;