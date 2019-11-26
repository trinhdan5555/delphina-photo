import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

// https://codesandbox.io/s/semantic-ui-example-8emy3
class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Home',
    };
  }

  _handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="menu-start">
        <Menu pointing secondary>
          <Menu.Item
            className="item-text"
            name='Home'
            active={activeItem === 'Home'}
            onClick={this._handleItemClick}
            as={Link} to="/"
          />
          <Menu.Item
            name='contact us'
            active={activeItem === 'contact us'}
            onClick={this._handleItemClick}
            as={Link} to="/contact"
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this._handleItemClick}
            as={Link} to="/about"
          />
          <Menu.Item
            name='Rates'
            active={activeItem === 'Rates'}
            onClick={this._handleItemClick}
            as={Link} to="/services"
          />
        </Menu>
      </div>
    )
  }
}

export default MenuNav;