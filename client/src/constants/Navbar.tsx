


import React, { Component } from 'react';
import './Navbar.css'; // Optional: Add styles for the navbar

// Define the types for navbar items
interface NavbarItem {
  label: string;
  link: string;
}

// Define the types for component props and state
interface NavbarProps {
  items: NavbarItem[];
  onLinkClick?: (link: string) => void; // Optional click handler
}

interface NavbarState {
  activeItem: string;
}

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      activeItem: '', // Initialize with no active item
    };
  }

  // Handle click on a navbar item
  handleItemClick = (item: NavbarItem) => {
    this.setState({ activeItem: item.label });
    if (this.props.onLinkClick) {
      this.props.onLinkClick(item.link); // Trigger the click handler if provided
    }
  };

  render() {
    const { items } = this.props;
    const { activeItem } = this.state;

    return (
      <nav className="navbar">
        <ul className="navbar-list">
          {items.map((item) => (
            <li
              key={item.label}
              className={`navbar-item ${activeItem === item.label ? 'active' : ''}`}
              onClick={() => this.handleItemClick(item)}
            >
              <a href={item.link} className="navbar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
