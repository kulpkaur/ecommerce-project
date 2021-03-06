import React from 'react';
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.css'

// we are going to make this a Class Component 
// this is because we do need to store the state value
// of menu items
class Directory extends React.Component {
    constructor() {
        super();

        // we are populating menu items, each of them is a section 
        //- which is an array of objects of title, url, image
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
            }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    //using a es6 trick here for destructuring the objects
                    //title, imageUrl, id, size, linkUrl = id, ...otherSectionProps

                    //here every other key value in the objects before is equal to value pair
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>

                ))
            }

            </div>


        )
    }


}

export default Directory;