import React from 'react'

const Footer = () => {
    return (

        <footer className="mt-10  bottom-0 w-full bg-gray-100">
            <div className="flex flex-col items-center justify-center space-y-2 py-10 px-6">
                <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                    <a className="hover:text-gray-900" href="#">Home</a>
                    <a className="hover:text-gray-900" href="#">About</a>
                    <a className="hover:text-gray-900" href="#">Services</a>
                    <a className="hover:text-gray-900" href="#">Blogs</a>
                    <a className="hover:text-gray-900" href="#">Gallery</a>
                    <a className="hover:text-gray-900" href="#">Contact</a>
                </nav>
                <div className="flex justify-center space-x-5">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                    </a>
                    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
                    </a>
                </div>
                <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
